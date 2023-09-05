
import { objectUtil } from '../data/default/ObjectUtil';
import { imageMap } from "../data/default/ImageMap";
import { patchMap } from "../data/patch/PatchMap";
import { enemyByteMap } from "../data/byte/EnemyByteMap";
import { levelDefaultData } from "../data/level/editor/LevelDefaultData";
import { levelEditorLevels } from "../data/level/editor/LevelEditorLevels";
import { levelEditorEnemies } from "../data/level/editor/LevelEditorEnemies";
import { levelSizeData } from "../data/level/editor/LevelSizeData";
import { itemDropData } from "../data/level/editor/ItemDropData";
import { palleteData } from "../data/level/editor/PalleteData";
import { modificationService } from './ModificationService';
import { patchService } from './PatchService';
import { romService } from "./ROMService";
import mergeImages from '../api/merge-images.js';


class LevelEditorService
{
  createLevelEditorPatch = () =>
  {
    const patch = {};
    patch.data = {};
    this.applyDataToPatch(patch);
    patch.type = "overwrite";
    patch.byteFormat = "hex";
    patch.filename = "cde_re.10f";
    return patch;
  }

  applyDataToPatch = (patch) =>
  {
    const editData = objectUtil.deepCopy(dataMap);

    Object.keys(dataMap).forEach((lk) =>
    {
      const level = dataMap[lk];

      Object.keys(level).forEach((egk) =>
      {
        const enemyGroup = level[egk];
        const leeg = this.getLevelEditorEnemyGroup(lk, egk);

        if(!leeg || leeg.disabled)
          return;

        this.removeExtraEnemies(enemyGroup, leeg);
        this.forceEnemy(enemyGroup, leeg, Object.keys(enemyGroup).length);
        this.sortEnemiesByTriggerSpawn(level, leeg, egk);
        const enemies = this.getEnemiesBytesFromGroup(enemyGroup, leeg);
        this.updateEditorPatchData(lk, leeg, patch);
        this.addEnemiesBytesToPatch(leeg, patch, enemies);
      });
    });

    // NOTE: Let the user decide about this?
    dataMap = editData;
  }

  applyData = () =>
  {
    romService.applyPatch(patchMap.customStage1Patch.patch);
    romService.applyPatch(patchMap.customStage2Patch.patch);
    romService.applyPatch(patchMap.customStage3Patch.patch);
    romService.applyPatch(patchMap.customStage4Patch.patch);
    romService.applyPatch(patchMap.customStage5Patch.patch);
    romService.applyPatch(patchMap.customStage6Patch.patch);
    romService.applyPatch(patchMap.customStage7Patch.patch);
    romService.applyPatch(patchMap.customStage8Patch.patch);
    romService.applyPatch(patchMap.disableLoadDipswitchesPatch.patch);
    romService.applyPatch(patchMap.enemyLifebarColorImprovementPatch.patch);
    romService.applyPatch(patchMap.playerLifebarImprovementPatch.patch);
    romService.applyPatch(patchMap.enemyImprovementPatch.patch);
    romService.applyPatch(patchMap.objectPalleteFix.patch);
    romService.applyPatch(patchMap.dropImprovementPatch.patch);
    romService.applyPatch(patchMap.featuresPatch.patch);
    romService.applyPatch(patchMap.levelEditorTextPatch.patch);
    romService.applyPatch(this.createLevelEditorPatch());
  }

  addEnemy = (levelKey, enemyGroupKey) =>
  {
    const eg = dataMap[levelKey][enemyGroupKey];
    const leeg = this.getLevelEditorEnemyGroup(levelKey, enemyGroupKey);
    const e = this.createFerris(leeg);
    const id = Object.keys(eg).length.toString();
    e.id = id;
    e.positionY = leeg.walkablePositionYTop;
    eg[id] = e;
    return e;
  }

  // NOTE: Add support for the dinosaurs special data.
  getEnemiesBytesFromGroup = (enemyGroup, levelEditorEnemyGroup) =>
  {
    let enemies = [];

    Object.keys(enemyGroup).forEach((ek) =>
    {
      const enemy = enemyGroup[ek];
      this.fixEnemyData(enemy, levelEditorEnemyGroup);
      const enemyBytes = enemyByteMap[enemy.enemyKey].slice();
      
      let sd = levelEditorEnemyGroup.mustHaveSpawnDelayTime ?
          enemy.spawnDelayTime : enemy.triggerPosition;
      let hex = romService.convertNumberToROMBytes(sd, 2);
      enemyBytes[0] = hex[0];
      enemyBytes[1] = hex[1];
      
      let px = parseInt(enemy.positionX);
      px = !isNaN(px) && px > 0 ? px : 0; 
      hex = romService.convertNumberToROMBytes(px, 2);
      enemyBytes[6] = hex[0];
      enemyBytes[7] = hex[1];

      // Custom pallete ID uses 5 bits of the position Y data
      let yd = enemy.positionY | (enemy.palleteId << 11);
      hex = romService.convertNumberToROMBytes(yd, 2);
      enemyBytes[8] = hex[0];
      enemyBytes[9] = hex[1];

      // TODO: Change the code below to add suport for the dinosaur extra data
      // hex = romService.convertNumberToROMBytes(yd, 2);
      // enemyBytes[12] = hex[0];
      // enemyBytes[13] = hex[1];

      enemyBytes[14] = enemy.dropId.toString(16);
      enemyBytes[15] = enemy.rage.toString(16);
      enemies = enemies.concat(enemyBytes);
    });

    return enemies;
  }

  setEnemyKey = (levelKey, enemyGroupKey, enemyId, enemyKey) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.enemyKey = enemyKey;
  }

  setEnemyTriggerPosition = (levelKey,
      enemyGroupKey, enemyId, triggerPosition) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.triggerPosition = triggerPosition;
  }

  setEnemySpawnDelayTime = (levelKey,
      enemyGroupKey, enemyId, spawnDelayTime) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.spawnDelayTime = spawnDelayTime;
  }

  setEnemyPositionX = (levelKey, enemyGroupKey, enemyId, positionX) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.positionX = positionX;
  }

  setEnemyPositionY = (levelKey, enemyGroupKey, enemyId, positionY) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.positionY = positionY;
  }

  setEnemyPalleteId = (levelKey, enemyGroupKey, enemyId, palleteId) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.palleteId = palleteId;
  }

  setEnemyDinosaurExtraData = (levelKey,
      enemyGroupKey, enemyId, dinosaurExtraData) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.dinosaurExtraData = dinosaurExtraData;
  }

  setEnemyDropId = (levelKey, enemyGroupKey, enemyId, dropId) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.dropId = dropId;
  }

  setEnemyRage = (levelKey, enemyGroupKey, enemyId, rage) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.rage = rage;
  }

  toggleEnemyNoLevelLimits = (levelKey, enemyGroupKey, enemyId) =>
  {
    const enemy = this.getEnemy(levelKey, enemyGroupKey, enemyId);
    enemy.noLevelLimits = enemy.noLevelLimits ? false : true;
  }

  getEnemy = (levelKey, enemyGroupKey, enemyId) =>
  {
    const l = this.getField(dataMap, levelKey);
    const eg = this.getField(l, enemyGroupKey);
    return this.getField(eg, enemyId);
  }

  getEnemies = (levelKey, enemyGroupKey) =>
  {
    const l = this.getField(dataMap, levelKey);
    return this.getField(l, enemyGroupKey);
  }

  removeEnemy = (levelKey, enemyGroupKey, enemyId) =>
  {
    let eg = dataMap[levelKey][enemyGroupKey];

    if(eg && enemyId && eg[enemyId])
    {
      delete eg[enemyId];
      const ids = Object.keys(eg);
      const e = ids.map((key) => {return eg[key];});
      dataMap[levelKey][enemyGroupKey] = {}
      eg = dataMap[levelKey][enemyGroupKey];
      e.forEach((enemy, id) =>
      {
        enemy.id = id;
        eg[id.toString()] = enemy;
      });
    }
  }

  removeExtraEnemies = (enemyGroup, levelEditorEnemyGroup) =>
  {
    let enemyMap = Object.keys(enemyGroup);
    const maxAmount = levelEditorEnemyGroup.maxAmount;

    while(enemyMap.length > maxAmount)
    {
      const key = enemyMap.pop();
      delete enemyGroup[key];
      enemyMap = Object.keys(enemyGroup);
    }
  }

  fixEnemyData = (enemy, levelEditorEnemyGroup) =>
  {
    const leeg = levelEditorEnemyGroup;
    const e = enemy;
    e.spawnDelayTime = this.getValidValue(e.spawnDelayTime, 1, 32760);
    e.palleteId = this.getValidValue(e.palleteId, 0, 32);
    e.palleteId = e.palleteId > 2 && e.palleteId < 32 ? e.palleteId : 0;
    e.dropId = this.getValidValue(e.dropId, 0, 255);
    e.rage = this.getValidValue(e.rage, 0, 255);
    e.dinosaurExtraData = this.getValidValue(e.dinosaurExtraData, 0, 65535);

    let min = leeg.hasElevator ? leeg.screenPositionEnd : leeg.screenPositionStart;
    let max = leeg.hasElevator ? leeg.screenPositionStart : leeg.screenPositionEnd;
    let tp = this.getValidValue(e.triggerPosition, min, max);
    e.triggerPosition = tp;

    const nll = enemy.noLevelLimits === true ? true : false;
    min = nll ? 0 : leeg.walkablePositionYBottom;
    max = nll ? 65355 : leeg.walkablePositionYTop;
    const py = this.getValidValue(e.positionY, min, max);
    const shiftY = this.tryGetField(leeg, "walkablePositionForceShift", 0);
    e.positionY = py + shiftY;

    const shiftX = !leeg.hasElevator ? (enemy.triggerPosition ?? 0) : 0;
    let px = enemy.positionX;
    px = Math.max(px, shiftX - 90);
    px = Math.min(px, shiftX + 470);
    enemy.positionX = px;
  }

  addEnemiesBytesToPatch = (levelEditorEnemyGroup, editorPatch, enemiesBytes) =>
  {
    const index = levelEditorEnemyGroup.groupReplaceIndex.toString();
    const symbol = levelEditorEnemyGroup.groupReplaceByteSymbol;
    const bytes = editorPatch.data[index];
    const symbolIndex = bytes?.indexOf(symbol) ?? -1;

    if(bytes && symbolIndex > -1)
    {
      let newBytes = bytes.slice(0, symbolIndex - 15).concat(enemiesBytes);
      newBytes = newBytes.concat(bytes.slice(symbolIndex + 1, bytes.length));
      editorPatch.data[index] = newBytes;
    }
  }

  updateEditorPatchData = (levelKey, levelEditorEnemyGroup, editorPatch) =>
  {
    const index = levelEditorEnemyGroup.groupReplaceIndex.toString();
    const bytes = editorPatch.data[index];

    if(!bytes)
    {
      // NOTE: Let the user customize the start spawning restriction below?
      // Maximum amount of chars before Lock Groups start to spawn enemies.
      const sv = "03";

      const key = levelEditorLevels[levelKey]?.patchKey;
      const patchData = patchService.get(key);
      const pd = patchData.patch.data[index];
      editorPatch.data[index] = pd.map((d) => lockStartSpawnSet.has(d) ? sv : d);
    }
  }

  sortEnemiesByTriggerSpawn = (level, levelEditorEnemyGroup, enemyGroupKey) =>
  {
    if(!levelEditorEnemyGroup.mustHaveSpawnDelayTime)
    {
      const sorted = {};
      const eg = level[enemyGroupKey];
      const enemyList = Object.keys(eg).map((k) => eg[k]);
      enemyList.sort(this.sortAscending);

      if(levelEditorEnemyGroup.hasElevator)
        enemyList.reverse();

      enemyList.forEach((e, i) => {
        e.id = i.toString();
        sorted[e.id] = e;
      });
      level[enemyGroupKey] = sorted;
    }
  }

  forceEnemy = (enemyGroup, levelEditorEnemyGroup, enemyAmount) =>
  {
    if(enemyAmount < 1)
    {
      const leeg = levelEditorEnemyGroup;
      const tp = leeg.screenPositionStart;
      const enemyKey = leeg.hasElevator ? "ferrisFalling" : "cash";
      const enemy = this.createEnemy(enemyKey, tp);
      enemy.positionX = (leeg.hasElevator ? 0 : tp) - 70;
      enemy.id = 0;
      enemyGroup[0] = enemy;
    }
  }

  createLevelImage = (levelKey, enemyGroupKey, enemyId, callback) =>
  {
    const level = this.getField(dataMap, levelKey);
    const eg = this.getField(level, enemyGroupKey);
    const lel = this.getField(levelEditorLevels, levelKey);
    const leeg = this.getField(lel.groups, enemyGroupKey);

    if(!this.isAnythingEmpty([level, lel, leeg]))
    {
      let mergeData = [];
      const enemy = this.getField(eg, enemyId);
      const nsemd = this.getNonSelectedEnemiesMergeData(leeg, eg, enemyId);
      mergeData = mergeData.concat(this.getLevelMergeData(leeg));
      mergeData = mergeData.concat(this.getElevatorMergeData(leeg, enemy));
      mergeData = mergeData.concat(nsemd);
      mergeData = mergeData.concat(this.getSelectedEnemyMergeData(leeg, enemy));
      mergeData = mergeData.concat(this.getCameraFOVMergeData(leeg, enemy));
      mergeData = mergeData.concat(this.getGroupLimitsMergeData(leeg));
      mergeImages(mergeData).then((base64) =>
      {
        if(callback)
          callback(base64);
      });
    }
    else
      callback(null);
  }

  getNonSelectedEnemiesMergeData = (levelEditorEnemyGroup, enemyGroup, enemyId) =>
  {
    const ids = Object.keys(enemyGroup);
    const leeg = levelEditorEnemyGroup;
    const mergeData = [];
    ids.sort((a, b) =>
    {
      const va = this.getValidValue(
          enemyGroup[a].positionY,
          leeg.walkablePositionYBottom,
          leeg.walkablePositionYTop);
      const vb = this.getValidValue(
          enemyGroup[b].positionY,
          leeg.walkablePositionYBottom,
          leeg.walkablePositionYTop);
      return vb - va;
    });
    ids.forEach((id) =>
    {
      if(id !== enemyId)
      {
        const nsEnemy = enemyGroup[id];
        const enemyData = this.getEnemyMergeObject(nsEnemy, leeg);
        enemyData.opacity = 0.7;
        mergeData.push(enemyData);
      }
    });
    return mergeData;
  }

  getGroupLimitsMergeData = (levelEditorEnemyGroup) =>
  {
    const mergeData = [];
    const leeg = levelEditorEnemyGroup;
    const lee = levelEditorEnemies;
    const groupKey = leeg.hasElevator ? "horizontalGroupLimit" : "groupLimit";
    const glImg = imageMap[groupKey];
    const glHW = Math.ceil(lee[groupKey].width / 2);
    let px1, px2, py1, py2, shift;

    if(isNaN(leeg.levelEditorFOVPositionX))
    {
      shift = this.tryGetField(leeg, "levelEditorShiftX", 0) - glHW;
      px1 = leeg.hasElevator ? 0 : leeg.levelEditorLimitStart;
      px1 += shift;
      px2 = leeg.hasElevator ? 0 : leeg.levelEditorLimitEnd;
      px2 += shift;
    }
    else
    {
      px1 = leeg.levelEditorFOVPositionX - glHW;
      px2 = leeg.levelEditorFOVPositionX - glHW;
      px2 += leeg.hasElevator ? 0 : lee["cameraFOV"].width;
    }

    if(isNaN(leeg.levelEditorFOVPositionY))
    {
      shift = this.tryGetField(leeg, "levelEditorShiftY", 0);
      shift -= leeg.hasElevator ? Math.ceil(lee[groupKey].height / 2) : 0;
      py1 = leeg.hasElevator ? leeg.levelEditorLimitStart : 0;
      py1 += shift;
      py2 = leeg.hasElevator ? leeg.levelEditorLimitEnd : 0;
      py2 += shift;
    }
    else
    {
      shift = leeg.hasElevator ? 384 : 0;
      py1 = leeg.levelEditorFOVPositionY;
      py2 = leeg.levelEditorFOVPositionY + shift;
    }

    mergeData.push({src: glImg, opacity: 0.7, x: px1, y: py1});
    mergeData.push({src: glImg, opacity: 0.7, x: px2, y: py2});
    return mergeData;
  }

  getEnemyMergeObject = (enemy, levelEditorEnemyGroup) =>
  {
    const lee = levelEditorEnemies;
    const leEnemy = lee[enemy.enemyKey];

    if(enemy && leEnemy)
    {
      const leeg = levelEditorEnemyGroup;
      const enemyImg = imageMap[enemy.enemyKey];
      const lh = levelSizeData[leeg.background].height;
      const camHalf = lee["cameraFOV"].width / 2;

      const shiftX = this.tryGetField(leeg, "levelEditorShiftX", 0) - camHalf;
      let px = parseInt(enemy.positionX);
      px = px ? px : 0;
      px = (px + shiftX) - leEnemy.pivotX;

      const nll = enemy.noLevelLimits === true ? true : false;
      let min = nll ? 0 : leeg.walkablePositionYBottom;
      let max = nll ? 65355 : leeg.walkablePositionYTop;
      let py = this.getValidValue(enemy.positionY, min, max);

      // Elevator Area Shift
      let eleShift = leeg.mustHaveSpawnDelayTime ?
          leeg.screenPositionStart : parseInt(enemy.triggerPosition);
      eleShift += this.getValidValue(leeg.levelEditorElevatorAreaShiftY, 0, 65535);
      
      let shiftY = this.getShiftYFromRangeShift(leeg, enemy);
      shiftY = shiftY ?? this.tryGetField(leeg, "levelEditorShiftY", 0);
      shiftY += leeg.hasElevator ? eleShift : 0;
      py = lh - (py + leEnemy.pivotY) - shiftY;

      return {src: enemyImg, x: px, y: py};
    }

    return {};
  }

  getCameraFOVMergeData = (levelEditorEnemyGroup, enemy) =>
  {
    const lee = levelEditorEnemies;
    const leEnemy = lee[enemy.enemyKey];

    if(enemy && leEnemy)
    {
      const leeg = levelEditorEnemyGroup;
      let px, py, shift;

      if(isNaN(leeg.levelEditorFOVPositionX))
      {
        shift = this.tryGetField(leeg, "levelEditorShiftX", 0);
        shift -= lee["cameraFOV"].width / 2;
        px = leeg.hasElevator ? 0 : parseInt(enemy.triggerPosition);
        px = px ? px + shift : shift;
      }
      else
        px = leeg.levelEditorFOVPositionX;

      if(isNaN(leeg.levelEditorFOVPositionY))
      {
        shift = leeg.hasElevator ? parseInt(leeg.elevatorStartPosition) : 0;
        shift -= leeg.hasElevator ? enemy.triggerPosition : 0;
        py = shift + this.tryGetField(leeg, "levelEditorShiftY", 0);
      }
      else
        py = leeg.levelEditorFOVPositionY;

      return [{src: imageMap["cameraFOV"], opacity: 0.7, x: px, y: py}];
    }

    return [];
  }

  getSelectedEnemyMergeData = (levelEditorEnemyGroup, enemy) =>
  {
    const emo = this.getEnemyMergeObject(enemy, levelEditorEnemyGroup);
    
    if(!this.isAnythingEmpty([emo]))
      return [emo];

    return [];
  }

  getElevatorMergeData = (levelEditorEnemyGroup, enemy) =>
  {
    if(levelEditorEnemyGroup.hasElevator && enemy.enemyKey)
    {
      const leeg = levelEditorEnemyGroup;
      const shiftX = this.tryGetField(leeg, "levelEditorShiftX", 0);
      const px = shiftX - (levelEditorEnemies["elevator"].width / 2);
      const shiftY = this.tryGetField(leeg, "levelEditorFOVPositionY", 0);
      const py = leeg.elevatorStartPosition - (shiftY + parseInt(enemy.triggerPosition));
      const img = imageMap["elevator"];
      return [{src: img, x: px, y: py}];
    }

    return [];
  }

  getLevelMergeData = (levelEditorEnemyGroup) =>
  {
    const image = imageMap[levelEditorEnemyGroup.background];

    if(image)
      return [{src: image, x: 0, y: 0}];
    
    return [];
  }

  getShiftYFromRangeShift = (levelEditorEnemyGroup, enemy) =>
  {
    const rangeList = levelEditorEnemyGroup.levelEditorRangeShiftY;

    if(rangeList && rangeList.length > 0)
    {
      const px = parseInt(enemy.positionY);

      for(let i = 0; i < rangeList.length; i++)
      {
        if(px >= rangeList[i][0] && px <= rangeList[i][1])
          return rangeList[i][2];
      }
    }

    return undefined;
  }

  sortAscending = (e1, e2) =>
  {
    return e1.triggerPosition - e2.triggerPosition;
  }

  tryGetField = (object, field, def) =>
  {
    const value = object ? object[field] : null;
    return value ? value : def;
  }

  applyPreset = (preset) =>
  {
    const json = JSON.parse(preset);

    if(json && json.data && json.type === "levelEditor")
      dataMap = json.data;
  }

  createPreset = () =>
  {
    const preset = {};
    preset.type = "levelEditor";
    preset.data = objectUtil.deepCopy(dataMap);
    delete preset.data.filename;
    return preset;
  }

  getValidValue = (value, min, max) =>
  {
    let nv = parseInt(value);
    nv = isNaN(nv) ? 0: nv;
    nv = Math.max(nv, min);
    nv = Math.min(nv, max);
    return nv;
  }

  createFerris = (levelEditorEnemyGroup) =>
  {
    const leeg = levelEditorEnemyGroup;
    const enemy = this.createEnemy("ferris", leeg.screenPositionStart);
    enemy.positionX = leeg.hasElevator ? 0 : leeg.screenPositionStart;
    return enemy;
  }

  createEnemy = (enemyKey, triggerPosition) =>
  {
    const e = {};
    e.id = null;
    e.enemyKey = enemyKey in levelEditorEnemies ? enemyKey : "cash";
    e.triggerPosition = triggerPosition;
    e.positionX = 0;
    e.positionY = "30";
    e.rage = "0";
    e.spawnDelayTime = "0";
    e.dinosaurExtraData = "0";
    e.palleteId = null;
    e.dropId = "0";
    e.noLevelLimits = false;
    return e;
  }

  getLevelEditorEnemyGroup = (levelKey, enemyGroupKey) =>
  {
    const lel = levelEditorLevels[levelKey];
    
    if(lel)
    {
      const leeg = lel.groups[enemyGroupKey];
      return leeg ? leeg : null;
    }
    
    return null;
  }

  getField = (object, field) =>
  {
    const fixedObject = object ? object : {};
    const content = field ? fixedObject[field] : {};
    return content ? content : {};
  }

  isAnythingEmpty = (args) =>
  {    
    for(let i = 0; i < args.length; i++)
    {
      if(Object.keys(args[i]).length < 1)
        return true;
    }
    
    return false;
  }

  addToModificationQueue = () =>
  {
    modificationService.add(150, "level", this.applyData);
  }

  isValidLevelKey = (levelKey) =>
  {
    return (levelKey in levelEditorLevels);
  }

  isValidEnemyGroupKey = (levelKey, groupKey) =>
  {
    let level = levelEditorLevels[levelKey]?.groups;
    level = level ? level : {}
    return (groupKey in level);
  }

  isValidEnemyKey = (enemyKey) =>
  {
    return (enemyKey in levelEditorEnemies);
  }

  setDataMapToDefault = () =>
  {
    dataMap = objectUtil.deepCopy(levelDefaultData);
  }

  getUILevelList = () =>
  {
    const keys = Object.keys(levelEditorLevels);
    return keys.map((key) => {return levelEditorLevels[key];});
  }

  getUIEnemyGroupList = (levelKey) =>
  {
    const level = levelEditorLevels[levelKey]?.groups;
    const keys = level ? Object.keys(level) : [];
    const groups = [];
    keys.forEach((key) =>
    {
      const group = level[key];
      const disabled = group?.disabled ? group.disabled : false;

      if(group && !disabled)
        groups.push(group);
    });
    return groups;
  }

  getUIEnemyGroup = (levelKey, groupKey) =>
  {
    const level = levelEditorLevels[levelKey]?.groups;
    const group = level ? level[groupKey] : null;
    return group ? group : {};
  }

  getUIEnemyFilteredList = (filter, level, enemyGroup, enemyId) =>
  {
    const lee = levelEditorEnemies;
    const enemieKeys = Object.keys(lee).filter((k) => !ignoreEnemyKeys.has(k));

    if(filter)
    {
      const filterLower = filter.toLowerCase();
      const selected = levelEditorService.getEnemy(level, enemyGroup, enemyId);
      const filtered = [];
      enemieKeys.forEach((ek) =>
      {
        const v = lee[ek].label.toLowerCase().includes(filterLower);

        if(v || ek === selected.enemyKey)
          filtered.push(lee[ek]);
      });

      return filtered;
    }

    return enemieKeys.map((key) => levelEditorEnemies[key]);
  }

  getUIEnemyAddedList = (levelKey, groupKey) =>
  {
    const level = this.getField(dataMap, levelKey);
    const group = this.getField(level, groupKey);
    return Object.keys(group).map((key) =>
    {
      const enemy = group[key];
      const label = levelEditorEnemies[enemy.enemyKey]?.label;
      return {...enemy, label, id: key};
    });
  }

  getUIEnemyPositionXRange = (enemyGroup, enemy) =>
  {
    const leeg = enemyGroup;
    const tp = leeg.hasElevator ? 0 : parseInt(enemy.triggerPosition);
    let base = leeg.positionXForceShift;
    base = base ? base : tp;
    base = isNaN(base) ? 0 : base;
    const range = {};
    range.min = !isNaN(base) ? Math.max(0, base - 70) : 0;
    range.max = !isNaN(base) ? Math.max(0, base + 450) : 0;
    return range;
  }

  getUIRecommendedPalleteText = (enemy) =>
  {
    const editorEnemy = levelEditorEnemies[enemy.enemyKey] ?? {};
    const p = editorEnemy.palleteIds ?? [];
    const t = p.map((id) => id.toString(16).padStart(2, "0").toUpperCase());
    t.push("default");
    return t.join(", ");
  }

  getUIPalleteDataList = () =>
  {
    return Object.keys(palleteData).map((key) => palleteData[key]);
  }

  getUIItemDropDataList = (filter, dropId) =>
  {
    let keys = Object.keys(itemDropData);
    
    if(filter)
    {
      const fl = filter.toLowerCase();
      const m = (k) => itemDropData[k]?.text.toLowerCase().includes(fl);
      keys = keys.filter(m);
      keys.unshift(dropId.toString());
    }

    return keys.map((key) => itemDropData[key]);
  }

  constructor()
  {
    dataMap = objectUtil.deepCopy(levelDefaultData);
  }
}

const lockStartSpawnSet = new Set(["LA", "LB", "LC"]);
const ignoreEnemyKeys = new Set([
  "none", "groupLimit", "horizontalGroupLimit",
  "cameraFOV", "elevator"
]);

let dataMap;

export const levelEditorService = new LevelEditorService();
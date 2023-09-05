import { objectUtil } from '../data/default/ObjectUtil';
import { patchMap } from "../data/patch/PatchMap";
import { randomizerData } from "../data/randomizer/RandomizerData";
import { extraEnemyData } from '../data/randomizer/ExtraEnemyData';
import { enemyByteMap } from "../data/byte/EnemyByteMap";
import { patchService } from "./PatchService";
import { forbiddenService } from "./ForbiddenService";
import { romService } from "./ROMService";
import { modificationService } from './ModificationService';


class RandomizerService
{
  createRandomizerPatch = () =>
  {
    this.fixSeed();
    this.fixRandomProfile();
    this.fixDataMap();
    const randomizedData = this.randomizeAllEnemies();
    const patch = {};
    patch.type = "overwrite";
    patch.filename = "cde_re.10f";
    patch.byteFormat = "hex";
    patch.data = randomizedData.patch;
    return patch;
  }

  randomizeAllEnemies = () =>
  {
    const seed = dataMap.seed;
    const randomizer = this.mulberry32Randomizer(seed);
    const rdegs = randomizerData.enemyGroups;
    const randomizedData = {preset: {}, patch: {}};

    Object.keys(rdegs).forEach((lk) =>
    {
      const rdl = rdegs[lk];
      const presetLevel = this.forceGetField(randomizedData.preset, lk);
      const dropMap = this.createDropMap(lk, rdl, randomizer);

      Object.keys(rdl).forEach((egk) =>
      {
        const rdeg = rdl[egk];

        if(rdeg.disabled)
          return;

        const enemies = this.randomizeEnemiesForGroup(lk, egk, randomizer);
        this.randomlyRemoveEnemiesOverLimit(rdeg, enemies, randomizer);
        presetLevel[egk] = this.createFixedEnemyGroupPreset(enemies.preset);
        const ids = Object.keys(enemies.patch);
        this.addBossHelperSpawnDelayTime(rdeg, enemies);
        this.randomizeDropsForEnemies(egk, enemies, dropMap, randomizer);

        if(ids.length > 0)
        {
          const p = randomizedData.patch;
          this.updateRandomizerPatchData(lk, rdeg, p);
          this.addEnemiesBytesToPatch(rdeg, p, enemies.patch);
        }
      });
    });

    return randomizedData;
  }

  randomizeEnemiesForGroup = (levelKey, enemyGroupKey, randomizer) =>
  {
    const enemies = {preset: {}, patch: {}};
    const mdeg = dataMap[levelKey][enemyGroupKey];
    const rdld = randomizerData.enemyGroups[levelKey];
    const rdes = randomizerData.enemyStrategy;
    const enemyGroup = rdld[enemyGroupKey];
    let enemyStrategy, amount, enemy, bytes;
    let enemyList = [];

    randomizerData.enemyStrategyList.forEach((e) =>
    {
      enemyStrategy = rdes[e];
      amount = mdeg[e];
      amount = isNaN(amount) ? 0 : amount;

      for(let i = 0; i < amount; i++)
      {
        enemy = this.randomizeEnemy(enemyGroup, enemyStrategy, randomizer);
        enemyList.push(enemy);
      }
    });
    this.randomizeExtraEnemies(enemyGroup, enemyList, randomizer);
    enemyList = this.getFixedOrderEnemies(enemyList, enemyGroup, randomizer);

    for(let i = 0; i < enemyList.length; i++)
    {
      const key = (i + 10).toString();
      enemy = enemyList[i];
      bytes = this.convertEnemyDataToBytes(enemy);
      enemies.preset[key] = enemy;
      enemies.patch[key] = bytes;
    }

    return enemies;
  }

  randomizeEnemy = (enemyGroup, enemyStrategy, randomizer) =>
  {
    const e = {};
    const r = randomizer;
    const eg = enemyGroup;
    e.enemyKey = this.randomizeEnemyKey(eg, enemyStrategy, r);
    e.triggerPosition = this.randomizeSpawnTriggerPosition(eg, r);
    e.positionX = this.randomizePositionX(e.enemyKey, e.triggerPosition, eg, r);
    e.positionY = this.randomizePositionY(eg, r);
    e.rage = this.randomizeEnemyRage(randomizer);
    e.palleteId = this.randomizePalleteId(e.enemyKey, eg, r);
    e.spawnDelayTime = 30;
    e.dropId = this.randomizeDefaultDrop(eg, e, randomizer);
    e.lockGroupSpawn = eg.mustHaveSpawnDelayTime === true;

    // Extra data to help generate the correct bytes.
    const shift = enemyGroup.walkablePositionForceShift;
    e.positionYShift = shift ? shift : 0;
    return e;
  }

  randomizePositionX = (enemyKey, triggerPosition,
      enemyGroup, randomizer) =>
  {
    const frl = enemyGroup.forbiddenRangeList;
    const ilg = enemyGroup.mustHaveSpawnDelayTime;
    const rl = forbiddenService.getValidPositionRangeList(enemyKey, frl, ilg);
    const keys = Object.keys(rl);
    const random = this.getRandomIntValue(randomizer, 0, keys.length - 1);
    const range = rl[keys[random]];
    const px = this.getRandomIntValue(randomizer, range[0], range[1]);
    let shift = enemyGroup.hasElevator ? 0 : triggerPosition;
    return px + shift;
  }

  randomizePositionY = (enemyGroup, randomizer) =>
  {
    return this.getRandomIntValue(randomizer,
        enemyGroup.walkablePositionYBottom,
        enemyGroup.walkablePositionYTop);
  }

  randomizeEnemyRage = (randomizer) =>
  {
    return this.getRandomIntValue(randomizer, 0, 255);
  }

  randomizePalleteId = (enemyKey, enemyGroup, randomizer) =>
  {
    const fpk = enemyGroup.forbiddenPalleteKey;
    const pil = forbiddenService.getValidPalleteIdList(enemyKey, fpk);
    const random = this.getRandomIntValue(randomizer, 0, pil.length - 1);
    return pil[random] ?? 0;
  }

  randomizeSpawnTriggerPosition = (enemyGroup, randomizer) =>
  {
    const eg = enemyGroup;
    const min = eg.hasElevator ? eg.screenPositionEnd : eg.screenPositionStart;
    const max = eg.hasElevator ? eg.screenPositionStart : eg.screenPositionEnd;
    return this.getRandomIntValue(randomizer, min, max);
  }

  randomlyRemoveEnemiesOverLimit = (enemyGroup, enemies, randomizer) =>
  {
    let fields = Object.keys(enemies.patch);

    while(fields.length > enemyGroup.maxAmount)
    {
      const random = this.getRandomIntValue(randomizer, 0, fields.length - 1);
      const key = fields[random];
      delete enemies.patch[key];
      delete enemies.preset[key]
      fields = Object.keys(enemies.patch);
    }
  }

  randomizeExtraEnemies = (enemyGroup, enemyList, randomizer) =>
  {
    enemyGroup.extraEnemies?.forEach((k) =>
    {
      const eerd = extraEnemyData[k];

      if(eerd)
      {
        const r = randomizer;
        const eg = enemyGroup;
        const tpr = eerd.triggerPositionRange;
        const palIds = eerd.palleteIds ?? [];
        const e = {};
        e.enemyKey = eerd.enemyKey;
        e.triggerPosition = this.getRandomIntValue(r, tpr[0], tpr[1]);
        e.positionX = this.randomizePositionX(e.enemyKey, e.triggerPosition, eg, r);
        e.positionY = this.randomizePositionY(eg, r);
        e.rage = this.randomizeEnemyRage(randomizer);
        e.palleteId = this.getRandomIntValue(r, 0, palIds.length - 1);
        e.spawnDelayTime = 30;
        e.dropId = 0;
        e.lockGroupSpawn = eg.mustHaveSpawnDelayTime === true;

        // Extra data to help generate the correct bytes.
        const shift = enemyGroup.walkablePositionForceShift;
        e.positionYShift = shift ? shift : 0;
        enemyList.unshift(e);
      }
    });
  }

  randomizeEnemyKey = (enemyGroup, enemyStrategy, randomizer) =>
  {
    const fekl = enemyGroup.forbiddenEnemyKeys;
    const ekl = enemyStrategy.enemyKeys;
    const veil = forbiddenService.getValidEnemyIndexList(ekl, fekl);
    let random = this.getRandomIntValue(randomizer, 0, veil.length - 1);
    let ek = ekl[veil[random]];

    if(ek ? false : true)
    {
      const max = safeEnemyKeyList.length - 1;
      random = this.getRandomIntValue(randomizer, 0, max);
      ek = safeEnemyKeyList[random];
    }
    
    return ek;
  }

  // NOTE: Add dinosaur data.
  convertEnemyDataToBytes = (enemy) =>
  {
    let aux = enemy.palleteId ?? 0;
    const tp = enemy.lockGroupSpawn ? enemy.spawnDelayTime : enemy.triggerPosition;
    const shift = enemy.positionYShift ?? 0;
    const palId = aux < 0 || aux > 31 ? 0 : aux;
    aux = parseInt(enemy.positionX);
    const posX = !isNaN(aux) && aux > 0 ? aux : 0;
    const posY = enemy.positionY + shift | ((palId ?? 0) << 11);

    const enemyBytes = enemyByteMap[enemy.enemyKey].slice();
    const hexPY = romService.convertNumberToROMBytes(posY, 2);
    const hexTP = romService.convertNumberToROMBytes(tp, 2);
    const hexPX = romService.convertNumberToROMBytes(posX, 2);
    
    enemyBytes[0] = hexTP[0];
    enemyBytes[1] = hexTP[1];
    
    enemyBytes[6] = hexPX[0];
    enemyBytes[7] = hexPX[1];

    enemyBytes[8] = hexPY[0];
    enemyBytes[9] = hexPY[1];

    if(enemyBytes[14] === "RR")
      enemyBytes[14] = romService.convertNumberToROMBytes(enemy.dropId, 1)[0];

    if(enemyBytes[15] === "RR")
      enemyBytes[15] = romService.convertNumberToROMBytes(enemy.rage, 1)[0];

    return enemyBytes;
  }

  createDropMap = (levelKey, levelGroups, randomizer) =>
  {
    const gkl = Object.keys(levelGroups).filter((k) => k !== "bossHelperGroup1");
    const dropMap = {};
    const rp = randomizerData.randomProfile[dataMap.randomProfile] ?? {};
    const drops = objectUtil.deepCopy(rp[levelKey + "Drops"] ?? {});
    const bossDrops = objectUtil.deepCopy(rp.bossDrops ?? {});
    const groups = gkl.filter((k) => !this.isLockBossEnemyGroupKey(k));
    const bossGroups = gkl.filter((k) => this.isLockBossEnemyGroupKey(k));
    let t = 0;
    let bt = 0;
    Object.keys(drops).forEach((k) => t += (drops[k] ?? 0));
    Object.keys(bossDrops).forEach((k) => bt += (bossDrops[k] ?? 0));
    dropMap.total = t;
    dropMap.bossTotal = bt;
    dropMap.drops = drops;
    dropMap.bossDrops = bossDrops;
    const max = levelKey === "level1" ? 3 : 2;
    this.randomizeGroupsTotalDrops(dropMap, groups, t, max, randomizer);
    this.randomizeGroupsTotalDrops(dropMap, bossGroups, bt, max, randomizer);
    return dropMap;
  }

  randomizeDropsForEnemies = (groupKey, enemies, dropMap, randomizer) =>
  {
    if(groupKey in dropMap)
    {
      const em = enemies.preset;
      const aekl = Object.keys(em);
      const isBossGroup = this.isLockBossEnemyGroupKey(groupKey);
      const dm = (isBossGroup ? dropMap.bossDrops : dropMap.drops) ?? {};
      let dkl = Object.keys(dm);
      let ekl = aekl.filter((k) => !dinosaurSet.has(em[k].enemyKey));
      let left = dropMap[groupKey];

      while(left > 0 && ekl.length > 0 && dkl.length > 0)
      {
        const enemyKey = ekl[this.getRandomIntValue(randomizer, 0, ekl.length - 1)];
        const dropKey = dkl[this.getRandomIntValue(randomizer, 0, dkl.length - 1)];
        const dil = randomizerData.enemyStrategy[dropKey].enemyKeys ?? [0];
        const dropId = dil[this.getRandomIntValue(randomizer, 0, dil.length - 1)];
        enemies.patch[enemyKey][14] = dropId;
        enemies.preset[enemyKey].dropId = parseInt(dropId, 16);
        dm[dropKey] = dm[dropKey] > 1 ? dm[dropKey]-- : undefined;
        ekl = ekl.filter((k) => k !== enemyKey);
        left--;

        if(dm[dropKey] === undefined)
        {
          delete dm[dropKey];
          dkl = dkl.filter((k) => k !== dropKey);
        }
      }
    }
  }

  randomizeGroupsTotalDrops = (dropMap, groupKeys, total, max, randomizer) =>
  {
    let left = total;
    let gks = groupKeys.slice();

    while(left > 0)
    {
      const random = this.getRandomIntValue(randomizer, 0, gks.length - 1);
      const groupKey = gks[random];
      const amount = (dropMap[groupKey] ?? 0) + 1;

      if(amount <= max)
      {
        dropMap[groupKey] = amount;
        left--;
      }
      else
        gks = gks.filter((k) => k !== groupKey);
    }
  }

  randomizeDefaultDrop = (enemyGroup, enemy, randomizer) =>
  {
    if(enemyGroup.background !== "level3")
    {
      // Barrel: 0 - 4 nothing, 5 - 17 any treasure, 18 - 19 any melee weapon
      // Enemy: 0 - 14 nothing, 15 - 17 any treasure, 18 - 19 any melee weapon
      const random = this.getRandomIntValue(randomizer, 0, 19);
      const nothingOdds = barrelSet.has(enemy.enemyKey) ? 5 : 15;
      const dropId = (random < nothingOdds) ? 0 : (random < 18 ? 91 : 21);
      const fl = enemyGroup.forbiddenDropList ?? [];
      return fl.includes(dropId) ? 0 : dropId;
    }
    else
    {
      const fl = enemyGroup.forbiddenDropList ?? [];
      return fl.includes(102) ? 0 : 102;
    }
  }

  updateRandomizerPatchData = (levelKey, enemyGroup, randomizerPatch) =>
  {
    const index = enemyGroup.groupReplaceIndex.toString();
    const bytes = randomizerPatch[index];

    if(!bytes)
    {
      const key = randomizerData.levels[levelKey]?.patchKey;
      const patchData = patchService.get(key);
      const sv = lockStartSpawnMap[dataMap?.randomProfile ?? ""] ?? "06";
      const pd = patchData.patch.data[index];
      randomizerPatch[index] = pd.map((d) => lockStartSpawnSet.has(d) ? sv : d);
    }
  }

  addEnemiesBytesToPatch = (enemyGroup, randomizerPatch, enemiesBytes) =>
  {
    const index = enemyGroup.groupReplaceIndex.toString();
    const symbol = enemyGroup.groupReplaceByteSymbol;
    const bytes = randomizerPatch[index];
    const symbolIndex = bytes?.indexOf(symbol) ?? -1;
    const ebk = Object.keys(enemiesBytes);
    let allBytes = [];
    ebk.sort();
    ebk.forEach((key) => allBytes = allBytes.concat(enemiesBytes[key]));

    if(bytes && symbolIndex > -1)
    {
      let newBytes = bytes.slice(0, symbolIndex - 15).concat(allBytes);
      newBytes = newBytes.concat(bytes.slice(symbolIndex + 1, bytes.length));
      randomizerPatch[index] = newBytes;
    }
  }

  applyRandomizer = () =>
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
    romService.applyPatch(patchMap.foodImprovementPatch.patch);
    romService.applyPatch(patchMap.force40StrengthPatch.patch);
    romService.applyPatch(patchMap.levelEditorTextPatch.patch);
    romService.applyPatch(patchMap.featuresPatch.patch);
    romService.applyPatch(this.getRandomizerHealthPatch());
    romService.applyPatch(this.createRandomizerPatch());
    romService.applyPatch(this.createRandomizerTextPatch());
  }

  getCustomRandomProfileEnemyGroup = (levelKey, groupKey) =>
  {
    if(levelKey && groupKey)
    {
      const crp = randomizerData.randomProfile.custom;
      const l = this.forceGetField(crp, levelKey);
      return this.forceGetField(l, groupKey);
    }
    
    return {};
  }

  forceGetField = (object, field) =>
  {
    if(field)
    {
      const content = object[field];

      if(!content)
      {
        object[field] = {};
        return object[field];
      }

      return content;
    }

    return {};
  }

  getField = (object, field) =>
  {
    const content = field ? object[field] : {};
    return content ? content : {};
  }

  fixSeed = () =>
  {
    let s = parseInt(dataMap.seed);
    s = isNaN(s) ? 0 : s;
    s = Math.max(s, Number.MIN_SAFE_INTEGER);
    s = Math.min(s, Number.MAX_SAFE_INTEGER);
    dataMap.seed = s;
  }

  fixRandomProfile = () =>
  {
    let rp = dataMap.randomProfile;
    rp = rp in randomizerData.randomProfile ? rp : "wild";
    dataMap.randomProfile = rp;
  }

  getSeed = () =>
  {
    return dataMap.seed;
  }

  setSeed = (seed) =>
  {
    dataMap.seed = seed;
  }

  getRandomProfile = () =>
  {
    return dataMap.randomProfile;
  }

  setRandomProfile = (randomProfile) =>
  {
    dataMap.randomProfile = randomProfile;
  }

  setEnemyGroupMaxAmount = (levelKey, groupKey, strategyKey, amount) =>
  {
    const rp = randomizerData.randomProfile.custom;
    const l = this.forceGetField(rp, levelKey);
    const g = this.forceGetField(l, groupKey);
    const s = this.forceGetField(g, strategyKey);
    s.randomMaxAmount = amount;
  }

  setEnemyGroupMinAmount = (levelKey, groupKey, strategyKey, amount) =>
  {
    const rp = randomizerData.randomProfile.custom;
    const l = this.forceGetField(rp, levelKey);
    const g = this.forceGetField(l, groupKey);
    const s = this.forceGetField(g, strategyKey);
    s.randomMinAmount = amount;
  }

  getDateNowInMilliseconds = () =>
  {
    return Date.now().valueOf();
  }

  getRandomIntValue = (randomizer, begin, end) =>
  {
    const b = parseInt(begin);
    const e = parseInt(end);
    const amount = Math.abs(e - b);

    if(amount !== 0)
      return Math.round(randomizer() * amount) + b;

    return begin;
  }

  fixDataMap = () =>
  {
    const rdegs = randomizerData.enemyGroups;
    const seed = dataMap.seed;
    const randomizer = this.mulberry32Randomizer(seed);
    const dmrp = dataMap.randomProfile;
    const randomProfile = randomizerData.randomProfile[dmrp];
    Object.keys(rdegs).forEach((e) =>
    {
      this.fixLevel(e, randomProfile, randomizer);
    });
  }

  fixLevel = (levelKey, randomProfile, randomizer) =>
  {
    const mdl = this.forceGetField(dataMap, levelKey);
    const rdl = randomizerData.enemyGroups[levelKey];

    Object.keys(rdl).forEach((egk) =>
    {
      const rdeg = rdl[egk];
      let sts;

      if(dataMap.randomProfile === "custom")
      {
        sts = randomProfile[levelKey];
        sts = sts ? sts[egk] : {};
        sts = sts ? sts : {};
      }
      else
      {
        sts = randomProfile[rdeg.specialStrategy];
        sts = sts ? sts : randomProfile.enemyStrategy;
      }

      this.fixEnemyGroup(egk, mdl, sts, randomizer);
    });
  }

  fixEnemyGroup = (enemyGroupKey,
      dataMapLevel, randomStrategies, randomizer) =>
  {
    const eg = this.forceGetField(dataMapLevel, enemyGroupKey);
    objectUtil.removeAllProperties(eg);
    let total = 0;
    Object.keys(randomStrategies).forEach((e) =>
    {
      const es = randomStrategies[e];
      let min = parseInt(es.randomMinAmount);
      let max = parseInt(es.randomMaxAmount);
      min = (isNaN(min)) ? 0 : min;
      max = (isNaN(max) || max < 0) ? 0 : max;
      min = (max - min) < 0 ? 0 : min;
      max = (max - min) < 0 ? 0 : max;
      const amount = Math.max(0, this.getRandomIntValue(randomizer, min, max));
      total += amount;
      eg[e] = amount;
    });
    
    if(total < 1)
      eg.enemiesFall = 1;
  }

  createFixedEnemyGroupPreset = (enemyGroupPreset) =>
  {
    const fixed = {};
    let index = 0;
    const keys = Object.keys(enemyGroupPreset);
    keys.sort().forEach((key) =>
    {
      const enemy = enemyGroupPreset[key];
      enemy.id = index;
      fixed[index++] = enemy;
    });
    return fixed;
  }

  getFixedOrderEnemies = (enemyList, enemyGroup, randomizer) =>
  {
    if(enemyGroup.mustHaveSpawnDelayTime === true)
    {
      const shuffle = enemyGroup.forbiddenShuffle ? false : true;
      return shuffle ? this.shuffle(enemyList, randomizer) : enemyList;
    }
    else
    {
      enemyList.sort(this.sortAscending);

      if(enemyGroup.hasElevator)
        enemyList.reverse();
    }

    return enemyList.slice();
  }

  addBossHelperSpawnDelayTime = (enemyGroup, enemies) =>
  {
    const sdt = enemyGroup.randomizerStartingSpawnDelayTime;

    if(sdt)
    {
      const presetEnemy = enemies.preset[10] ?? {};
      const patchEnemy = enemies.patch[10] ?? {};
      const hex = romService.convertNumberToROMBytes(sdt, 2);
      presetEnemy.spawnDelayTime = sdt;
      patchEnemy[0] = hex[0];
      patchEnemy[1] = hex[1];
    }
  }

  createRandomizerTextPatch = () =>
  {
    const patch = Object.assign({}, patchMap.randomizerTextPatch.patch);
    patch.data = Object.assign({}, patchMap.randomizerTextPatch.patch.data);
    const sbs = this.getSeedTextBytes(patch);
    const lbs = this.getRandomProfileTextBytes();
    patch.data[patch.seedByteIndex.toString()] = sbs;
    patch.data[patch.levelByteIndex.toString()] = lbs;
    return patch;
  }

  getRandomizerHealthPatch = () =>
  {
    return health2Set.has(dataMap.randomProfile) ?
        patchMap.randomizerHealthPatch2.patch :
        patchMap.randomizerHealthPatch.patch;
  }

  getRandomProfileTextBytes = () =>
  {
    const lt = randomizerLevelTexts[dataMap.randomProfile];
    return romService.convertStringToROMBytes(lt);
  }

  getSeedTextBytes = (patch) =>
  {
    let st = dataMap.seed.toString();
    const seedSize = patch.seedSize;
    st = "*".repeat(seedSize) + " " + st + " " + "*".repeat(seedSize);
    const remove = (st.length - seedSize) / 2;
    st = st.substring(remove, st.length - remove);
    st = st.length > seedSize ? st.substring(0, seedSize) : st;
    return romService.convertStringToROMBytes(st);
  }

  applyPreset = (preset) =>
  {
    const json = JSON.parse(preset);

    if(json && json.data && json.type === "randomizer")
    {
      dataMap = dataMap ? dataMap : {};
      Object.assign(dataMap, json.data);
      delete dataMap.customRandomProfile;
      let custom = json.data.customRandomProfile;
      custom = custom ? custom : {};
      Object.assign(randomizerData.randomProfile.custom, custom);
      const crp = randomizerData.randomProfile.custom;
      crp.key = "custom";
      crp.label = "Custom";
      crp.dinosaurFoot1 = 1;
      crp.dinosaurFoot2 = 1;
    }
  }
  
  createRandomizerPreset = () =>
  {
    const crp = randomizerData.randomProfile.custom;
    const preset = {};
    preset.type = "randomizer";
    preset.data = objectUtil.deepCopy(dataMap);

    if(dataMap.randomProfile === "custom")
    {
      preset.data.customRandomProfile = objectUtil.deepCopy(crp);
      delete preset.data.customRandomProfile.label;
    }

    return preset;
  }

  createLevelEditorPreset = () =>
  {
    this.fixSeed();
    this.fixRandomProfile();
    this.fixDataMap();
    const randomizerData = this.randomizeAllEnemies();
    const preset = {};
    preset.type = "levelEditor";
    preset.data = randomizerData.preset;
    return preset;
  }

  createDefaultDataMap = () =>
  {
    const map = {};
    map.seed = this.getDateNowInMilliseconds();
    map.randomProfile = "wild";
    return map;
  }

  setDataMapToDefault = () =>
  {
    dataMap = this.createDefaultDataMap();
  }

  setCustomRandomProfileToDefault = () =>
  {
    const crp = randomizerData.randomProfile.custom;
    objectUtil.removeAllProperties(crp);
    crp.key = "custom";
    crp.label = "Custom";
    crp.dinosaurFoot1 = 1;
    crp.dinosaurFoot2 = 1;
  }

  // Fisher-Yates shuffle. 
  shuffle = (array, randomizer) =>
  {
    for(let i = array.length - 1; i > 0; i--)
    {
      const j = Math.floor(randomizer() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }

    return array;
  }

  sortAscending = (e1, e2) =>
  {
    return e1.triggerPosition - e2.triggerPosition;
  }

  mulberry32Randomizer = (seed) =>
  {
    return function()
    {
      seed += 0x6D2B79F5;
      var t = seed;
      t = Math.imul(t ^ t >>> 15, t | 1);
      t ^= t + Math.imul(t ^ t >>> 7, t | 61);
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    }
  }

  addToModificationQueue = () =>
  {
    modificationService.add(150, "randomizer", this.applyRandomizer);
  }

  isValidLevelKey = (levelKey) =>
  {
    return (levelKey in randomizerData.enemyGroups);
  }

  isValidEnemyGroupKey = (levelKey, groupKey) =>
  {
    let level = randomizerData.enemyGroups[levelKey];
    level = level ? level : {}
    return (groupKey in level);
  }

  isLockBossEnemyGroupKey = (groupKey) =>
  {
    return groupKey.toLowerCase().includes("boss");
  }

  getUIRandomProfileList = () =>
  {
    const keys = Object.keys(randomizerData.randomProfile);
    return keys.map((key) => {return randomizerData.randomProfile[key];});
  }

  getUILevelList = () =>
  {
    const keys = Object.keys(randomizerData.levels);
    return keys.map((key) => {return randomizerData.levels[key];});
  }

  getUIEnemyGroupList = (levelKey) =>
  {
    const level = randomizerData.enemyGroups[levelKey];
    const keys = level ? Object.keys(level) : [];
    return keys.map((key) => {return level[key];});
  }

  getUIRandomizerEnemyStrategyList = (levelKey, groupKey) =>
  {
    const data = this.getCustomRandomProfileEnemyGroup(levelKey, groupKey);
    const keys = Object.keys(randomizerData.enemyStrategy);
    return keys.map((key) =>
    {
      const es = data[key];
      const c = objectUtil.deepCopy(randomizerData.enemyStrategy[key]);
      c.randomMinAmount = es?.randomMinAmount ? es.randomMinAmount : "";
      c.randomMaxAmount = es?.randomMaxAmount ? es.randomMaxAmount : "";
      return c;
    });
  }

  getUIEnemyGroup = (levelKey, groupKey) =>
  {
    const level = randomizerData.enemyGroups[levelKey];
    const group = level ? level[groupKey] : {};
    return group ? group : {};
  }

  constructor()
  {
    dataMap = this.createDefaultDataMap();
  }
}


let dataMap;

const randomizerLevelTexts = 
{
  kind: "** Kind **",
  weak: "** Weak **",
  easy: "** Easy **",
  mid: "*** Mid **",
  hard: "** Hard **",
  wild: "** Wild **",
  restInPain: "*** RIP **",
  custom: "* Custom *"
}

const safeEnemyKeyList = 
[
  "ferrisFalling", "poacherJFalling",
  "hammerTFalling", "punkFalling",
  "bladeFalling2"
];

const barrelSet = new Set([
  "smallMetalBarrel", "metalBarrel",
  "statue", "woodenBarrel", "tires",

  "rollingSmallMetalBarrel", "fallingRollingSmallMetalBarrel",
  "rollingWoodenBarrel", "fallingRollingWoodenBarrel"
]);

const dinosaurSet = new Set([
  "rHopper", "rHopperAngry",
  "rHopper", "rHopperAngry",
  "rHopper", "rHopperAngry",

  "zeke", "zeke", "zeke", "zeke", "zeke", "zeke",

  "mack", "mackJumper",
  "mack", "mackJumper",
  "mack", "mackJumper",

  "shivatAngry", "shivatAngry", "shivatAngry",
  "shivatAngry", "shivatAngry", "shivatAngry"
]);

const health2Set = new Set(["mid", "hard", "wild", "restInPain"]);
const lockStartSpawnSet = new Set(["LA", "LB", "LC"]);
const lockStartSpawnMap = {
  kind: "05",
  weak: "06",
  easy: "07",
  mid: "08",
  hard: "09",
  wild: "0A",
  restInPain: "0A",
  custom: "07"
}

export const randomizerService = new RandomizerService();

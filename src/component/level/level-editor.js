import { fileService } from "../../service/FileService";
import { componentService } from "../../service/ComponentService";
import { levelEditorService } from "../../service/LevelEditorService";


class LevelEditor
{
  addEnemy = () =>
  {
    const {levelKey, enemyGroupKey} = this;
    const enemy = levelEditorService.addEnemy(levelKey, enemyGroupKey);
    this.enemyId = enemy.id.toString();
    this.refreshImage();
    this.setViewData(this.getViewData());
  }

  removeEnemy = () =>
  {
    const {levelKey, enemyGroupKey, enemyId} = this;
    const eId = parseInt(enemyId);

    if(!isNaN(eId))
    {
      levelEditorService.removeEnemy(levelKey, enemyGroupKey, enemyId);
      this.enemyId = (eId - 1) > -1 ? (eId - 1).toString() : "";
      this.refreshImage();
      this.setViewData(this.getViewData());
    }
  }

  refreshImage = () =>
  {
    const {levelKey, enemyGroupKey, enemyId} = this;
    levelEditorService.createLevelImage(
        levelKey, enemyGroupKey, enemyId, this.setLevelAreaImage);
  }

  clearData = () =>
  {
    let extras = {};
    extras.successMessage = "All data is cleared!";
    this.enemyId = "";
    levelEditorService.setDataMapToDefault();
    this.onActionResult(extras);
    this.setViewData(this.getViewData());
  }

  onLoadPresetFileChange = (event) =>
  {
    const file = event.target.files[0];

    if(file)
    {
      const extras = {};
      extras.successCallback = this.onActionResult;
      extras.errorCallback = this.onActionResult;
      extras.contentCallback = this.applyPresetFile;
      extras.successMessage = "Level Editor preset loaded!";
      extras.errorMessage = "Problems loading the preset!";
      extras.file = file;
      fileService.readTextFile(extras);
    }

    event.target.value = "";
  }

  applyPresetFile = (extras) =>
  {
    try
    {
      if(extras && extras.actionSuccessful)
      {
        levelEditorService.applyPreset(extras.actionData);
        this.setViewData(this.getViewData());
      }
    }
    catch(e)
    {
      console.log(e.message);
      console.log(e);
      const extras = {};
      extras.errorMessage = "Invalid JSON preset file!";
      this.onActionResult(extras);
    }
  }

  savePreset = () =>
  {
    const preset = levelEditorService.createPreset();
    const json = JSON.stringify(preset, null, "\t");
    const contentType = "text/json;charset=utf-8";
    const filename = "cdree_level_editor_preset.json";
    componentService.downloadFile(json, filename, contentType);
  }

  addChanges = () =>
  {
    let extras = {};
    extras.successMessage = "Data is added to the modification queue!";
    levelEditorService.addToModificationQueue();
    this.onActionResult(extras);
    componentService.callMethod("windowList", "updateActiveWindowList");
  }

  setLevelKey = (levelKey) => 
  {
    this.levelKey = levelKey;
    this.enemyGroupKey = "";
    this.enemyId = "";
    levelEditorService.createLevelImage(this.levelKey,
        this.enemyGroupKey, -1, this.setLevelAreaImage);
    this.setViewData(this.getViewData());
  }

  setEnemyGroupKey = (enemyGroupKey) => 
  {
    this.enemyGroupKey = enemyGroupKey;
    this.enemyId = "";
    levelEditorService.createLevelImage(this.levelKey,
        this.enemyGroupKey, -1, this.setLevelAreaImage);
    this.setViewData(this.getViewData());
  }

  setLevelAreaImage = (image) =>
  {
    this.levelAreaImage = image;12
    this.setViewData(this.getViewData());
  }

  setEnemyId = (enemyId) => 
  {
    this.enemyId = enemyId;
    this.setViewData(this.getViewData());
  }

  setFilterEnemyString = (filterEnemyString) =>
  {
    this.filterEnemyString = filterEnemyString;
    this.setViewData(this.getViewData());
  }

  setFilterDropString = (filterDropString) =>
  {
    this.filterDropString = filterDropString;
    this.setViewData(this.getViewData());
  }

  setEnemyKey = (enemyKey) =>
  {
    const {levelKey, enemyGroupKey, enemyId} = this;
    levelEditorService.setEnemyKey(
        levelKey, enemyGroupKey, enemyId, enemyKey);
    this.setViewData(this.getViewData());
  }

  setEnemyTriggerPosition = (triggerPosition) =>
  {
    const {levelKey, enemyGroupKey, enemyId} = this;
    levelEditorService.setEnemyTriggerPosition(
        levelKey, enemyGroupKey, enemyId, triggerPosition);
    this.setViewData(this.getViewData());
  }

  setEnemyPositionX = (positionX) =>
  {
    const {levelKey, enemyGroupKey, enemyId} = this;
    levelEditorService.setEnemyPositionX(
        levelKey, enemyGroupKey, enemyId, positionX);
    this.setViewData(this.getViewData());
  }

  setEnemyPositionY = (positionY) =>
  {
    const {levelKey, enemyGroupKey, enemyId} = this;
    levelEditorService.setEnemyPositionY(
        levelKey, enemyGroupKey, enemyId, positionY);
    this.setViewData(this.getViewData());
  }

  setEnemyRage = (rage) =>
  {
    const {levelKey, enemyGroupKey, enemyId} = this;
    levelEditorService.setEnemyRage(levelKey, enemyGroupKey, enemyId, rage);
    this.setViewData(this.getViewData());
  }

  setEnemySpawnDelayTime = (spawnDelayTime) =>
  {
    const {levelKey, enemyGroupKey, enemyId} = this;
    levelEditorService.setEnemySpawnDelayTime(
        levelKey, enemyGroupKey, enemyId, spawnDelayTime);
    this.setViewData(this.getViewData());
  }

  setEnemyDinosaurExtraData = (dinosaurExtraData) =>
  {
    const {levelKey, enemyGroupKey, enemyId} = this;
    levelEditorService.setEnemyDinosaurExtraData(
        levelKey, enemyGroupKey, enemyId, dinosaurExtraData);
    this.setViewData(this.getViewData());
  }

  setEnemyPalleteId = (palleteId) =>
  {
    const {levelKey, enemyGroupKey, enemyId} = this;
    levelEditorService.setEnemyPalleteId(
        levelKey, enemyGroupKey, enemyId, palleteId);
    this.setViewData(this.getViewData());
  }

  setEnemyDropId = (dropId) =>
  {
    const {levelKey, enemyGroupKey, enemyId} = this;
    levelEditorService.setEnemyDropId(
        levelKey, enemyGroupKey, enemyId, dropId);
    this.setViewData(this.getViewData());
  }

  toggleEnemyNoLevelLimits = () =>
  {
    const {levelKey, enemyGroupKey, enemyId} = this;
    levelEditorService.toggleEnemyNoLevelLimits(
        levelKey, enemyGroupKey, enemyId);
    this.setViewData(this.getViewData());
  }

  createLevelList = () =>
  {
    return levelEditorService.getUILevelList();
  }

  getViewData = () =>
  {
    const les = levelEditorService;
    const {componentData, levelKey, enemyGroupKey, levelAreaImage,
        enemyId, filterEnemyString, filterDropString} = this;
    const enemyFilteredList = createEnemyFilteredList(levelKey,
        enemyGroupKey, enemyId, filterEnemyString);
    const enemyGroupList = createEnemyGroupList(levelKey);
    const enemyAddedList = createEnemyAddedList(levelKey, enemyGroupKey);
    const enemyGroup = les.getUIEnemyGroup(levelKey, enemyGroupKey);
    const enemy = les.getEnemy(levelKey, enemyGroupKey, enemyId);
    const positionXRange = getPositionXRange(enemyGroup, enemy);
    const showGroupField = les.isValidLevelKey(levelKey);
    const showLevelEditArea = les.isValidEnemyGroupKey(levelKey, enemyGroupKey);
    const showEnemyFields = les.isValidEnemyKey(enemy.enemyKey);
    const showDelayField = enemyGroup.mustHaveSpawnDelayTime ? true : false;
    const verticalScroll = enemyGroup.verticalScroll;
    const showTriggerField = !showDelayField;
    const palleteDataList = levelEditorService.getUIPalleteDataList();
    const recommendedPalleteText = les.getUIRecommendedPalleteText(enemy);
    const enemyPalleteId = enemy.palleteId ? enemy.palleteId : undefined;
    const itemDropDataList = les.getUIItemDropDataList(
          filterDropString, enemy.dropId);
    return {
      componentData, levelKey, enemyGroupKey, enemyGroupList,
      verticalScroll, showGroupField, showLevelEditArea,
      showEnemyFields, showDelayField, showTriggerField,
      levelAreaImage, palleteDataList, recommendedPalleteText,
      itemDropDataList, positionXRange, enemyId, enemy,
      enemyPalleteId, enemyAddedList, enemyFilteredList,
      filterEnemyString, filterDropString, enemyGroup
    }
  }

  updateViewData = () =>
  {
    this.window.updateViewData();
    this.setViewData(this.getViewData());
  }

  onInputDecimal = (event, methodName) =>
  {
    componentService.onElementDecimalValueChange(event, this, methodName);
  }

  onValueChange = (event, methodName) =>
  {
    componentService.onElementValueChange(event, this, methodName);
  }

  constructor(props, setViewData)
  {
    componentService.setController(props.key, this);
    this.setViewData = setViewData;
    this.key = props.key;
    this.window = props.window;
    this.onActionResult = props.window.onActionResult;
    this.componentData = componentService.getComponentData(this.key);
    this.requestFile = componentService.requestFile;
    this.updateZoom = props.window.updateZoom;
    this.levelKey = "";
    this.enemyGroupKey = "";
    this.enemyId = "";
    this.filterEnemyString = "";
    this.filterDropString = "";
    this.levelAreaImage = "";
    this.itemDropList = [];
    this.updateViewData();
  }
}


const getPositionXRange = (enemyGroup, enemy) =>
{
  return levelEditorService.getUIEnemyPositionXRange(enemyGroup, enemy);
}

const createEnemyGroupList = (levelKey) =>
{
  return levelEditorService.getUIEnemyGroupList(levelKey);
}

const createEnemyFilteredList = (levelKey, enemyGroupKey, enemyId, filterEnemyString) =>
{
  return levelEditorService.getUIEnemyFilteredList(
      filterEnemyString, levelKey, enemyGroupKey, enemyId);
}

const createEnemyAddedList = (levelKey, enemyGroupKey) =>
{
  return levelEditorService.getUIEnemyAddedList(levelKey, enemyGroupKey);
}


export { LevelEditor };
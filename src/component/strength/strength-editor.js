import { componentService } from "../../service/ComponentService";
import { strengthService } from "../../service/StrengthService";
import { fileService } from "../../service/FileService";


class StrengthEditor
{
  onLoadPresetFileChange = (event) =>
  {
    const file = event.target.files[0];

    if(file)
    {
      const extras = {};
      extras.successCallback = this.onActionResult;
      extras.errorCallback = this.onActionResult;
      extras.contentCallback = this.applyPresetFile;
      extras.successMessage = "Character Strength preset loaded!";
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
        strengthService.applyPreset(extras.actionData);
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

  savePresetFile = () =>
  {
    const preset = strengthService.createPreset();
    const json = JSON.stringify(preset, null, "\t");
    const contentType = "text/json;charset=utf-8";
    const filename = "cdree_strength_editor_preset.json";
    componentService.downloadFile(json, filename, contentType);
  }

  getStrength()
  {
    const strength = strengthService.getStrength(this.characterKey);
    return strength ? strength : "";
  }

  setCharacterKey = (characterKey) =>
  {
    this.characterKey = characterKey;
    this.setViewData(this.getViewData());
  }

  setStrength = (strength) =>
  {
    strengthService.setStrength(this.characterKey, strength);
    this.setViewData(this.getViewData());
  }

  setStrengthToDefault = () =>
  {
    strengthService.setStrengthToDefault(this.characterKey);
    this.setViewData(this.getViewData());
  }

  addChanges = () =>
  {
    const extras = {};
    extras.successMessage = "Data is added to the modification queue!";
    strengthService.addToModificationQueue();
    this.onActionResult(extras);
    componentService.callMethod("windowList", "updateActiveWindowList");
  }

  clearData = () =>
  {
    const extras = {};
    extras.successMessage = "All data is cleared!";
    strengthService.clearData();
    this.onActionResult(extras);
    this.setViewData(this.getViewData());
  }

  createCharacterStrengthList = () =>
  {
    return strengthService.getCharacterStrengthList();
  }

  getViewData = () =>
  {
    const showStrengthField = strengthService.hasCharacterKey(this.characterKey);
    const {componentData, characterKey} = this;
    const strength = this.getStrength();
    return {componentData, showStrengthField, characterKey, strength};
  }

  updateViewData = () =>
  {
    this.window.updateViewData();
    this.setViewData(this.getViewData());
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
    this.characterKey = "";
    this.updateViewData();
  }
}

export { StrengthEditor };
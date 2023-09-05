import { componentService } from "../../service/ComponentService";
import { weaponAmmoService} from "../../service/WeaponAmmoService";
import { fileService } from "../../service/FileService";


class WeaponAmmoEditor
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
      extras.successMessage = "Weapon Ammo preset loaded!";
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
        weaponAmmoService.applyPreset(extras.actionData);
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
    const preset = weaponAmmoService.createPreset();
    const json = JSON.stringify(preset, null, "\t");
    const contentType = "text/json;charset=utf-8";
    const filename = "cdree_weapon_ammo_editor_preset.json";
    componentService.downloadFile(json, filename, contentType);
  }

  getAmmo()
  {
    const ammo = weaponAmmoService.getAmmo(this.ammoKey);
    return ammo ? ammo : "";
  }

  setAmmoKey = (ammoKey) =>
  {
    this.ammoKey = ammoKey;
    this.setViewData(this.getViewData());
  }

  setAmmo = (ammo) =>
  {
    weaponAmmoService.setAmmo(this.ammoKey, ammo);
    this.setViewData(this.getViewData());
  }

  setAmmoToDefault = () =>
  {
    weaponAmmoService.setAmmoToDefault(this.ammoKey);
    this.setViewData(this.getViewData());
  }

  addChanges = () =>
  {
    const extras = {};
    extras.successMessage = "Data is added to the modification queue!";
    weaponAmmoService.addToModificationQueue();
    this.onActionResult(extras);
    componentService.callMethod("windowList", "updateActiveWindowList");
  }

  clearData = () =>
  {
    const extras = {};
    extras.successMessage = "All data is cleared!";
    weaponAmmoService.clearData();
    this.onActionResult(extras);
    this.setViewData(this.getViewData());
  }

  createAmmoList = () =>
  {
    return weaponAmmoService.getAmmoList();
  }

  getViewData = () =>
  {
    const showAmmoField = weaponAmmoService.hasAmmoKey(this.ammoKey);
    const {componentData, ammoKey} = this;
    const ammo = this.getAmmo();
    return {componentData, showAmmoField, ammoKey, ammo};
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
    this.ammoKey = "";
    this.updateViewData();
  }
}

export { WeaponAmmoEditor };
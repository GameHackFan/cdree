import { romService } from "./ROMService";
import { weaponAmmoMap } from "../data/default/WeaponAmmoData";
import { modificationService } from "./ModificationService";


class WeaponAmmoService
{
  createPreset = () =>
  {
    const keys = Object.keys(dataMap);
    const p = {type: "ammo", data: {}};
    keys.forEach((ck) => {p.data[ck] = dataMap[ck];});
    return p;
  }

  applyPreset = (presetFile) =>
  {
    const json = JSON.parse(presetFile);

    if(json && json.data && json.type === "ammo")
    {
      const keys = Object.keys(json.data);
      keys.forEach((ck) => {dataMap[ck] = json.data[ck];});
    }
  }

  setAmmoToDefault = (ammoKey) =>
  {
    const wad = weaponAmmoMap[ammoKey];

    if(wad)
      dataMap[ammoKey] = wad.defaultValue;
  }

  setAmmo = (ammoKey, ammo) =>
  {
    if(this.hasAmmoKey(ammoKey))
      dataMap[ammoKey] = ammo;
  }

  getAmmo = (ammoKey) =>
  {
    if(!(ammoKey in dataMap))
    {
      const wad = weaponAmmoMap[ammoKey];
      const v = parseInt(romService.getByte(wad?.filename, wad?.byteIndex));
      return !isNaN(v) ? v : wad?.defaultValue;
    }
    
    return dataMap[ammoKey];
  }

  applyData = () =>
  {
    Object.keys(dataMap).forEach((ck) =>
    {
      const b = parseInt(dataMap[ck]);
      const wad = weaponAmmoMap[ck];

      if(wad && !isNaN(b) && b > -1 && b < 256)
        romService.setByte(wad.filename, wad.byteIndex, b);
    });
  }

  clearData = () =>
  {
    dataMap = {};
  }

  hasAmmoKey = (ammoKey) =>
  {
    return (ammoKey in weaponAmmoMap);
  }

  getAmmoList = () =>
  {
    const keys = Object.keys(weaponAmmoMap);
    return keys.map((key) => weaponAmmoMap[key]);
  }

  addToModificationQueue = () =>
  {
    modificationService.add(103, "ammo", this.applyData);
  }

  constructor()
  {
    dataMap = {};
  }
}


let dataMap;

export const weaponAmmoService = new WeaponAmmoService();
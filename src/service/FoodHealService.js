import { romService } from "./ROMService";
import { foodHealMap } from "../data/default/FoodHealMap";
import { modificationService } from "./ModificationService";


class FoodHealService
{
  createPreset = () =>
  {
    const keys = Object.keys(dataMap);
    const p = {type: "food", data: {}};
    keys.forEach((ck) => {p.data[ck] = dataMap[ck];});
    return p;
  }

  applyPreset = (presetFile) =>
  {
    const json = JSON.parse(presetFile);

    if(json && json.data && json.type === "food")
    {
      const keys = Object.keys(json.data);
      keys.forEach((ck) => {dataMap[ck] = json.data[ck];});
    }
  }

  setHealToDefault = (foodKey) =>
  {
    const fhd = foodHealMap[foodKey];

    if(fhd)
      dataMap[foodKey] = fhd.defaultValue;
  }

  setHeal = (foodKey, heal) =>
  {
    if(this.hasFoodKey(foodKey))
      dataMap[foodKey] = heal;
  }

  getHeal = (foodKey) =>
  {
    if(!(foodKey in dataMap))
    {
      const fhd = foodHealMap[foodKey];
      const v = parseInt(romService.getByte(fhd?.filename, fhd?.byteIndex));
      return !isNaN(v) ? v : fhd?.defaultValue;
    }
    
    return dataMap[foodKey];
  }

  applyData = () =>
  {
    Object.keys(dataMap).forEach((ck) =>
    {
      const h = parseInt(dataMap[ck]);
      const fhd = foodHealMap[ck];

      if(fhd && !isNaN(h) && h > -1 && h < 65536)
      {
        const bytes = romService.convertNumberToROMBytes(h, 2);
        romService.setBytes(fhd.filename, fhd.byteIndex, bytes, "hex");
      }
    });
  }

  clearData = () =>
  {
    dataMap = {};
  }

  hasFoodKey = (foodKey) =>
  {
    return (foodKey in foodHealMap);
  }

  getFoodList = () =>
  {
    const keys = Object.keys(foodHealMap);
    return keys.map((key) => foodHealMap[key]);
  }

  addToModificationQueue = () =>
  {
    modificationService.add(102, "food", this.applyData);
  }

  constructor()
  {
    dataMap = {};
  }
}


let dataMap;

export const foodHealService = new FoodHealService();
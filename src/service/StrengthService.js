import { romService } from "./ROMService";
import { strengthMap } from "../data/default/StrengthMap";
import { modificationService } from "./ModificationService";


class StrengthService
{
  createPreset = () =>
  {
    const keys = Object.keys(dataMap);
    const p = {type: "strength", data: {}};
    keys.forEach((ck) => {p.data[ck] = dataMap[ck];});
    return p;
  }

  applyPreset = (presetFile) =>
  {
    const json = JSON.parse(presetFile);

    if(json && json.data && json.type === "strength")
    {
      const keys = Object.keys(json.data);
      keys.forEach((ck) => {dataMap[ck] = json.data[ck];});
    }
  }

  setStrengthToDefault = (characterKey) =>
  {
    const sd = strengthMap[characterKey];

    if(sd)
      dataMap[characterKey] = sd.defaultValue;
  }

  setStrength = (characterKey, strength) =>
  {
    if(this.hasCharacterKey(characterKey))
      dataMap[characterKey] = strength;
  }

  getStrength = (characterKey) =>
  {
    if(!(characterKey in dataMap))
    {
      const sd = strengthMap[characterKey];
      const v = romService.getBytes(sd?.filename, sd?.byteIndex, sd?.valueAmount);
      return v ? v.join(" ") : sd?.defaultValue;
    }
    
    return dataMap[characterKey];
  }

  applyData = () =>
  {
    Object.keys(dataMap).forEach((ck) =>
    {
      const sd = strengthMap[ck];
      let dl = dataMap[ck].replace(/[\r\n]+/gm, " ").replace(/\s+/g, " ");
      dl = dl.split(" ");
      dl = dl && dl.length > 0 ? dl : [sd.defaultSingleValue];
      dl = dl.length < 128 ? dl.concat(Array(128).fill(dl[dl.length - 1])) : dl;
      dl = dl.splice(0, 128);
      dl = dl.map((i) => {
        let v = parseInt(i);
        v = isNaN(v) ? sd?.defaultSingleValue : v
        return v > -1 && v < 256 ? v : sd?.defaultSingleValue;
      });
      const valueList = romService.convertDecimalArrayToROMBytes(dl);

      if(sd && valueList.length == 128)
        romService.setBytes(sd.filename, sd.byteIndex, valueList);
    });
  }

  clearData = () =>
  {
    dataMap = {};
  }

  hasCharacterKey = (characterKey) =>
  {
    return (characterKey in strengthMap);
  }

  getCharacterStrengthList = () =>
  {
    const keys = Object.keys(strengthMap);
    return keys.map((key) => strengthMap[key]);
  }

  addToModificationQueue = () =>
  {
    modificationService.add(101, "strength", this.applyData);
  }

  constructor()
  {
    dataMap = {};
  }
}


let dataMap;

export const strengthService = new StrengthService();
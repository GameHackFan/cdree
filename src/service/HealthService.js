import { romService } from "./ROMService";
import { healthMap } from "../data/default/HealthMap";
import { modificationService } from "./ModificationService";


class HealthService
{
  createPreset = () =>
  {
    const keys = Object.keys(dataMap);
    const p = {type: "health", data: {}};
    keys.forEach((ck) => {p.data[ck] = dataMap[ck];});
    return p;
  }

  applyPreset = (presetFile) =>
  {
    const json = JSON.parse(presetFile);

    if(json && json.data && json.type === "health")
    {
      const keys = Object.keys(json.data);
      keys.forEach((ck) => {dataMap[ck] = json.data[ck];});
    }
  }

  setHealthToDefault = (characterKey) =>
  {
    const hd = healthMap[characterKey];

    if(hd)
      dataMap[characterKey] = hd.defaultValue;
  }

  setHealth = (characterKey, health) =>
  {
    if(this.hasCharacterKey(characterKey))
      dataMap[characterKey] = health;
  }

  getHealth = (characterKey) =>
  {
    if(!(characterKey in dataMap))
    {
      const hd = healthMap[characterKey];
      const v = parseInt(romService.getByte(hd?.filename, hd?.byteIndexes[0]));
      return !isNaN(v) ? v : hd?.defaultValue;
    }
    
    return dataMap[characterKey];
  }

  applyData = () =>
  {
    Object.keys(dataMap).forEach((ck) =>
    {
      const h = parseInt(dataMap[ck]);
      const hd = healthMap[ck];

      if(hd && !isNaN(h) && h > -1 && h < 65536)
      {
        const bytes = romService.convertNumberToROMBytes(h, 2);
        hd.byteIndexes.forEach((byteIndex) =>
        {
          romService.setBytes(hd.filename, byteIndex, bytes, "hex");
        });
      }
    });
  }

  clearData = () =>
  {
    dataMap = {};
  }

  hasCharacterKey = (characterKey) =>
  {
    return (characterKey in healthMap);
  }

  getCharacterHealthList = () =>
  {
    const keys = Object.keys(healthMap);
    return keys.map((key) => healthMap[key]);
  }

  addToModificationQueue = () =>
  {
    modificationService.add(100, "health", this.applyData);
  }

  constructor()
  {
    dataMap = {};
  }
}


let dataMap;

export const healthService = new HealthService();
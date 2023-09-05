import { editorManagerData } from "../data/default/EditorManagerData";
import { romService } from "./ROMService";
import { patchMap } from "../data/patch/PatchMap";
import { modificationService } from "./ModificationService";
import { patchService } from "./PatchService";


class EditorManagerService
{
  convertAndSetRom = (rom) =>
  {
    this.convertROM(rom, editorManagerData.hbMameFBNeoMap);
    romService.setROM(rom);
  }

  generateROM = (converterKey, hackAuthor) =>
  {
    if(romService.isROMReady())
    {
      this.addDefaultTextIfNoText();
      modificationService.apply();
      romService.addHackAuthor(hackAuthor);
      let rom = romService.getGeneratedROM();
      let cm = editorManagerData[converterKey];
      cm = cm ? cm : "hbMameFBNeoMap";

      if(cm)
        this.convertROM(rom, cm);

      return rom;
    }

    throw new Error("There isn't a ROM ready!");
  }

  cloneROM = () =>
  {
    romService.cloneROM();
  }

  addDefaultTextIfNoText = () =>
  {
    if(!(patchService.get(19)?.priority === 19))
      patchService.addToModificationQueue(patchMap.defaultTextPatch.key)
  }

  convertROM = (rom, converterMap) =>
  {
    Object.keys(converterMap).forEach((k) =>
    {
      if(rom[k])
      {
        rom[converterMap[k]] = rom[k];
        delete rom[k];
      }
    });
  }

  getROMTypeList = () =>
  {
    const rtm = editorManagerData.romTypeMap;
    return Object.keys(rtm).map((key) => {return rtm[key]});
  }
}


export const editorManagerService = new EditorManagerService();
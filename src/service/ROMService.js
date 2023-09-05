class ROMService
{
  applyBuildPatch = (patch) =>
  {
    const fileBytes = generatedROM[patch.filename];

    if(fileBytes)
    {
      let buildBytes = [];
      let copyStart = patch.buildStart;
      let copyEnd;

      Object.keys(patch.data).forEach((dataKey) => 
      {
        const replaceIndexes = dataKey.split("_");
        copyEnd = parseInt(replaceIndexes[0]);
        buildBytes = buildBytes.concat(fileBytes.slice(copyStart, copyEnd));
        copyStart = parseInt(replaceIndexes[1]) + 1;
        const enemyMap = patch.data[dataKey];

        Object.keys(enemyMap).forEach((enemyId) =>
        {
          const bytes = enemyMap[enemyId]
          const fbs = this.getBytesAsDecimal(bytes, patch.byteFormat);
          buildBytes = buildBytes.concat(fbs);
        });
      });

      buildBytes = buildBytes.concat(fileBytes.slice(copyStart, patch.buildEnd));
      const desiredLength = patch.buildEnd - patch.buildStart;

      while(buildBytes.length < desiredLength)
        buildBytes.push(0);

      if(buildBytes.length > desiredLength)
        buildBytes = buildBytes.slice(0, desiredLength);

      const owPatch = {};
      owPatch.type = "overwrite";
      owPatch.filename = "cde_re.10f";
      owPatch.data = {};
      owPatch.data[patch.buildStart.toString()] = buildBytes;
      this.applyOverwritePatch(owPatch);
    }
  }

  applyOverwritePatch = (patch) =>
  {
    const fileBytes = generatedROM[patch.filename];

    if(fileBytes)
    {
      const isHex = patch.byteFormat === "hex";

      Object.keys(patch.data).forEach((dataKey) => 
      {
        const index = parseInt(dataKey);

        if(!isNaN(index))
        {
          const nbs = patch.data[dataKey];

          for(let i = 0; i < nbs.length; i++)
            fileBytes[index + i] = isHex ? parseInt(nbs[i], 16) : nbs[i];
        }
      });
    }
  }

  applyPatch = (patch) =>
  {
    if(patch.type === "build")
      this.applyBuildPatch(patch);
    else if(patch.type === "overwrite")
      this.applyOverwritePatch(patch);
  }

  applyPatches = (patches) =>
  {
    Object.keys(patches).forEach((field) =>
    {
      this.applyPatch(patches[field]);
    });
  }

  addHackAuthor = (hackAuthor) =>
  {
    const checkBytes = this.getAuthorByteIndex();
    const filename = "cde_re.10f";
    const checkIndex = this.indexOfBytes(filename, checkBytes, "hex", 1577344);

    if(checkIndex > -1)
    {
      const byteIndex = checkIndex + checkBytes.length;
      let ha = hackAuthor ? hackAuthor.trim() : null;
      ha = ha ? ha : "Unknown author";
      ha = "************ " + ha + " ************";
      const remove = (ha.length - 20) / 2;
      ha = ha.substring(remove, ha.length - remove);
      ha = ha.length > 20 ? ha.substring(0, 20) : ha;
      const hexBytes = romService.convertStringToROMBytes(ha);
      this.setBytes(filename, byteIndex, hexBytes, "hex");
    }
  }

  convertHexArrayToByteArray = (hexArray) =>
  {
    const byteArray = [];

    for(let i = 0; i < hexArray.length; i++)
      byteArray.push(parseInt(hexArray[i], 16));

    return byteArray;
  }

  convertNumberToROMBytes = (number, byteAmount) =>
  {
    const bytes = [];
    let hex = (number >>> 0).toString(16);

    if(number > -1)
    {
      hex = "0".repeat((2 * byteAmount) - hex.length) + hex;
      
      for(let i = 0; i < byteAmount; i++)
        bytes[i] = hex.slice(i * 2, (i + 1) * 2);
      
      bytes.reverse();
    }
    else
    {
      const startIndex = hex.length - (byteAmount * 2);
      const hexChars = hex.substring(startIndex, hex.length);

      for(let i = 0; i < byteAmount; i++)
      {
        const index = i * 2;
        bytes[i] = hexChars[index] + hexChars[index + 1];
      }
    }

    return bytes;
  }

  convertStringToROMBytes = (text) =>
  {
    const bytes = [];

    for(let i = 0; i < text.length - 1; i += 2)
    {
      bytes.push(text.charCodeAt(i + 1).toString(16));
      bytes.push(text.charCodeAt(i).toString(16));
    }

    return bytes;
  }

  convertDecimalArrayToROMBytes = (byteArray) =>
  {
    const bytes = [];

    for(let i = 0; i < byteArray.length - 1; i += 2)
    {
      bytes.push(byteArray[i + 1] ? byteArray[i + 1] : 0);
      bytes.push(byteArray[i] ? byteArray[i] : 0);
    }

    return bytes;
  }

  cloneROM = () =>
  {
    generatedROM = {};
    Object.keys(rom).forEach((e) => {generatedROM[e] = rom[e].slice();});
    this.checkROM();

    if(!romReady)
    {
      generatedROM = null;
      const m = "The ROM loaded is invalid! Load the Original ROM of the Game!";
      throw new Error(m);
    }
  }

  getBytesAsDecimal = (bytes, byteFormat) =>
  {
    return byteFormat === "hex" ?
        this.convertHexArrayToByteArray(bytes) : bytes;
  }

  setByte = (filename, byteIndex, value) =>
  {
    const fileBytes = generatedROM[filename];

    if(fileBytes && !isNaN(value) && value > -1 && value < 256)
      fileBytes[byteIndex] = value;
  }

  setHexByte = (filename, byteIndex, value) =>
  {
    const fix = parseInt(value, 16);
    this.setByte(filename, byteIndex, fix);
  }

  setBytes = (filename, byteIndex, bytes, byteFormat) =>
  {
    if(byteIndex > -1)
    {
      const fbs = this.getBytesAsDecimal(bytes, byteFormat);
      const fileBytes = generatedROM[filename];
      fbs.forEach((byte, index) => fileBytes[byteIndex + index] = byte);
    }
  }

  getByte = (filename, byteIndex) =>
  {
    return this.getFileBytes(filename)[byteIndex];
  }

  getBytes = (filename, byteIndex, amount) =>
  {
    return this.getFileBytes(filename).slice(byteIndex, byteIndex + amount);
  }

  indexOfBytes = (filename, bytes, byteFormat, startIndex) =>
  {
    const fileBytes = generatedROM[filename];

    if(fileBytes)
    {
      const fbs = this.getBytesAsDecimal(bytes, byteFormat);
      const checkBytes = (element, index, romBytes) =>
      {
        for(let i = 0; i < fbs.length; i++)
        {
          if(fbs[i] !== romBytes[index + i])
            return false;
        }
        
        return true;
      };
      return fileBytes.findIndex(checkBytes, startIndex);
    }

    return -1;
  }

  checkROM = () =>
  {
    const filename = "cde_re.10f";
    const mainFile = generatedROM[filename];

    if(mainFile && mainFile.length === 2097152)
    {
      const bytesToCheck = this.getBytesToCheck();
      const index = this.indexOfBytes(filename, bytesToCheck, "hex", 1577260);
      romReady = index > -1;
      return romReady;
    }

    romReady = false;
    return romReady;
  }

  getFileBytes = (filename) =>
  {
    const gr = generatedROM ? generatedROM : {};
    const fileBytes = gr[filename];
    return fileBytes ? fileBytes : [];
  }

  setROM = (newROM) =>
  {
    rom = newROM;
  }

  getGeneratedROM = () =>
  {
    return generatedROM;
  }

  isROMReady = () =>
  {
    return romReady;
  }

  getBytesToCheck = () =>
  {
    return [
      "74", "68", "70", "74", "3A", "73", "2F", "2F",
      "69", "67", "68", "74", "62", "75", "63", "2E",
      "6D", "6F", "47", "2F", "6D", "61", "48", "65",
      "63", "61", "46", "6B", "6E", "61", "64", "2F",
      "6E", "69", "72", "6F", "00", "65"
    ];
  }

  getAuthorByteIndex = () =>
  {
    return [
      "48", "20", "63", "61", "20", "6B", "75", "41",
      "68", "74", "72", "6F", "20", "3A"
    ];
  }

  // NOTE: This was used to find the pallete of sprites
  createSpritePalletePreset = (spriteList, palleteList) =>
  {
    const bytes = romService.getFileBytes("cde_re.10f");
    const start = 917504;         // E0000
    const max = start + 131072;   // 20000
    const preset = {};
    const spriteSet = new Set(spriteList.map((k) => parseInt(k, 16)));
    const palleteSet = new Set(palleteList.map((k) => parseInt(k, 16)));

    for(let i = 917504; i < max; i += 2)
    {
      const sprite = bytes[i] | (bytes[i + 1] << 8);

      if(spriteSet.has(sprite))
      {
        let pallete = (bytes[i + 2] | (bytes[i + 3] << 8));

        if(palleteSet.has(pallete & 31))
        {
          const romBytes = romService.convertNumberToROMBytes(pallete, 2);
          preset[`${i + 2}_${(i + 2).toString(16)}`] = romBytes.map((k) => k.toUpperCase());
        }

        pallete = (bytes[i - 3] | (bytes[i - 4] << 8));

        if(palleteSet.has(pallete & 31) && bytes[i - 3] === 128)
        {
          const romBytes = romService.convertNumberToROMBytes(pallete, 2);
          preset[`${i - 4}_${(i - 4).toString(16)}`] = romBytes.map((k) => k.toUpperCase());
        }
      }
    }

    return preset;
  }

  // NOTE: This was used to find the pallete of boomerang sprites
  createBoomerangPalletePreset = () =>
  {
    const spriteList = [
      "3F69", "3F6A", "3F6B", "3F6C", "3F6D", "3F6E", "3F6F",

      "3F77", "3F78", "3F79", "3F7A", "3F7B", "3F7C", "3F7D",
      "3F7E",

      "3F80", "3F81", "3F82", "3F83", "3F84", "3F85", "3F86",
      "3F87", "3F88", "3F89", "3F8A", "3F8B", "3F8C", "3F8D",
      "3F8E",

      "3F90", "3F91", "3F92", "3F93", "3F94", "3F95", "3F96",
      "3F97", "3F98", "3F99", "3F9A", "3F9B", "3F9C", "3F9D",
      "3F9E",

      "3FA0", "3FA1", "3FA2", "3FA3", "3FA4", "3FA5", "3FA6",
      "3FA7", "3FA8", "3FA9", "3FAA", "3FAB", "3FAD", "3FAE",
      "3FAF",
      
      "3FB0", "3FB1", "3FB2", "3FB3", "3FB4", "3FB5", "3FB6",
      "3FB7", "3FBA", "3FBB", "3FBE", "3FBF",

      "3FC3", "3FC4", "3FC5", "3FC6", "3FC7", "3FC8",

      "3FD0", "3FD1", "3FD2", "3FD3", "3FD4", "3FD5",

      "3FE0", "3FE1", "3FE2", "3FE3", "3FE4", "3FE5",

      "3FF0", "3FF1", "3FF2", "3FF3", "3FF4", "3FF5"
    ];
    const palleteList = ["00", "16", "1E", "1F"];
    return this.createSpritePalletePreset(spriteList, palleteList);
  }

  constructor()
  {
    rom = null;
    generatedROM = null;
    romReady = false;
  }
}


let rom, generatedROM, romReady;

export const romService = new ROMService();
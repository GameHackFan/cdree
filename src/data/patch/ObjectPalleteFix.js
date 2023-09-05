export const objectPalleteFix = 
{
  priority: 9,
  type: "overwrite",
  filename: "cde_re.10f",
  byteFormat: "hex",
  data: 
  {
    // Pallete transfer fix 1 caller (Bludge's Tongue)
    "234222": ["B9", "4E", "18", "00", "00", "2B"],

    // Pallete transfer fix 1 (Enemy).
    "1583872":
    [
      "BC", "12", "01", "00", "68", "13", "DE", "00",
      "DE", "00", "68", "13", "23", "00", "23", "00",
      "75", "4E"
    ],

    // Lash Terhune pallete transfer fix
    "219396":
    [
      "02", "6C", "49", "C1", "BC", "10", "01", "00",
      "7C", "31", "0C", "00", "20", "00", "68", "42",
      "26", "00", "6E", "11", "DE", "00", "DE", "00"
    ],

    // Pallete transfer fix 2 caller (Bludge)
    "234160": ["B9", "4E", "18", "00", "30", "2B"],

    // Pallete transfer fix 2 caller (Hogg)
    "326914": ["B9", "4E", "18", "00", "30", "2B"],

    // Pallete transfer fix 2 caller (Dwarves' Grenade/Dynamite)
    "372736": ["B9", "4E", "18", "00", "30", "2B"],    

    // Pallete transfer fix 2 (Enemy).
    "1583920":
    [
      "BC", "10", "01", "00", "6E", "11", "DE", "00",
      "DE", "00", "75", "4E"
    ],



    // Pallete transfer fix 3 caller (Kniver)
    "262760": ["B9", "4E", "18", "00", "50", "2B"],

    // Pallete transfer fix 3 caller (Morgan)
    "333516": ["B9", "4E", "18", "00", "50", "2B"],

    // Pallete transfer fix 3 (Enemy).
    "1583952":
    [
      "BC", "12", "01", "00", "6E", "13", "DE", "00",
      "DE", "00", "75", "4E"
    ],



    // Remove custom pallete caller (Biker From Bike)
    "210954": ["B9", "4E", "18", "00", "70", "2B"],

    // Remove custom pallete caller (Blade / Razor Knife)
    "262822": ["B9", "4E", "18", "00", "70", "2B"],

    // Remove custom pallete caller (Slice / Slisaur Boomerangs)
    "282710": ["B9", "4E", "18", "00", "70", "2B"],

    // Remove custom pallete caller (R Hopper Boss)
    "318670": ["B9", "4E", "18", "00", "70", "2B"],

    // Remove custom pallete caller (Morgan's Uzi) 
    "333582": ["B9", "4E", "18", "00", "70", "2B"],

    // Remove custom pallete caller (Blade Thrower Knife Thrown) 
    "372038": ["B9", "4E", "18", "00", "70", "2B"],

    // Remove custom pallete caller (Tyrog 1st) 
    "388540": ["B9", "4E", "18", "00", "70", "2B"],

    // Remove custom pallete caller (Thug Thrower Dynamite Thrown) 
    "389206": ["B9", "4E", "18", "00", "70", "2B"],

    // Remove custom pallete caller (Fessenden 2nd Transformation)
    "432370": ["B9", "4E", "18", "00", "70", "2B"],

    // Remove custom pallete caller (Slisaur Boss 1)
    "530712": ["B9", "4E", "18", "00", "70", "2B"],

    // Remove custom pallete caller (Slisaur Boss 2)
    "530754": ["B9", "4E", "18", "00", "70", "2B"],

    // Remove custom pallete caller (Slisaur Boss 3)
    "530812": ["B9", "4E", "18", "00", "70", "2B"],

    // Remove custom pallete (Enemy).
    "1583984":
    [
      "BC", "10", "01", "00", "68", "42", "DE", "00",
      "28", "42", "23", "00", "75", "4E"
    ],



    // Remove custom pallete caller (Slisaur Boss)
    "372794": ["B9", "4E", "18", "00", "E0", "2B"],

    // Remove custom pallete (Enemy).
    "1584096":
    [
      "BC", "10", "01", "00", "69", "42", "DE", "00",
      "29", "42", "23", "00", "75", "4E"
    ],



    // Remove custom pallete caller (Blade / Razor Knife)
    "262852": ["B9", "4E", "18", "00", "C0", "2B"],

    // Remove custom pallete (Enemy).
    "1584064":
    [
      "BC", "14", "01", "00", "6A", "42", "DE", "00",
      "2A", "42", "23", "00", "75", "4E"
    ],



    // Random Butcher's Machete custom pallete fix
    "1580888": ["97", "97", "97", "97"],

    // Random Dinosaur Egg custom pallete fix
    "1580940": ["96", "95", "96", "95"],



    // Sets Tyrog 2 Spikes pallete ID to 09
    "386394" : ["89"],

    // Tyrog 2 custom pallete ID fix.
    "415162": ["6E", "1D", "DE", "00", "23", "00"],

    // Handle random custom pallete ID caller (Tyrog 2)
    "415006": ["B9", "4E", "18", "00", "00", "2D"],

    // Handle random custom pallete ID (Tyrog 2)
    "1584384":
    [
      "2E", "4A", "DE", "00", "22", "66", "2D", "12",
      "D9", "04", "49", "E5", "2D", "D2", "86", "07",
      "49", "E5", "00", "61", "9C", "ED", "7C", "C0",
      "03", "00", "01", "D0", "3B", "12", "22", "00",
      "41", "1D", "DE", "00", "41", "1D", "23", "00",
      "75", "4E", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Area based pallete ID list
      "88", "89", "9D", "89", "88", "89", "88", "89",
      "88", "89", "92", "91", "88", "89", "92", "91",

      "88", "89", "9E", "9A", "88", "89", "9F", "9E",
      "88", "89", "88", "89", "88", "89", "88", "89",

      "88", "89", "9D", "89", "88", "89", "9D", "89",
      "88", "89", "9D", "89", "88", "89", "9D", "89",

      "88", "89", "8C", "89", "88", "89", "88", "89", 
      "88", "89", "88", "89", "88", "89", "88", "89", 

      "88", "89", "9F", "9E", "88", "89", "88", "89",
      "88", "89", "88", "89", "88", "89", "88", "89", 

      "88", "89", "88", "89", "88", "89", "88", "89",
      "88", "89", "88", "89", "88", "89", "88", "89",

      "88", "89", "9F", "9D", "88", "89", "88", "89",
      "88", "89", "88", "89", "88", "89", "88", "89",

      "9D", "89", "9F", "9E", "88", "89", "88", "89",
      "88", "89", "9E", "9D", "88", "89", "9E", "9D"
    ],

    // Tyrog 2 custom pallete ID fix caller (Damaged)
    "415906": ["B9", "4E", "18", "00", "90", "2B"],

    // Tyrog 2 custom pallete ID fix (Damaged)
    "1584016":
    [
      "2E", "10", "DE", "00", "06", "67", "40", "1D",
      "23", "00", "75", "4E", "7C", "1D", "9F", "00",
      "23", "00", "75", "4E"
    ],



    // Handle random custom pallete ID caller (Hogg's Bike)
    "331738": ["B9", "4E", "18", "00", "20", "2C"],

    // Handle random custom pallete ID caller (Biker's Bike)
    "377888": ["B9", "4E", "18", "00", "20", "2C"],

    // Handle random custom pallete ID (Bikes)
    "1584160":
    [
      "B9", "4E", "00", "00", "0E", "12", "2E", "4A",
      "DE", "00", "22", "66", "2D", "12", "D9", "04",
      "49", "E5", "2D", "D2", "86", "07", "49", "E3",
      "00", "61", "76", "EE", "7C", "C0", "01", "00",
      "01", "D0", "3B", "12", "1C", "00", "41", "1D",
      "DE", "00", "41", "1D", "23", "00", "75", "4E",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Area based pallete ID list
      "88", "9D", "88", "88", "92", "91", "92", "91",
      "00", "93", "9F", "00", "88", "88", "88", "88",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "88", "88", "00", "00", "88", "88", "88", "88",
      "00", "8C", "8C", "88", "8C", "88", "8C", "88",
      "88", "88", "88", "88", "9F", "9F", "9F", "9F",
      "00", "00", "88", "88", "8B", "88", "88", "88",
      "9F", "00", "88", "88", "00", "00", "9D", "88"
    ],



    // Remove custom pallete caller (Tyrog Parasite)
    "232870": ["B9", "4E", "18", "00", "00", "2C"],

    // Remove custom pallete caller (Tyrog 2nd and 3rd)
    "385136": ["B9", "4E", "18", "00", "00", "2C"],

    // Remove custom pallete (Enemy).
    "1584128":
    [
      "BC", "10", "01", "00", "6E", "42", "DE", "00",
      "2E", "42", "23", "00", "75", "4E"
    ],



    // Handle random custom pallete ID caller (Fessnden 2nd)
    "399204": ["B9", "4E", "18", "00", "00", "2E"],

    // Handle random custom pallete ID (Fessenden 2)
    "1584640":
    [
      "B9", "4E", "00", "00", "3C", "48", "2E", "08",
      "07", "00", "27", "00", "28", "67", "2E", "4A",
      "DE", "00", "22", "66", "2D", "12", "D9", "04",
      "49", "E5", "2D", "D2", "86", "07", "49", "E5",
      "00", "61", "8E", "EC", "7C", "C0", "03", "00",
      "01", "D0", "3B", "12", "14", "00", "41", "1D",
      "DE", "00", "41", "1D", "23", "00", "75", "4E",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Area based pallete ID list
      "88", "88", "88", "88", "88", "88", "88", "88",
      "91", "91", "91", "91", "91", "91", "91", "91",

      "9E", "9E", "9E", "9E", "9E", "9E", "9E", "9E",
      "88", "88", "88", "88", "88", "88", "88", "88",

      "88", "88", "88", "88", "88", "88", "88", "88",
      "88", "88", "88", "88", "88", "88", "88", "88",

      "88", "88", "88", "88", "88", "88", "88", "88",
      "88", "88", "88", "88", "88", "88", "88", "88",

      "9E", "9E", "9E", "9E", "88", "88", "88", "88",
      "88", "88", "88", "88", "88", "88", "88", "88",

      "88", "88", "88", "88", "88", "88", "88", "88",
      "9F", "9F", "9F", "9F", "9F", "9F", "9F", "9F",

      "9F", "9F", "9F", "9F", "88", "88", "88", "88",
      "88", "88", "88", "88", "88", "88", "88", "88",

      "9E", "9E", "9E", "9E", "88", "88", "88", "88",
      "9E", "9E", "9E", "9E", "9D", "9D", "9D", "9D"
    ],



    // Fessenden 2nd Commet Fireball 1 Pallete Fix 1 (1E to 09 - 801E to 8009)
    "961296": ["09", "80"],

    // Fessenden 2nd Commet Fireball 1 Pallete Fix 2 (1E to 09 - 111E to 1109)
    "961302": ["09", "11"],

    // Fessenden 2nd Commet Fireball 2 Pallete Fix 1 (1E to 09 - 801E to 8009)
    "961308": ["09", "80"],

    // Fessenden 2nd Commet Fireball 2 Pallete Fix 2 (1E to 09 - 101E to 1009)
    "961314": ["09", "10"],

    // Fessenden 2nd Commet Fireball 2 Pallete Fix 3 (1E to 09 - 101E to 1009)
    "961318": ["09", "10"],

    // Fessenden 2nd Commet Fireball 3 Pallete Fix 1 (1E to 09 - 801E to 8009)
    "961324": ["09", "80"],

    // Fessenden 2nd Commet Fireball 3 Pallete Fix 2 (1E to 09 - 111E to 1109)
    "961330": ["09", "11"],



    // Lash's Iron Ball 1 Pallete Fix (17 to 09 - 1117 to 1109)
    "966054": ["09", "11"],

    // Lash's Iron Ball 2 Pallete Fix (17 to 09 - 1117 to 1109)
    "976834": ["09", "11"],

    // Lash's Iron Ball 3 Pallete Fix (17 to 09 - 1117 to 1109)
    "976850": ["09", "11"],

    // Lash's Iron Ball 4 Pallete Fix (17 to 09 - 1117 to 1109)
    "976870": ["09", "11"],

    // Lash's Iron Ball 5 Pallete Fix (17 to 09 - 1117 to 1109)
    "976894": ["09", "11"],

    // Lash's Iron Ball 6 Pallete Fix (17 to 09 - 1117 to 1109)
    "976922": ["09", "11"],

    // Lash's Iron Ball 7 Pallete Fix (17 to 09 - 1117 to 1109)
    "976954": ["09", "11"],

    // Lash's Iron Ball 8 Pallete Fix (17 to 09 - 1117 to 1109)
    "976990": ["09", "11"],

    // Lash's Iron Ball 9 Pallete Fix (17 to 09 - 1117 to 1109)
    "977030": ["09", "11"],

    // Lash's Iron Ball 10 Pallete Fix (17 to 09 - 1117 to 1109)
    "977074": ["09", "11"],

    // Lash's Iron Ball 11 Pallete Fix (17 to 09 - 1117 to 1109)
    "977122": ["09", "11"],



    // Baby dinosaur and egg pallete fix
    "962740": ["16", "80"],

    // Baby dinosaur and egg pallete fix
    "962746": ["16", "12"],

    // Baby dinosaur and egg pallete fix
    "962752": ["16", "80"],

    // Baby dinosaur and egg pallete fix
    "962758": ["16", "10"],

    // Baby dinosaur and egg pallete fix
    "962762": ["16", "00"],

    // Baby dinosaur and egg pallete fix
    "962766": ["16", "00"],

    // Baby dinosaur and egg pallete fix
    "962770": ["16", "01"]
  }
}

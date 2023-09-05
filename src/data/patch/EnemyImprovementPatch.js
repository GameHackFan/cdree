export const enemyImprovementPatch = 
{
  priority: 15,
  type: "overwrite",
  filename: "cde_re.10f",
  byteFormat: "hex",
  data:
  {
    // Calls the code that increases the enemy HP based
    // on Game Difficulty 2
    "201782": ["B9", "4E", "18", "00", "00", "25"],

    // Calls the code that increases the boss HP based
    // on Game Difficulty 2
    "204340": ["B9", "4E", "18", "00", "1C", "25"],

    // Code that increases the enemy HP based on Game
    // Difficulty 2
    "1582336":
    [
      "2E", "08", "07", "00", "27", "00", "32", "66",
      "C1", "D0", "10", "30", "41", "42", "2D", "D2",
      "6C", "76", "41", "D2", "7B", "D0", "3A", "10",
      "00", "32", "75", "4E", "2E", "08", "07", "00",
      "27", "00", "16", "66", "C1", "D0", "10", "30",
      "41", "42", "2D", "12", "6C", "76", "41", "D2",
      "41", "50", "7B", "D0", "1C", "10", "00", "32",
      "75", "4E", "41", "42", "2E", "12", "27", "00",
      "7C", "C2", "0F", "00", "3B", "30", "1A", "10",
      "DE", "60", "00", "00", "00", "00", "00", "00",

      // Difficulty Increase HP List
      "00", "00", "20", "00", "42", "00", "64", "00",
      "00", "00", "42", "00", "84", "00", "C8", "00",
      // "00", "00", "42", "00", "84", "00", "C8", "00",

      // Subboss HP List
      "C8", "00", "C8", "00", "C8", "00", "C8", "00",
      "C8", "00", "C8", "00", "C8", "00", "58", "02"
    ],



    // Code that handles Shivat custom posture and pallete ID
    "296034":
    [
      "2E", "54", "04", "00", "2E", "4A", "27", "00",
      "0C", "67", "7C", "1D", "01", "00", "59", "00",
      "7C", "1D", "02", "00", "05", "00", "B9", "4E",
      "18", "00", "00", "21", "2E", "10", "DE", "00",
      "40", "1D", "23", "00", "40", "1D", "BD", "00",
      "00", "60", "8E", "00", "71", "4E", "71", "4E"
    ],

    // Code that increases Shivat angry timer
    "296836": ["7C", "1D", "7F", "00", "BB", "00"],

    // Handles Better Angry Timer
    "296852":
    [
      "B9", "4E", "18", "00", "90", "21", "6E", "0C",
      "FF", "7F", "AA", "00", "1C", "65"
    ],

    // Code that fixes Shivat custom pallete ID support
    "300068":
    [
      "EE", "41", "DE", "00", "71", "4E", "71", "4E",
      "71", "4E", "71", "4E"
    ],



    // Code that handles R Hopper custom posture and pallete ID
    "318906":
    [
      "B9", "4E", "18", "00", "00", "21", "2E", "4A",
      "27", "00", "1A", "67", "7C", "3D", "06", "00",
      "A8", "00", "7C", "1D", "01", "00", "A4", "00",
      "6E", "1D", "DF", "00", "23", "00", "6E", "1D",
      "DF", "00", "BB", "00", "12", "60", "6E", "1D",
      "DE", "00", "23", "00", "6E", "1D", "DE", "00",
      "BB", "00", "71", "4E", "71", "4E", "71", "4E"      
    ],

    // Handles Better Angry Timer
    "320976":
    [
      "B9", "4E", "18", "00", "90", "21", "6E", "0C",
      "FF", "7F", "AA", "00", "22", "65"
    ],

    // Code that fixes R Hopper custom pallete ID support.
    "324760":
    [
      "EE", "41", "DE", "00", "71", "4E", "71", "4E",
      "71", "4E", "71", "4E", "71", "4E", "71", "4E",
      "71", "4E", "71", "4E", "71", "4E", "71", "4E"
    ],

    // Disables R Hopper always spawning angry at Stage 8.
    "319518":
    [
      "71", "4E", "71", "4E", "71", "4E", "71", "4E",
      "71", "4E"
    ],


    // NOTE: It doesn't work
    // Mack jumping hitbox improvement
    // "343124": ["18", "00"],

    // Handles Mack custom posture and pallete ID caller
    "341264": ["F9", "4E", "18", "00", "C0", "21"],

    // Code that fixes Mack custom pallete ID support.
    "1581504":
    [
      "B9", "4E", "00", "00", "0E", "12", "00", "61",
      "38", "FF", "3C", "30", "DE", "00", "2E", "4A",
      "27", "00", "02", "66", "00", "52", "76", "1D",
      "00", "00", "23", "00", "F9", "4E", "05", "00",
      "16", "35"
    ],

    // Code that fixes Mack custom pallete ID support.
    "342324":
    [
      "EE", "41", "DE", "00", "71", "4E", "71", "4E",
      "71", "4E", "71", "4E", "71", "4E", "71", "4E"
    ],

    // Handles better Mack's elevation caller
    "341880": ["F9", "4E", "18", "00", "00", "31"],

    // Handles better Mack's elevation
    "1585408":
    [
      "B9", "4E", "00", "00", "9C", "18", "6E", "42",
      "0C", "00", "B9", "4E", "01", "00", "2E", "2D",
      "2D", "30", "44", "07", "6E", "90", "08", "00",
      "02", "6A", "40", "44", "7C", "B0", "80", "04",
      "0A", "65", "6E", "42", "6C", "00", "7C", "3D",
      "04", "00", "A0", "00", "75", "4E"
    ],



    // Set enemy health to 32 caller (Zeke)
    "395022": ["B9", "4E", "18", "00", "A0", "25"],

    // Code that handles Zeke custom pallete ID
    "395070":
    [
      "B9", "4E", "18", "00", "00", "21", "6E", "1D",
      "DF", "00", "23", "00", "71", "4E", "71", "4E"     
    ],

    // Code that fixes Zeke custom pallete ID support.
    "397676":
    [
      "6E", "1D", "DE", "00", "23", "00", "71", "4E", 
      "71", "4E", "71", "4E", "71", "4E", "71", "4E",
      "71", "4E", "71", "4E", "71", "4E"
    ],



    // Sets Meek and Angry Palletes (Dinosaurs)
    "1581312":
    [ 
      "2E", "4A", "DE", "00", "0E", "67", "6E", "1D",
      "DE", "00", "DF", "00", "7C", "1D", "88", "00",
      "DE", "00", "20", "60", "00", "61", "1A", "F9",
      "40", "42", "2D", "10", "D9", "04", "2D", "12",
      "86", "07", "48", "E7", "01", "D2", "01", "D0",
      "3B", "32", "16", "00", "41", "3D", "DE", "00",
      "00", "61", "2E", "F9", "75", "4E", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Dinosaur Area Based Pallete ID List
      "9D", "88", "89", "88", "92", "91", "92", "91",
      "9F", "9E", "9F", "9E", "89", "88", "89", "88",
      "89", "9D", "89", "9D", "89", "9D", "89", "9D",
      "89", "9D", "89", "88", "89", "88", "89", "88",
      "9F", "9E", "89", "88", "89", "88", "89", "88",
      "89", "88", "89", "88", "9E", "9F", "9E", "9F",
      "9D", "9F", "89", "88", "89", "88", "89", "88",
      "9D", "9E", "89", "88", "9D", "9E", "9E", "9D"
    ],

    // Handles Better Dinosaur Becoming Meek
    "1581456":
    [ 
      "2D", "32", "44", "07", "6E", "92", "08", "00",
      "02", "6A", "41", "44", "7C", "B2", "80", "04",
      "06", "62", "6E", "52", "AA", "00", "75", "4E",
      "7C", "3D", "FF", "7F", "AA", "00", "75", "4E"
    ],



    // Repositions the bike when it goes out of screen caller
    "378034": ["F9", "4E", "18", "00", "00", "23"],

    // Repositions the bike when it goes out of screen
    "1581824":
    [ 
      "2E", "30", "08", "00", "6D", "90", "44", "07",
      "40", "06", "C0", "00", "7C", "B0", "00", "03",
      "2A", "65", "40", "04", "C0", "00", "04", "6B",
      "40", "61", "02", "60", "24", "61", "6D", "D0",
      "44", "07", "40", "04", "78", "00", "40", "3D",
      "08", "00", "4A", "61", "7C", "3D", "02", "00",
      "04", "00", "6E", "42", "0C", "00", "B9", "4E",
      "01", "00", "2E", "2D", "F9", "4E", "05", "00",
      "B8", "C4", "00", "61", "6C", "F7", "7C", "C0",
      "03", "00", "00", "58", "40", "1D", "14", "00",
      "7C", "1D", "01", "00", "24", "00", "40", "42",
      "75", "4E", "00", "61", "54", "F7", "7C", "C0",
      "03", "00", "00", "58", "00", "06", "F5", "00",
      "40", "1D", "14", "00", "2E", "42", "24", "00",
      "3C", "30", "70", "02", "75", "4E", "40", "42",
      "2D", "10", "D9", "04", "48", "E5", "2D", "D0",
      "86", "07", "48", "E3", "3B", "32", "1A", "00",
      "00", "61", "26", "F7", "7C", "C0", "07", "00",
      "48", "E7", "41", "D0", "40", "3D", "10", "00",
      "75", "4E", "00", "00", "00", "00", "00", "00",

      // Position Y List
      "20", "01", "10", "00", "10", "01", "10", "01",
      "10", "00", "10", "00", "20", "00", "20", "00",
      "10", "00", "10", "00", "10", "00", "10", "00",
      "10", "00", "10", "00", "10", "00", "10", "00",
      "10", "02", "10", "01", "10", "01", "10", "01",
      "10", "00", "F2", "00", "62", "01", "62", "01",
      "10", "00", "20", "00", "10", "00", "10", "00",
      "10", "00", "00", "03", "10", "01", "10", "01"
    ],



    // Sets Punk grenade thrower health to C
    "372848":
    [
      "7C", "3D", "0C", "00", "6A", "00", "7C", "3D",
      "0C", "00", "6C", "00", "7C", "3D", "0C", "00",
      "6E", "00"
    ],

    // Sets Punk dynamite thrower health to C
    "372890":
    [
      "7C", "3D", "0C", "00", "6A", "00", "7C", "3D",
      "0C", "00", "6C", "00", "7C", "3D", "0C", "00",
      "6E", "00"
    ],

    // Set enemy health to C caller (Blade throwing knife)
    "371438": ["B9", "4E", "18", "00", "80", "25"],



    // Force posture ID caller (Fessenden 2nd, multiple characters)
    "399300": ["B9", "4E", "18", "00", "20", "26"],

    // Force posture ID (Fessenden 2nd, multiple characters)
    "1582624":
    [
      "7C", "31", "50", "01", "20", "00", "6E", "11",
      "27", "00", "27", "00", "75", "4E"
    ],



    // Handle slowdown and end of stage caller (Butcher)
    "369514": ["B9", "4E", "18", "00", "00", "26"],

    // Handle slowdown and end of stage caller (Hogg)
    "328548": ["B9", "4E", "18", "00", "00", "26"],

    // Handle slowdown and end of stage caller (Morgue)
    "350214": ["B9", "4E", "18", "00", "00", "26"],

    // Handle slowdown and end of stage caller (Fessenden 2nd)
    "406674": ["B9", "4E", "18", "00", "00", "26"],

    // Handle Slowdown and End of Stage
    "1582592":
    [
      "2E", "08", "07", "00", "27", "00", "06", "66",
      "B9", "4E", "00", "00", "EE", "AC", "75", "4E"
    ],



    // Handle end of music caller (Butcher)
    "369546": ["B9", "4E", "18", "00", "60", "26"],

    // Handle end of music caller (Hogg)
    "328558": ["B9", "4E", "18", "00", "60", "26"],

    // Handle end of music caller (Morgue)
    "350246": ["B9", "4E", "18", "00", "60", "26"],

    // Handle end of music
    "1582688":
    [
      "2E", "08", "07", "00", "27", "00", "06", "66",
      "B9", "4E", "00", "00", "EA", "A5", "75", "4E"
    ],



    // Handle end of area caller (Bosses)
    "508120": ["F9", "4E", "18", "00", "40", "26"],

    // Handle end of area (Bosses)
    "1582656":
    [
      "2E", "08", "07", "00", "27", "00", "06", "66",
      "F9", "4E", "01", "00", "5E", "D9", "75", "4E"
    ],



    // Save Fessenden 2nd missing body part caller
    "399420": ["B9", "4E", "18", "00", "D0", "28"],

    // Save Fessenden 2nd missing body part caller
    "1583312":
    [
      "7C", "11", "04", "00", "63", "00", "40", "20",
      "43", "31", "DC", "00", "75", "4E"
    ],



    // Handle enemy disappearing when they die caller (Bosses)
    "176012": ["B9", "4E", "18", "00", "80", "26", "71", "4E"],

    // Handle enemy disappearing when they die caller (Hogg)
    "328918": ["B9", "4E", "18", "00", "80", "26", "71", "4E"],

    // Handle enemy disappearing when they die (Bosses)
    "1582720":
    [
      "7C", "2D", "00", "04", "00", "00", "04", "00",
      "2E", "08", "07", "00", "27", "00", "0C", "67",
      "7C", "3D", "0C", "00", "20", "00", "F9", "4E",
      "18", "00", "00", "2A", "75", "4E"
    ],

    // Handle fessenden 2nd parts disappearing
    "1583616":
    [
      "2E", "0C", "22", "00", "03", "00", "2C", "66",
      "00", "61", "26", "F0", "00", "70", "3C", "22",
      "00", "04", "00", "00", "3C", "3C", "0C", "00",
      "EE", "41", "B0", "00", "4E", "22", "1A", "61",
      "3C", "B0", "08", "00", "F8", "65", "00", "06",
      "24", "00", "0E", "61", "29", "5A", "0C", "00",
      "00", "61", "2E", "F0", "F9", "4E", "18", "00",
      "9C", "26", "70", "32", "00", "00", "41", "23",
      "04", "00", "46", "33", "20", "00", "40", "54",
      "3C", "B0", "04", "00", "04", "6E", "29", "5A",
      "0C", "00", "75", "4E"
    ],



    // Handle morgan slowing down the game when he dies caller
    "339334":
    [
      "F9", "4E", "18", "00", "B0", "26", "71", "4E",
      "71", "4E"
    ],

    // Handle morgan slowing down the game when he dies
    "1582768":
    [
      "2E", "08", "07", "00", "27", "00", "10", "66",
      "2E", "32", "6E", "00", "7C", "1B", "03", "00",
      "D6", "04", "F9", "4E", "05", "00", "90", "2D",
      "F9", "4E", "05", "00", "98", "2D"
    ],



    // Handle starting the music caller (Butcher)
    "362002": ["B9", "4E", "18", "00", "E0", "26"],

    // Handle starting the music caller (Hogg)
    "327182": ["B9", "4E", "18", "00", "E0", "26"],

    // Handle starting the music caller (Morgue)
    "333782": ["B9", "4E", "18", "00", "E0", "26"],

    // Handle starting the music caller (Fessenden 2nd)
    "399490": ["B9", "4E", "18", "00", "E0", "26"],

    // Handle starting the music (Bosses)
    "1582816":
    [
      "2E", "08", "07", "00", "27", "00", "06", "66",
      "B9", "4E", "00", "00", "3C", "A6", "75", "4E"
    ],



    // Handle calling the boss helper groups caller (Butcher)
    "361988": ["B9", "4E", "18", "00", "30", "27"],

    // Handle calling the boss helper groups caller (Hogg)
    "327232": ["B9", "4E", "18", "00", "30", "27"],

    // Handle calling the boss helper groups caller (Morgan)
    "333806": ["B9", "4E", "18", "00", "30", "27"],

    // Handle calling the boss helper groups caller (Morgue)
    "343770": ["B9", "4E", "18", "00", "30", "27"],

    // Handle calling the boss helper groups caller (Fessenden 2nd)
    "399690": ["B9", "4E", "18", "00", "30", "27"],

    // Handle calling the boss helper groups (Bosses)
    "1582896":
    [
      "2E", "08", "07", "00", "27", "00", "06", "66",
      "B9", "4E", "07", "00", "DC", "BE", "75", "4E"
    ],



    // Sets custom pallete ID caller (Fessenden 2nd Body Part 1)
    "399294": ["B9", "4E", "18", "00", "00", "27"],

    // Sets custom pallete ID caller (Fessenden 2nd Body Part 2)
    "399352": ["B9", "4E", "18", "00", "00", "27"],

    // Sets custom pallete ID caller (Fessenden 2nd Body Part 3)
    "399404": ["B9", "4E", "18", "00", "00", "27"],

    // Sets custom pallete ID caller (Fessenden 2nd Body Part 4)
    "399458": ["B9", "4E", "18", "00", "00", "27"],

    // Sets custom pallete ID (Fessenden 2nd Body Parts)
    "1582848":
    [
      "BC", "10", "01", "00", "6E", "31", "DE", "00",
      "DE", "00", "6E", "11", "DE", "00", "23", "00",
      "75", "4E"
    ],



    // Fix Morgue immortal transformation caller
    "339646": ["B9", "4E", "18", "00", "50", "27"],

    // Fix Morgue immortal transformation
    "1582928":
    [
      "BC", "1C", "01", "00", "7C", "3D", "A0", "00",
      "20", "00", "75", "4E"
    ],



    // Fix Hogg's bike spawn bug and forces pallete 08 to subboss caller
    "326970": ["B9", "4E", "18", "00", "70", "27"],

    // Fix Hogg's bike spawn bug and forces pallete 08 to subboss.
    "1582960":
    [
      "BC", "12", "01", "00", "7C", "23", "05", "00",
      "76", "10", "40", "00", "69", "42", "DE", "00",
      "75", "4E"
    ],



    // Set Slice / Slisaur shadow custom pallete caller (Subboss)
    "615478": ["F9", "4E", "18", "00", "A0", "27"],

    // Set Slice / Slisaur shadow custom pallete (Subboss)
    "1583008":
    [
      "2E", "12", "7E", "00", "06", "67", "F9", "4E",
      "09", "00", "44", "64", "00", "72", "2E", "30",
      "58", "00", "F9", "4E", "09", "00", "3C", "64"      
    ],

    // Save Slice / Slisaur shadow custom pallete caller (Subboss)
    "615334": ["F9", "4E", "18", "00", "A0", "28"],

    // Save Slice / Slisaur shadow custom pallete (Subboss)
    "1583264":
    [
      "BC", "10", "01", "00", "28", "42", "7E", "00",
      "2E", "08", "07", "00", "27", "00", "06", "67",
      "7C", "11", "84", "00", "7E", "00", "F9", "4E",
      "09", "00", "AC", "63"
    ],



    // Fix Slisaur death bug caller (Subboss)
    "531090": ["F9", "4E", "18", "00", "20", "29", "71", "4E"],

    // Fix Slisaur death bug (Subboss)
    "1583392":
    [
      "6E", "42", "6E", "00", "2E", "08", "07", "00",
      "27", "00", "0A", "67", "6E", "42", "C6", "00", 
      "F9", "4E", "08", "00", "EE", "1A", "6E", "30",
      "C6", "00", "F9", "4E", "08", "00", "9A", "1A"
    ],



    // Fix Butcher's machete pallete caller (Machete Drop)
    "357262": ["B9", "4E", "18", "00", "D0", "27"],

    // Fix Butcher's machete 1 pallete caller (Subboss)
    "361830": ["B9", "4E", "18", "00", "D0", "27"],

    // Fix Butcher's machete 2 pallete caller (Subboss)
    "361900": ["B9", "4E", "18", "00", "D0", "27"],

    // Fix Butcher's machete 1 pallete caller (Machete Grab)
    "366114": ["B9", "4E", "18", "00", "D0", "27"],

    // Fix Butcher's machete 2 pallete caller (Machete Grab)
    "366022": ["B9", "4E", "18", "00", "D0", "27"],

    // Fix Butcher's machete pallete (Subboss)
    "1583056":
    [
      "BC", "10", "01", "00", "6E", "11", "23", "00",
      "23", "00", "6E", "11", "23", "00", "BE", "00",
      "75", "4E"
    ],



    // Ignore spawning extra things caller (Butcher's Machete 1)
    "361820": ["B9", "4E", "18", "00", "F0", "28"],

    // Ignore spawning extra things caller (Butcher's Machete 2)
    "361892": ["B9", "4E", "18", "00", "F0", "28"],

    // Ignore spawning extra things caller (Enemy)
    "1583344":
    [
      "2E", "08", "07", "00", "27", "00", "06", "66",
      "F9", "4E", "00", "00", "3C", "48", "AE", "42",
      "A6", "00", "AE", "42", "B4", "00", "F9", "4E",
      "00", "00", "5A", "48"
    ],



    // Fix Morgue pallete bug caller (Subboss Spawn)
    "343776": ["F9", "4E", "18", "00", "00", "28"],

    // Fix Morgue pallete bug (Subboss Spawn)
    "1583104":
    [
      "7C", "1D", "84", "00", "DF", "00", "2E", "10",
      "DE", "00", "04", "66", "3C", "10", "9D", "00",
      "40", "1D", "23", "00", "F9", "4E", "05", "00",
      "E6", "3E"
    ],

    // Fix Morgue pallete caller (Subboss Transformation)
    "346306": ["F9", "4E", "18", "00", "30", "28"],

    // Fix Morgue pallete (Subboss Transformation)
    "1583152":
    [
      "2E", "4A", "DE", "00", "18", "67", "00", "32",
      "49", "E2", "7C", "C2", "01", "00", "01", "06",
      "DE", "00", "76", "1D", "00", "10", "23", "00",
      "F9", "4E", "05", "00", "D4", "48", "00", "32",
      "7C", "C2", "01", "00", "F9", "4E", "05", "00",
      "C8", "48"
    ],

    // Fix Morgue pallete caller (Subboss Active)
    "346326": ["F9", "4E", "18", "00", "70", "28"],

    // Fix Morgue pallete bug (Subboss Active)
    "1583216":
    [
      "2E", "14", "DE", "00", "04", "66", "3C", "14",
      "9F", "00", "42", "1D", "23", "00", "F9", "4E",
      "05", "00", "DC", "48"
    ],

    // Handle Morgue replace pallete 1D caller (Subboss)
    "343792": ["F9", "4E", "18", "00", "50", "29"],

    // Handle Morgue replace pallete 1D (Subboss)
    "1583440":
    [
      "2E", "08", "07", "00", "27", "00", "06", "67",
      "F9", "4E", "05", "00", "0C", "3F", "F9", "41",
      "91", "00", "A0", "43", "F9", "4E", "05", "00",
      "F6", "3E", 
    ],



    // Handles better position Y and elevation caller (Hogg)
    "329740": ["F9", "4E", "18", "00", "00", "30", "71", "4E"],

    // Handles better position Y and elevation (Hogg)
    "1585152":
    [
      "40", "33", "08", "00", "40", "42", "2D", "10",
      "D9", "04", "48", "E5", "2D", "D0", "86", "07",
      "48", "E3", "3B", "30", "1C", "00", "49", "E5",
      "41", "D0", "40", "33", "10", "00", "69", "42",
      "0C", "00", "B9", "4E", "01", "00", "2E", "2D",
      "F9", "4E", "05", "00", "14", "08", "00", "00",

      // Position Y List
      "00", "01", "10", "00", "10", "01", "10", "01",
      "10", "00", "10", "00", "20", "00", "20", "00",
      "10", "00", "10", "00", "10", "00", "10", "00",
      "10", "00", "10", "00", "10", "00", "10", "00",
      "10", "02", "10", "01", "10", "01", "10", "01",
      "10", "00", "F2", "00", "62", "01", "62", "01",
      "10", "00", "20", "00", "10", "00", "10", "00",
      "10", "00", "00", "03", "10", "01", "10", "01"
    ],

    // Forces Hogg to spawn not too far behind
    "326920": ["F9", "4E", "18", "00", "40", "31"],

    // Forces Hogg to spawn not too far behind
    "1585472":
    [
      "7C", "31", "7C", "00", "20", "00", "2D", "30",
      "44", "07", "6E", "90", "08", "00", "02", "6A",
      "40", "44", "7C", "B0", "00", "03", "0C", "65", 
      "2D", "30", "44", "07", "40", "04", "00", "03",
      "40", "3D", "08", "00", "F9", "4E", "04", "00",
      "0E", "FD"
    ],



    // Handles better out of screen position X and behavior caller (Slisaur Subboss)
    "380064": ["F9", "4E", "18", "00", "80", "30"],

    // Handles better out of screen position X and behavior (Slisaur Subboss)
    "1585280":
    [
      "2E", "08", "07", "00", "27", "00", "32", "67",
      "2E", "30", "08", "00", "6D", "90", "44", "07",
      "40", "06", "40", "00", "7C", "B0", "00", "02",
      "20", "65", "40", "04", "40", "00", "06", "6B",
      "3C", "30", "C0", "01", "04", "60", "3C", "30",
      "C0", "FF", "6D", "D0", "44", "07", "40", "3D",
      "08", "00", "7C", "2D", "00", "02", "0E", "04",
      "04", "00", "B8", "4E", "62", "18", "F9", "4E",
      "05", "00", "A6", "CC"
    ],



    // Activate Enemy Invulnerability (Enemy, ignore Subboss)
    "1577984":
    [
      "40", "42", "2E", "10", "03", "00", "3B", "10",
      "18", "00", "00", "4A", "0C", "6D", "2E", "08",
      "07", "00", "27", "00", "04", "66", "BC", "1C",
      "04", "00", "75", "4E"
    ],



    // Handles better elevation (Lash Terhune)
    "219884": ["B9", "4E", "18", "00", "E0", "30", "71", "4E"],

    // Handles better elevation (Enemy)
    "1585376":
    [
      "6E", "42", "0C", "00", "B9", "4E", "01", "00",
      "2E", "2D", "75", "4E"
    ],



    // Sets enemy health to C
    "1582464":
    [
      "0C", "70", "40", "3D", "6A", "00", "40", "3D",
      "6C", "00", "40", "3D", "6E", "00", "75", "4E"
    ],

    // Sets enemy health to 32
    "1582496":
    [
      "7C", "1D", "0A", "00", "78", "00", "32", "70",
      "D8", "60"
    ],



    // Slisaur replacing Hammer Terhune pallete (Pallete 12)
    "752786":
    [
      "11", "01", "DE", "0C", "AB", "09", "78", "06",
      "45", "03", "53", "01", "85", "03", "B8", "05",
      "AE", "0F", "7A", "0B", "47", "08", "22", "04",
      "54", "08", "97", "0C", "FF", "0F", "31", "00"
    ],

    // New Hammer Terhune replacing Black Elmer pallete (Pallete 13)
    "752818":
    [
      "11", "01", "CA", "0F", "97", "0D", "53", "09",
      "30", "06", "00", "08", "00", "0B", "60", "0F",
      "90", "0F", "E0", "0F", "B0", "0F", "80", "0E",
      "50", "0B", "30", "07", "FF", "0F", "A9", "00"
    ],

    // New Fat replacing Wrench Terhune pallete (Pallete 14)
    "752850":
    [
      "11", "01", "CA", "0F", "97", "0C", "54", "08",
      "22", "04", "24", "06", "36", "08", "59", "0A",
      "8D", "0C", "BF", "0D", "FB", "0F", "C6", "0C",
      "82", "08", "51", "05", "FF", "0F", "A9", "00"
    ],

    // Bludge / Butcher / Morgan / Morgue replacing Punk pallete (Pallete 17)
    "752978":
    [
      "11", "01", "52", "04", "74", "06", "A7", "09",
      "DA", "0C", "FF", "0F", "CF", "0B", "8C", "07",
      "49", "03", "25", "01", "32", "06", "64", "09",
      "97", "0C", "CA", "0E", "ED", "0F", "A9", "00"
    ],

    // Bludge / Butcher / Morgan / Morgue replacing Lash T's iron ball pallete (Pallete 17)
    "754226":
    [
      "11", "01", "52", "04", "74", "06", "A7", "09",
      "DA", "0C", "FF", "0F", "CF", "0B", "8C", "07",
      "49", "03", "25", "01", "32", "06", "64", "09",
      "97", "0C", "CA", "0E", "ED", "0F", "A9", "00"
    ],

    // New Dwarf replacing Thug pallete (Pallete 18)
    "753010":
    [
      "11", "01", "DA", "0F", "A7", "0D", "62", "09",
      "30", "05", "51", "07", "73", "09", "95", "0B",
      "B8", "0C", "EA", "0F", "CC", "0B", "99", "07",
      "55", "03", "22", "01", "FF", "0F", "A9", "00"
    ],

    // New Lash Terhune replacing Lash Terhune pallete (Pallete 1B)
    "753042":
    [
      "11", "01", "DA", "0F", "A6", "0E", "63", "0C",
      "42", "09", "31", "06", "54", "0E", "32", "0A",
      "10", "07", "00", "04", "FF", "0F", "E9", "0F",
      "C4", "0F", "81", "0B", "50", "08", "A9", "0F"
    ]
  }
}
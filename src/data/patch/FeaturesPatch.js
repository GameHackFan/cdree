export const featuresPatch = 
{
  priority: 18,
  type: "overwrite",
  filename: "cde_re.10f",
  byteFormat: "hex",
  data: 
  {
    // Restore enemy dynamic rage (Stage Object Spawn)
    "65108": ["6A", "11", "0E", "00", "5B", "00"],

    // Restore enemy dynamic rage (Hogg's Area Object Spawn)
    "65304": ["6A", "11", "0E", "00", "5B", "00"],



    // Forces the player to leave the car at 7E00
    // Originally A000, a negative value that bugs the game.
    "573786": ["00", "7E"],

    // Restricts leaving the car caller (Camera at 2E00-)
    "573900": ["F9", "4E", "18", "00", "30", "32", "71", "4E"],

    // Restricts leaving the car (Camera at 2E00-)
    "1585712":
    [
      "6D", "0C", "00", "30", "44", "07", "0C", "65",
      "6E", "4A", "6C", "00", "06", "6E", "F9", "4E",
      "08", "00", "D4", "C1", "F9", "4E", "08", "00",
      "E8", "C1"
    ],

    // Restricts the radio calling the car caller (Camera at 7D00+)
    "572726": ["F9", "4E", "18", "00", "00", "32"],

    // Restricts the radio calling the car (Camera at 7D00+)
    "1585664":
    [
      "6D", "0C", "00", "7D", "44", "07", "0C", "62",
      "B9", "4E", "00", "00", "60", "48", "F9", "4E",
      "08", "00", "3C", "BD", "F9", "4E", "08", "00",
      "DA", "BD"
    ],



    // Fixes the enemy translation / teleportation bug.
    "1580096":
    [
      "28", "0C", "04", "00", "82", "00", "04", "66",
      "68", "42", "C0", "00", "75", "4E"
    ],



    // Handles boss helper object address jump caller
    "508036": ["F9", "4E", "18", "00", "00", "22", "71", "4E"],

    // Handles boss helper object address jump
    "1581568":
    [
      "6E", "0C", "FE", "7F", "80", "00", "22", "6D",
      "6E", "24", "A4", "00", "2D", "10", "58", "33",
      "2A", "B0", "0E", "00", "0C", "62", "6A", "24",
      "06", "00", "4A", "2D", "A4", "00", "52", "3D",
      "80", "00", "40", "42", "F9", "4E", "07", "00",
      "8C", "C0", "6E", "53", "80", "00", "06", "65",
      "F9", "4E", "07", "00", "8C", "C0", "F9", "4E",
      "07", "00", "8E", "C0", 
    ],



    // Handles object spawn barrier caller
    "64954": ["F9", "4E", "18", "00", "50", "22"],

    // Handles object spawn barrier
    "1581648":
    [
      "2A", "30", "04", "00", "14", "6A", "2A", "30",
      "0E", "00", "6D", "B0", "F8", "65", "10", "63",
      "EA", "45", "F0", "FF", "F9", "4E", "00", "00",
      "64", "FE", "B9", "4E", "00", "00", "56", "FD",
      "F9", "4E", "00", "00", "60", "FE", 
    ],



    // Randomizes a Value Inside D0 (1 to 8 Iterations)
    "1579696":
    [
      "2D", "10", "C2", "75", "7C", "C0", "07", "00",
      "40", "3B", "F6", "7E", "00", "61", "42", "18",
      "6D", "53", "F6", "7E", "F6", "6C", "75", "4E"
    ],

    // Randomizes a Value Inside D0
    "1585920":
    [
      "6D", "4A", "FC", "7E", "06", "67", "2D", "30",
      "FE", "7E", "04", "66", "2D", "10", "C2", "75",
      "40", "06", "15", "FC", "FC", "C0", "AB", "02",
      "40", "2B", "F8", "7E", "88", "E0", "88", "E0",
      "AD", "B1", "F8", "7E", "2D", "20", "F8", "7E",
      "40", "3B", "FE", "7E", "6D", "52", "FC", "7E",
      "40", "48", "40", "42", "40", "48", "75", "4E"
    ]
  }
}
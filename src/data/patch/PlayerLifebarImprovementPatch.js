export const playerLifebarImprovementPatch = 
{
  priority: 12,
  type: "overwrite",
  filename: "cde_re.10f",
  byteFormat: "hex",
  data:
  {
    // Code that improves DINORE feature caller
    "91214":
    [
      "F9", "4E", "18", "00", "20", "02", "71", "4E",
      "00", "61", "8C", "00", "FC", "90", "80", "00",
    ],

    // Code that sets the lifebar color ID
    "91252": ["6D", "31", "E0", "7F", "02", "00"],
    "91356": ["6D", "31", "E0", "7F", "02", "00"],
    "91416": ["6D", "31", "E0", "7F", "02", "00"],
    
    // Code that fixes the lifebar progress
    "91268": ["2D", "38", "E2", "7F"],
    "91318": ["2D", "30", "E2", "7F"],
    "91364": ["2D", "30", "E2", "7F"],
    


    // Code that changes DINORE 180220 to support the
    // player lifebar improvement
    "1573408":
    [
      "00", "61", "DE", "1D", "B9", "4E", "01", "00",
      "1A", "63", "FC", "D0", "88", "07", "00", "61",
      "D0", "13", "F9", "4E", "01", "00", "54", "64"
    ],

    // Code that improves the player lifebar.
    "1581056":
    [
      "40", "42", "F9", "41", "91", "00", "A0", "45",
      "2E", "10", "02", "00", "48", "EB", "C0", "D0",
      "48", "EA", "40", "06", "8D", "01", "40", "3B",
      "E0", "7F", "3C", "30", "FF", "0F", "26", "61",
      "2E", "3A", "6C", "00", "0C", "67", "45", "53",
      "FC", "8A", "64", "00", "45", "DA", "7C", "CA",
      "1F", "00", "3B", "20", "2C", "50", "0E", "61",
      "40", "48", "0A", "61", "45", "48", "45", "52",
      "45", "3B", "E2", "7F", "75", "4E", "10", "3A",
      "7C", "CA", "00", "F0", "40", "8A", "C5", "30",
      "75", "4E", 
    ],

    // Lifebar Colors
    "1581152":
    [
      "00", "0E", "E0", "0F", "09", "09", "E5", "05",
      "0D", "00", "CB", "0E", "4A", "0E", "CF", "07",
      "AA", "00", "67", "05", "00", "00", "53", "09",
      "51", "0F", "03", "0B", "75", "01", "2A", "04", 
      "00", "0E"
    ],



    // Redraw lifebar (Area 1C bug fix)
    "1575222": ["00", "61", "C8", "16", "75", "4E"]
  }
}

/* Lifebar Colors

00:   Red             EE0000, FE00
01:   Yellow          FFEE00, FFE0
02:   Purple          990099, F909
03:   Green           55EE55, F5E5
04:   Blue            0000DD, F00D
05:   Beige           EECCBB, FECB
06:   Pink            EE44AA, FE4A
07:   Light Blue      77CCFF, F7CF
08:   Cyan            00AAAA, F0AA
09:   Silver          556677, F567
10:   Black           000000, F000
11:   Sienna (Brown)  995533, F953
12:   Orange          FF5511, FF51
13:   Crimson         BB0033, FB03
14:   Emerald Green   117755, F175
15:   Purplish Blue   4422AA, F42A

*/


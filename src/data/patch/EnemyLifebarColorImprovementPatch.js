export const enemyLifebarColorImprovementPatch = 
{
  priority: 11,
  type: "overwrite",
  filename: "cde_re.10f",
  byteFormat: "hex",
  data:
  {
    // Code that sets the enemy lifebar color in the pallete.
    "96374":
    [
      "3C", "30", "FF", "0F", "1A", "61", "04", "3A",
      "4D", "E4", "7C", "CA", "1F", "00", "3B", "20",
      "20", "50", "0C", "61", "40", "48", "08", "61",
      "80", "42", "44", "5C", "03", "30", "75", "4E",
      "11", "3A", "7C", "CA", "00", "F0", "40", "8A",
      "C5", "32", "75", "4E", "AA", "AA", "AA", "AA"
    ],

    // Lifebar colors
    "96422":
    [
      "00", "0E", "E0", "0F", "09", "09", "E5", "05",
      "0D", "00", "CB", "0E", "4A", "0E", "CF", "07",
      "AA", "00", "67", "05", "00", "00", "53", "09",
      "51", "0F", "03", "0B", "75", "01", "2A", "04", 
      "00", "0E", "AA", "AA", "AA", "AA", "AA", "AA",
      "AA", "AA"
    ]
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


export const customStage7Patch = 
{
  priority: 7,
  type: "overwrite",
  filename: "cde_re.10f",
  byteFormat: "hex",
  data: 
  {
    // Stage 7 Normal Object List Pointer
    "64614": ["1F", "00", "00", "40"],

    // Stage 7 Lock Object List Pointer
    "504724": ["1F", "00", "00", "4C"],

    // Stage 7 Boss Helper Normal List Pointer
    "507726": ["1F", "00", "00", "91"],

    // Stage 7 Boss Helper Lock List Pointer
    "507758": ["1F", "00", "00", "94"],



    // Stage 7 Area 1 Normal Object List
    "2048000":
    [
      "1F", "00", "10", "40", "1F", "00", "00", "5B",
      "1F", "00", "00", "79", "1F", "00", "00", "8B",
    
      // Set time to 8 minutes
      "00", "00", "80", "00", "0C", "00", "00", "08",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemies
      "00", "00", "00", "00", "50", "00", "B0", "00",
      "70", "00", "00", "00", "00", "00", "00", "RA",

      "B0", "01", "01", "00", "3C", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemies
      "80", "02", "00", "00", "50", "00", "70", "04",
      "44", "00", "00", "00", "00", "00", "00", "RB",

      "80", "05", "01", "00", "3C", "00", "00", "00",
      "00", "00", "01", "00", "00", "00", "00", "00",

      // Enemies
      "90", "05", "00", "00", "50", "00", "20", "07",
      "20", "00", "00", "00", "00", "00", "00", "RC",

      "90", "07", "01", "00", "3C", "00", "00", "00",
      "00", "00", "02", "00", "00", "00", "00", "00",

      // Enemies
      "40", "08", "00", "00", "50", "00", "00", "0A",
      "4A", "00", "00", "00", "00", "00", "00", "RD",

      "30", "09", "01", "00", "3C", "00", "00", "00",
      "00", "00", "03", "00", "00", "00", "00", "00",
      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00"
    ],

    // Stage 7 Area 2 Normal Object List
    "2054912":
    [
      // Set time to 8 minutes
      "00", "37", "80", "00", "0C", "00", "00", "08",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemies
      "00", "37", "00", "00", "50", "00", "E8", "00",
      "40", "00", "00", "00", "00", "00", "00", "RA",

      "00", "30", "01", "00", "3C", "00", "00", "00",
      "00", "00", "04", "00", "00", "00", "00", "00",

      // Enemies
      "00", "2F", "00", "00", "50", "00", "90", "00",
      "28", "00", "00", "00", "00", "00", "00", "RB",

      "00", "1E", "01", "00", "3C", "00", "00", "00",
      "00", "00", "06", "00", "00", "00", "00", "00",

      // Enemies
      "00", "1C", "00", "00", "50", "00", "90", "00",
      "28", "00", "00", "00", "00", "00", "00", "RC",

      "00", "14", "01", "00", "3C", "00", "00", "00",
      "00", "00", "07", "00", "00", "00", "00", "00",

      // Enemies
      "00", "10", "00", "00", "50", "00", "D0", "00",
      "38", "00", "00", "00", "00", "00", "00", "RD",

      "00", "08", "01", "00", "3C", "00", "00", "00",
      "00", "00", "08", "00", "00", "00", "00", "00",

      // Enemies
      "00", "06", "00", "00", "50", "00", "D0", "00",
      "38", "00", "00", "00", "00", "00", "00", "RE",

      "00", "00", "01", "00", "3C", "00", "00", "00",
      "00", "00", "09", "00", "00", "00", "00", "00",
      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00"
    ],

    // Stage 7 Area 3 Normal Object List
    "2062592":
    [
      // Set time to 8 minutes
      "00", "00", "80", "00", "0C", "00", "00", "08",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemies
      "00", "00", "00", "00", "50", "00", "30", "01",
      "20", "00", "00", "00", "00", "00", "00", "RA",

      "00", "00", "01", "00", "3C", "00", "00", "00",
      "00", "00", "0A", "00", "00", "00", "00", "00",

      // Enemies
      "80", "01", "00", "00", "50", "00", "00", "02",
      "20", "00", "00", "00", "00", "00", "00", "RB",

      "D0", "01", "01", "00", "3C", "00", "00", "00",
      "00", "00", "0B", "00", "00", "00", "00", "00",

      // Enemies
      "00", "04", "00", "00", "50", "00", "A0", "04",
      "10", "00", "00", "00", "00", "00", "00", "RC",

      // Enemies
      "20", "04", "00", "00", "50", "00", "C0", "04",
      "40", "00", "00", "00", "00", "00", "00", "RD",

      "40", "06", "01", "00", "3C", "00", "00", "00",
      "00", "00", "0C", "00", "00", "00", "00", "00",
      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00"
    ],

    // Stage 7 Area 4 Normal Object List
    "2067200":
    [
      // Set time to 4 minutes
      "00", "00", "80", "00", "0C", "00", "00", "04",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemies
      "00", "00", "00", "00", "50", "00", "00", "01",
      "6A", "00", "04", "00", "00", "00", "00", "RA",

      "40", "02", "01", "00", "3C", "00", "00", "00",
      "00", "00", "0D", "00", "00", "00", "00", "00",

      // Boss
      "C0", "03", "01", "00", "84", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "FF",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
    ],



    // Stage 7 Area 1 Lock 1 Object List
    "2051072":
    [
      "1C", "00", "00", "03", "00", "06", "00", "09",
      "00", "1E", "00", "21", "00", "24", "00", "27",
      "00", "2A", "F0", "35", "00", "36", "00", "39",
      "00", "3C", "00", "42",

      "LA", "00", "LB", "00", "LC", "00",

      // Enemies
      "00", "00", "00", "00", "18", "01", "90", "01",
      "64", "00", "00", "00", "00", "00", "00", "RA",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "LA", "00", "LB", "00", "LC", "00",

      // Enemies
      "14", "00", "00", "00", "18", "01", "90", "01",
      "74", "00", "00", "00", "00", "00", "00", "RB",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "00", "00", "00", "00", "00", "00",

      "00", "00", "80", "00", "0C", "00", "50", "03",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "01", "00", "01", "00", "01", "00", "00", "80"
    ],

    // Stage 7 Area 1 Lock 2 Object List
    "2051840":
    [
      "LA", "00", "LB", "00", "LC", "00",
  
      // Enemies
      "00", "00", "00", "00", "18", "01", "10", "07",
      "30", "00", "00", "00", "00", "00", "00", "RA",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "LA", "00", "LB", "00", "LC", "00",

      // Enemies
      "14", "00", "00", "00", "18", "01", "60", "06",
      "3C", "00", "00", "00", "00", "00", "00", "RB",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "00", "00", "00", "00", "00", "00",

      "00", "00", "80", "00", "0C", "00", "50", "03",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "63", "00", "63", "00", "63", "00", "00", "80"
    ],

    // Stage 7 Area 1 Lock 3 Object List
    "2052608":
    [
      "LA", "00", "LB", "00", "LC", "00",

      // Enemies
      "00", "00", "00", "00", "18", "01", "30", "09",
      "18", "00", "00", "00", "00", "00", "00", "RA",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "LA", "00", "LB", "00", "LC", "00",

      // Enemies
      "5A", "00", "00", "00", "18", "01", "70", "07",
      "48", "00", "00", "00", "00", "00", "00", "RB",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "00", "00", "00", "00", "00", "00",

      "00", "00", "80", "00", "0C", "00", "50", "03",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "03", "00", "03", "00", "04", "00", "00", "80"
    ],

    // Stage 7 Area 1 Lock 4 Object List
    "2053376":
    [
      "LA", "00", "LB", "00", "LC", "00",

      // Enemies
      "5A", "00", "00", "00", "18", "01", "00", "09",
      "48", "00", "00", "00", "00", "00", "00", "RA",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "LA", "00", "LB", "00", "LC", "00",

      // Enemies
      "1E", "00", "00", "00", "18", "01", "65", "0A",
      "19", "00", "00", "00", "00", "00", "00", "RB",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "LA", "00", "LB", "00", "LC", "00",

      // Enemies
      "14", "00", "00", "00", "18", "01", "00", "09",
      "18", "00", "00", "00", "00", "00", "00", "RC",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "LA", "00", "LB", "00", "LC", "00",

      // Enemies
      "5A", "00", "00", "00", "18", "01", "10", "09",
      "48", "00", "00", "00", "00", "00", "00", "RD",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "LA", "00", "LB", "00", "LC", "00",

      // Enemies
      "00", "00", "00", "00", "18", "01", "C0", "09",
      "48", "00", "00", "00", "00", "00", "00", "RE",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "02", "80"
    ],

    // Stage 7 Area 2 Lock 5 Object List
    "2058752":
    [ 
      "63", "00", "63", "00", "63", "00",

      // Breaks The Wood
      "1E", "00", "01", "00", "D8", "00", "C0", "00",
      "30", "00", "00", "00", "00", "00", "00", "00",

      // Enemies
      "82", "00", "00", "00", "0C", "00", "C0", "01",
      "48", "00", "00", "00", "00", "00", "00", "RA",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "00", "00", "00", "00", "00", "00",

      "00", "00", "80", "00", "0C", "00", "50", "03",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "63", "00", "63", "00", "63", "00", "00", "80"
    ],

    // Stage 7 Area 2 Lock 6 Object List (Unused)
    "2059520":
    [
      "02", "00", "02", "00", "03", "00",

      // Enemies
      "00", "00", "00", "00", "18", "00", "C0", "00",
      "80", "00", "00", "00", "00", "00", "00", "RA",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "00", "00", "00", "00", "00", "00",

      "00", "00", "80", "00", "0C", "00", "50", "01",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "63", "00", "63", "00", "63", "00", "00", "80"
    ],

    // Stage 7 Area 2 Lock 7 Object List
    "2060288":
    [
      "LA", "00", "LB", "00", "LC", "00",

      // Enemies
      "00", "00", "00", "00", "0C", "00", "C0", "FF",
      "24", "00", "00", "00", "00", "00", "00", "RA",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "00", "00", "00", "00", "00", "00",

      "00", "00", "80", "00", "0C", "00", "50", "03",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "63", "00", "63", "00", "63", "00", "00", "80"
    ],

    // Stage 7 Area 2 Lock 8 Object List
    "2061056":
    [
      "LA", "00", "LB", "00", "LC", "00",

      // Enemies
      "00", "00", "00", "00", "18", "00", "00", "00",
      "20", "00", "00", "00", "00", "00", "00", "RA",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "00", "00", "00", "00", "00", "00",

      "00", "00", "80", "00", "0C", "00", "50", "03",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "63", "00", "63", "00", "63", "00", "00", "80"
    ],

    // Stage 7 Area 2 Lock 9 Object List
    "2061824":
    [
      "LA", "00", "LB", "00", "LC", "00",

      // Enemies
      "0A", "00", "00", "00", "0C", "00", "C0", "FF",
      "24", "00", "00", "00", "00", "00", "00", "RA",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "08", "00", "08", "00", "08", "00",

      "00", "00", "80", "00", "0C", "00", "50", "03",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "63", "00", "63", "00", "63", "00", "00", "80"
    ],

    // Stage 7 Area 2 Lock 10 Object List (Empty)
    "2064880": ["00", "00", "00", "00", "00", "00", "02", "80"],

    // Stage 7 Area 3 Lock 11 Object List
    "2064896":
    [
      "LA", "00", "LB", "00", "LC", "00",

      // Enemies
      "F0", "00", "00", "00", "18", "01", "C0", "00",
      "20", "00", "00", "00", "00", "00", "00", "RA",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "80"
    ],

    // Stage 7 Area 3 Lock 12 Object List
    "2065664":
    [
      "LA", "00", "LB", "00", "LC", "00",

      // Enemies
      "00", "00", "00", "00", "18", "01", "E0", "02",
      "80", "00", "00", "00", "00", "00", "00", "RA",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "LA", "00", "LB", "00", "LC", "00",

      // Enemies
      "5A", "00", "00", "00", "18", "01", "E0", "02",
      "80", "00", "00", "00", "00", "00", "00", "RB",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00", 

      "00", "00", "00", "00", "00", "00",

      "00", "00", "80", "00", "0C", "00", "50", "03",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "63", "00", "63", "00", "63", "00", "00", "80"
    ],

    // Stage 7 Area 3 Lock 13 Object List
    "2066432":
    [
      "LA", "00", "LB", "00", "LC", "00",

      // Breaks The Books
      "78", "00", "01", "00", "D0", "00", "30", "07",
      "70", "00", "00", "00", "00", "00", "00", "00",

      // Enemies
      "3C", "00", "00", "00", "18", "01", "30", "07",
      "70", "00", "06", "00", "00", "00", "00", "RA",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "00", "00", "00", "00", "00", "00",

      "00", "00", "80", "00", "0C", "00", "50", "02",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "02", "80"
    ],

    // Stage 7 Area 4 Lock 14 Object List
    "2067968":
    [
      "LA", "00", "LB", "00", "LC", "00",

      // Enemies
      "32", "00", "00", "00", "18", "01", "F0", "03",
      "50", "00", "0A", "00", "00", "00", "00", "RA",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "00", "00", "00", "00", "00", "00",

      "00", "00", "80", "00", "0C", "00", "00", "08",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "63", "00", "63", "00", "63", "00", "04", "80"
    ],



    // Stage 7 Area 4 Boss Helper Normal Object List
    "2068736":
    [
      // Enemies
      "00", "01", "00", "00", "98", "00", "30", "04",
      "40", "00", "00", "00", "00", "00", "00", "RA",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00"
    ],

    // Stage 7 Area 4 Boss Helper Lock Object List
    "2069504":
    [
      "00", "00", "00", "00", "00", "00",

      // Enemies
      "00", "02", "00", "00", "18", "00", "30", "04",
      "40", "00", "00", "00", "00", "00", "00", "RA",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "01", "00", "02", "00", "02", "00",

      // Enemies
      "00", "02", "00", "00", "0C", "00", "30", "04",
      "40", "00", "00", "00", "00", "00", "00", "RB",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "01", "00", "02", "00", "02", "00",

      // Enemies
      "00", "02", "00", "00", "18", "00", "30", "04",
      "40", "00", "00", "00", "00", "00", "00", "RC",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "01", "00", "02", "00", "02", "00",

      // Enemies
      "00", "02", "00", "00", "0C", "00", "30", "04",
      "40", "00", "00", "00", "00", "00", "00", "RD",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "01", "00", "02", "00", "02", "00",

      // Enemies
      "00", "02", "00", "00", "18", "00", "30", "04",
      "40", "00", "00", "00", "00", "00", "00", "RE",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",

      "01", "00", "02", "00", "02", "00",

      // Set time to 8 minutes
      "00", "00", "80", "00", "0C", "00", "00", "08",
      "00", "00", "00", "00", "00", "00", "00", "00",

      // Enemies
      "00", "02", "00", "00", "0C", "00", "30", "04",
      "40", "00", "00", "00", "00", "00", "00", "RF",

      // Custom Loop Delay
      "3C", "00", "00", "00", "40", "01", "20", "60",
      "40", "01", "00", "00", "00", "00", "00", "00",      

      // Custom Loop
      "FF", "7F", "00", "00", "00", "00", "1F", "00",
      "06", "94", "00", "00", "00", "00", "00", "02",

      "FF", "9F", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "00", "00",
      "00", "00", "00", "00", "00", "00", "02", "80"
    ]
  }
}


/*
  Each 40 character is 3 Lines of 100 HEX.

  Area 1 Normal List: 40 + 40 + 40 + 40
  Area 1 Lock List:   (20 + 20) + (20 + 20) + (20 + 20) + (15 + 15 + 15 + 15 + 20) 
  Area 2 Normal List: 40 + 40 + 40 + 40 + 40
  Area 2 Lock List:   40 + 40 + 40 + 40 + 40 + 0
  Area 3 Normal List: 40 + 40 + 80
  Area 3 Lock List:   40 + (20 + 20) + 40
  Area 4 Normal List: 40
  Area 4 Lock List:   40
  Boss List:          40
  Boss Helper List 1: 40
  Boss Helper List 2: 20 + 20 + 20 + 20 + 20 + 20
*/
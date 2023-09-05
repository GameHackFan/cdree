export const foodImprovementPatch = 
{
  priority: 17,
  type: "overwrite",
  filename: "cde_re.10f",
  byteFormat: "hex",
  data: 
  {
    // Improves the balance of how much each food heals
    "166672":
    [
      // Excellent Food
      "64", "00", "4C", "00", "5C", "00", "4C", "00",
      "56", "00", "4C", "00", "50", "00", "4C", "00",

      // Good Food
      "3C", "00", "48", "00", "38", "00", "48", "00",
      "34", "00", "48", "00", "30", "00", "48", "00",

      // Average Food
      "22", "00", "40", "00", "26", "00", "40", "00",
      "20", "00", "40", "00", "24", "00", "40", "00",

      // Bad Food
      "08", "00", "38", "00", "12", "00", "38", "00",
      "0E", "00", "38", "00", "0A", "00", "38", "00",
      "16", "00", "38", "00"
    ],
  }
}

/*
  Food Heal List

              New           Old
  Barbecue:   64 (100)      64 (100)
  Steak:      5C (92)       50 (80)

  Lobster:    56 (86)       40 (64)
  Sushi:      50 (80)       40 (64)

  Hamburger:  3C (60)       30 (48)
  Hotdog:     38 (56)       30 (48)
  Pizza:      34 (52)       30 (48)
  Salad:      30 (48)       20 (32)

  Ice Cream:  26 (38)       20 (32)
  Potato:     24 (36)       20 (32)
  Cake:       22 (34)       20 (32)
  Pudding:    20 (32)       20 (32)

  Croissant:  16 (22)       10 (16)
  Chocolate:  12 (18)       10 (16)
  Donut:      0E (14)       10 (16)
  Coffee:     0A (10)       10 (16)
  Gum:        08 (8)        10 (16)

*/
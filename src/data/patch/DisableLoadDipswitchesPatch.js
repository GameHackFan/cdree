export const disableLoadDipswitchesPatch = 
{
  priority: 10,
  type: "overwrite",
  filename: "cde_re.10f",
  byteFormat: "hex",
  data: 
  {
    "1992":
    [
      "71", "4E", "71", "4E", "71", "4E", "71", "4E",
      "71", "4E", "71", "4E", "71", "4E", "71", "4E",
      "71", "4E", "71", "4E", "71", "4E", "71", "4E",
      "71", "4E", "71", "4E", "71", "4E", "71", "4E",
      "71", "4E", "71", "4E"
    ]
  }
}

/*
  Stop forcing the Dipswitches values so you can
  set the values manually and properly when you're
  debugging the game.
*/

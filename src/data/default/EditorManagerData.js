export const editorManagerData = 
{
  romTypeMap:
  {
    fbneo:
    {
      key: "fbneo",
      label: "FBNeo",
      romFileName: "dinore.zip",
      converterKey: "hbMameFBNeoMap" 
    },
    hbmame:
    {
      key: "hbmame",
      label: "HBMame",
      romFileName: "dinos283.zip",
      converterKey: "fbneoHBMameMap" 
    }
  },
  fbneoHBMameMap:
  {
    "cde_re.10f": "c25s283.p1"
  },
  hbMameFBNeoMap:
  {
    "c25s283.p1": "cde_re.10f"
  }
}
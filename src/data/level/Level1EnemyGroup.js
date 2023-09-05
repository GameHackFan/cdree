export const level1EnemyGroup =
{
  group1:
  {
    key: "group1",
    label: "Enemy Group 1",
    background: "level1A",
    groupReplaceIndex: 1966080,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 920,
    screenPositionEnd: 1120,
    walkablePositionYTop: 147,            // In game is 335
    walkablePositionYBottom: 100,         // In game is 288, 240
    walkablePositionForceShift: 188,
    levelEditorLimitStart: 704,           // 896 - 192
    levelEditorLimitEnd: 1424,            // 1216 + 192 + 16
    levelEditorShiftX: 368,               // 492 - 124
    levelEditorShiftY: 0,
    defaultAmount: 11,
    maxAmount: 40,
    forbiddenPalleteKey: "area1A",
    forbiddenEnemyKeys: ["wall"]
  },
  lockGroup1:
  {
    key: "lockGroup1",
    label: "Lock Enemy Group 1",
    background: "level1A",
    groupReplaceIndex: 1966848,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1232,
    screenPositionEnd: 1232,
    walkablePositionYTop: 147,            // In game is 335
    walkablePositionYBottom: 100,         // In game is 288, 240
    walkablePositionForceShift: 188,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 1040,
    levelEditorLimitEnd: 1424,
    levelEditorShiftX: 368,               // 492 - 124
    levelEditorShiftY: 0,
    levelEditorFOVPositionY: 56,
    defaultAmount: 2,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area1A",
    forbiddenEnemyKeys: ["wall"],
    forbiddenRangeList: ["outsideRight"]
  },



  lockGroup2:
  {
    key: "lockGroup2",
    label: "Lock Enemy Group 2",
    background: "level1B",
    groupReplaceIndex: 1968384,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 0,
    screenPositionEnd: 0,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: -192,      // -192 + 96
    levelEditorLimitEnd: 192,     
    levelEditorShiftX: 492,          // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 5,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area1B",
    forbiddenEnemyKeys: ["wall"],
    forbiddenRangeList: ["outsideLeft"]
  },
  group2:
  {
    key: "group2",
    label: "Enemy Group 2",
    background: "level1B",
    groupReplaceIndex: 1967616,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 120,
    screenPositionEnd: 420,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: -72,      // -192 + 96
    levelEditorLimitEnd: 624,     
    levelEditorShiftX: 492,          // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 13,
    maxAmount: 40,
    forbiddenPalleteKey: "area1B",
    forbiddenEnemyKeys: ["wall"]
  },
  lockGroup3:
  {
    key: "lockGroup3",
    label: "Lock Enemy Group 3",
    background: "level1B",
    groupReplaceIndex: 1969152,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 432,
    screenPositionEnd: 432,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 240,      // -192 + 96
    levelEditorLimitEnd: 624,     
    levelEditorShiftX: 492,          // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 3,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area1B",
    forbiddenEnemyKeys: ["wall"]
  },
  lockGroup4:
  {
    key: "lockGroup4",
    label: "Lock Enemy Group 4",
    background: "level1B",
    groupReplaceIndex: 1969920,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 544,
    screenPositionEnd: 544,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 352,
    levelEditorLimitEnd: 736,     
    levelEditorShiftX: 492,          // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area1B",
    forbiddenEnemyKeys: ["wall"],
    forbiddenRangeList: ["outsideRight"]
  },



  lockGroup5:
  {
    key: "lockGroup5",
    label: "Lock Enemy Group 5",
    background: "level1C",
    groupReplaceIndex: 1971456,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 0,
    screenPositionEnd: 0,
    walkablePositionYTop: 63,         // In game is 319
    walkablePositionYBottom: 16,      // In game is 272
    walkablePositionForceShift: 256,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: -192,      // 0 - 192
    levelEditorLimitEnd: 192,     
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 3,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area1C",
    forbiddenEnemyKeys: ["wall", "slisaur"],
    forbiddenRangeList: ["outsideLeft"]
  },
  group3:
  {
    key: "group3",
    label: "Enemy Group 3",
    background: "level1C",
    groupReplaceIndex: 1970688,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 50,
    screenPositionEnd: 150,
    walkablePositionYTop: 63,         // In game is 319
    walkablePositionYBottom: 16,      // In game is 272
    walkablePositionForceShift: 256,
    levelEditorLimitStart: -142,
    levelEditorLimitEnd: 352,     
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 8,
    maxAmount: 40,
    forbiddenPalleteKey: "area1C",
    forbiddenEnemyKeys: ["wall", "slisaur"],
    forbiddenRangeList: ["outsideLeft"]
  },
  lockGroup6:
  {
    key: "lockGroup6",
    label: "Lock Enemy Group 6",
    background: "level1C",
    groupReplaceIndex: 1972224,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 160,
    screenPositionEnd: 160,
    walkablePositionYTop: 63,         // In game is 319
    walkablePositionYBottom: 16,      // In game is 272
    walkablePositionForceShift: 256,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: -32,
    levelEditorLimitEnd: 352,     
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 1,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area1C",
    forbiddenEnemyKeys: ["wall", "slisaur"]
  },



  bossHelperGroup1:
  {
    key: "bossHelperGroup1",
    label: "Boss Helper Group 1",
    background: "level1C",
    groupReplaceIndex: 1972992,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 464,
    screenPositionEnd: 464,
    walkablePositionYTop: 63,         // In game is 319
    walkablePositionYBottom: 16,      // In game is 272
    walkablePositionForceShift: 256,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 272,
    levelEditorLimitEnd: 656,     
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy1",
    forbiddenPalleteKey: "area1C",
    forbiddenEnemyKeys: ["slisaur"],
    forbiddenShuffle: true
  },
  lockBossHelperGroup1:
  {
    key: "lockBossHelperGroup1",
    label: "Lock Boss Helper Group 1",
    background: "level1C",
    groupReplaceIndex: 1973760,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 464,
    screenPositionEnd: 464,
    walkablePositionYTop: 63,         // In game is 319
    walkablePositionYBottom: 16,      // In game is 272
    walkablePositionForceShift: 256,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 272,
    levelEditorLimitEnd: 656,     
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenPalleteKey: "area1C",
    forbiddenEnemyKeys: ["slisaur"]
  },
  lockBossHelperGroup2:
  {
    key: "lockBossHelperGroup2",
    label: "Lock Boss Helper Group 2",
    background: "level1C",
    groupReplaceIndex: 1973760,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 464,
    screenPositionEnd: 464,
    walkablePositionYTop: 63,         // In game is 319
    walkablePositionYBottom: 16,      // In game is 272
    walkablePositionForceShift: 256,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 272,
    levelEditorLimitEnd: 656,     
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenPalleteKey: "area1C",
    forbiddenEnemyKeys: ["slisaur"]
  },
  lockBossHelperGroup3:
  {
    key: "lockBossHelperGroup3",
    label: "Lock Boss Helper Group 3",
    background: "level1C",
    groupReplaceIndex: 1973760,
    groupReplaceByteSymbol: "RC",
    screenPositionStart: 464,
    screenPositionEnd: 464,
    walkablePositionYTop: 63,         // In game is 319
    walkablePositionYBottom: 16,      // In game is 272
    walkablePositionForceShift: 256,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 272,
    levelEditorLimitEnd: 656,     
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 9,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenPalleteKey: "area1C",
    forbiddenEnemyKeys: ["slisaur"]
  }
}

// Level 1A:  0380 (896)
// Level 1B:  0000 (0)
// Level 1C:  0000 (0)

// level1A    147, 52
// level1B    79, 16
// level1C    63, 16
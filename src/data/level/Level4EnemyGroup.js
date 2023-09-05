export const level4EnemyGroup =
{
  group1:
  {
    key: "group1",
    label: "Enemy Group 1",
    background: "level4A",
    groupReplaceIndex: 2002944,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 100,
    screenPositionEnd: 600,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: -192,
    levelEditorLimitEnd: 832,   
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 8,
    maxAmount: 40,
    forbiddenPalleteKey: "area4A"
  },
  lockGroup1:
  {
    key: "lockGroup1",
    label: "Lock Enemy Group 1",
    background: "level4A",
    groupReplaceIndex: 2003712,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 640,
    screenPositionEnd: 640,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 448,
    levelEditorLimitEnd: 832,   
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area4A"
  },



  group2:
  {
    key: "group2",
    label: "Enemy Group 2",
    background: "level4B",
    groupReplaceIndex: 2004480,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 70,
    screenPositionEnd: 380,
    walkablePositionYTop: 111,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: -192,
    levelEditorLimitEnd: 592,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 9,
    maxAmount: 40,
    forbiddenPalleteKey: "area4B"
  },
  lockGroup2:
  {
    key: "lockGroup2",
    label: "Lock Enemy Group 2",
    background: "level4B",
    groupReplaceIndex: 2006784,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 400,
    screenPositionEnd: 400,
    walkablePositionYTop: 111,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 208,
    levelEditorLimitEnd: 592,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 5,
    maxAmount: 20,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area4B"
  },
  lockGroup3:
  {
    key: "lockGroup3",
    label: "Lock Enemy Group 3",
    background: "level4B",
    groupReplaceIndex: 2006784,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 400,
    screenPositionEnd: 400,
    walkablePositionYTop: 111,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 208,
    levelEditorLimitEnd: 592,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 3,
    maxAmount: 20,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area4B"
  },
  lockGroup4:
  {
    key: "lockGroup4",
    label: "Lock Enemy Group 4",
    background: "level4B",
    groupReplaceIndex: 2006784,
    groupReplaceByteSymbol: "RC",
    screenPositionStart: 400,
    screenPositionEnd: 400,
    walkablePositionYTop: 111,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 208,
    levelEditorLimitEnd: 592,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 1,
    maxAmount: 20,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area4B"
  },
  lockGroup5:
  {
    key: "lockGroup5",
    label: "Lock Enemy Group 5",
    background: "level4B",
    groupReplaceIndex: 2006784,
    groupReplaceByteSymbol: "RD",
    screenPositionStart: 400,
    screenPositionEnd: 400,
    walkablePositionYTop: 111,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 208,
    levelEditorLimitEnd: 592,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 20,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area4B"
  },
  group3:
  {
    key: "group3",
    label: "Enemy Group 3",
    background: "level4B",
    groupReplaceIndex: 2004480,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 500,
    screenPositionEnd: 1100,
    walkablePositionYTop: 111,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 300,
    levelEditorLimitEnd: 1300,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 8,
    maxAmount: 40,
    forbiddenPalleteKey: "area4B",
    forbiddenEnemyKeys: ["bike"],
  },
  lockGroup6:
  {
    key: "lockGroup6",
    label: "Lock Enemy Group 6",
    background: "level4B",
    groupReplaceIndex: 2008320,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1408,
    screenPositionEnd: 1408,
    walkablePositionYTop: 111,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 1216,
    levelEditorLimitEnd: 1600,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area4B",
    forbiddenEnemyKeys: ["bike", "hogg"],
    forbiddenRangeList: ["outsideRight"]
  },
  group4:
  {
    key: "group4",
    label: "Enemy Group 4",
    background: "level4B",
    groupReplaceIndex: 2004480,
    groupReplaceByteSymbol: "RC",
    screenPositionStart: 1500,
    screenPositionEnd: 2160,
    walkablePositionYTop: 111,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 1300,
    levelEditorLimitEnd: 2368,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 6,
    maxAmount: 40,
    forbiddenPalleteKey: "area4B",
    forbiddenEnemyKeys: ["bike", "hogg"]
  },
  lockGroup7:
  {
    key: "lockGroup7",
    label: "Lock Enemy Group 7",
    background: "level4B",
    groupReplaceIndex: 2009088,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2176,
    screenPositionEnd: 2176,
    walkablePositionYTop: 111,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 1984,
    levelEditorLimitEnd: 2368,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 7,
    maxAmount: 20,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area4B"
  },
  lockGroup8:
  {
    key: "lockGroup8",
    label: "Lock Enemy Group 8",
    background: "level4B",
    groupReplaceIndex: 2009088,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 2176,
    screenPositionEnd: 2176,
    walkablePositionYTop: 111,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 1984,
    levelEditorLimitEnd: 2368,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 20,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area4B"
  },



  group5:
  {
    key: "group5",
    label: "Enemy Group 5",
    background: "level4C",
    groupReplaceIndex: 2009856,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 70,
    screenPositionEnd: 250,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: -192,
    levelEditorLimitEnd: 448,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 11,
    maxAmount: 40,
    forbiddenPalleteKey: "area4C",
    forbiddenEnemyKeys: ["lashT"]
  },
  lockGroup9:
  {
    key: "lockGroup9",
    label: "Lock Enemy Group 9",
    background: "level4C",
    groupReplaceIndex: 2011392,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 256,
    screenPositionEnd: 256,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 64,
    levelEditorLimitEnd: 448,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area4C",
    forbiddenEnemyKeys: ["lashT"]
  },
  group6:
  {
    key: "group6",
    label: "Enemy Group 6",
    background: "level4C",
    groupReplaceIndex: 2009856,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 300,
    screenPositionEnd: 700,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 100,
    levelEditorLimitEnd: 896,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 40,
    forbiddenPalleteKey: "area4C",
    forbiddenEnemyKeys: ["lashT"]
  },
  lockGroup10:
  {
    key: "lockGroup10",
    label: "Lock Enemy Group 10",
    background: "level4C",
    groupReplaceIndex: 2012160,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 704,
    screenPositionEnd: 704,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 512,
    levelEditorLimitEnd: 896,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 10,
    specialStrategy: "reducedLockEnemyStrategy",
    forbiddenPalleteKey: "area4C",
    forbiddenEnemyKeys: ["lashT"]
  },
  lockGroup11:
  {
    key: "lockGroup11",
    label: "Lock Enemy Group 11",
    background: "level4C",
    groupReplaceIndex: 2012160,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 704,
    screenPositionEnd: 704,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 512,
    levelEditorLimitEnd: 896,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 6,
    maxAmount: 15,
    specialStrategy: "reducedLockEnemyStrategy",
    forbiddenPalleteKey: "area4C",
    forbiddenEnemyKeys: ["lashT"]
  },
  lockGroup12:
  {
    key: "lockGroup12",
    label: "Lock Enemy Group 12",
    background: "level4C",
    groupReplaceIndex: 2012160,
    groupReplaceByteSymbol: "RC",
    screenPositionStart: 704,
    screenPositionEnd: 704,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 512,
    levelEditorLimitEnd: 896,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 2,
    maxAmount: 15,
    specialStrategy: "reducedLockEnemyStrategy",
    forbiddenPalleteKey: "area4C",
    forbiddenEnemyKeys: ["lashT"]
  },



  bossHelperGroup1:
  {
    key: "bossHelperGroup1",
    label: "Boss Helper Group 1",
    background: "level4C",
    groupReplaceIndex: 2012928,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1136,
    screenPositionEnd: 1136,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 944,
    levelEditorLimitEnd: 1328,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 0,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy1",
    forbiddenPalleteKey: "area4C",
    forbiddenEnemyKeys: ["lashT"],
    forbiddenShuffle: true
  },
  lockBossHelperGroup1:
  {
    key: "lockBossHelperGroup1",
    label: "Lock Boss Helper Group 1",
    background: "level4C",
    groupReplaceIndex: 2013696,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1136,
    screenPositionEnd: 1136,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 944,
    levelEditorLimitEnd: 1328,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 3,
    maxAmount: 12,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenPalleteKey: "area4C",
    forbiddenEnemyKeys: ["lashT"],
    randomizerStartingSpawnDelayTime: 300
  },
  lockBossHelperGroup2:
  {
    key: "lockBossHelperGroup2",
    label: "Lock Boss Helper Group 2",
    background: "level4C",
    groupReplaceIndex: 2013696,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 1136,
    screenPositionEnd: 1136,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 944,
    levelEditorLimitEnd: 1328,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 3,
    maxAmount: 12,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenPalleteKey: "area4C",
    forbiddenEnemyKeys: ["lashT"],
    randomizerStartingSpawnDelayTime: 300
  },
  lockBossHelperGroup3:
  {
    key: "lockBossHelperGroup3",
    label: "Lock Boss Helper Group 3",
    background: "level4C",
    groupReplaceIndex: 2013696,
    groupReplaceByteSymbol: "RC",
    screenPositionStart: 1136,
    screenPositionEnd: 1136,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 944,
    levelEditorLimitEnd: 1328,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 3,
    maxAmount: 12,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenPalleteKey: "area4C",
    forbiddenEnemyKeys: ["lashT"],
    randomizerStartingSpawnDelayTime: 300
  },
  lockBossHelperGroup4:
  {
    key: "lockBossHelperGroup4",
    label: "Lock Boss Helper Group 4",
    background: "level4C",
    groupReplaceIndex: 2013696,
    groupReplaceByteSymbol: "RD",
    screenPositionStart: 1136,
    screenPositionEnd: 1136,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 944,
    levelEditorLimitEnd: 1328,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 3,
    maxAmount: 14,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenPalleteKey: "area4C",
    forbiddenEnemyKeys: ["lashT"],
    randomizerStartingSpawnDelayTime: 300
  },
  lockBossHelperGroup5:
  {
    key: "lockBossHelperGroup5",
    label: "Lock Boss Helper Group 5",
    background: "level4C",
    groupReplaceIndex: 2013696,
    groupReplaceByteSymbol: "RE",
    screenPositionStart: 1136,
    screenPositionEnd: 1136,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 944,
    levelEditorLimitEnd: 1328,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 3,
    maxAmount: 14,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenPalleteKey: "area4C",
    forbiddenEnemyKeys: ["lashT"],
    randomizerStartingSpawnDelayTime: 300
  },
  lockBossHelperGroup6:
  {
    key: "lockBossHelperGroup6",
    label: "Lock Boss Helper Group 6",
    background: "level4C",
    groupReplaceIndex: 2013696,
    groupReplaceByteSymbol: "RF",
    screenPositionStart: 1136,
    screenPositionEnd: 1136,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 944,
    levelEditorLimitEnd: 1328,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 3,
    maxAmount: 14,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenPalleteKey: "area4C",
    forbiddenEnemyKeys: ["lashT"],
    randomizerStartingSpawnDelayTime: 300
  }
}


// Level 4A:  0000 (0)
// Level 4B:  0000 (0)
// Level 4C:  0000 (0)

// level4A    79, 16
// level4B    111, 16
// level4C    79, 16
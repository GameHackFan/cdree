export const level6EnemyGroup =
{
  group1:
  {
    key: "group1",
    label: "Enemy Group 1",
    background: "level6A",
    groupReplaceIndex: 2031616,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 70,
    screenPositionEnd: 400,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: -192,
    levelEditorLimitEnd: 600,   
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 5,
    maxAmount: 40,
    forbiddenPalleteKey: "area6A",
    forbiddenEnemyKeys: ["bike"]
  },
  lockGroup1:
  {
    key: "lockGroup1",
    label: "Lock Enemy Group 1",
    background: "level6A",
    groupReplaceIndex: 2033920,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 512,
    screenPositionEnd: 512,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 320,
    levelEditorLimitEnd: 704,   
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 20,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area6A",
    forbiddenEnemyKeys: ["bike"],
    forbiddenRangeList: ["outsideRight"]
  },
  lockGroup2:
  {
    key: "lockGroup2",
    label: "Lock Enemy Group 2",
    background: "level6A",
    groupReplaceIndex: 2033920,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 512,
    screenPositionEnd: 512,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 320,
    levelEditorLimitEnd: 704,   
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 20,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area6A",
    forbiddenEnemyKeys: ["bike"],
    forbiddenRangeList: ["outsideRight"]
  },
  group2:
  {
    key: "group2",
    label: "Enemy Group 2",
    background: "level6A",
    groupReplaceIndex: 2031616,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 600,
    screenPositionEnd: 1200,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 400,
    levelEditorLimitEnd: 1400,   
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 13,
    maxAmount: 40,
    forbiddenEnemyKeys: ["bike"],
    forbiddenPalleteKey: "area6A"
  },
  group3:
  {
    key: "group3",
    label: "Enemy Group 3",
    background: "level6A",
    groupReplaceIndex: 2031616,
    groupReplaceByteSymbol: "RC",
    screenPositionStart: 1250,
    screenPositionEnd: 1800,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    levelEditorLimitStart: 1050,
    levelEditorLimitEnd: 2032,   
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 3,
    maxAmount: 40,
    specialStrategy: "weakerEnemyStrategy",
    forbiddenPalleteKey: "area6A"
  },
  lockGroup3:
  {
    key: "lockGroup3",
    label: "Lock Enemy Group 3",
    background: "level6A",
    groupReplaceIndex: 2035456,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 1840,
    screenPositionEnd: 1840,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 1648,
    levelEditorLimitEnd: 2032,   
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 2,
    maxAmount: 20,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area6A"
  },
  lockGroup4:
  {
    key: "lockGroup4",
    label: "Lock Enemy Group 4",
    background: "level6A",
    groupReplaceIndex: 2035456,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 1840,
    screenPositionEnd: 1840,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 1648,
    levelEditorLimitEnd: 2032,   
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 1,
    maxAmount: 15,
    specialStrategy: "reducedLockEnemyStrategy",
    forbiddenPalleteKey: "area6A"
  },
  lockGroup5:
  {
    key: "lockGroup5",
    label: "Lock Enemy Group 5",
    background: "level6A",
    groupReplaceIndex: 2035456,
    groupReplaceByteSymbol: "RC",
    screenPositionStart: 1840,
    screenPositionEnd: 1840,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 1648,
    levelEditorLimitEnd: 2032,   
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 2,
    maxAmount: 15,
    specialStrategy: "reducedLockEnemyStrategy",
    forbiddenPalleteKey: "area6A"
  },
  lockGroup6:
  {
    key: "lockGroup6",
    label: "Lock Enemy Group 6",
    background: "level6A",
    groupReplaceIndex: 2035456,
    groupReplaceByteSymbol: "RD",
    screenPositionStart: 1840,
    screenPositionEnd: 1840,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 1648,
    levelEditorLimitEnd: 2032,   
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 1,
    maxAmount: 15,
    specialStrategy: "reducedLockEnemyStrategy",
    forbiddenPalleteKey: "area6A"
  },
  lockGroup7:
  {
    key: "lockGroup7",
    label: "Lock Enemy Group 7",
    background: "level6A",
    groupReplaceIndex: 2035456,
    groupReplaceByteSymbol: "RE",
    screenPositionStart: 1840,
    screenPositionEnd: 1840,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 1648,
    levelEditorLimitEnd: 2032,   
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    defaultAmount: 4,
    maxAmount: 15,
    specialStrategy: "reducedLockEnemyStrategy",
    forbiddenPalleteKey: "area6A"
  },



  group4:
  {
    key: "group4",
    label: "Enemy Group 4",
    background: "level6B",
    groupReplaceIndex: 2036992,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 70,
    screenPositionEnd: 740,
    walkablePositionYTop: 81,
    walkablePositionYBottom: 18,
    walkablePositionForceShift: 224,
    levelEditorLimitStart: -192,
    levelEditorLimitEnd: 960,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 30,
    levelEditorFOVPositionY: 128,
    defaultAmount: 10,
    maxAmount: 40,
    forbiddenPalleteKey: "area6B"
  },
  lockGroup8:
  {
    key: "lockGroup8",
    label: "Lock Enemy Group 8",
    background: "level6B",
    groupReplaceIndex: 2040064,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 768,
    screenPositionEnd: 768,
    walkablePositionYTop: 81,
    walkablePositionYBottom: 18,
    walkablePositionForceShift: 224,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 576,
    levelEditorLimitEnd: 960,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 30,
    levelEditorFOVPositionY: 128,
    defaultAmount: 2,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area6B"
  },
  group5:
  {
    key: "group5",
    label: "Enemy Group 5",
    background: "level6B",
    groupReplaceIndex: 2036992,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 820,
    screenPositionEnd: 1500,
    walkablePositionYTop: 81,
    walkablePositionYBottom: 18,
    walkablePositionForceShift: 224,
    levelEditorLimitStart: 620,
    levelEditorLimitEnd: 1700,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 30,
    levelEditorFOVPositionY: 128,
    defaultAmount: 3,
    maxAmount: 40,
    forbiddenPalleteKey: "area6B",
    extraEnemies: ["dinoFoot1"]
  },
  group6:
  {
    key: "group6",
    label: "Enemy Group 6",
    background: "level6B",
    groupReplaceIndex: 2036992,
    groupReplaceByteSymbol: "RC",
    screenPositionStart: 1550,
    screenPositionEnd: 2200,
    walkablePositionYTop: 81,
    walkablePositionYBottom: 18,
    walkablePositionForceShift: 224,
    levelEditorLimitStart: 1350,
    levelEditorLimitEnd: 2432,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 30,
    levelEditorFOVPositionY: 128,
    defaultAmount: 4,
    maxAmount: 40,
    specialStrategy: "weakerEnemyStrategy",
    forbiddenPalleteKey: "area6B",
    extraEnemies: ["dinoFoot2"]
  },
  lockGroup9:
  {
    key: "lockGroup9",
    label: "Lock Enemy Group 9",
    background: "level6B",
    groupReplaceIndex: 2040832,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2240,
    screenPositionEnd: 2240,
    walkablePositionYTop: 81,
    walkablePositionYBottom: 18,
    walkablePositionForceShift: 224,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 2048,
    levelEditorLimitEnd: 2432,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 30,
    levelEditorFOVPositionY: 128,
    defaultAmount: 4,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area6B"
  },
  lockGroup10:
  {
    key: "lockGroup10",
    label: "Lock Enemy Group 10",
    background: "level6B",
    groupReplaceIndex: 2041600,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 2784,
    screenPositionEnd: 2784,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 224,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 2592,
    levelEditorLimitEnd: 2976,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    levelEditorFOVPositionY: 160,
    defaultAmount: 3,
    maxAmount: 10,
    specialStrategy: "reducedLockEnemyStrategy",
    forbiddenPalleteKey: "area6B"
  },
  lockGroup11:
  {
    key: "lockGroup11",
    label: "Lock Enemy Group 11",
    background: "level6B",
    groupReplaceIndex: 2041600,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 2784,
    screenPositionEnd: 2784,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 224,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 2592,
    levelEditorLimitEnd: 2976,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    levelEditorFOVPositionY: 160,
    defaultAmount: 2,
    maxAmount: 15,
    specialStrategy: "reducedLockEnemyStrategy",
    forbiddenPalleteKey: "area6B"
  },
  lockGroup12:
  {
    key: "lockGroup12",
    label: "Lock Enemy Group 12",
    background: "level6B",
    groupReplaceIndex: 2041600,
    groupReplaceByteSymbol: "RC",
    screenPositionStart: 2784,
    screenPositionEnd: 2784,
    walkablePositionYTop: 79,
    walkablePositionYBottom: 16,
    walkablePositionForceShift: 224,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 2592,
    levelEditorLimitEnd: 2976,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 0,
    levelEditorFOVPositionY: 160,
    defaultAmount: 4,
    maxAmount: 15,
    specialStrategy: "reducedLockEnemyStrategy",
    forbiddenPalleteKey: "area6B"
  },



  group7:
  {
    key: "group7",
    label: "Enemy Group 7",
    background: "level6B",
    groupReplaceIndex: 2042368,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 3320,
    screenPositionEnd: 3510,
    walkablePositionYTop: 81,
    walkablePositionYBottom: 18,
    walkablePositionForceShift: 224,
    levelEditorLimitStart: 3120,
    levelEditorLimitEnd: 3714,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 30,
    levelEditorFOVPositionY: 128,
    defaultAmount: 1,
    maxAmount: 20,
    forbiddenPalleteKey: "area6C",
    forbiddenEnemyKeys: ["wall"],
    forbiddenRangeList: ["outsideRight"]
  },
  group8:
  {
    key: "group8",
    label: "Enemy Group 8",
    background: "level6B",
    groupReplaceIndex: 2042368,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 3770,
    screenPositionEnd: 3830,
    walkablePositionYTop: 97,
    walkablePositionYBottom: 18,
    walkablePositionForceShift: 336,
    levelEditorLimitStart: 3570,
    levelEditorLimitEnd: 4032,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 142,
    levelEditorFOVPositionY: 16,
    defaultAmount: 1,
    maxAmount: 20,
    specialStrategy: "weakerEnemyStrategy",
    forbiddenPalleteKey: "area6C",
    forbiddenEnemyKeys: ["wall"],
    forbiddenRangeList: ["outsideLeft"]
  },
  lockGroup13:
  {
    key: "lockGroup13",
    label: "Lock Enemy Group 13",
    background: "level6B",
    groupReplaceIndex: 2043136,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 3840,
    screenPositionEnd: 3840,
    walkablePositionYTop: 97,
    walkablePositionYBottom: 18,
    walkablePositionForceShift: 336,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 3648,
    levelEditorLimitEnd: 4032,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 142,
    levelEditorFOVPositionY: 16,
    defaultAmount: 1,
    maxAmount: 40,
    specialStrategy: "lockEnemyStrategy",
    forbiddenPalleteKey: "area6C",
    forbiddenEnemyKeys: ["wall"],
    forbiddenRangeList: ["outsideLeft"]
  },



  bossHelperGroup1:
  {
    key: "bossHelperGroup1",
    label: "Boss Helper Group 1",
    background: "level6B",
    groupReplaceIndex: 2043904,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 4096,
    screenPositionEnd: 4096,
    walkablePositionYTop: 97,
    walkablePositionYBottom: 18,
    walkablePositionForceShift: 336,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 3904,
    levelEditorLimitEnd: 4288,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 142,
    levelEditorFOVPositionY: 16,
    defaultAmount: 0,
    maxAmount: 40,
    specialStrategy: "bossEnemyStrategy1",
    forbiddenPalleteKey: "area6C",
    forbiddenEnemyKeys: ["hogg"],
    forbiddenShuffle: true
  },
  lockBossHelperGroup1:
  {
    key: "lockBossHelperGroup1",
    label: "Lock Boss Helper Group 1",
    background: "level6B",
    groupReplaceIndex: 2044672,
    groupReplaceByteSymbol: "RA",
    screenPositionStart: 4096,
    screenPositionEnd: 4096,
    walkablePositionYTop: 97,
    walkablePositionYBottom: 18,
    walkablePositionForceShift: 336,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 3904,
    levelEditorLimitEnd: 4288,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 142,
    levelEditorFOVPositionY: 16,
    defaultAmount: 3,
    maxAmount: 20,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenPalleteKey: "area6C",
    forbiddenEnemyKeys: ["hogg"],
    randomizerStartingSpawnDelayTime: 300
  },
  lockBossHelperGroup2:
  {
    key: "lockBossHelperGroup2",
    label: "Lock Boss Helper Group 2",
    background: "level6B",
    groupReplaceIndex: 2044672,
    groupReplaceByteSymbol: "RB",
    screenPositionStart: 4096,
    screenPositionEnd: 4096,
    walkablePositionYTop: 97,
    walkablePositionYBottom: 18,
    walkablePositionForceShift: 336,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 3904,
    levelEditorLimitEnd: 4288,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 142,
    levelEditorFOVPositionY: 16,
    defaultAmount: 3,
    maxAmount: 20,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenPalleteKey: "area6C",
    forbiddenEnemyKeys: ["hogg"],
    randomizerStartingSpawnDelayTime: 300
  },
  lockBossHelperGroup3:
  {
    key: "lockBossHelperGroup3",
    label: "Lock Boss Helper Group 3",
    background: "level6B",
    groupReplaceIndex: 2044672,
    groupReplaceByteSymbol: "RC",
    screenPositionStart: 4096,
    screenPositionEnd: 4096,
    walkablePositionYTop: 97,
    walkablePositionYBottom: 18,
    walkablePositionForceShift: 336,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 3904,
    levelEditorLimitEnd: 4288,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 142,
    levelEditorFOVPositionY: 16,
    defaultAmount: 3,
    maxAmount: 20,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenPalleteKey: "area6C",
    forbiddenEnemyKeys: ["hogg"],
    randomizerStartingSpawnDelayTime: 300
  },
  lockBossHelperGroup4:
  {
    key: "lockBossHelperGroup4",
    label: "Lock Boss Helper Group 4",
    background: "level6B",
    groupReplaceIndex: 2044672,
    groupReplaceByteSymbol: "RD",
    screenPositionStart: 4096,
    screenPositionEnd: 4096,
    walkablePositionYTop: 97,
    walkablePositionYBottom: 18,
    walkablePositionForceShift: 336,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 3904,
    levelEditorLimitEnd: 4288,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 142,
    levelEditorFOVPositionY: 16,
    defaultAmount: 3,
    maxAmount: 20,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenPalleteKey: "area6C",
    forbiddenEnemyKeys: ["hogg"],
    randomizerStartingSpawnDelayTime: 300
  },
  lockBossHelperGroup5:
  {
    key: "lockBossHelperGroup5",
    label: "Lock Boss Helper Group 5",
    background: "level6B",
    groupReplaceIndex: 2044672,
    groupReplaceByteSymbol: "RE",
    screenPositionStart: 4096,
    screenPositionEnd: 4096,
    walkablePositionYTop: 97,
    walkablePositionYBottom: 18,
    walkablePositionForceShift: 336,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 3904,
    levelEditorLimitEnd: 4288,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 142,
    levelEditorFOVPositionY: 16,
    defaultAmount: 3,
    maxAmount: 20,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenPalleteKey: "area6C",
    forbiddenEnemyKeys: ["hogg"],
    randomizerStartingSpawnDelayTime: 300
  },
  lockBossHelperGroup6:
  {
    key: "lockBossHelperGroup6",
    label: "Lock Boss Helper Group 6",
    background: "level6B",
    groupReplaceIndex: 2044672,
    groupReplaceByteSymbol: "RF",
    screenPositionStart: 4096,
    screenPositionEnd: 4096,
    walkablePositionYTop: 97,
    walkablePositionYBottom: 18,
    walkablePositionForceShift: 336,
    mustHaveSpawnDelayTime: true,
    levelEditorLimitStart: 3904,
    levelEditorLimitEnd: 4288,
    levelEditorShiftX: 492,           // 492 - 0
    levelEditorShiftY: 142,
    levelEditorFOVPositionY: 16,
    defaultAmount: 3,
    maxAmount: 20,
    specialStrategy: "bossEnemyStrategy2",
    forbiddenPalleteKey: "area6C",
    forbiddenEnemyKeys: ["hogg"],
    randomizerStartingSpawnDelayTime: 300
  }
}

// Level 6A:  0000 (0)
// Level 6B:  0000 (0)

// level6A    63, 16
// level6B    81, 18
// level6B    79, 16
// level6B    97, 18
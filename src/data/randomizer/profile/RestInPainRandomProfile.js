export const restInPainRandomProfile = 
{
  key: "restInPain",
  label: "RIP (Rest in Pain)",
  enemyStrategy:
  {
    weakBosses:
    {
      randomMinAmount: 2,
      randomMaxAmount: 3
    },
    toughEnemies:
    {
      randomMinAmount: 2,
      randomMaxAmount: 3
    },
    softEnemies:
    {
      randomMinAmount: 4,
      randomMaxAmount: 7
    },
    barrels:
    {
      randomMinAmount: -2,
      randomMaxAmount: 3
    }
  },
  reducedEnemyStrategy:
  {
    weakBosses:
    {
      randomMinAmount: 2,
      randomMaxAmount: 3
    },
    toughEnemies:
    {
      randomMinAmount: 2,
      randomMaxAmount: 3
    },
    softEnemies:
    {
      randomMinAmount: 4,
      randomMaxAmount: 7
    },
    barrels:
    {
      randomMinAmount: 0,
      randomMaxAmount: 2
    }
  },
  lockEnemyStrategy:
  {
    weakBosses:
    {
      randomMinAmount: 2,
      randomMaxAmount: 3
    },
    toughEnemies:
    {
      randomMinAmount: 2,
      randomMaxAmount: 3
    },
    softEnemies:
    {
      randomMinAmount: 4,
      randomMaxAmount: 7
    },
    movingBarrels:
    {
      randomMinAmount: -2,
      randomMaxAmount: 3
    }
  },
  reducedLockEnemyStrategy:
  {
    weakBosses:
    {
      randomMinAmount: 2,
      randomMaxAmount: 2
    },
    toughEnemies:
    {
      randomMinAmount: 2,
      randomMaxAmount: 2
    },
    softEnemies:
    {
      randomMinAmount: 3,
      randomMaxAmount: 5
    },
    movingBarrels:
    {
      randomMinAmount: 0,
      randomMaxAmount: 1
    }
  },
  weakerEnemyStrategy:
  {
    toughEnemies:
    {
      randomMinAmount: 3,
      randomMaxAmount: 4
    },
    softEnemies:
    {
      randomMinAmount: 5,
      randomMaxAmount: 9
    },
    barrels:
    {
      randomMinAmount: -2,
      randomMaxAmount: 3
    }
  },
  rockEnemyStrategy:
  {
    weakBosses:
    {
      randomMinAmount: 2,
      randomMaxAmount: 3
    },
    toughEnemies:
    {
      randomMinAmount: 2,
      randomMaxAmount: 3
    },
    softEnemies:
    {
      randomMinAmount: 4,
      randomMaxAmount: 7
    },
    fallingRocks:
    {
      randomMinAmount: 3,
      randomMaxAmount: 7
    }
  },
  elevatorEnemyStrategy:
  {
    enemiesFalling:
    {
      randomMinAmount: 10,
      randomMaxAmount: 15
    }
  },
  elevatorLockEnemyStrategy:
  {
    weakBosses:
    {
      randomMinAmount: 2,
      randomMaxAmount: 3
    },
    toughEnemies:
    {
      randomMinAmount: 2,
      randomMaxAmount: 3
    },
    softEnemies:
    {
      randomMinAmount: 4,
      randomMaxAmount: 7
    }
  },
  fallingEnemyStrategy:
  {
    enemiesFalling:
    {
      randomMinAmount: 10,
      randomMaxAmount: 15
    }
  },
  bossEnemyStrategy1:
  {
    strongBosses:
    {
      randomMinAmount: 2,
      randomMaxAmount: 2
    },
    toughEnemies:
    {
      randomMinAmount: 2,
      randomMaxAmount: 3
    },
    softEnemies:
    {
      randomMinAmount: 4,
      randomMaxAmount: 7
    },
    movingBarrels:
    {
      randomMinAmount: -2,
      randomMaxAmount: 3
    }
  },
  bossEnemyStrategy2:
  {
    weakBosses:
    {
      randomMinAmount: 1,
      randomMaxAmount: 1
    },
    toughEnemies:
    {
      randomMinAmount: 2,
      randomMaxAmount: 3
    },
    softEnemies:
    {
      randomMinAmount: 6,
      randomMaxAmount: 9
    },
    movingBarrels:
    {
      randomMinAmount: -2,
      randomMaxAmount: 3
    }
  },


  level1Drops:
  {
    badFoodDrop: 5,
    averageFoodDrop: 7,
    goodFoodDrop: 1,
    excellentFoodDrop: 1,
    anyFoodDrop: 12,
    badWeaponDrop: 1,
    goodWeaponDrop: 1,
  },
  level2Drops:
  {
    badFoodDrop: 3,
    averageFoodDrop: 8,
    goodFoodDrop: 2,
    excellentFoodDrop: 1,
    anyFoodDrop: 14,
    badWeaponDrop: 1,
    goodWeaponDrop: 1,
  },
  level3Drops:
  {
    badFoodDrop: 3,
    averageFoodDrop: 10,
    goodFoodDrop: 2,
    excellentFoodDrop: 1,
    anyFoodDrop: 14,
    badWeaponDrop: 3,
    goodWeaponDrop: 1,
  },
  level4Drops:
  {
    badFoodDrop: 5,
    averageFoodDrop: 10,
    goodFoodDrop: 1,
    excellentFoodDrop: 1,
    anyFoodDrop: 13,
    badWeaponDrop: 2,
    goodWeaponDrop: 1,
  },
  level5Drops:
  {
    badFoodDrop: 2,
    averageFoodDrop: 11,
    goodFoodDrop: 3,
    excellentFoodDrop: 1,
    anyFoodDrop: 12,
    badWeaponDrop: 2,
    goodWeaponDrop: 1,
  },
  level6Drops:
  {
    badFoodDrop: 4,
    averageFoodDrop: 9,
    goodFoodDrop: 2,
    excellentFoodDrop: 1,
    anyFoodDrop: 15,
    badWeaponDrop: 2,
    goodWeaponDrop: 1,
  },
  level7Drops:
  {
    badFoodDrop: 8,
    averageFoodDrop: 11,
    goodFoodDrop: 3,
    excellentFoodDrop: 1,
    anyFoodDrop: 20,
    badWeaponDrop: 2,
    goodWeaponDrop: 1,
  },
  level8Drops:
  {
    badFoodDrop: 6,
    averageFoodDrop: 13,
    goodFoodDrop: 2,
    excellentFoodDrop: 1,
    anyFoodDrop: 18,
    badWeaponDrop: 2,
    goodWeaponDrop: 1,
  },
  bossDrops:
  {
    averageFoodDrop: 2,
    goodFoodDrop: 1,
    anyFoodDrop: 5
  }
}
import { level1EnemyGroup } from "../level/Level1EnemyGroup";
import { level2EnemyGroup } from "../level/Level2EnemyGroup";
import { level3EnemyGroup } from "../level/Level3EnemyGroup";
import { level4EnemyGroup } from "../level/Level4EnemyGroup";
import { level5EnemyGroup } from "../level/Level5EnemyGroup";
import { level6EnemyGroup } from "../level/Level6EnemyGroup";
import { level7EnemyGroup } from "../level/Level7EnemyGroup";
import { level8EnemyGroup } from "../level/Level8EnemyGroup";


import { customRandomProfile } from "./profile/CustomRandomProfile";
import { kindRandomProfile } from "./profile/KindRandomProfile";
import { weakRandomProfile } from "./profile/WeakRandomProfile";
import { easyRandomProfile } from "./profile/EasyRandomProfile";
import { midRandomProfile } from "./profile/MidRandomProfile";
import { hardRandomProfile } from "./profile/HardRandomProfile";
import { wildRandomProfile } from "./profile/WildRandomProfile";
import { restInPainRandomProfile } from "./profile/RestInPainRandomProfile";

import { randomizerEnemyStrategy } from "./strategy/RandomizerEnemyStrategy";


export const randomizerData = 
{
  randomProfile:
  {
    kind: kindRandomProfile,
    weak: weakRandomProfile,
    easy: easyRandomProfile,
    mid: midRandomProfile,
    hard: hardRandomProfile,
    wild: wildRandomProfile,
    restInPain: restInPainRandomProfile,
    custom: customRandomProfile
  },
  enemyStrategy:
  {
    enemies:
    {
      key: "enemies",
      label: "Any Enemy",
      information: "Any enemy that is not a boss or subboss.",
      enemyKeys: randomizerEnemyStrategy.enemies,
    },
    enemiesFalling:
    {
      key: "enemiesFalling",
      label: "Any Enemy (Falling)",
      information: "Any enemy that is not a boss or subboss falling from the sky.",
      enemyKeys: randomizerEnemyStrategy.enemiesFalling,
    },
    enemiesAndBosses:
    {
      key: "enemiesAndBosses",
      label: "Any Enemy or Boss",
      information: "Any enemy or boss with little health.",
      enemyKeys: randomizerEnemyStrategy.enemiesAndBosses,
    },
    softEnemies:
    {
      key: "softEnemies",
      label: "Any Soft Enemy",
      information: "Any Enemy that is not a boss or Zeke, Mack, Shivat, " + 
                   "Bludge, Lash Terhune and Walther Terhune.",
      enemyKeys: randomizerEnemyStrategy.softEnemies,
    },
    toughEnemies:
    {
      key: "toughEnemies",
      label: "Any Tough Enemy",
      information: "Zeke, Mack, Shivat, Bludge, Lash Terhune or Walther Terhune.",
      enemyKeys: randomizerEnemyStrategy.toughEnemies,
    },
    weakBosses:
    {
      key: "weakBosses",
      label: "Weak Boss",
      information: "Any boss as subboss, with little health.",
      enemyKeys: randomizerEnemyStrategy.weakBosses,
    },
    strongBosses:
    {
      key: "strongBosses",
      label: "Strong Boss",
      information: "Any boss as subboss, with a lot of health.",
      enemyKeys: randomizerEnemyStrategy.strongBosses
    },


    barrels:
    {
      key: "barrels",
      label: "Any Barrel",
      information: "Any barrel, normal, rolling or falling.",
      enemyKeys: randomizerEnemyStrategy.barrels
    },
    movingBarrels:
    {
      key: "movingBarrels",
      label: "Any Moving Barrel",
      information: "Any rolling or falling barrel.",
      enemyKeys: randomizerEnemyStrategy.movingBarrels
    },
    fallingRocks:
    {
      key: "fallingRocks",
      label: "Falling Rock (Round)",
      information: "Falling Rock (Round) only.",
      enemyKeys: randomizerEnemyStrategy.fallingRocks
    },


    anyFood:
    {
      key: "anyFood",
      label: "Any Food",
      information: "Any food.",
      enemyKeys: randomizerEnemyStrategy.anyFood,
    },
    anyWeapon:
    {
      key: "anyWeapon",
      label: "Any Weapon",
      information: "Any weapon",
      enemyKeys: randomizerEnemyStrategy.anyWeapon,
    },


    anyWeaponDrop:
    {
      key: "anyWeaponDrop",
      label: "Any Weapon Drop",
      information: "Any weapon that will be dropped after " + 
                   "breaking a barrel or killing an enemy.",
      enemyKeys: randomizerEnemyStrategy.anyWeaponDrop
    },
    meleeWeaponDrop:
    {
      key: "meleeWeaponDrop",
      label: "Melee Weapon Drop",
      information: "Machete (Butcher), Club, Torch, Knife, Rod, Stick, " +
                   "or Stone that will be dropped after breaking a " + 
                   "barrel or killing an enemy.",
      enemyKeys: randomizerEnemyStrategy.meleeWeaponDrop
    },
    badWeaponDrop:
    {
      key: "badWeaponDrop",
      label: "Bad Weapon Drop",
      information: "Rifle, Revolver, Bazooka, Dynamite or Grenade that will " + 
                   "be dropped after breaking a barrel or killing an enemy.",
      enemyKeys: randomizerEnemyStrategy.badWeaponDrop
    },
    goodWeaponDrop:
    {
      key: "goodWeaponDrop",
      label: "Good Weapon Drop",
      information: "M16, Uzi, or shotgun that will be dropped " + 
                   "after breaking a barrel or killing an enemy.",
      enemyKeys: randomizerEnemyStrategy.goodWeaponDrop
    },


    anyFoodDrop:
    {
      key: "anyFoodDrop",
      label: "Any Food Drop",
      information: "Any food that will be dropped after " + 
                   "breaking a barrel or killing an enemy.",
      enemyKeys: randomizerEnemyStrategy.anyFoodDrop
    },
    badFoodDrop:
    {
      key: "badFoodDrop",
      label: "Bad Food Drop",
      information: "Gum, Chocolate, Donut, Coffee or Croissant that will be " + 
                   "dropped after breaking a barrel or killing an enemy.",
      enemyKeys: randomizerEnemyStrategy.badFoodDrop
    },
    averageFoodDrop:
    {
      key: "averageFoodDrop",
      label: "Average Food Drop",
      information: "Cake, Ice Cream, Pudding or Potato that will be " + 
                   "dropped after breaking a barrel or killing an enemy.",
      enemyKeys: randomizerEnemyStrategy.averageFoodDrop
    },
    goodFoodDrop:
    {
      key: "goodFoodDrop",
      label: "Good Food Drop",
      information: "Hamburger, Hotdog, Pizza or Salad that will be " + 
                   "dropped after breaking a barrel or killing an enemy.",
      enemyKeys: randomizerEnemyStrategy.goodFoodDrop
    },
    excellentFoodDrop:
    {
      key: "excellentFoodDrop",
      label: "Excellent Food Drop",
      information: "Barbecue, Steak, Lobster or Sushi that will be " + 
                   "dropped after breaking a barrel or killing an enemy.",
      enemyKeys: randomizerEnemyStrategy.excellentFoodDrop
    },


    anyTreasureDrop:
    {
      key: "anyTreasureDrop",
      label: "Any Treasure Drop",
      information: "Any treasure that will be dropped after breaking " + 
                   "a barrel or killing an enemy.",
      enemyKeys: randomizerEnemyStrategy.anyTreasureDrop,
    },

    ammoDrop:
    {
      key: "ammoDrop",
      label: "Ammo Drop",
      information: "Ammo will be dropped after breaking a barrel " +
                   "or killing an enemy.",
      enemyKeys: randomizerEnemyStrategy.ammoDrop,
    }
  },
  positionRange:
  {
    outsideLeft: [-50, -60],
    outsideRight: [430, 440],
    inside: [100, 280]
  },
  levels:
  {
    level1: {key: "level1", label: "Level 1", patchKey: "customStage1Patch"},
    level2: {key: "level2", label: "Level 2", patchKey: "customStage2Patch"},
    level3: {key: "level3", label: "Level 3", patchKey: "customStage3Patch"},
    level4: {key: "level4", label: "Level 4", patchKey: "customStage4Patch"},
    level5: {key: "level5", label: "Level 5", patchKey: "customStage5Patch"},
    level6: {key: "level6", label: "Level 6", patchKey: "customStage6Patch"},
    level7: {key: "level7", label: "Level 7", patchKey: "customStage7Patch"},
    level8: {key: "level8", label: "Level 8", patchKey: "customStage8Patch"},
  },
  enemyGroups:
  {
    level1: level1EnemyGroup,
    level2: level2EnemyGroup,
    level3: level3EnemyGroup,
    level4: level4EnemyGroup,
    level5: level5EnemyGroup,
    level6: level6EnemyGroup,
    level7: level7EnemyGroup,
    level8: level8EnemyGroup,
  },
  enemyStrategyList:
  [
    "strongBosses", "weakBosses",
    
    "enemiesAndBosses", "toughEnemies", "enemies",
    "enemiesFalling", "softEnemies",  
    
    "barrels", "fallingRocks", 
    
    "anyFood", "anyWeapon", 
    
    "anyWeaponDrop", "meleeWeaponDrop", 
    "badWeaponDrop", "goodWeaponDrop", 
    
    "anyFoodDrop", "badFoodDrop", "averageFoodDrop", 
    "goodFoodDrop", "excellentFoodDrop", 
    
    "anyTreasureDrop"
  ],
  enemyBytePattern:
  [
    "RR", "RR",       // Stage position spawn trigger or spawn delay time.

    "SS", "SS",       // Static data, do not change it.

    "SS", "SS",       // Static data, do not change it.

    "RR", "RR",       // Position X.     
    
    "RR", "RR",       // Position Y.

    "SS", "SS",       // Static data, do not change it.
                      // posture ID and sub category ID.

    "SS", "SS",       // Static data, do not change it.
                      // Dinosaur give up position X.
    
    "RR", "RR",       // Drop ID and rage.
  ]
}
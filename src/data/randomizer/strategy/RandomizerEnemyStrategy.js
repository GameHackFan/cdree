import { enemyTypeStrategy } from "./EnemyTypeStrategy";
import { enemyFallingTypeStrategy } from "./EnemyFallingTypeStrategy";
import { enemyAndBossTypeStrategy } from "./EnemyAndBossTypeStrategy";
import { softEnemyTypeStrategy } from "./SoftEnemyTypeStrategy";
import { toughEnemyTypeStrategy } from "./ToughEnemiesTypeStrategy";
import { weakBossTypeStrategy } from "./WeakBossTypeStrategy";
import { strongBossTypeStrategy } from "./StrongBossTypeStrategy";

import { barrelTypeStrategy } from "./BarrelTypeStrategy";
import { fallingRockTypeStrategy } from "./FallingRockTypeStrategy";
import { movingBarrelTypeStrategy } from "./MovingBarrelTypeStrategy";

import { weaponDropTypeStrategy } from "./WeaponDropTypeStrategy";
import { meleeWeaponDropTypeStrategy } from "./MeleeWeaponDropTypeStrategy";
import { badWeaponDropTypeStrategy } from "./BadWeaponDropTypeStrategy";
import { goodWeaponDropTypeStrategy } from "./GoodWeaponDropTypeStrategy";

import { foodDropTypeStrategy } from "./FoodDropTypeStrategy";
import { badFoodDropTypeStrategy } from "./BadFoodDropTypeStrategy";
import { averageFoodDropTypeStrategy } from "./AverageFoodDropTypeStrategy";
import { goodFoodDropTypeStrategy } from "./GoodFoodDropTypeStrategy";
import { excellentFoodDropTypeStrategy } from "./ExcellentFoodDropTypeStrategy";

import { treasureDropTypeStrategy } from "./TreasureDropTypeStrategy";
import { ammoDropTypeStrategy } from "./AmmoDropTypeStrategy";

import { anyFoodTypeStrategy } from "./AnyFoodTypeStrategy";
import { anyWeaponTypeStrategy } from "./AnyWeaponTypeStrategy";


export const randomizerEnemyStrategy = 
{
  enemies: enemyTypeStrategy,
  enemiesFalling: enemyFallingTypeStrategy,
  enemiesAndBosses: enemyAndBossTypeStrategy,
  softEnemies: softEnemyTypeStrategy, 
  toughEnemies: toughEnemyTypeStrategy,
  weakBosses: weakBossTypeStrategy,
  strongBosses: strongBossTypeStrategy,

  barrels: barrelTypeStrategy,
  fallingRocks: fallingRockTypeStrategy,
  movingBarrels: movingBarrelTypeStrategy,

  anyFood: anyFoodTypeStrategy,
  anyWeapon: anyWeaponTypeStrategy,

  anyWeaponDrop: weaponDropTypeStrategy,
  meleeWeaponDrop: meleeWeaponDropTypeStrategy,
  badWeaponDrop: badWeaponDropTypeStrategy,
  goodWeaponDrop: goodWeaponDropTypeStrategy,

  anyFoodDrop: foodDropTypeStrategy,
  badFoodDrop: badFoodDropTypeStrategy,
  averageFoodDrop: averageFoodDropTypeStrategy,
  goodFoodDrop: goodFoodDropTypeStrategy,
  excellentFoodDrop:  excellentFoodDropTypeStrategy,

  anyTreasureDrop: treasureDropTypeStrategy,
  ammoDrop: ammoDropTypeStrategy
}
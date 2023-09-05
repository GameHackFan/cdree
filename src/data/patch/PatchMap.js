import { disableLoadDipswitchesPatch } from "./DisableLoadDipswitchesPatch";
import { playerLifebarImprovementPatch } from "./PlayerLifebarImprovementPatch";
import { enemyImprovementPatch } from "./EnemyImprovementPatch";
import { objectPalleteFix } from "./ObjectPalleteFix";
import { dropImprovementPatch } from "./DropImprovementPatch";
import { foodImprovementPatch } from "./FoodImprovementPatch";
import { force40StrengthPatch } from "./Force40StrengthPatch";
import { randomizerHealthPatch } from "./RandomizerHealthPatch";
import { randomizerHealthPatch2 } from "./RandomizerHealthPatch2";
import { featuresPatch } from "./FeaturesPatch";

import { enemyLifebarColorImprovementPatch }
    from "./EnemyLifebarColorImprovementPatch";

import { customStage1Patch } from "./CustomStage1Patch";
import { customStage2Patch } from "./CustomStage2Patch";
import { customStage3Patch } from "./CustomStage3Patch";
import { customStage4Patch } from "./CustomStage4Patch";
import { customStage5Patch } from "./CustomStage5Patch";
import { customStage6Patch } from "./CustomStage6Patch";
import { customStage7Patch } from "./CustomStage7Patch";
import { customStage8Patch } from "./CustomStage8Patch";

import { defaultTextPatch } from "./DefaultTextPatch";
import { levelEditorTextPatch } from "./LevelEditorTextPatch";
import { randomizerTextPatch } from "./RandomizerTextPatch";


export const patchMap = 
{
  disableLoadDipswitchesPatch:
  {
    key:    "disableLoadDipswitchesPatch",
    label:  "Disable Load Dipswitches Patch",
    text:   "This patch removes the instructions that load " +
            "the data from the dipswitches in the FF8022 " + 
            "memory region. Very usefull to manually activate " + 
            "the debug options available in case the Debug " +
            "Mode is active (FF84AA is set to 01).",
    patch:  disableLoadDipswitchesPatch,
    show:   true
  },
  enemyLifebarColorImprovementPatch:
  {
    key:    "enemyLifebarColorImprovementPatch",
    label:  "Enemy Lifebar Color Improvement Patch",
    text:   "This patch adds support to up to 16 lifebar " +
            "colors for the enemy lifebars, it also ensures " +
            "that if the enemy has 16+ lifebars, the colors " + 
            "will circle around.",
    patch:  enemyLifebarColorImprovementPatch,
    show:   true
  },
  playerLifebarImprovementPatch:
  {
    key:    "playerLifebarImprovementPatch",
    label:  "Player Lifebar Improvement Patch",
    text:   "This patch adds support to up to 16 lifebar " +
            "colors for the player lifebars, it ensures that " +
            "if the player has 16+ lifebars, the colors will " + 
            "circle around. It also forces all 3 players to " + 
            "use different palletes for their lifebars, which " +
            "is needed so the lifebar color changes made do " + 
            "not affect all players at once. Finally, it " + 
            "fixes a bug with the lifebar progress, not " + 
            "allowing values outside the range, which was " + 
            "making the game draw the lifebar bugged sometimes " + 
            "if the player HP is over 64.",
    patch:  playerLifebarImprovementPatch,
    show:   true
  },
  enemyImprovementPatch:
  {
    key:    "enemyImprovementPatch",
    label:  "Enemy Improvement Patch",
    text:   "This patch brings bosses behaving like subbosses, " + 
            "Shivat custom posture ID support, R Hopper " + 
            "improvements, Bike improvements.",
    patch:  enemyImprovementPatch,
    show:   true
  },
  objectPalleteFix:
  {
    key:    "objectPalleteFix",
    label:  "Object Pallete Fix",
    text:   "This patch brings pallete fixes that were forgotten " + 
            "to be added by DINORE. ",
    patch:  objectPalleteFix,
    show:   true
  },
  dropImprovementPatch:
  {
    key:    "dropImprovementPatch",
    label:  "Drop Improvement Patch",
    text:   "This patch forces enemies to use the same item drop " +
            "list used by the barrels, that alone allow more items " +
            "to be dropped by both, barrels and enemies. This patch " + 
            "also changes some duplicated item drops, making them " + 
            "drop items that weren't available in the list instead, " +
            "like the butcher machete, covering all item drops " +
            "possible (the original game doesn't).",
    patch:  dropImprovementPatch,
    show:   true
  },
  foodImprovementPatch:
  {
    key:    "foodImprovementPatch",
    label:  "Food Improvement Patch",
    text:   "This patch changes how much each food heals, to better " + 
            "balance the healing values because in the original game " +
            "many food heals the same amount, which makes most of the " + 
            "food in the game more like a skin then a different food.",
    patch:  foodImprovementPatch,
    show:   true
  },
  force40StrengthPatch:
  {
    key:    "force40StrengthPatch",
    label:  "Force 40 Strength Patch",
    text:   "This patch changes all 128 values of the strength list " +
            "to 40, the strongest power available in the original " + 
            "game. By doing this, every strength value is 40 (64), " +
            "so it doesn't matter if the game will randomize a new " +
            "value after you take a punch, since all values are 40, " +
            "your character will always have 40 strength.",
    patch:  force40StrengthPatch,
    show:   true
  },
  featuresPatch:
  {
    key:    "featuresPatch",
    label:  "Features Patch",
    text:   "This patch adds new code to extend core features.",
    patch:  featuresPatch,
    show:   false
  },
  randomizerHealthPatch:
  {
    key:    "randomizerHealthPatch",
    label:  "Randomizer Health Patch",
    text:   "This patch changes the players starting health to " + 
            "C8 (200) and the player max health to 12C (300). " + 
            "This patch is used by the Seed Randomizer.",
    patch:  randomizerHealthPatch,
    show:   false
  },
  randomizerHealthPatch2:
  {
    key:    "randomizerHealthPatch2",
    label:  "Randomizer Health Patch 2",
    text:   "This patch changes the players starting health to " + 
            "12C (300) and the player max health to 12C (300). " + 
            "This patch is used by the Seed Randomizer.",
    patch:  randomizerHealthPatch2,
    show:   false
  },
  customStage1Patch:
  {
    key:    "customStage1Patch",
    label:  "Custom Stage 1 Patch",
    text:   "This patch is a clone of all Stage 1 object " +
            "List, it is stored in a different part of the " +
            "ROM and it is made in a way that it supports " +
            "a lot more enemies than the original 1st stage " +
            "in a dynamic way. This patch is used by the " +
            "Level Editor and the Seed Randomizer",
    patch:  customStage1Patch,
    show:   false
  },
  customStage2Patch:
  {
    key:    "customStage2Patch",
    label:  "Custom Stage 2 Patch",
    text:   "This patch is a clone of all Stage 2 object " +
            "List, it is stored in a different part of the " +
            "ROM and it is made in a way that it supports " +
            "a lot more enemies than the original 1st stage " +
            "in a dynamic way. This patch is used by the " +
            "Level Editor and the Seed Randomizer",
    patch:  customStage2Patch,
    show:   false
  },
  customStage3Patch:
  {
    key:    "customStage3Patch",
    label:  "Custom Stage 3 Patch",
    text:   "This patch is a clone of all Stage 3 object " +
            "list, it is stored in a different part of the " +
            "ROM and it is made in a way that it supports " +
            "a lot more enemies than the original 1st stage " +
            "in a dynamic way. This patch is used by the " +
            "Level Editor and the Seed Randomizer",
    patch:  customStage3Patch,
    show:   false
  },
  customStage4Patch:
  {
    key:    "customStage4Patch",
    label:  "Custom Stage 4 Patch",
    text:   "This patch is a clone of all Stage 4 object " +
            "list, it is stored in a different part of the " +
            "ROM and it is made in a way that it supports " +
            "a lot more enemies than the original 1st stage " +
            "in a dynamic way. This patch is used by the " +
            "Level Editor and the Seed Randomizer",
    patch:  customStage4Patch,
    show:   false
  },
  customStage5Patch:
  {
    key:    "customStage5Patch",
    label:  "Custom Stage 5 Patch",
    text:   "This patch is a clone of all Stage 5 object " +
            "list, it is stored in a different part of the " +
            "ROM and it is made in a way that it supports " +
            "a lot more enemies than the original 1st stage " +
            "in a dynamic way. This patch is used by the " +
            "Level Editor and the Seed Randomizer",
    patch:  customStage5Patch,
    show:   false
  },
  customStage6Patch:
  {
    key:    "customStage6Patch",
    label:  "Custom Stage 6 Patch",
    text:   "This patch is a clone of all Stage 6 object " +
            "list, it is stored in a different part of the " +
            "ROM and it is made in a way that it supports " +
            "a lot more enemies than the original 1st stage " +
            "in a dynamic way. This patch is used by the " +
            "Level Editor and the Seed Randomizer",
    patch:  customStage6Patch,
    show:   false
  },
  customStage7Patch:
  {
    key:    "customStage7Patch",
    label:  "Custom Stage 7 Patch",
    text:   "This patch is a clone of all Stage 7 object " +
            "list, it is stored in a different part of the " +
            "ROM and it is made in a way that it supports " +
            "a lot more enemies than the original 1st stage " +
            "in a dynamic way. This patch is used by the " +
            "Level Editor and the Seed Randomizer",
    patch:  customStage7Patch,
    show:   false
  },
  customStage8Patch:
  {
    key:    "customStage8Patch",
    label:  "Custom Stage 8 Patch",
    text:   "This patch is a redirects the object lists to a " +
            "different region of the ROM and it is made in a " +
            "way that it supports a lot more enemies than the " +
            "original 8th stage, but also being dynamic, meaning " + 
            "you don't have to use all the space for it to work. " +
            "This patch is used by the Level Editor and the " +
            "Seed Randomizer",
    patch:  customStage8Patch,
    show:   false
  },
  randomizerTextPatch:
  {
    key:    "randomizerTextPatch",
    label:  "Randomizer Title Screen Patch",
    text:   "Title screen text patch for the Seed " +
            "Randomizer. Used by the Seed Randomizer.",
    patch:  randomizerTextPatch,
    show:   false
  },
  levelEditorTextPatch:
  {
    key:    "levelEditorTextPatch",
    label:  "Level Editor Title Screen Patch",
    text:   "Title screen text patch for the Level " +
            "Editor. Used by the Level Editor",
    patch:  levelEditorTextPatch,
    show:   false
  },
  defaultTextPatch:
  {
    key:    "defaultTextPatch",
    label:  "Default Title Screen Patch",
    text:   "Title screen text patch for anything " +
            "else besides the Seed Randomizer and " +
            "the Level Editor. Used if no text " +
            "was applied.",
    patch:  defaultTextPatch,
    show:   false
  }
}
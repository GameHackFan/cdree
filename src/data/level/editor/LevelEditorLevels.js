import { level1EnemyGroup } from "../Level1EnemyGroup";
import { level2EnemyGroup } from "../Level2EnemyGroup";
import { level3EnemyGroup } from "../Level3EnemyGroup";
import { level4EnemyGroup } from "../Level4EnemyGroup";
import { level5EnemyGroup } from "../Level5EnemyGroup";
import { level6EnemyGroup } from "../Level6EnemyGroup";
import { level7EnemyGroup } from "../Level7EnemyGroup";
import { level8EnemyGroup } from "../Level8EnemyGroup";


export const levelEditorLevels = 
{
  level1:
  {
    key: "level1",
    label: "Level / Stage 1",
    patchKey: "customStage1Patch",
    groups: level1EnemyGroup
  },
  level2:
  {
    key: "level2",
    label: "Level / Stage 2",
    patchKey: "customStage2Patch",
    groups: level2EnemyGroup
  },
  level3:
  {
    key: "level3",
    label: "Level / Stage 3",
    patchKey: "customStage3Patch",
    groups: level3EnemyGroup
  },
  level4:
  {
    key: "level4",
    label: "Level / Stage 4",
    patchKey: "customStage4Patch",
    groups: level4EnemyGroup
  },
  level5:
  {
    key: "level5",
    label: "Level / Stage 5",
    patchKey: "customStage5Patch",
    groups: level5EnemyGroup
  },
  level6:
  {
    key: "level6",
    label: "Level / Stage 6",
    patchKey: "customStage6Patch",
    groups: level6EnemyGroup
  },
  level7:
  {
    key: "level7",
    label: "Level / Stage 7",
    patchKey: "customStage7Patch",
    groups: level7EnemyGroup
  },
  level8:
  {
    key: "level8",
    label: "Level / Stage 8",
    patchKey: "customStage8Patch",
    groups: level8EnemyGroup
  }
}
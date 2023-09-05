<script>
  import ModificationManager from "../modification/ModificationManager.svelte";
  import EditorManager from "../manager/EditorManager.svelte";
  import HealthEditor from "../health/HealthEditor.svelte";
  import StrengthEditor from "../strength/StrengthEditor.svelte";
  import FoodHealEditor from "../food/FoodHealEditor.svelte";
  import WeaponAmmoEditor from "../ammo/WeaponAmmoEditor.svelte";
  import ZoomManager from "../zoom/ZoomManager.svelte";
  import SeedRandomizer from "../randomizer/SeedRandomizer.svelte";
  import PatchManager from "../patch/PatchManager.svelte";
  import LevelEditor from "../level/LevelEditor.svelte";


  export let componentProps;
  const componentMap =
  {
    "manager": EditorManager,
    "zoom": ZoomManager,
    "modification": ModificationManager,
    "food": FoodHealEditor,
    "health": HealthEditor,
    "strength": StrengthEditor,
    "ammo": WeaponAmmoEditor,
    "patch": PatchManager,
    "randomizer": SeedRandomizer,
    "level": LevelEditor,
  }
  const component = componentMap[componentProps.key];
</script>


{#if component}
  <svelte:component this={component} props={componentProps} />
{/if}

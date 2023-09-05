<script>
  import { FoodHealEditor } from "./food-heal-editor";

  export let props;
  let data;
  const setData = (newData) => {data = newData};
  const foodHealEditor = new FoodHealEditor(props, setData);
</script>

<style>@import url("./food-heal-editor.css");</style>


<div class="food flex-i-row">
  <span class={`window-text${data.componentData.showHintText ? "" : " hidden"}`}>
    Use this window to edit how much a food will heal the player HP.
  </span>
  <span class={`window-text${data.componentData.showHintText ? "" : " hidden"}`}>
    Select a food and then type a value between 0 and 65535
    to be the new heal value, values outside that range 
    will be ignored.
  </span>
  <span class={`window-text${data.componentData.showHintText ? "" : " hidden"}`}>
    After doing your changes, click Add Changes to put your 
    changes in the modification queue. If you want to edit a 
    ROM and then change it later, save a preset file and 
    load it later.
  </span>
  <div class="window-content-line flex-i-col">
    <span>Food: </span>
    <select
      class="button-solid"
      value={data.foodKey}
      on:change={(e) => foodHealEditor.onValueChange(e, "setFoodKey")}
    >
      <option value="">Select a food</option>
      {#each foodHealEditor.createFoodList() as chl}
        <option value={chl.key}>{chl.label}</option>
      {/each}
    </select>
  </div>
  <div class={`window-content-line flex-i-col${data.showHealField ? "" : " hidden"}`}>
    <span>Heal: </span>
    <input
      type="text"
      class="textfield"
      value={data.heal}
      on:input={(e) => foodHealEditor.onInputDecimal(e, "setHeal")}
    />
    <button
      class="button-solid"
      on:click={(e) => foodHealEditor.setHealToDefault()}
    >
      Default Value
    </button>
  </div>
  <div class="window-content-line">
    <button
      class="button-solid"
      on:click={(e) => foodHealEditor.clearData()}
    >
      Clear Data
    </button>
    <button
      class="button-solid"
      on:click={foodHealEditor.requestFile}
    >
      Load Preset
      <input
        type="file"
        value=""
        on:change={foodHealEditor.onLoadPresetFileChange}
      />
    </button>
    <button
      class="button-solid"
      on:click={(e) => foodHealEditor.savePresetFile()}
    >
      Save Preset
    </button>
    <button
      class="button-solid"
      on:click={(e) => foodHealEditor.addChanges()}
    >
      Add Changes
    </button>
  </div>
</div>
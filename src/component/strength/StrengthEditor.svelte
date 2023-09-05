<script>
  import { StrengthEditor } from "./strength-editor";

  export let props;
  let data;
  const setData = (newData) => {data = newData}
  const strengthEditor = new StrengthEditor(props, setData);
</script>

<style>@import url("./strength-editor.css");</style>


<div class="strength flex-i-row">
  <span class={`window-text${data.componentData.showHintText ? "" : " hidden"}`}>
    Use this window to edit how much strength a character will have.
  </span>
  <span class={`window-text${data.componentData.showHintText ? "" : " hidden"}`}>
    Select a character and then type a list of 128 values between 0
    and 255 to be the new strength value, values outside that range 
    will be replaced by the default value.
  </span>
  <span class={`window-text${data.componentData.showHintText ? "" : " hidden"}`}>
    After doing your changes, click Add Changes to put your 
    changes in the modification queue. If you want to edit a 
    ROM and then change it later, save a preset file and 
    load it later.
  </span>
  <div class="window-content-line flex-i-col">
    <span>Character: </span>
    <select
      class="button-solid"
      value={data.characterKey}
      on:change={(e) => strengthEditor.onValueChange(e, "setCharacterKey")}
    >
      <option value="">Select a character</option>
      {#each strengthEditor.createCharacterStrengthList() as chl}
        <option value={chl.key}>{chl.label}</option>
      {/each}
    </select>
  </div>
  <div class={`window-content-line flex-i-col${data.showStrengthField ? "" : " hidden"}`}>
    <span>Strength: </span>
    <button
      class="button-solid"
      on:click={(e) => strengthEditor.setStrengthToDefault()}
    >
      Default Value
    </button>
  </div>
  <div class={`window-content-line flex-i-col${data.showStrengthField ? "" : " hidden"}`}>
    <textarea
      class="textarea"
      value={data.strength}
      rows="8"
      on:input={(e) => strengthEditor.onValueChange(e, "setStrength")}
    />
  </div>
  <div class="window-content-line">
    <button
      class="button-solid"
      on:click={(e) => strengthEditor.clearData()}
    >
      Clear Data
    </button>
    <button
      class="button-solid"
      on:click={strengthEditor.requestFile}
    >
      Load Preset
      <input
        type="file"
        value=""
        on:change={strengthEditor.onLoadPresetFileChange}
      />
    </button>
    <button
      class="button-solid"
      on:click={(e) => strengthEditor.savePresetFile()}
    >
      Save Preset
    </button>
    <button
      class="button-solid"
      on:click={(e) => strengthEditor.addChanges()}
    >
      Add Changes
    </button>
  </div>
</div>
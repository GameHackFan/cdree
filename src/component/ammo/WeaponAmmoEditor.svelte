<script>
  import { WeaponAmmoEditor } from "./weapon-ammo-editor";

  export let props;
  let data;
  const setData = (newData) => {data = newData};
  const weaponAmmoEditor = new WeaponAmmoEditor(props, setData);
</script>

<style>@import url("./weapon-ammo-editor.css");</style>


<div class="ammo flex-i-row">
  <span class={`window-text${data.componentData.showAmmoField ? "" : " hidden"}`}>
    Use this window to edit how much ammo a weapon will have.
  </span>
  <span class={`window-text${data.componentData.showAmmoField ? "" : " hidden"}`}>
    Select an ammo and then type a value between 0 and 255 to 
    be the new ammo value, values outside that range will be 
    ignored.
  </span>
  <span class={`window-text${data.componentData.showAmmoField ? "" : " hidden"}`}>
    After doing your changes, click Add Changes to put your 
    changes in the modification queue. If you want to edit a 
    ROM and then change it later, save a preset file and 
    load it later.
  </span>
  <div class="window-content-line flex-i-col">
    <span>Weapon Ammo: </span>
    <select
      class="button-solid"
      value={data.ammoKey}
      on:change={(e) => weaponAmmoEditor.onValueChange(e, "setAmmoKey")}
    >
      <option value="">Select a weapon</option>
      {#each weaponAmmoEditor.createAmmoList() as chl}
        <option value={chl.key}>{chl.label}</option>
      {/each}
    </select>
  </div>
  <div class={`window-content-line flex-i-col${data.showAmmoField ? "" : " hidden"}`}>
    <span>Ammo: </span>
    <input
      type="text"
      class="textfield"
      value={data.ammo}
      on:input={(e) => weaponAmmoEditor.onInputDecimal(e, "setAmmo")}
    />
    <button
      class="button-solid"
      on:click={(e) => weaponAmmoEditor.setAmmoToDefault()}
    >
      Default Value
    </button>
  </div>
  <div class="window-content-line">
    <button
      class="button-solid"
      on:click={(e) => weaponAmmoEditor.clearData()}
    >
      Clear Data
    </button>
    <button
      class="button-solid"
      on:click={weaponAmmoEditor.requestFile}
    >
      Load Preset
      <input
        type="file"
        value=""
        on:change={weaponAmmoEditor.onLoadPresetFileChange}
      />
    </button>
    <button
      class="button-solid"
      on:click={(e) => weaponAmmoEditor.savePresetFile()}
    >
      Save Preset
    </button>
    <button
      class="button-solid"
      on:click={(e) => weaponAmmoEditor.addChanges()}
    >
      Add Changes
    </button>
  </div>
</div>
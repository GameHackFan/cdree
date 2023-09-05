<script>
  import { LevelEditor } from "./level-editor";

  export let props;
  let data;
  const setData = (newData) => {data = newData};
  const levelEditor = new LevelEditor(props, setData);
</script>

<style>@import url("./level-editor.css");</style>


<div class="level flex-i-row">
  <span class={`window-text${data.componentData.showHintText ? "" : " hidden"}`}>
    Use this window to edit all the enemies in all levels.
  </span>
  <span class={`window-text${data.componentData.showHintText ? "" : " hidden"}`}>
    Here you can choose what enemy or item will spawn, 
    you can change the position to trigger their spawn, 
    you can change their X and Y positions, you can 
    change their offensive and defensive behavior 
    and you can change the spawn delay time.
  </span>
  <span class={`window-text${data.componentData.showHintText ? "" : " hidden"}`}>
    You need to select the level and the enemy group to 
    be able to add, remove or edit an enemy or item.
  </span>
  <span class={`window-text${data.componentData.showHintText ? "" : " hidden"}`}>
    Click apply changes and it will apply all customizations 
    to a cloned ROM. Click in Save Preset and it will save a 
    file containing all the customizations. Click in Load 
    Preset to load a file contaning all the customizations made.
  </span>
  <span class={`window-text${data.componentData.showHintText ? "" : " hidden"}`}>
    The Trigger Position, Rage and Spawn Delay Time always 
    have a minimum and maximum value. The editor will allow 
    you to insert any value you want but it will fix those 
    values to be the maximum or the minimum possible to avoid 
    bugs. It is recommended that you always insert valid values 
    between the maximum and the minimum to avoid having 
    surprises about the enemies being automatically modified 
    by the editor when you apply the customizations. Spawn 
    Delay Time is used only by 'Lock' or 'Boss Helper' enemy 
    groups, so it will not always be available to edit.
  </span>
  <span class={`window-text${data.componentData.showHintText ? "" : " hidden"}`}>
    If you want to edit a ROM and then change it later, save 
    a preset file and load it later so you don't lose your 
    customizations.
  </span>
  <div class="window-content-line flex-i-col">
    <span>Level: </span>
    <select
      class="button-solid"
      value={data.levelKey}
      on:change={(e) => levelEditor.onValueChange(e, "setLevelKey")}
    >
      <option value="">Select a level</option>
      {#each levelEditor.createLevelList() as lvl}
        <option value={lvl.key}>{lvl.label}</option>
      {/each}
    </select>
  </div>
  <div class={`window-content-line flex-i-col${data.showGroupField ? "" : " hidden"}`}>
    <span>Enemy Group: </span>
    <select
      class="button-solid"
      value={data.enemyGroupKey}
      on:change={(e) => levelEditor.onValueChange(e, "setEnemyGroupKey")}
    >
      <option value="">Select an enemy group</option>
      {#each data.enemyGroupList as e(e.key)}
        <option value={e.key}>{e.label}</option>
      {/each}
    </select>
  </div>
  <div class={`enemy-group${data.showLevelEditArea ? "" : " hidden"}`}>
    <div class={`level-display ${data.verticalScroll ? "" : "no-"}vertical-scroll`}>
      <img src={data.levelAreaImage} alt="Current Area"/>
    </div>
    <div class="enemy-group-text">
      <span>The original rom has an average of</span>
      <b> {data.enemyGroup.defaultAmount} </b>
      <span>object(s) in this group.</span>
      <br />
      <span>The maximum amount accepted is</span>
      <b> {data.enemyGroup.maxAmount} </b>
      <span>object(s) in this group. </span>
      <br />
      <span>If you insert more than </span>
      <b>{data.enemyGroup.maxAmount}</b>
      <span> the editor will remove the extra object(s) </span>
      <span>to avoid the game to be overloaded.</span>
    </div>
    <div class="hint-text">
      <span>
        <b>Red Line: </b>
        Represents the limits of the group.
      </span>
      <span>
        <b>Yellow Line: </b>
        Represents the position of the camera that will 
        trigger the enemy being spawned.
      </span>
      <span>
        <b>Purple Line: </b>
        Represets the camera's field of view.
      </span>
    </div>
    <div class="window-content-line flex-i-col">
      <button
        class="button-solid"
        on:click={(e) => levelEditor.addEnemy()}
      >
        Add
      </button>
      <button
        class="button-solid"
        on:click={(e) => levelEditor.removeEnemy()}
      >
        Remove Selected
      </button>
      <button
        class="button-solid"
        on:click={(e) => levelEditor.refreshImage()}
      >
        Refresh Image
      </button>
    </div>
    <div class="window-content-line flex-i-col">
      <span>Enemy ID: </span>
      <select
        class="button-solid"
        value={data.enemyId}
        on:change={(e) => levelEditor.onValueChange(e, "setEnemyId")}
      >
        <option value="">Select an enemy id</option>
        {#each data.enemyAddedList as ea(ea.id)}
          <option value={ea.id}>{ea.label}</option>
        {/each}
      </select>
    </div>
    <div class={data.showEnemyFields ? "" : " hidden"}>
      <div class="window-content-line flex-i-col">
        <span>Enemy / Object Filter: </span>
        <input
          type="text"
          class="textfield"
          value={data.filterEnemyString}
          on:input={(e) => levelEditor.onValueChange(e, "setFilterEnemyString")}
        />
      </div>
      <div class="window-content-line flex-i-col">
        <span>Enemy / Object: </span>
        <select
          class="button-solid"
          value={data.enemy.enemyKey}
          on:change={(e) => levelEditor.onValueChange(e, "setEnemyKey")}
        >
          {#each data.enemyFilteredList as e(e.key)}
            <option value={e.key}>{e.label}</option>
          {/each}
        </select>
      </div>
      <div class={`window-content-line flex-i-col${data.showTriggerField ? "" : " hidden"}`}>
        <span>Trigger Position: </span>
        <input
          type="text"
          class="textfield"
          value={data.enemy.triggerPosition}
          title="Position that will activate the enemy spawn."
          on:input={(e) => levelEditor.onInputDecimal(e, "setEnemyTriggerPosition")}
        />
        <b>
          {`(Minimum = ${data.enemyGroup.screenPositionStart}`}
          {`, Maximum = ${data.enemyGroup.screenPositionEnd})`}
        </b>
      </div>
      <div class={`window-content-line flex-i-col${data.showDelayField ? "" : " hidden"}`}>
        <span>Spawn Delay Time: </span>
        <input
          type="text"
          class="textfield"
          value={data.enemy.spawnDelayTime}
          title="Amount of frames that will take to activate the enemy spawn."
          on:input={(e) => levelEditor.onInputDecimal(e, "setEnemySpawnDelayTime")}
        />
        <b>(Minimum = 0, Maximum = 32760)</b>
      </div>
      <div class="window-content-line flex-i-col">
        <span>Position X: </span>
        <input
          type="text"
          class="textfield"
          value={data.enemy.positionX}
          on:input={(e) => levelEditor.onInputDecimal(e, "setEnemyPositionX")}
        />
        <b>
          {`(Minimum = ${data.positionXRange.min}, Maximum = ${data.positionXRange.max})`}
        </b>
      </div>
      <div class="window-content-line flex-i-col">
        <span>Position Y: </span>
        <input
          type="text"
          class="textfield"
          value={data.enemy.positionY}
          on:input={(e) => levelEditor.onInputDecimal(e, "setEnemyPositionY")}
        />
        <b>
          {`(Recommended Values between ${data.enemyGroup.walkablePositionYBottom}`}
          {` and ${data.enemyGroup.walkablePositionYTop})`}
        </b>
      </div>
      <div class="window-content-line flex-i-col">
        <span>Rage: </span>
        <input
          type="text"
          class="textfield"
          value={data.enemy.rage}
          on:input={(e) => levelEditor.onInputDecimal(e, "setEnemyRage")}
        />
        <b>(Minimum = 0, Maximum = 255)</b>
      </div>
      <div class="window-content-line flex-i-col">
        <span>Drop Filter: </span>
        <input
          type="text"
          class="textfield"
          value={data.filterDropString}
          on:input={(e) => levelEditor.onValueChange(e, "setFilterDropString")}
        />
      </div>
      <div class="window-content-line flex-i-col">
        <span>Item Drop: </span>
        <select
          class="button-solid"
          value={data.enemy.dropId?.toString() ?? "0"}
          on:change={(e) => levelEditor.onValueChange(e, "setEnemyDropId")}
        >
          {#each data.itemDropDataList as i}
            <option value={i.id.toString()} title={i.text}>{i.label}</option>
          {/each}
        </select>
      </div>
      <div class="window-content-line flex-i-col">
        <span>Pallete ID: </span>
        <select
          class="button-solid"
          value={data.enemyPalleteId?.toString() ?? ""}
          on:change={(e) => levelEditor.onValueChange(e, "setEnemyPalleteId")}
        >
          <option value="">Select a pallete id</option>
          {#each data.palleteDataList as pd}
            {#if pd.id > 2}
              <option value={pd.id.toString()} title={pd.text}>{pd.label}</option>
            {/if}
          {/each}
        </select>
        <b>(Recommended to use {data.recommendedPalleteText})</b>
      </div>
    <!--
        TODO: Fix the div class, show only if it is a dinosaur
              Fix also the span, it should display the correct label
              Fix title, it is empty
      <div class={`window-content-line flex-i-col${false ? "" : " hidden"}`}>
        <span>Dinosaur Extra Data: </span>
        <input
          type="text"
          class="textfield"
          value={data.enemy.dinosaurExtraData}
          title=""
          on:input={(e) => levelEditor.onInputDecimal(e, "setEnemyDinosaurExtraData")}
        />
        <b>(Minimum = 0, Maximum = 65535)</b>
      </div>
    -->
      <div class="window-content-line flex-i-col">
        <span>No Level Limits: </span>
        <label
          for="noLevelLimits"
          class="checkbox"
          title="If active, it will ignore the Position Y limits imposed by the editor"
        >
          <input
            id="noLevelLimits"
            type="checkbox"
            class="checkbox"
            checked={data.enemy.noLevelLimits}
            on:input={(e) => levelEditor.toggleEnemyNoLevelLimits()}
          />
        </label>
      </div>
    </div>
  </div>
  <div class="window-content-line">
    <button
      class="button-solid"
      on:click={(e) => levelEditor.clearData()}
    >
      Clear Data
    </button>
    <button
      class="button-solid"
      on:click={levelEditor.requestFile}
    >
      Load Preset
      <input
        type="file"
        value=""
        on:change={levelEditor.onLoadPresetFileChange}
      />
    </button>
    <button
      class="button-solid"
      on:click={(e) => levelEditor.savePreset()}
    >
      Save Preset
    </button>
    <button
      class="button-solid"
      on:click={(e) => levelEditor.addChanges()}
    >
      Add Changes
    </button>
  </div>
</div>
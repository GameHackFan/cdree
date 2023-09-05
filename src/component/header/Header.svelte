<script>
  import { Header } from "./header";

  let data;
  const setData = (newData) => {data = newData};
  const header = new Header(setData);
</script>

<style>@import url("./header.css");</style>


<!-- svelte-ignore component-name-lowercase -->
<header class="header flex-i-col" style={`zoom: ${data.zoom}`}>
  <div class="flex-i-col">
    <img
      class="logo"
      src={data.imageMap.editorLogo}
      alt="Cadillacs & Dinosaurs Readjusted Editor"
    />
    <img src={data.imageMap.jackPortrait} alt="Jack" />
    <img src={data.imageMap.hannahPortrait} alt="Hannah" />
    <img src={data.imageMap.mustaphaPortrait} alt="Mustapha" />
    <img src={data.imageMap.messPortrait} alt="Mess" />
  </div>
</header>
<script>
  import Switch from "./Switch.svelte";
  export let text;
  export let target;
</script>

<style>
  .section {
    display: grid;
    grid-template-columns: 90% 10%;
    padding: 24px;
    border-top: 1px solid rgba(66, 53, 53, 0.1);
  }

  .text {
    font-size: 15px;
  }
</style>

<div class="section">
  <div class="text">{text}</div>
  <div class="switch">
    <Switch {target} />
  </div>
</div>

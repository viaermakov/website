<script>
  import { THEMES } from "../consts";

  export let onChange;
  export let value;

  let selected = value;

  function onChangeTheme(e) {
    onChange(e.target.value);
  }
</script>

<style>
  .wrapper {
    position: relative;
    min-width: 95px;
    text-align: center;
    border: 1px solid var(--theme-brand-color);
    border-radius: 4px;
    font-size: 0.9rem;
  }

  .select {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    box-sizing: border-box;
  }

  .select:focus + .text {
    border: 1px solid var(--theme-brand-color);
  }

  .text {
    padding: 0.25rem 0.75rem;
  }
</style>

<label class="wrapper">
  <select
    label="Change theme"
    class="select"
    bind:value={selected}
    on:change={onChangeTheme}>
    {#each Object.keys(THEMES) as key}
      <option value={key}>{THEMES[key]}</option>
    {/each}
  </select>
  <div class="text">{THEMES[selected.toUpperCase()]}</div>
</label>

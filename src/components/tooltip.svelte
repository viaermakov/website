<script>
  import { fade } from 'svelte/transition';

  export let text;
  const WIDTH = 160;
  $: positionX = 0;
  $: positionY = 0;
  $: visible = false;

  function handleMouseOver(e) {
    visible = true;
    const currentWidth = document.documentElement.clientWidth;
    const clientXWithWidth = e.pageX + WIDTH;

    positionX =
      currentWidth < clientXWithWidth
        ? e.clientX - (clientXWithWidth - currentWidth)
        : e.clientX;
    positionY = e.pageY;
  }

  function handleMouseOut() {
    visible = false;
  }
</script>

<style>
  .wrapper {
    width: fit-content;
  }
  .container {
    position: absolute;
    max-width: 160px;
    padding: 8px;
    border-radius: 4px;
    background: black;
    color: white;
    font-size: 0.8rem;
  }
</style>

<div
  class="wrapper"
  on:mouseover={handleMouseOver}
  on:mouseleave={handleMouseOut}>
  <slot />
  {#if visible}
    <div
      transition:fade={{ duration: 200 }}
      class="container"
      style={`top: ${positionY + 12}px; left: ${positionX}px;`}>
      {text}
    </div>
  {/if}
</div>

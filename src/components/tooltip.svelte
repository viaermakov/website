<script>
  export let text;
  const WIDTH = 160;
  $: positionX = 0;
  $: positionY = 0;
  $: visible = false;

  function handleMouseOver(e) {
    visible = true;
    const currentWidth = document.documentElement.clientWidth;
    const clientXWithWidth = e.clientX + WIDTH;
    
    positionX =
      currentWidth < clientXWithWidth
        ? e.clientX - (clientXWithWidth - currentWidth)
        : e.clientX;
    positionY = e.clientY;
  }

  function handleMouseOut() {
    visible = false;
  }
</script>

<style>
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

<div on:mouseover={handleMouseOver} on:mouseleave={handleMouseOut}>
  <slot />
  {#if visible}
    <div
      class="container"
      style={`top: ${positionY + 12}px; left: ${positionX}px;`}>
      {text}
    </div>
  {/if}
</div>

<script>
  import { onMount, onDestroy } from "svelte";

  export let preloading;

  const TIME = 2500;
  const TICK_TIME = 30;
  const DURATION = 500;
  const MIN_PERCENT = 10;
  const MAX_PERCENT = 100;
  const MARGIN = 70;

  let timer;
  $: currentPercent = 0;

  onMount(() => {
    timer = setInterval(() => {
      tick();
    }, TICK_TIME);
  });

  onDestroy(() => {
    clearInterval(timer);
  });

  const getNextPercent = () => {
    if (!$preloading) {
      return MAX_PERCENT;
    }
    const velocity = (TICK_TIME / TIME) * MAX_PERCENT;
    const nextPercent = currentPercent + velocity;

    if (nextPercent >= MARGIN && $preloading) {
      return currentPercent;
    }
    return nextPercent;
  };

  const tick = () => {
    if (!$preloading) {
      stopTick();
      return;
    }
    currentPercent = getNextPercent();
  };

  const stopTick = () => {
    setTimeout(() => {
      currentPercent = 0;
    }, DURATION);
  };

  $: style = `background-color: var(--theme-brand-color); width: ${currentPercent}%`;
</script>

<style>
  .progress {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 1000;
    height: 6px;
    width: 100%;
    border-radius: 2px;
    background-clip: padding-box;
    overflow: hidden;
    will-change: width;
    z-index: 99;
    transition: width 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  }
</style>

{#if $preloading}
  <div
    class="progress"
    class:hidden={MIN_PERCENT < currentPercent && currentPercent < MAX_PERCENT && !$preloading}
    {style} />
{/if}

<script>
  import CaptionItem from "./captionItem.svelte";

  const things = [
    {
      title: "1",
      color: "#86cfa3"
    },
    {
      title: "1",
      color: "#a2c6e0"
    },
    {
      title: "1",
      color: "#ffc7ec"
    },
    {
      title: "1",
      color: "#f8faa0"
    },
    {
      title: "1",
      color: "#adffd8"
    },
    {
      title: "1",
      color: "#ffcf2c48f7ec"
    }
  ];
</script>

<style>
  @keyframes render {
    0% {
      stroke-dasharray: 0 100;
    }
  }

  .canvas {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 800px;
    margin-top: -150px;
  }

  .chart {
    min-width: 400px;
  }

  .unit {
    fill: none;
    stroke-width: 10;
    cursor: pointer;

    animation-name: render;
    animation-duration: 0.5s;
    transition-property: all;
    transition-duration: 0.5s;
  }

  .unit:hover {
    opacity: 0.8;
    stroke-width: 12;
  }

  .unit:nth-child(1) {
    stroke: #86cfa3;
    stroke-dasharray: 8 100;
  }

  .unit:nth-child(2) {
    stroke: #a2c6e0;
    stroke-dasharray: 11 100;
    stroke-dashoffset: -8;
  }

  .unit:nth-child(3) {
    stroke: #ffc7ec;
    stroke-dasharray: 11 100;
    stroke-dashoffset: -19;
  }

  .unit:nth-child(4) {
    stroke: #f8faa0;
    stroke-dasharray: 14 100;
    stroke-dashoffset: -30;
  }

  .unit:nth-child(5) {
    stroke: #adffd8;
    stroke-dasharray: 11 100;
    stroke-dashoffset: -44;
  }

  .unit:nth-child(6) {
    stroke: #f2c48f;
    stroke-dasharray: 45 100;
    stroke-dashoffset: -55;
  }

  .unit:nth-child(7) {
    stroke: #e3bfe2;
    stroke-dasharray: 40 100;
    stroke-dashoffset: -60;
  }
</style>

<div class="canvas">
  <!-- <div class="legend">
    <p class="title">Что мешает во время работы дома?</p>
    <ul class="caption-list">
      {#each things as thing}
        <CaptionItem title={thing.title} />
      {/each}

    </ul>
  </div> -->
  <p style="position: absolute">ssss</p>

  <svg class="chart" width="400" height="400" viewBox="0 0 50 50">

    {#each things as thing}
      <circle class="unit" r="15.9" cx="50%" cy="50%" ><text>sdsd</text></circle>
    {/each}
  </svg>
</div>

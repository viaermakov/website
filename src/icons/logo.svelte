<script>
  import { onMount, onDestroy } from "svelte";
  import { generator } from "../generateLogo.js";
  import anime from "animejs";

  const INIT_PATH =
    "M387.5,333Q304,416,187,398.5Q70,381,70.5,250.5Q71,120,187.5,102Q304,84,387.5,167Q471,250,387.5,333Z";
  const CONFIG = {
    edges: 5,
    growth: 5,
    size: 500,
  };

  let timer = null;

  function animator(newPath, path) {
    anime({
      targets: "#logo path",
      d: [
        {
          value: path,
        },
        {
          value: newPath,
        },
      ],
      easing: "easeOutQuad",
      duration: 3000,
    });
  }

  const changeBlob = () => {
    const { path } = generator(CONFIG);
    animator(INIT_PATH, path);
  };

  const onMouseEnter = () => {
    CONFIG.size = 300;
    CONFIG.growth = 2;
  };

  const onMouseLeave = () => {
    CONFIG.size = 500;
    CONFIG.growth = 5;
  };

  onMount(async () => {
    timer = setInterval(changeBlob, 1000);
  });

  onDestroy(() => {
    clearInterval(timer);
  });
</script>

<style>
  svg {
    transition: all;
    animation: slidein 5s linear infinite;
    margin-left: -16px;
  }

  @media screen and (max-width: 768px) {
    svg {
      display: none;
    }
  }

  @keyframes slidein {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  #gradient stop:first-child {
    stop-color: var(--theme-brand-color);
  }
</style>

<svg
  on:mouseenter={onMouseEnter}
  on:mouseleave={onMouseLeave}
  on:click={changeBlob}
  viewBox="0 0 500 500"
  id="logo"
  xmlns="http://www.w3.org/2000/svg"
  width="100px"
  height="100px">
  <defs>
    <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
      <stop offset="100%" />
    </linearGradient>
  </defs>

  <path d={INIT_PATH} fill="url(#gradient)" />
</svg>

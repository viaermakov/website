<script>
  import { stores } from "@sapper/app";
  import Header from "../components/Header.svelte";
  import Preloader from "../components/preloader.svelte";
  import { theme } from "../store";

  const { preloading } = stores();
  export let segment;

  const MEDIA = "(prefers-color-scheme: dark)";

  $: {
    if (typeof window !== "undefined") {
      const key = window.localStorage.getItem("theme");
      if (!key) {
        const newTheme = window.matchMedia(MEDIA).matches ? "DARK" : "LIGHT";
        theme.update(() => newTheme);
      }
    }
  }
</script>

<style>
  .layout {
    background: var(--theme-background-color);
    color: var(--theme-text-color);

    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    padding: 0 2rem 2rem 2rem;
    transition: background 0.2s, color 0.2s;
  }

  .winter {
    --theme-background-color: #fff;
    --theme-text-color: #012339;
    --theme-brand-color: #236ebf;
    --theme-hover-color: #fff;
  }

  .light {
    --theme-background-color: #fff;
    --theme-text-color: #000;
    --theme-brand-color: #8b963d;
    --theme-hover-color: #fff;
  }

  .night_owl {
    --theme-background-color: #011627;
    --theme-text-color: #fff;
    --theme-brand-color: #c792ea;
    --theme-hover-color: #fff;
  }

  .dark {
    --theme-background-color: #212121;
    --theme-text-color: #fff;
    --theme-brand-color: #8b963d;
    --theme-hover-color: #fff;
  }

  .solarized {
    --theme-background-color: #002b36;
    --theme-text-color: #839496;
    --theme-brand-color: #cb4b16;
    --theme-hover-color: #fff;
  }

  main {
    flex: 1 0 auto;
    max-width: 1600px;
    width: 100%;
  }

  .contacts {
    display: flex;
  }
  @media screen and (max-width: 768px) {
    .layout {
      padding: 1rem;
    }
  }
</style>

<div
  class="layout {$theme.toLowerCase()}"
  style={`visibility: ${process.browser ? 'initial' : 'hidden'}`}>

  <Header {segment} />
  <Preloader {preloading} />

  <main>
    <slot />
  </main>
</div>

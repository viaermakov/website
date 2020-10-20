<script>
  import { fade } from "svelte/transition";
  import { stores } from "@sapper/app";

  import Header from "../components/Header.svelte";
  import Preloader from "../components/preloader.svelte";

  import { theme } from "../store";
  import { contacts } from "../content/data";

  const { preloading } = stores();
  export let segment;

  const MEDIA = "(prefers-color-scheme: dark)";

  $: {
    if (typeof window !== "undefined") {
      const key = window.localStorage.getItem("theme");
      if (!key) {
        const newTheme = window.matchMedia(MEDIA).matches ? "dark" : "light";
        theme.update(() => newTheme);
      }
    }
  }
</script>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    min-height: 100vh;
    padding: 0 2rem;
    transition: all 0.3s;
  }

  .light {
    background: var(--background-light-theme);
    color: var(--text-light-theme);
  }

  .light :global(a) {
    color: var(--text-light-theme);
  }

  .dark :global(a) {
    color: var(--text-dark-theme);
  }

  .dark :global(a):hover {
    color: var(--text-light-theme);
  }

  .dark {
    background: var(--background-dark-theme);
    color: var(--text-dark-theme);
  }

  main {
    flex: 1 0 auto;
    max-width: 1200px;
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
  class="layout {$theme}"
  style={`visibility: ${process.browser ? 'initial' : 'hidden'}`}>

  <Header {segment} />
  <Preloader {preloading} />

  <main>
    <slot />
  </main>
</div>

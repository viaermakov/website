<script>
  import { stores } from "@sapper/app";
  import Header from "../components/Header.svelte";
  import Preloader from "../components/preloader.svelte";
  import { theme } from "../store";
  import { lang } from "../store";
  import { translates } from "../lang";
  
  const { preloading } = stores();
  $: l10n = translates[$lang];

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

<div
  class="layout {$theme.toLowerCase()}"
  style={`visibility: ${process.browser ? "initial" : "hidden"}`}
>
  <Header {segment} />
  <Preloader {preloading} />

  <main>
    <slot />
  </main>

  <footer>{l10n.footer}</footer>
</div>

<style>
  .layout {
    background: var(--theme-background-color);
    color: var(--theme-text-color);

    display: flex;
    flex-direction: column;
    justify-content: center;
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
    --theme-brand-color: #000;
    --theme-hover-color: #fff;
  }

  .night_owl {
    --theme-background-color: #011627;
    --theme-text-color: #fff;
    --theme-brand-color: #c792ea;
    --theme-hover-color: #fff;
  }

  .dark {
    --theme-background-color: #0e0e0e;
    --theme-text-color: #e2e1e1;
    --theme-brand-color: #fff;
    --theme-hover-color: #000;
  }

  .solarized {
    --theme-background-color: #002b36;
    --theme-text-color: #839496;
    --theme-brand-color: #cb4b16;
    --theme-hover-color: #fff;
  }

  main {
    flex: 1 0 auto;
    max-width: 1200px;
    width: 100%;
  }

  .contacts {
    display: flex;
  }

  footer {
    text-align: right;
    width: 100%;
    margin-top: 4rem;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 768px) {
    .layout {
      padding: 1rem;
    }
  }
</style>

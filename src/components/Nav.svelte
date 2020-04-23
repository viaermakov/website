<script>
  import LampIcon from "../icons/lamp.svelte";
  import { getContext, setContext } from "svelte";
  import { theme, lang } from "../store";
  import { translates } from "../lang";

  export let segment;

  $: l10n = translates[$lang];

  let color = "#fff";

  const handleChangeTheme = () => {
    const newTheme = $theme === "light" ? "dark" : "light";
    theme.update(() => newTheme);
    window.localStorage.setItem("theme", newTheme);
    color = newTheme === "light" ? "#fff" : "#ffce00";
  };

  const handleChangeLang = () => {
    const newLang = $lang === "en" ? "ru" : "en";
    lang.update(() => newLang);
    window.localStorage.setItem("lang", newLang);
  };
</script>

<style>
  nav {
    align-items: center;
    display: flex;
    flex: 1;
    justify-content: flex-end;
    margin: 0 1rem;
  }

  a {
    color: inherit;
    text-decoration: none;
    display: block;
    position: relative;
    margin-left: 20px;
  }
  .switcher {
    border: none;
    background: none;
    font-size: 1rem;
    text-decoration: underline;
    cursor: pointer;
    color: #fff;
  }
  .switcher-lang {
    color: var(--text-color);
    text-decoration: dotted;
    margin-left: 2rem;
  }
  .light {
    color: #212121;
  }

  .selected {
    background: var(--link-color);
    color: #212121 !important;
    text-decoration: none;
  }
</style>

<nav>
  <div>
    <a
      rel="prefetch"
      class={segment === 'projects' ? 'selected' : ''}
      href="projects">
      {l10n['Projects']}
    </a>
  </div>
  <div>
    <a rel="prefetch" class={segment === 'blog' ? 'selected' : ''} href="blog">
      {l10n['Articles']}
    </a>
  </div>
</nav>
<button
  class="switcher"
  class:light={$theme === 'light'}
  on:click={handleChangeTheme}
  aria-label="switch theme">
  <LampIcon {color} />
</button>
<button
  class="switcher switcher-lang"
  aria-label="switch lang"
  on:click={handleChangeLang}>
  {$lang}
</button>

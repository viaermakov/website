<script>
  import LampIcon from "../icons/lamp.svelte";
  import { getContext, setContext } from "svelte";
  import { theme, lang } from "../store";
  import { translates } from "../lang";
  import { COLORS, THEMES, LANGUAGES } from "../consts";

  export let segment;

  $: l10n = translates[$lang];
  let color = COLORS.LIGHT_BACKGROUND;

  const handleChangeTheme = () => {
    const newTheme = $theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
    theme.update(() => newTheme);
    window.localStorage.setItem("theme", newTheme);
    color = newTheme === THEMES.LIGHT ? COLORS.LIGHT_BACKGROUND : "#ffce00";
  };

  const handleChangeLang = () => {
    const newLang = $lang === LANGUAGES.EN ? LANGUAGES.RU : LANGUAGES.EN;
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
    color: var(--background-light-theme);
  }

  .switcher:focus {
    border: 1px solid #eee;
  }

  .switcher-lang {
    color: var(--text-color);
    text-decoration: dotted;
  }

  .light {
    color: var(--background-dark-theme);
  }

  .selected {
    background: var(--brand-color-main);
    color: var(--background-dark-theme) !important;
    text-decoration: none;
  }

  @media screen and (max-width: 376px) {
    .theme {
      display: none;
    }
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
  class="switcher theme"
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

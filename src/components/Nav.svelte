<script>
  import Select from "../components/select.svelte";
  import { THEMES, LANGUAGES } from "../consts";
  import { theme, lang } from "../store";
  import { translates } from "../lang";

  export let segment;

  $: l10n = translates[$lang];

  const handleSelectTheme = (value) => {
    const newTheme = THEMES[value];
    theme.update(() => value);
    window.localStorage.setItem("theme", value);
  };

  const handleChangeLang = () => {
    const newLang = $lang === LANGUAGES.EN ? LANGUAGES.RU : LANGUAGES.EN;
    lang.update(() => newLang);
    window.localStorage.setItem("lang", newLang);
  };
</script>

<style>
  nav {
    align-items: flex-end;
    display: flex;
    flex: 1;
    width: 100%;
    justify-content: flex-end;
    margin: 0 1rem;
    font-weight: bold;
  }

  div {
    display: flex;
  }

  a {
    text-decoration: none;
    display: block;
    position: relative;
    margin: 0 20px;
  }

  .switcher {
    border: 1px solid transparent;
    background: none;
    font-size: 1.2rem;
    text-decoration: underline;
    cursor: pointer;
    color: var(--background-light-theme);
    font-weight: bold;
  }

  .switcher:focus {
    border: 1px solid #eee;
  }

  .switcher-lang {
    margin-left: 0.5rem;
    color: var(--text-color);
    text-decoration: dotted;
  }

  /* .selected {
    background: var(--theme-brand-color);
    color: var(--theme-hover-color);
    text-decoration: none;
  } */
</style>

<nav>
  <!-- <div>
    <a
      rel="prefetch"
      class={segment === 'projects' ? 'selected' : ''}
      href="projects">
      {l10n['Projects']}
    </a>
  </div> -->
  <div>
    <a rel="prefetch" class={segment === 'blog' ? 'selected' : ''} href="blog">
      {l10n['Articles']}
    </a>
  </div>
  <div>
    <Select onChange={handleSelectTheme} value={$theme} />
    <button
      class="switcher switcher-lang"
      aria-label="switch lang"
      on:click={handleChangeLang}>
      {$lang}
    </button>
  </div>
</nav>

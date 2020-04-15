<script>
  import LampIcon from "../icons/lamp.svelte";
  import { getContext, setContext } from "svelte";
  import { theme } from "../store";

  export let segment;
  let color = "#fff";

  const handleChangeTheme = () => {
    const newTheme = $theme === "light" ? "dark" : "light";
    theme.update(() => newTheme);
    window.localStorage.setItem("theme", newTheme);
    color = newTheme === "light" ? "#fff" : "#ffce00";
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
      projects
    </a>
  </div>
  <div>
    <a rel="prefetch" class={segment === 'blog' ? 'selected' : ''} href="blog">
      blog
    </a>
  </div>
</nav>
<button
  class="switcher"
  class:light={$theme === 'light'}
  on:click={handleChangeTheme}>
  <LampIcon {color} />
</button>

<script>
  import Nav from "./Nav.svelte";
  import { theme, lang } from "../store";
  import { translates } from "../lang";

  export let segment;

  $: l10n = translates[$lang];
</script>

<style>
  header {
    display: flex;
    margin: 0 auto;
    max-width: 1400px;
    padding: 2em;
    width: 100%;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    header {
      overflow-y: hidden;
      padding: 0 0 1rem 0;
    }
  }
</style>

<header>
  <div>
    <a class={segment === undefined ? 'selected' : ''} href=".">
      {l10n['Viacheslav Ermakov']}
    </a>
  </div>
  <Nav {segment} />
</header>

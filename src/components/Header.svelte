<script>
  import Nav from "./Nav.svelte";
  import Logo from "../icons/logo.svelte";
  import { theme, lang } from "../store";
  import { translates } from "../lang";

  export let segment;

  $: l10n = translates[$lang];
</script>

<style>
  header {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1400px;
    padding: 2em;
    width: 100%;
  }

  .logo {
    display: flex;
    align-items: center;
    animation-duration: 3s;
    animation-name: slidein;
  }

  .text {
    margin-left: 0.6rem;
    font-family: system-ui;
    font-weight: bold;
  }

  @media screen and (max-width: 768px) {
    header {
      overflow-y: hidden;
      padding: 0 0 1rem 0;
    }
  }

  @keyframes slidein {
    50% {
      transform: rotate(180);
    }

    100% {
      transform: rotate(360);
    }
  }
</style>

<header>
  <div class="logo">
    <Logo />
    <a class={segment === undefined ? 'selected text' : 'text'} href=".">
      {l10n['Viacheslav Ermakov']}
    </a>
  </div>
  <Nav {segment} />
</header>

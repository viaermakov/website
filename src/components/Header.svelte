<script>
  import Nav from "./Nav.svelte";
  import Logo from "../icons/logo.svelte";
  import { lang } from "../store";
  import { translates } from "../lang";
  import Tooltip from "../components/tooltip.svelte";

  export let segment;
  let isActive = false;

  $: l10n = translates[$lang];
</script>

<style>
  header {
    display: flex;
    align-items: center;
    margin: 0 auto;
    max-width: 1600px;
    padding: 1rem 0;
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
    <Tooltip text={l10n.logo}>
      <Logo isActive={isActive}/>
    </Tooltip>
    <a
      on:mouseenter={() => (isActive = true)}
      on:mouseleave={() => (isActive = false)}
      class={segment === undefined ? 'selected text' : 'text'}
      href=".">
      {l10n['Viacheslav Ermakov']}
    </a>
  </div>
  <Nav {segment} />
</header>

<script>
  import Header from "../components/Header.svelte";
  import { theme } from "../store";
  import { contacts } from "../content/data";

  export let segment;
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
    --text-color: #212121;
    background: #fff;
    color: var(--text-color);
  }

  .light :global(a) {
    color: #212121;
  }

  .dark :global(a) {
    color: #fff;
  }

  .dark :global(a):hover {
    color: #212121;
  }

  .dark {
    --text-color: #fff;
    background: #212121;
    color: var(--text-color);
  }

  main {
    flex: 1 0 auto;
    max-width: 1100px;
    width: 100%;
  }

  .contacts {
    display: flex;
  }

  .contacts a {
    margin: 0 4px;
  }

  footer {
    padding: 1rem 0;
    display: flex;
    margin: 0 auto;
    max-width: 1400px;
    padding: 2em;
    width: 100%;
  }

  @media screen and (max-width: 768px) {
    .layout {
      padding: 1rem;
    }
    footer {
      padding: 1rem 0 0 0;
    }
    .contacts a {
      margin: 0 16px 0 0;
    }
  }
</style>

<div
  class="layout {$theme}"
  style={`visibility: ${process.browser ? 'initial' : 'hidden'}`}>

  <Header {segment} />

  <main>
    <slot />
  </main>

  <footer>
    <div class="contacts">
      {#each contacts as contact}
        <a class="project-link" target="_blink" href={contact.url}>
          {contact.title}
        </a>
      {/each}
    </div>
  </footer>
</div>

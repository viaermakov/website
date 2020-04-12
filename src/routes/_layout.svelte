<script>
  import Header from "../components/Header.svelte";
  import { theme } from "../store";

  export let segment;

  const contacts = [
    { title: "telegram", url: "https://t.me/nathaniel.maeus" },
    { title: "github", url: "https://github.com/nathanielmaeus" },
    { title: "email", url: "mailto:slavaskainet@gmail.com" }
  ];
</script>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
    min-height: 100vh;
    padding: 0 2rem;
    align-items: center;
  }

  .light {
    background: #fff;
    color: #212121;
  }
  .light :global(a) {
    color: #212121;
  }
  .dark :global(a) {
    color: #fff;
  }
  .dark {
    background: #212121;
    color: #fff;
  }

  main {
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
  }
</style>

<div class="layout {$theme}">

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

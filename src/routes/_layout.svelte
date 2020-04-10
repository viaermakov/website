<script>
  import Header from "../components/Header.svelte";

  export let segment;
  const contacts = [
    { title: "telegram", url: "https://styled-components.com/" },
    { title: "github", url: "https://reactjs.org/" },
    { title: "slavaskainet@gmail.com", url: "mailto:slavaskainet@gmail.com" }
  ];
</script>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100%;
    min-height: 100vh;
    margin: 0 2rem;
  }

  main {
    max-width: 1100px;
    margin: 0 auto;
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
</style>

<div class="layout">
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

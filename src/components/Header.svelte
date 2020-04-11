<script>
  import Nav from "./Nav.svelte";

  export let segment;
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
      padding: 0 0 1rem 0;
    }
  }
</style>

<header>
  <div>
    <a class={segment === undefined ? 'selected' : ''} href=".">
      Viacheslav Ermakov
    </a>
  </div>
  <Nav {segment} />
</header>

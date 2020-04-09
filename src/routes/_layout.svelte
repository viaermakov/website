<script>
  import Header from '../components/Header.svelte';

  export let segment;
</script>

<style>
  .layout {
    min-height: 100%;
    min-height: 100vh;
  }

  main {
    max-width: 1200px;
    margin: 0 auto;
  }

</style>

<div class="layout">
  <Header {segment}/>

  <main>
    <slot></slot>
  </main>

</div>

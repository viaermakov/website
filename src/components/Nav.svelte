<script>
  export let segment;
</script>

<style>
  nav {
    align-items: flex-end;
    display: flex;
    flex: 1;
    font-family: Roboto, sans-serif;
    justify-content: flex-end;
    text-transform: uppercase;
  }

  a {
    color: inherit;
    text-decoration: none;
    display: block;
    position: relative;
    margin-left: 20px;
  }
</style>

<nav>
  <a rel=prefetch class='{segment === "blog" ? "selected" : ""}' href='blog'>blog</a>
</nav>

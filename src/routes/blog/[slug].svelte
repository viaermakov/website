<script context="module">
  export async function preload({ params, query }) {
    const res = await this.fetch(`blog/${params.slug}.json`);
    const data = await res.json();

    if (res.status === 200) {
      return { post: data };
    } else {
      this.error(res.status, data.message);
    }
  }
</script>

<script>
  export let post
</script>

<style>
  header {
    text-align: center;
  }

  header h1 {
    margin-bottom: 0.7em;
  }

  header p {
    color: #AAA;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    font-weight: 600;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
</svelte:head>

<header>
  <p>{post.printDate} ~ {post.printReadingTime}</p>
  <h2>{post.title}</h2>
</header>
<div class="container">
  <article class="content">
    {@html post.html}
  </article>
</div>

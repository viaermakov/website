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
  export let post;
  const shortMessage = `${post.html.slice(3, 100)}...`;
</script>

<style>
  header {
    text-align: center;
  }

  header p {
    color: #aaa;
    text-transform: uppercase;
    font-family: Roboto, sans-serif;
    font-weight: 600;
  }
</style>

<svelte:head>
  <title>{post.title}</title>
  <meta property="og:title" content={post.title} />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content={`https://viaermakov.com/blog/svg-optimization/${post.slug}`} />
  <meta property="og:description" content={shortMessage} />
  <meta property="og:image" content="./1233.jpg" />
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

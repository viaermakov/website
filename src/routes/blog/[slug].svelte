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

  .cover {
    position: relative;
    height: 512px;
    border-radius: 20px;
    background: center no-repeat;
  }

  .cover:before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    height: 512px;
    border-radius: 20px;
    background: linear-gradient(transparent -30%, var(--background-dark-theme));
  }

  .content {
    margin: 3rem auto;
    line-height: 1.65;
    max-width: 728px;
  }

  :global(.content pre, .content img) {
    position: relative;
    width: 120%;
    right: 10%;
    margin: 1rem 0;
  }

  @media screen and (max-width: 768px) {
    .cover {
      display: none;
    }

    :global(.content pre, .content img) {
      width: 100%;
      right: 0;
    }
  }
</style>

<svelte:head>
  <title>{post.title}</title>
  <meta property="og:title" content={post.title} />
  <meta property="og:type" content="website" />
  <meta
    property="og:url"
    content={`https://viaermakov.com/blog/${post.slug}`} />
  <meta property="og:description" content={shortMessage} />
  <meta property="og:image" content={post.cover} />
</svelte:head>

<header>
  <p>{post.printDate} ~ {post.printReadingTime}</p>
  <h2>{post.title}</h2>
  <div class="cover" style={`background-image: url(${post.cover})`} />
</header>
<div class="container">
  <pre />
  <article class="content">
    {@html post.html}
  </article>
</div>

<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then((r) => r.json())
      .then((posts) => {
        return { posts };
      });
  }
</script>

<script>
  import Tags from "../../components/tags.svelte";

  import { theme, lang } from "../../store";
  import { translates } from "../../lang";

  export let posts;
  $: l10n = translates[$lang];

  const getTags = (post) => {
    return post.tags ? post.tags.split(" ") : [];
  };
</script>

<style>
  .container {
    margin-top: 3rem;
  }

  .article {
    line-height: 1.7rem;
  }

  .post-item-date {
    min-width: 140px;
    margin-right: 1rem;
    color: #aaa;
    text-align: left;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    .post-item-date {
      min-width: 90px;
    }
  }
  .post-item {
    display: flex;
    margin: 1rem 0;
  }

  p {
    color: #7b7b7b;
    font-size: 0.9rem;
  }

  .content {
    display: flex;
    align-items: center;
  }

  .hidden {
    display: none;
  }
</style>

<svelte:head>
  <title>{l10n['Articles']}</title>
  <meta property="og:title" content="Viacheslav Ermakov" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://viaermakov.com" />
  <meta property="og:description" content="Personal website" />
  <meta
    property="og:image"
    content="https://res.cloudinary.com/dk4mytxmk/image/upload/v1595920880/website/1233_fk2hoq.jpg" />
</svelte:head>

<section class="container">
  <h2>{l10n['Articles']}</h2>
  {#each posts as post, index}
    <div class="post-item" class:hidden={post.lang !== $lang}>
      <div class="post-item-date">{post.printDate}</div>
      <div class="content">
        <div>
          <a rel="prefetch" class="article" href="blog/{post.slug}">
            {post.title}
          </a>
        </div>
        <p>{post.excerpt}</p>
        <Tags tags={getTags(post)} />
      </div>
    </div>
  {/each}
</section>

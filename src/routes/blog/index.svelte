<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import { theme, lang } from "../../store";
  import { translates } from "../../lang";

  export let posts;
 // $: filteredPost = posts.filter(post => post.lang === $lang);
  $: l10n = translates[$lang];
</script>

<style>
  .container {
    margin-top: 3rem;
  }
  .post-item-date {
    min-width: 90px;
    margin-right: 4px;
    color: #aaa;
    text-align: left;
    text-transform: uppercase;
  }
  .post-item {
    display: flex;
  }

  p {
    color: #7b7b7b;
    font-size: 0.9rem;
  }

  .content {
    margin-top: 2px;
  }
</style>

<svelte:head>
  <title>Articles</title>
</svelte:head>

<section class="container">
  <h2>{l10n['Articles']}</h2>
  {#each posts as post, index}
    <div class="post-item">
      <div class="post-item-date">{post.printDate}</div>
      <div class="content">
        <h5>
          <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
        </h5>
        <p>{post.excerpt}</p>
      </div>
    </div>
  {/each}
</section>

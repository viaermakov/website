<script>
  export let tags;
</script>

<style>
  .tags {
    color: var(--theme-hover-color);
    margin: 0 0.5rem;
  }

  .tag {
    padding: 0.25rem 0.5rem;
    margin: 0 0.25rem;
    border-radius: 0.25rem;
    font-size: 0.8rem;
    background-color: var(--theme-brand-color);
  }

  @media screen and (max-width: 768px) {
    .tags {
      display: none;
    }
  }
</style>

<div class="tags">
  {#each tags as tag(tag)}<span class="tag">{tag}</span>{/each}
</div>

<script>
  export let tags;
</script>

<style>
  .tags {
    color: var(--text-light-theme);
    margin: 0 0.5rem;
  }

  .tag {
    padding: 0.25rem 0.5rem;
    margin: 0 0.25rem;
    border-radius: 0.25rem;
    font-size: 0.8rem;
    background-color: rgba(219, 243, 44, 0.8);
  }

  @media screen and (max-width: 768px) {
    .tags {
      display: none;
    }
  }
</style>

<div class="tags">
  {#each tags as tag, idx}
    <span class="tag">{tag}</span>
  {/each}
</div>

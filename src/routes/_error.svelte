<script>
  import { lang } from "../store";
  import { translates } from "../lang";

  export let status;
  export let error;

  $: l10n = translates[$lang];
  const dev = process.env.NODE_ENV === "development";
</script>

<style>
  span { 
    background-color: var(--brand-color-main);
    color: var(--text-light-theme)
  }
</style>

<svelte:head>
  <title>{status}</title>
</svelte:head>

<h2>{@html l10n.oops}</h2>

<p>{l10n.errorMessage} <span>{error.message}</span></p>

{#if dev && error.stack}
  <pre>{error.stack}</pre>
{/if}

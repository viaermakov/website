<script>
  import Tooltip from "../components/tooltip.svelte";
  import { skills } from "../content/data";
  import { lang } from "../store";
  import { translates } from "../lang";
  import { contacts } from "../content/data";

  $: l10n = translates[$lang];
</script>

<style>
  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .avatar {
    height: 300px;
  }
  .text {
    width: 70%;
  }

  .stack {
    margin-top: 4rem;
  }
  .tags {
    margin-top: 1rem;
    max-width: 520px;
  }
  .list {
    display: flex;
    flex-direction: column;
    margin-top: 0.5rem;
  }
  .contacts {
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
  }

  .contacts a {
    margin: 0.5rem 0 0 0;
  }

  .text div {
    margin: 1rem 0;
  }

  @media screen and (max-width: 768px) {
    .text {
      width: 100%;
    }

    .container {
      margin-top: 1rem;
    }
  }
</style>

<svelte:head>
  <title>Viacheslav Ermakov</title>
  <meta property="og:title" content={l10n['Viacheslav Ermakov']} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://viaermakov.com" />
  <meta property="og:description" content="Personal website" />
</svelte:head>
<main>
  <div class="container">
    <section class="text">
      <h2>{l10n.hi}</h2>
      <h2>{l10n.name}</h2>
      <div>{l10n.short}</div>
      <div>
        {@html l10n.share}
        <div>
          {@html l10n.more}
          {@html l10n.but}
        </div>
      </div>
      <div>{l10n.open}</div>
    </section>
    <Tooltip text={l10n.photo1}>
      <img
        class="avatar"
        src="https://res.cloudinary.com/dk4mytxmk/image/upload/v1595920880/website/1233_fk2hoq.jpg"
        alt="This is my photo"
        width="225"
        height="300"
        loading="lazy" />
    </Tooltip>
  </div>
  <div class="stack">
    <h5>{l10n.tags}</h5>
    <div class="tags">
      {#each skills as item, idx}
        <a
          class="skill"
          target="_blink"
          rel="noreferrer"
          href={item.url}
          alt={item.title}>{item.title}</a>{#if idx !== skills.length - 1}
          ,{' '}
        {/if}
      {/each}
    </div>
  </div>
</main>
<footer>
  <div class="contacts">
    <h5>{l10n.connect}</h5>
    <div class="list">
      {#each contacts as contact}
        <span><a
            class="project-link"
            rel="noreferrer"
            target="_blink"
            href={contact.url}>
            {contact[`title${$lang}`]}
          </a>{contact[`desc${$lang}`] || ''}</span>
      {/each}
    </div>
  </div>
</footer>

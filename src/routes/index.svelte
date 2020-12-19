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

  .section {
    height: 100vh;
    width: 100%;
  }

  .section:first-child {
    height: calc(100vh - 173px);
    width: 70%;
  }
  .addition {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
  .more {
    margin-bottom: 2rem;
  }

  .short {
    font-size: 2rem;
    margin-top: 1rem;
  }

  .base-info {
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

  @media screen and (max-width: 1600px) {
    .avatar {
      width: 300px;
      height: 400px;
    }
  }

  @media screen and (max-width: 1268px) {
    .text,
    section {
      width: 100%;
    }

    .section:first-child {
      width: 100%;
      height: 100%;
    }

    .addition {
      margin-top: 2rem;
      flex-direction: column-reverse;
    }

    .stack,
    .base-info {
      margin-top: 2rem;
    }

    .container {
      margin-top: 1rem;
    }
  }

  @media screen and (max-width: 768px) {
    .avatar {
      width: 100%;
      height: auto;
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

<main class="container">
  <section class="section text">
    <h1>{l10n.hi} {l10n.name}</h1>
    <p class="short">{l10n.short}</p>
    <div class="base-info">
      {@html l10n.share}
      <div class="more">
        <p>
          {@html l10n.more}
        </p>
        <p>
          {@html l10n.but}
        </p>
      </div>
    </div>
    <div>{l10n.open}</div>
  </section>
  <section class=" addition">
    <div>
      <div class="stack">
        <h4>{l10n.tags}</h4>
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
      <div class="contacts">
        <h4>{l10n.connect}</h4>
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
    </div>
    <Tooltip text={l10n.photo1}>
      <img
        src="https://res.cloudinary.com/dk4mytxmk/image/upload/v1595920880/website/1233_fk2hoq.jpg"
        alt="This is my photo"
        class="avatar"
        width="405"
        height="550"
        loading="lazy" />
    </Tooltip>
  </section>
</main>

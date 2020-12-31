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
    flex-wrap: wrap;
  }

  .section {
    width: 90%;
  }

  .short {
    margin-top: 1rem;
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

<div class="container">
  <section class="section text">
    <div>
      <h1># {l10n.hi} {l10n.name}</h1>
      <p class="short">{l10n.short}</p>
    </div>
    <div>
      <h1># {l10n.briefly}</h1>
      <p class="base-info">
        {@html l10n.share}
      </p>
      <p class="base-info">
        {@html l10n.more}
      </p>
      <p class="base-info">
        {@html l10n.but}
      </p>
      <p>{l10n.open}</p>
    </div>
    <div>
      <h1># {l10n.tags}</h1>
      <p class="base-info">
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
      </p>
    </div>
    <div>
      <h1># {l10n.connect}</h1>
      <p class="base-info">
        {#each contacts as contact}
          <div>
            <a
              class="project-link"
              rel="noreferrer"
              target="_blink"
              href={contact.url}>
              {contact[`title${$lang}`]}
            </a>{contact[`desc${$lang}`] || ''}
          </div>
        {/each}
      </p>
    </div>
    <Tooltip text={l10n.photo1}>
      <picture>
        <source
          srcset="https://res.cloudinary.com/dk4mytxmk/image/upload/v1608819901/website/1233_mh0yoy.webp"
          type="image/webp" />
        <img
          src="https://res.cloudinary.com/dk4mytxmk/image/upload/v1608819901/website/1233_fk2hoq.jpg"
          alt="This is my photo"
          class="avatar"
          width="405"
          height="550"
          loading="lazy" />
      </picture>
    </Tooltip>
  </section>
</div>

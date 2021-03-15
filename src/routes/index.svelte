<script>
  import Tooltip from "../components/tooltip.svelte";
  import { skills } from "../content/data";
  import { lang } from "../store";
  import { translates } from "../lang";
  import { contacts } from "../content/data";

  $: l10n = translates[$lang];
</script>

<svelte:head>
  <title>Viacheslav Ermakov</title>
  <meta property="og:title" content={l10n["Viacheslav Ermakov"]} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://viaermakov.com" />
  <meta property="og:description" content="Personal website" />
</svelte:head>

<div class="container">
  <section class="section text">
    <div>
      <h1>{l10n.hi} {l10n.name}</h1>
      <p class="short">{@html l10n.short}</p>
    </div>
    <div>
      <h1>{l10n.briefly}</h1>
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
      <h1>{l10n.tags}</h1>
      <p class="base-info">
        {#each skills as item, idx}
          <a
            class="skill"
            target="_blink"
            rel="noreferrer"
            href={item.url}
            alt={item.title}>{item.title}</a
          >{#if idx !== skills.length - 1}
            ,{" "}
          {/if}
        {/each}
      </p>
    </div>
    <div>
      <h1>{l10n.connect}</h1>
      <p class="base-info">
        {#each contacts as contact}
          <div>
            <a
              class="project-link"
              rel="noreferrer"
              target="_blink"
              href={contact.url}
            >
              {contact[`title${$lang}`]}
            </a>{contact[`desc${$lang}`] || ""}
          </div>
        {/each}
      </p>
    </div>
    <div class="avatar-wrapper">
      <Tooltip text={l10n.photo1}>
        <picture>
          <source
            srcset="https://res.cloudinary.com/dk4mytxmk/image/upload/v1608819901/website/1233_mh0yoy.webp"
            type="image/webp"
          />
          <img
            src="https://res.cloudinary.com/dk4mytxmk/image/upload/v1608819901/website/1233_fk2hoq.jpg"
            alt="This is my photo"
            class="avatar"
            width="405"
            height="550"
            loading="lazy"
            style=" 
              background-size: cover;
              background-image:  url('data:image/svg+xml;charset=utf-8,%3Csvg xmlns=\'http%3A//www.w3.org/2000/svg\'xmlns%3Axlink=\'http%3A//www.w3.org/1999/xlink\' viewBox=\'0 0 1280 853\'%3E%3Cfilter id=\'b\' color-interpolation-filters=\'sRGB\'%3E%3CfeGaussianBlur stdDeviation=\'.5\'%3E%3C/feGaussianBlur%3E%3CfeComponentTransfer%3E%3CfeFuncA type=\'discrete\' tableValues=\'1 1\'%3E%3C/feFuncA%3E%3C/feComponentTransfer%3E%3C/filter%3E%3Cimage filter=\'url(%23b)\' x=\'0\' y=\'0\' height=\'100%25\' width=\'100%25\' xlink%3Ahref=\'data%3Aimage/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAGCAIAAACepSOSAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAs0lEQVQI1wGoAFf/AImSoJSer5yjs52ktp2luJuluKOpuJefsoCNowB+kKaOm66grL+krsCnsMGrt8m1u8mzt8OVoLIAhJqzjZ2tnLLLnLHJp7fNmpyjqbPCqLrRjqO7AIeUn5ultaWtt56msaSnroZyY4mBgLq7wY6TmwCRfk2Pf1uzm2WulV+xmV6rmGyQfFm3nWSBcEIAfm46jX1FkH5Djn5AmodGo49MopBLlIRBfG8yj/dfjF5frTUAAAAASUVORK5CYII=\'%3E%3C/image%3E%3C/svg%3E');
            "
          />
        </picture>
      </Tooltip>
    </div>
  </section>
</div>

<style>
  .avatar-wrapper {
    padding-bottom: 2rem;
  }
  .container {
    display: flex;
    flex-wrap: wrap;
    padding-top: 2rem;
    margin-top: 1rem;
    padding-bottom: 2rem;
    border-top: 6px solid var(--theme-brand-color);
    border-bottom: 6px solid var(--theme-brand-color);
    border-radius: 2px;
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
    .container {
      padding-top: 0;
      margin-top: 0;
      padding-bottom: 0;
      border-top: none;
      border-bottom: none;
    }
    .avatar {
      width: 100%;
      height: auto;
    }
  }
</style>

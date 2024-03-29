<script>
  import GithubIcon from "../icons/githubIcon.svelte";
  import OutIcon from "../icons/outIcon.svelte";
  import Tags from "../components/tags.svelte";

  import { COLORS, LIGHTS_THEMES, THEMES } from "../consts";
  import { projects } from "../content/data";
  import { theme, lang } from "../store";
  import { translates } from "../lang";

  $: l10n = translates[$lang];

  $: color = LIGHTS_THEMES.includes(THEMES[$theme])
    ? COLORS.DARK_BACKGROUND
    : COLORS.LIGHT_BACKGROUND;
</script>

<svelte:head>
  <title>{l10n["Projects"]}</title>
  <meta property="og:title" content="Viacheslav Ermakov" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://viaermakov.com" />
  <meta property="og:description" content="Personal website" />
  <meta
    property="og:image"
    content="https://res.cloudinary.com/dk4mytxmk/image/upload/v1595920880/website/1233_fk2hoq.jpg"
  />
</svelte:head>

<section class="container">
  <h2>{l10n["Projects"]}</h2>
  <div class="projects">
    <ul class="projects-list">
      {#each projects as project}
        <li class="project">
          <div class="description">
            <div>
              <a
                class="project-link"
                target="_blink"
                href={project.href || project.ghUrl}
              >
                {project.title}
              </a>
            </div>
            <div class="desc">{project[`desc${$lang}`]}</div>
          </div>
          <Tags tags={project.tags} />
          {#if project.href}
            <a
              class="other-link outlink"
              aria-label={project.title}
              target="_blink"
              href={project.href}
            >
              <OutIcon {color} />
            </a>
          {/if}
          {#if project.ghUrl}
            <a
              class="other-link"
              target="_blink"
              aria-label={project.title}
              href={project.ghUrl}
            >
              <GithubIcon {color} />
            </a>
          {/if}
        </li>
      {/each}
    </ul>
  </div>
</section>

<style>
  .container {
    margin-top: 3rem;
  }

  .other-link {
    margin: 0.1rem 0.25rem 0 0.25rem;
    border: none;
    text-decoration: none;
  }
  .outlink {
    margin: 0.25rem 0.25rem 0 0.5rem;
  }
  .other-link:hover {
    background: none;
  }

  .projects {
    display: flex;
    width: 100%;
    margin-top: 4rem;
  }

  .desc {
    margin-left: 0.5rem;
    color: #7b7b7b;
  }

  .projects-list {
    display: flex;
    flex-direction: column;
    width: 100%;
    padding-left: 0;
    margin: 0;
  }

  .project {
    display: flex;
    align-items: center;
    margin: 0.5rem 0;
  }

  .description {
    display: flex;
  }

  @media screen and (max-width: 768px) {
    .projects {
      margin-top: 2rem;
    }

    .project {
      margin: 0.2rem 0;
    }

    .other-link {
      display: none;
    }

    .project {
      align-items: initial;
      flex-direction: column;
    }

    .project div {
      min-width: 112px;
    }
  }
</style>

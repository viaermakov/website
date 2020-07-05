<script>
  import GithubIcon from "../icons/githubIcon.svelte";
  import OutIcon from "../icons/outIcon.svelte";
  import Tags from "../components/tags.svelte";

  import { projects } from "../content/data";
  import { theme, lang } from "../store";
  import { translates } from "../lang";

  $: l10n = translates[$lang];
  $: color = $theme === "light" ? "#212121" : "#fff";
</script>

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

    .other-link {
      display: none;
    }

    .project {
      align-items: initial;
      flex-direction: column;
    }

    .project div {
      min-width: 100px;
    }
  }
</style>

<svelte:head>
  <title>{l10n['Projects']}</title>
</svelte:head>

<section class="container">
  <h2>{l10n['Projects']}</h2>
  <section class="projects">
    <div class="projects-list">
      {#each projects as project}
        <div class="project">
          <div class="description">
            <div>
              <a
                class="project-link"
                target="_blink"
                href={project.href || project.ghUrl}>
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
              href={project.href}>
              <OutIcon {color} />
            </a>
          {/if}
          {#if project.ghUrl}
            <a
              class="other-link"
              target="_blink"
              aria-label={project.title}
              href={project.ghUrl}>
              <GithubIcon {color} />
            </a>
          {/if}
        </div>
      {/each}
    </div>
  </section>
</section>

<script>
  import GithubIcon from "../icons/githubIcon.svelte";
  import OutIcon from "../icons/outIcon.svelte";

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
  .project div {
    margin: 0 8px 0 0;
  }
  .other-link {
    margin: 0 4px 0 4px;
    border: none;
    text-decoration: none;
  }
  .outlink {
    margin: 0 4px 0 8px;
  }
  .other-link:hover {
    background: none;
  }

  .projects {
    display: flex;
    width: 100%;
    margin-top: 4rem;
  }
  .projects-list {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .project {
    display: flex;
    align-items: center;
    margin: 0.4rem 0;
  }

  @media screen and (max-width: 768px) {
    .other-link {
      display: none;
    }
    .tags {
      display: none;
    }

    .project {
      align-items: initial;
    }
    .project div {
      min-width: 100px;
    }
  }
</style>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<section class="container">
  <h2>{l10n['Projects']}</h2>
  <section class="projects">
    <div class="projects-list">
      {#each projects as project}
        <div class="project">
          <div>
            <a
              class="project-link"
              target="_blink"
              href={project.href || project.ghUrl}>
              {project.title}
            </a>
          </div>
          <div>{project[`desc${$lang}`]}</div>
          <div class="tags">
            [
            {#each project.tags as tag, idx}
              {tag}
              {#if idx !== project.tags.length - 1}
                <span>,&nbsp;</span>
              {/if}
            {/each}
            ]
          </div>
          {#if project.href}
            <a class="other-link outlink" target="_blink" href={project.href}>
              <OutIcon {color} />
            </a>
          {/if}
          {#if project.ghUrl}
            <a class="other-link" target="_blink" href={project.ghUrl}>
              <GithubIcon {color} />
            </a>
          {/if}
        </div>
      {/each}
    </div>
  </section>
</section>

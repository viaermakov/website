<script>
  import GithubIcon from "../icons/githubIcon.svelte";
  import OutIcon from "../icons/outIcon.svelte";

  import { projects } from "../content/data";
  import { theme } from "../store";

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
    margin: 0 4px 0 8px;
    border: none;
    text-decoration: none;
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
    margin: 0.4rem 0;
  }
</style>

<svelte:head>
  <title>Projects</title>
</svelte:head>

<section class="container">
  <h2>Projects</h2>
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
          <div>{project.desc}</div>
          [
          {#each project.tags as tag, idx}
            {tag}
            {#if idx !== project.tags.length - 1}
              <span>,&nbsp;</span>
            {/if}
          {/each}
          ]
          <a class="other-link" target="_blink" href={project.ghUrl}>
            <OutIcon {color} />
          </a>
          <a class="other-link" target="_blink" href={project.href}>
            <GithubIcon {color} />
          </a>
        </div>
      {/each}
    </div>
  </section>
</section>

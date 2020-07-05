<script context="module">
  export function preload({ params, query }) {
    return this.fetch(`blog.json`)
      .then(r => r.json())
      .then(posts => {
        return { posts };
      });
  }
</script>

<script>
  import GithubIcon from "../icons/githubIcon.svelte";
  import Chart from "../components/chart.svelte";
  import { skills, jobs, projects } from "../content/data";
  import { theme, lang } from "../store";
  import { translates } from "../lang";

  export let posts;

  $: l10n = translates[$lang];
  $: color = $theme === "light" ? "#212121" : "#fff";
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
  .content {
    display: flex;
    width: 100%;
    margin-top: 4rem;
  }
  .projects-list {
    display: flex;
    flex-direction: column;
    flex: 1 1;
    width: 100%;
  }
  .articles-list {
    display: flex;
    flex-direction: column;
    flex: 1 1;
  }
  .project {
    display: flex;
    align-items: center;
    margin: 0.1rem 0;
  }
  .stat {
    align-content: center;
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-template-rows: 100px;
    grid-gap: 16px 8px;
  }
  .desc {
    justify-self: end;
  }
  .static {
    display: flex;
    width: 50%;
  }
  .about {
    width: 50%;
  }
  .other-link {
    margin-left: 0.25rem;
    border: none;
    text-decoration: none;
  }
  .other-link:hover {
    background: none;
  }

  .skill {
    display: inline-block;
    margin: 0 2px;
  }

  .project div {
    margin: 0 8px 0 0;
  }
  .strike {
    text-decoration: line-through;
  }

  .more-link {
    margin-top: 0.5rem;
    width: fit-content;
  }

  .post-item {
    display: flex;
    padding-top: 0.35rem;
  }

  .post-item-date {
    min-width: 90px;
    margin-right: 4px;
    color: #aaa;
    text-align: left;
    text-transform: uppercase;
  }

  @media screen and (max-width: 768px) {
    .container {
      margin-top: 1rem;
    }
    .about {
      width: 100%;
    }
    .static {
      margin-top: 1rem;
      width: 100%;
    }
    .stat {
      grid-template-columns: 90px 1fr;
      grid-template-rows: auto;
      grid-gap: 2rem;
    }
    .desc {
      justify-self: start;
    }
    .content {
      flex-direction: column;
    }

    .project {
      align-items: initial;
    }
    
    .content {
      margin: 3rem 0;
    }
    .articles-list {
      margin-top: 2rem;
    }
  }
</style>

<svelte:head>
  <title>Viacheslav Ermakov</title>
</svelte:head>

<section class="container">
  <div class="about">
    <h1>{l10n['Viacheslav Ermakov']}</h1>
    <h4>{l10n['frontend developer, 23 y.o']}</h4>
    <img class="avatar" src="./1233.jpg" alt="my photo" />
  </div>
  <div class="static">
    <div class="stat">
      <div class="desc">{l10n['Tools that I know:']}</div>
      <div>
        {#each skills as item}
          <a class="skill" target="_blink" href={item.url} alt={item.title}>
            {item.title},
          </a>
        {/each}
      </div>
      <div class="desc">{l10n['I work in:']}</div>
      <div>
        {#each jobs as job, idx}
          {#if idx === jobs.length - 1}
            <a class="skill" target="_blink" href={job.url} alt={job.title}>
              {job.title}
            </a>
          {:else}
            <a
              class="skill strike"
              target="_blink"
              href={job.url}
              alt={job.title}>
              {job.title}
            </a>
          {/if}
          {#if idx !== jobs.length - 1}
            <span>--></span>
          {/if}
        {/each}
      </div>
    </div>
  </div>
</section>
<section class="content">
  <div class="projects-list">
    <h3>{l10n['Projects']}</h3>
    {#each projects.slice(0, 2) as project}
      <div class="project">
        <div>
          <a
            class="project-link"
            aria-label={project.title}
            target="_blink"
            href={project.href}>
            {project.title}
          </a>
        </div>
        <div>{project[`desc${$lang}`]}</div>
        <a
          class="other-link"
          aria-label={project.title}
          target="_blink"
          href={project.ghUrl}>
          <GithubIcon {color} />
        </a>
      </div>
    {/each}
    <a href="/projects" alt={l10n['More']} class="more-link">
      {l10n['More']} ->
    </a>
  </div>
  <div class="articles-list">
    <h3>{l10n['Articles']}</h3>
    {#each posts.filter(post => post.lang === $lang) as post, index}
      <div class="post-item">
        <div class="post-item-date">{post.printDate}</div>
        <div>
          <a rel="prefetch" href="blog/{post.slug}">{post.title}</a>
        </div>
        <p>{post.excerpt}</p>
      </div>
    {/each}
    <a
      style="margin-top: 3px;"
      href="/blog"
      alt={l10n['More']}
      class="more-link">
      {l10n['More']} ->
    </a>
  </div>
</section>

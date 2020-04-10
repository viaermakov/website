<script>
  import GithubIcon from "../icons/githubIcon.svelte";

  const skills = [
    { title: "styled-components", url: "https://styled-components.com/" },
    { title: "react", url: "https://reactjs.org/" },
    { title: "redux", url: "https://redux.js.org/" },
    { title: "svelte", url: "https://svelte.dev/" },
    { title: "webpack", url: "https://webpack.js.org/" },
    { title: "rollup", url: "https://rollupjs.org/guide/en/" },
    { title: "redux-thunk", url: "https://github.com/reduxjs/redux-thunk" },
    { title: "redux-saga", url: "https://github.com/redux-saga/redux-saga" },
    { title: "reselect", url: "https://github.com/reduxjs/reselect" },
    { title: "gatsby", url: "https://www.gatsbyjs.org/" },
    { title: "next", url: "https://nextjs.org/" },
    { title: "typescript", url: "https://www.typescriptlang.org/" },
    { title: "graphql", url: "https://graphql.org/" }
  ];

  const jobs = [
    { title: "AlfaStrahovanie", url: "https://www.alfastrah.ru/" },
    { title: "OneTwoTrip", url: "https://www.onetwotrip.com/ru/" }
  ];

  const projects = [
    {
      title: "Spootifly",
      desc: "Music web player based on Deezer API",
      tags: ["react", "redux", "typescript"],
      href: "https://spoootifly.herokuapp.com/"
    },
    {
      title: "Space game",
      desc: "Small game made by Svelte. I made just for fun and try Svelte",
      tags: ["svelte", "sapper"],
      href: "https://spacegame-svelte.herokuapp.com/"
    },
    {
      title: "Unsplash",
      desc: "Photo Viewer based on Unsplash API ",
      tags: ["react", "redux"],
      href: "https://unsplashapp.herokuapp.com/"
    },
    {
      title: "Telegram chart",
      desc: "Pure canvas charts for telegram contest",
      tags: ["svelte"],
      href: "https://tg-chart.herokuapp.com/"
    }
  ];
</script>

<style>
  .container {
    display: flex;
    justify-content: space-between;
  }
  .avatar {
    height: 300px;
  }
  .projects {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    margin: 2rem 0;
  }
  .project {
    display: flex;
    margin: 0.4rem 0;
  }
  .project-link {
    margin-left: 8px;
  }
  .stat {
    align-content: center;
    display: grid;
    grid-template-columns: 150px 1fr;
    grid-template-rows: 100px;
    grid-gap: 0 8px;
  }
  .desc {
    justify-self: end;
  }
  .static {
    display: flex;
    width: 70%;
  }

  .skill {
    display: inline-block;
    margin: 0 2px;
  }

  .project div {
    margin: 0 8px;
  }
  .strike {
    text-decoration: line-through;
  }
</style>

<svelte:head>
  <title>Viacheslav</title>
</svelte:head>

<div class="container">
  <section class="about">
    <h1>Viacheslav Ermakov</h1>
    <h4>frontend developer, 23 y.o</h4>
    <img class="avatar" src="./1233.jpg" alt="" />
  </section>
  <section class="static">
    <div class="stat">
      <div class="desc">Tools that I know:</div>
      <div>
        {#each skills as item}
          <a class="skill" target="_blink" href={item.url} alt={item.title}>
            {item.title},
          </a>
        {/each}
      </div>
      <div class="desc">I work in:</div>
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
  </section>
</div>
<section class="projects">
  {#each projects as project}
    <div class="project">
      <GithubIcon />
      <a class="project-link" target="_blink" href={project.href}>
        {project.title}
      </a>
      <div>{project.desc}</div>
      <div>
        {#each project.tags as tag}
          <span>{tag}</span>
        {/each}
      </div>
    </div>
  {/each}

</section>

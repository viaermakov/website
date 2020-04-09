<script>
  const skills = [
    {
      title: "CORE",
      tools: "JavaScript(ES5+)"
    },
    {
      title: "STYLES",
      tools: "css scss css-in-js"
    },
    {
      title: "FRAMEWORKS",
      tools: "react/redux svelte vue 3(basic)"
    },
    {
      title: "TOOLS",
      tools: "redux-thunk redux-saga react-router reselect"
    },
    {
      title: "BUNDLE",
      tools: "webpack rollup"
    },
    {
      title: "JVM",
      tools: "gatsby next"
    },
    {
      title: "OTHER",
      tools: "typescript graphql"
    }
  ];

  const projects = [
    {
      title: "Spootifly",
      desc: "Music web player based on Deezer API",
      images: ["../images/spot_1.jpg", "../images/spot_3.jpg"],
      tags: ["react", "redux", "typescript"],
      href: "https://spoootifly.herokuapp.com/"
    },
    {
      title: "Space game",
      desc: "Small game made by Svelte. I made just for fun and try Svelte",
      images: ["../images/space_1.jpg", "../images/space_3.jpg"],

      tags: ["svelte", "sapper"],
      href: "https://spacegame-svelte.herokuapp.com/"
    },
    {
      title: "Unsplash",
      desc: "Photo Viewer based on Unsplash API ",
      images: [
        "../images/spl_1.jpg",
        "../images/spl_2.jpg",
        "../images/spl_3.jpg"
      ],

      tags: ["react", "redux"],
      href: "https://unsplashapp.herokuapp.com/"
    },
    {
      title: "Telegram chart",
      desc: "Pure canvas charts for telegram contest",
      images: ["../images/tg_2.jpg", "../images/tg_2.jpg"],

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
    width: 100%;
    margin: 2rem 0;
  }
  .project {
    display: flex;
  }

  .project div {
    margin: 0 8px;
  }
</style>

<svelte:head>
  <title>Viacheslav</title>
</svelte:head>

<div class="container">
  <section>
    <div>Viacheslav Ermakov</div>
    <div>frontend developer, 23 y.o</div>
    <img class="avatar" src="./1233.jpg" alt="" />
  </section>
  <section>
    {#each skills as item}
      <div>
        <div>
          <span>{item.title}</span>
        </div>
        <div>{item.tools}</div>
      </div>
    {/each}
  </section>

</div>
<section class="projects">
  {#each projects as project}
    <div class="project">
      <div>
        <a href={project.href}>{project.title}</a>
      </div>
      <div>{project.desc}</div>
      <div>
        {#each project.tags as tag}
          <span>{tag}</span>
        {/each}
      </div>
    </div>
  {/each}
</section>

<script>
  import { ottSkills, alfaSkills, jobs, projects } from "../content/data";
  import Tooltip from "../components/tooltip.svelte";
  import OTTLogo from "../icons/ottLogo.svelte";
  import AlfaLogo from "../icons/alfaLogo.svelte";
  import { lang } from "../store";
  import { translates } from "../lang";

  $: l10n = translates[$lang];
</script>

<style>
  .job,
  .main {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
    margin: 2rem 0;
  }
  .job {
    margin: 2rem 0;
  }
  .company span {
    margin-top: 2rem;
  }
  .description,
  .base-info {
    width: 70%;
  }
  .company,
  .avatar {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 20%;
    margin-left: 10%;
  }
  .avatar img {
    width: 150px;
  }
  .stack {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  p {
    margin: 0;
  }
  h4 {
    margin: 2rem 0;
  }
  h5 {
    margin: 1rem 0;
  }

  @media screen and (max-width: 768px) {
    .job,
    .main {
      flex-direction: column;
      margin: 2rem 0;
    }
    .description,
    .base-info {
      width: 100%;
    }
    .company,
    .avatar {
      width: 100%;
      margin-left: 0;
      margin-bottom: 2rem;
    }
  }
</style>

<svelte:head>
  <title>Viacheslav Ermakov</title>
  <meta property="og:title" content={l10n['Viacheslav Ermakov']} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://viaermakov.com" />
  <meta property="og:description" content="Обо мне" />
</svelte:head>

<main>
  <h4>Кто я?</h4>
  <div class="main">
    <div class="avatar">
      <Tooltip text={l10n.photo2}>
        <img
          src="https://res.cloudinary.com/dk4mytxmk/image/upload/v1595920880/website/1233_fk2hoq.jpg"
          alt="This is my photo"
          loading="lazy"
          width="150"
          height="200" />
      </Tooltip>
    </div>
    <section class="base-info">
      <p>
        Я человек, который любит писать код (
        <a alt="link to my projects" rel="prefetch" href="projects">
          по этой ссылке
        </a>
        и на Github много небольших проектов) и учить разные новые штуки
        посредством практики (Svelte, Elm, Typescript, Effector), читаю статьи и
        редко книги (и снова все о разработке). Иногда пытаюсь сам писать
        <a
          alt="link to my blog"
          rel="prefetch"
          class="company-name"
          href="blog">
          некоторые заметки.
        </a>
        Выходит плохо.
      </p>
      <h4>Образование</h4>
      <p>
        Программистом захотел стать в 10 классе и даже начал учить C++. После
        школы поступил в Москву в НИТУ МИСиС на направление Информатика и
        вычислительная техника. Закончил с отличием. Потом закончил магистратуру
        в Информационных системах, получил опыт машинного обучения и анализа
        данных.
      </p>
    </section>

  </div>
  <h4>Чем занимался?</h4>
  <div class="job">
    <div class="company">
      <a
        class="company-name"
        alt="Link to OneTwoTrip website"
        href="https://www.onetwotrip.com">
        OneTwoTrip
      </a>
      <div>Frontend engineer</div>
      <div class="company-period">Июль 2018 — Сейчас</div>
      <span>
        <OTTLogo />
      </span>
      <div class="stack">
        {#each ottSkills as item, idx}
          <a class="skill" target="_blink" href={item.url} alt={item.title}>
            {item.title}
            {#if idx !== ottSkills.length - 1},&nbsp;{/if}
          </a>
        {/each}
      </div>
    </div>
    <div class="description">
      <div>
        <h3>
          <a
            class="company-name"
            alt="link to OneTwoTrip website"
            href="https://www.onetwotrip.com">
            OneTwoTrip
          </a>
        </h3>
        <p>
          Понравилось, что делает компания. После 3 собеседований взяли
          разработчиком. Компания очень большая, поэтому получил огромное
          количество опыта. Работаю в продукте Авиа. Все написано также на
          React, Redux.
        </p>
        <h5>Чем занимаюсь:</h5>
        <ul class="results">
          <li>
            Активно разрабатываю новые фичи для продукта совместно с дизайнерами
            (Zeplin), использую A/B тестирование фич.
          </li>
          <li>
            Сражаюсь с легаси. Поднимаю старые библиотеки, например
            React-Router(v1 → v4). Переписываю приложения с Redux, Redux-Form на
            Effector и React-hook-form. И рассказываю, что улучшилось с точки
            зрения пользователя и с точки зрения разработки.
          </li>
          <li>
            Чиню баги, от некрасивой кнопки до неправильной гидрации Реакта при
            SSR.
          </li>
          <li>
            Пишу и чиню юнит тесты, E2E-тесты (их в основном чиню) на Jest и
            Puppeteer.
          </li>
          <li>Собеседую frontend-разработчиков.</li>
        </ul>
      </div>
      <h5>Что сделал:</h5>
      <ul class="results">
        <li>
          Оптимизировал бандл на Webpack на 30%. Начиная от апгрейда старой
          версии(v2→v4) до разделения бандла на чанки.
        </li>
        <li>
          Внедрил различные техники написания компонентов для ведения общей
          кодовой базы.
        </li>
        <li>
          Перенес часть проекта на react hooks, чтобы новичкам в будущем было
          легче.
        </li>
        <li>
          Внедряю различные практики в CI. Например, изначально внедрил Eslint
          для Jenkins и проекта в целом.
        </li>
      </ul>
    </div>
  </div>
  <div class="job">
    <div class="company">
      <a
        class="company-name"
        alt="link to AlfaStrahovanie website"
        href="https://www.alfastrah.ru/">
        АльфаСтрахование
      </a>
      <div class="company-period">Июль 2017 — декабрь 2018</div>
      <span>
        <AlfaLogo />
      </span>
      <div class="stack">
        {#each alfaSkills as item, idx}
          <a class="skill" target="_blink" href={item.url} alt={item.title}>
            {item.title}
            {#if idx !== alfaSkills.length - 1},&nbsp;{/if}
          </a>
        {/each}
      </div>
    </div>
    <div class="description">
      <div>
        <h3>
          <a
            alt="link to AlfaStrahovanie website"
            class="company-name"
            href="https://www.alfastrah.ru/">
            АльфаСтрахование
          </a>
        </h3>
        <p>
          На 3 курсе решил, что сильно не хватает опыта и стал искать работу.
          Наткнулся на вакансию в
          <a
            href="https://www.alfastrah.ru/"
            alt="link to AlfaStrahovanie website">
            АльфаСтрахование-ОМС
          </a>
          , после тестового задания и собеседования получил оффер. Получилось,
          что устроился работу с первого раза. В компании с нуля разрабатывал
          внутреннюю систему для медицинских экспертов, которая отличалась
          огромным количеством различных сложных форм и словарей.
        </p>
        <h5>Чем занимался:</h5>
        <ul>
          <li>Писал на React, Redux и всей связанной с ним архитектуре.</li>
          <li>
            Очень много разрабатывал различные компоненты для нашей собственной
            библиотеки компонентов (у нас было две команды с четырьмя фронтенд
            разработчиками).
          </li>
          <li>
            Компания активно поддерживала Agile, поэтому прошел курсы от
            компании + почти 2 года варился во всех скрам-процессах.
          </li>
          <li>
            Под конец немного менторил джуна, который недавно пришел к нам в
            компанию.
          </li>
        </ul>
      </div>
      <h5>Что сделал:</h5>

      <ul class="results">
        <li>
          Почти полностью один написал библиотеку компонентов для 2ух команд;
        </li>
        <li>
          Написал значительную часть фронтенда, написанного с нуля, проекта;
        </li>
        <li>
          Внедрил Сторибук как витрину компонентов для менеджеров и
          разработчиков;
        </li>
      </ul>
      <p class="concludes">
        Проработав там 1.5 года, решил поменять сферу разработки из-за сильного
        выгорания и плохого руководства нового тимлида.
      </p>
    </div>
  </div>
  <div class="job">
    <div class="company">
      <div class="company-name">Freelance</div>
      <div class="company-period">2016 — 2017</div>
    </div>
    <div class="description">
      <h3>Freelance</h3>
      Фриланс различных проектов и лэндингов. Познакомился с React и вскоре стал
      писать приложения на нем для нескольких заказчиков.
    </div>
  </div>
</main>

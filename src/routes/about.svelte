<script>
  import { ottSkills, alfaSkills, dhSkills } from "../content/data";
  import Tooltip from "../components/tooltip.svelte";
  import OTTLogo from "../icons/ottLogo.svelte";
  import AlfaLogo from "../icons/alfaLogo.svelte";
  import DHIcon from "../icons/DHIcon.svelte";
  import { lang } from "../store";
  import { translates } from "../lang";

  $: l10n = translates[$lang];
</script>

<svelte:head>
  <title>Viacheslav Ermakov</title>
  <meta property="og:title" content={l10n["Viacheslav Ermakov"]} />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://viaermakov.com" />
  <meta property="og:description" content="Обо мне" />
</svelte:head>

<section>
  <h4>Кто я?</h4>
  <div class="main">
    <div class="avatar">
      <Tooltip text={l10n.photo2}>
        <picture>
          <source
            srcset="https://res.cloudinary.com/dk4mytxmk/image/upload/v1608819901/website/1233_mh0yoy.webp"
            type="image/webp"
          />
          <img
            src="https://res.cloudinary.com/dk4mytxmk/image/upload/v1595920880/website/1233_fk2hoq.jpg"
            alt="This is my photo"
            width="250"
            height="325"
            loading="lazy"
          />
        </picture>
      </Tooltip>
    </div>
    <section class="base-info">
      <p>
        Люблю писать код (<a
          alt="link to my projects"
          rel="prefetch"
          href="projects"
        >
          по этой ссылке
        </a>
        и на Github пара небольших проектов) и знакомиться с чем-то новым посредством
        практики (Svelte, Elm, Typescript, Effector). Иногда пытаюсь сам писать
        <a
          alt="link to my blog"
          rel="prefetch"
          class="company-name"
          href="blog"
        >
          некоторые заметки.
        </a>
        Выходит плохо.
      </p>
      <h4>Образование</h4>
      <p>
        Учился в НИТУ МИСиС на направлении Информатика и вычислительная техника.
        Закончил с отличием. Также закончил магистратуру в Информационных
        системах, научился машинному обучению и анализу данных.
      </p>
    </section>
  </div>
  <h4>Мой опыт</h4>
  <div>
    <div class="job">
      <div class="company">
        <a
          class="company-name"
          alt="Link to Delivery Hero website"
          href="https://www.deliveryhero.com"
        >
          &#127465;&#127466; Delivery Hero
        </a>
        <div>Software engineer</div>
        <div class="company-period">март 2020 — Сейчас</div>
        <span>
          <DHIcon />
        </span>
        <div class="stack">
          {#each dhSkills as item, idx}
            <a class="skill" target="_blink" href={item.url} alt={item.title}>
              {item.title}{#if idx !== dhSkills.length - 1},&nbsp;{/if}
            </a>
          {/each}
        </div>
      </div>
      <div class="description">
        <div>
          <h3 class="job-title">
            <a
              class="company-name"
              alt="Link to Delivery Hero website"
              href="https://www.deliveryhero.com"
            >
              &#127465;&#127466; Delivery Hero
            </a>
          </h3>
        </div>
      </div>
    </div>
    <div class="job">
      <div class="company">
        <a
          class="company-name"
          alt="Link to OneTwoTrip website"
          href="https://www.onetwotrip.com"
        >
          &#127479;&#127482; OneTwoTrip
        </a>
        <div>Frontend engineer</div>
        <div class="company-period">Июль 2018 — Сейчас</div>
        <span>
          <OTTLogo />
        </span>
        <div class="stack">
          {#each ottSkills as item, idx}
            <a class="skill" target="_blink" href={item.url} alt={item.title}>
              {item.title}{#if idx !== ottSkills.length - 1},&nbsp;{/if}
            </a>
          {/each}
        </div>
      </div>
      <div class="description">
        <div>
          <h3 class="job-title">
            <a
              class="company-name"
              alt="link to OneTwoTrip website"
              href="https://www.onetwotrip.com"
            >
              &#127479;&#127482; OneTwoTrip
            </a>
          </h3>
          <p>
            Работал в команде Авиа, которая отвечает за весь флоу покупки и
            возвратов авиабилетов. Приложение включает в себя страницы поиска и
            фильтров, а также страницы оформления и оплаты билетов. Проект
            большой и с различной сложной логикой. Писал в основном на React и
            Redux.
          </p>
          <h5>Чем занимался:</h5>
          <ul class="results">
            <li>
              Активно разрабатывал новые фичи для продукта совместно с
              дизайнерами (Zeplin), использовал A/B тестирование фич.
            </li>
            <li>
              Сражался с легаси. Поднимал старые библиотеки, в том числе значимо
              архитектурные, например React-Router(v1 → v4), Webpack.
            </li>
            <li>
              Чинил баги, от некрасивой кнопки до неправильной гидрации Реакта
              при SSR.
            </li>
            <li>Писал и чинил юнит тесты и E2E-тесты на Jest и Puppeteer.</li>
            <li>
              Писал компоненты для библиотеки компонентов не только для Авиа, но
              и для всех продуктов OneTwoTrip.
            </li>
            <li>Иногда собеседовал frontend-разработчиков.</li>
          </ul>
        </div>
        <h5>Что сделал:</h5>
        <ul class="results">
          <li>
            Переписал одно из приложений с Redux, Redux-Form на Effector и
            React-hook-form и рассказывал, что улучшилось с точки зрения бизнеса
            и с точки зрения разработки.
          </li>
          <li>
            Оптимизировал бандл на Webpack на 30%, начиная от апгрейда старой
            версии(v2→v4) до разделения бандла на чанки.
          </li>
          <li>
            Внедрил различные техники написания компонентов для ведения общей
            кодовой базы.
          </li>
          <li>
            Перенес часть проекта на react hooks, чтобы новым разработчикам было
            легче.
          </li>
          <li>
            Успел поработать с CI. Например, затащил в проекты Typescript и
            Eslint, добавил в пайплайны для Jenkins сборок.
          </li>
        </ul>
      </div>
    </div>
    <div class="job">
      <div class="company">
        <a
          class="company-name"
          alt="link to AlfaStrahovanie website"
          href="https://www.alfastrah.ru/"
        >
          &#127479;&#127482; АльфаСтрахование
        </a>
        <div class="company-period">Июль 2017 — декабрь 2018</div>
        <span>
          <AlfaLogo />
        </span>
        <div class="stack">
          {#each alfaSkills as item, idx}
            <a class="skill" target="_blink" href={item.url} alt={item.title}>
              {item.title}{#if idx !== alfaSkills.length - 1},&nbsp;{/if}
            </a>
          {/each}
        </div>
      </div>
      <div class="description">
        <div>
          <h3 class="job-title">
            <a
              alt="link to AlfaStrahovanie website"
              class="company-name"
              href="https://www.alfastrah.ru/"
            >
              &#127479;&#127482; АльфаСтрахование
            </a>
          </h3>
          <p>
            На 3 курсе университета получил оффер в
            <a
              href="https://www.alfastrah.ru/"
              alt="link to AlfaStrahovanie website"
            >
              АльфаСтрахование-ОМС
            </a>. В компании с нуля разрабатывал внутреннюю систему для
            медицинских экспертов, которая отличалась огромным количеством
            различных сложных форм и словарей.
          </p>
          <h5>Чем занимался:</h5>
          <ul>
            <li>
              Писал различные фичи на React, Redux и связанной с ним
              архитектуре.
            </li>
            <li>
              Очень много разрабатывал UI компоненты для нашей собственной
              библиотеки компонентов (у нас было две команды с четырьмя фронтенд
              разработчиками).
            </li>
            <li>
              Компания активно поддерживала Agile, поэтому прошел курсы от
              компании + почти 2 года варился во всех скрам-процессах.
            </li>
          </ul>
        </div>
        <h5>Что сделал:</h5>

        <ul class="results">
          <li>
            Почти полностью один написал библиотеку Реакт компонентов для 2ух
            команд;
          </li>
          <li>
            Написал значительную часть фронтенда, написанного с нуля, проекта;
          </li>
          <li>
            Внедрил Сторибук как витрину компонентов для менеджеров и
            разработчиков;
          </li>
        </ul>
      </div>
    </div>
    <div class="job">
      <div class="company">
        <div class="company-name">Freelance</div>
        <div class="company-period">2016 — 2017</div>
      </div>
      <div class="description">
        <h3 class="job-title">Freelance</h3>
        Фриланс различных проектов и лэндингов. Познакомился с React и стал писать
        приложения на нем для нескольких заказчиков.
      </div>
    </div>
  </div>
</section>

<style>
  .job,
  .main {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row-reverse;
  }

  .main {
    margin: 2rem 0;
  }

  .job:not(:first-child) {
    margin: 8rem 0 2rem 0;
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
  .stack {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  p {
    margin: 0;
  }
  h3 {
    margin-bottom: 2rem;
    margin-top: 0;
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
    }

    .job-title {
      display: none;
    }
    .job:not(:first-child) {
      margin: 3rem 0;
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

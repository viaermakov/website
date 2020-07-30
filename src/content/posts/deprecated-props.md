---
title: Собственные deprecated props
date: 2020-05-13T12:51:00.000Z
lang: 'ru'
tags: react javascript
cover: https://res.cloudinary.com/dk4mytxmk/image/upload/f_auto,q_auto/v1596132847/website/react_l2oqsr.jpg
---

Как правило, различные команды очень часто разрабатывают свои собственные внутренние библиотеки для унификации и узнаваемости продукта пользователями.

Со временем разработчикам бывает очень сложно проследить за API компонентов, которые иногда меняют другие коллеги. Даже если существуют дополнительные решения их документации такие как Storybook и т.д. это проблема все равно остается. Часто это происходит потому, что разработчик не следит за изменениями компонента, если он не пользуется им достаточно часто в проекте. Например, он использовал компонент один раз в коде, который больше не был подвергнут изменениям.

В таких случаях может помочь использование дополнительного хелпера, который будет генерировать ворнинги в консоль браузера и, тем самым, оповещая других разработчиков о необходимости изменения передаваемых пропсов в компоненты.

Для этого можно создать функцию и после этого ее использовать в описании пропсов вашего компонента:

```javascript
const warned = {}

export function deprecatedPropType(propType, explanation = '') {
  return (props, propName, componentName, ...rest) => {
    if (
      props.hasOwnProperty(propName) &&
      process.env.NODE_ENV !== 'production'
    ) {
      const messageArray = []
      messageArray.push(
        `"${propName}" property of "${componentName}" is deprecated`,
      )
      messageArray.push(', it may be deleted in the next major release')
      if (explanation) {
        messageArray.push('\n')
        messageArray.push(explanation)
      }

      const message = messageArray.join('')
      if (!warned[message]) {
        console.warn(message)
        warned[message] = true
      }
    }

    return propType(props, propName, componentName, ...rest)
  }
}
```

Теперь мы можем обернуть пропс, который является устаревшим внутри компонента.

```javascript
  GUINormal: deprecatedPropType(
    PropTypes.string,
    'GUINormal is deprecated, please use purpose instead'
  ),
```

Таким образом компонент сам будет оповещать других разработчиков о необходимых изменениях:

<picture>
    <source media="(max-width: 767px)" 
            sizes="1px"
            srcset="https://res.cloudinary.com/dk4mytxmk/image/upload/w_0.5,q_auto,f_auto/v1595920880/website/dep_qai61e.jpg"/>
    <source media="(min-width: 768px)" 
            sizes="300px" 
            srcset="https://res.cloudinary.com/dk4mytxmk/image/upload/v1595920880/website/dep_qai61e.jpg" />
    <img src="https://res.cloudinary.com/dk4mytxmk/image/upload/v1595920880/website/dep_qai61e.jpg" alt="Deprecated props in console" loading="lazy" />
</picture>

Это позволит быстрее избавляться от старой функциональности ваших компонентов.

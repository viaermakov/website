---
title: Собственные deprecated props
date: 2020-05-13T12:51:00.000Z
lang: 'ru'
---
Как правило, большие компании и не только очень часто разрабатывают свои собственные внутренние библиотеки для унификации и узнаваемости продукта пользователями. 

Со временем разработчикам бывает очень сложно проследить за изменениями API компонентов. Даже если существуют дополнительные решение по их документации такие как Storybook и т.д. Часто это происходит потому что разработчик не следит за изменениями компонента, если он не пользуется им достаточно часто в проекте. Например, он использовал один раз в какой-то из страниц веб-приложения.

В таких случаях может помочь использование дополнительного хелпера, который будет генерировать ворнинги в консоль браузера и, тем самым, оповещая других разработчиков о необходимости изменения передаваемых пропсов в компонент. 

Для этого можно создать такую функцию:

```html
const warned = {};        

export function deprecatedPropType(propType, explanation = '') {
  return (props, propName, componentName, ...rest) => {
    if (props.hasOwnProperty(propName) && process.env.NODE_ENV !== 'production') {
      const messageArray = [];
      messageArray.push(`"${propName}" property of "${componentName}" is deprecated`);
      messageArray.push(', it may be deleted in the next major release');
      if (explanation) {
        messageArray.push('\n');
        messageArray.push(explanation);
      }

      const message = messageArray.join('');
      if (!warned[message]) {
        console.warn(message);
        warned[message] = true;
      }
    }

    return propType(props, propName, componentName, ...rest);
  };
}
```

Теперь мы можем обернуть пропс, который является устаревшим.

```html
autoComplete: deprecatedPropType(
    PropTypes.string,
    'Use enableAutoComplete and autoCompleteName instead'
  ),
```

Таким образом браузер оповестит других разработчиков об изменениях:

![Not so big](./dep.png)

Это позволит быстрее избавляться от старой функциональности ваших компонентов.

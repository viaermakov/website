---
title: Custom deprecated props
date: 2020-07-05T15:29:00.000Z
lang: 'en'
---
Different companies often develop their own internal libraries to unify and recognize products by users. 

Sometimes it can be very difficult for developers to follow the API components that are changed by other colleagues. Even if teams have additional solutions for their documentation, such as Storybook, etc. this problem still remains. If developer doesn't use a component often in the project he can miss component changes. For instance, he used a component once in a project that was not modified anymore.

In such cases you can use an additional helper which will generate a browser console warnings and notify other developers about changes props of components. 

So you can create a helper and then use it in prop types:

```javascript
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

Now we can wrap the prop, which is obsolete inside the component.

```javascript
  GUINormal: deprecatedPropType(
    PropTypes.string,
    'GUINormal is deprecated, please use purpose instead'
  ),
```

In this way, the component itself will notify other developers about changes:

![Deprecated props in console](./dep.jpg)

As a result you can get rid of the old functionality of your components more quickly.

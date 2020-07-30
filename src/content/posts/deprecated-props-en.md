---
title: Custom deprecated props
date: 2020-07-05T15:29:00.000Z
lang: 'en'
tags: react javascript
cover: https://res.cloudinary.com/dk4mytxmk/image/upload/f_auto,q_auto/v1596132847/website/react_l2oqsr.jpg
---

Different companies often has own internal libraries to unify and recognize products by users.

Sometimes it can be very difficult for developers to follow the API components that are changed by other colleagues. This problem still remains even if teams have additional solutions for their documentation, such as Storybook, etc. If developer doesn't use a component often in a project he can miss component changes. For instance, he used a component once that was not modified anymore in a project.

In such cases you can use an additional helper which will generate console warnings and notify other developers about changes in their components.

So you can create a helper and then use it in prop types:

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

Now we can wrap the prop, which is obsolete.

```javascript
  GUINormal: deprecatedPropType(
    PropTypes.string,
    'GUINormal is deprecated, please use purpose instead'
  ),
```

In this way, the component will notify other developers about changes:


<picture>
    <source media="(max-width: 767px)" 
            sizes="1px"
            srcset="https://res.cloudinary.com/dk4mytxmk/image/upload/w_0.5,q_auto,f_auto/v1595920880/website/dep_qai61e.jpg"/>
    <source media="(min-width: 768px)" 
            sizes="300px" 
            srcset="https://res.cloudinary.com/dk4mytxmk/image/upload/v1595920880/website/dep_qai61e.jpg" />
    <img src="https://res.cloudinary.com/dk4mytxmk/image/upload/v1595920880/website/dep_qai61e.jpg" alt="Deprecated props in console" loading="lazy" />
</picture>


As a result you can get rid of the old functionality of your components more quickly.

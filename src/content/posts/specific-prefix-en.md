---
title: Special behavior of browser-specific rules
date: 2020-07-05T15:16:00.000Z
lang: 'en'
---
When writing different styles, there is a situation when you need to add a specific prefix to change the behavior of the element on the page.

For example, you need to add additional styles for input element. The input element has <code>.spec </code> class and specific <code>:-webkit-autofill</code> pseudo-class. It is necessary to change styles of the element if the element has these rules, i.e. the <code>.spec</code> class or the field is autocompleted. For example:

```css
  .input:-webkit-autofill,
  .spec {
      color: #000;
  }
```
However, while testing, we will find that styles do not work in browsers like Firefox, EDGE or IE. So this behavior is correct. The point is that we have a specific webkit selector that changes the logic of mixed styles.

A browser considers the rules invalid, because it does not know how to fully apply in the conditions when the styles use specific rules. 
To solve this problem, you need to divide styles for classes into two separate parts of code.

```css
  .input:-webkit-autofill {
     color: #000;
  }
  .spec {
      color: #000;
  }
```

No problems in the current implementation. A browser will consider style rules separately. It means that the browser will understand that if there is a <code>.spec</code> class, you must apply the current text color regardless of the work of a specific pseudo-class.
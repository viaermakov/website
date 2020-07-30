---
title: Special behavior of browser-specific rules
date: 2020-07-05T15:16:00.000Z
lang: 'en'
tags: css
cover: https://res.cloudinary.com/dk4mytxmk/image/upload/f_auto,q_auto/v1596132450/website/browsers_vwlird.jpg

---
There is a situation when you need to add a specific prefix to change the behavior of the element on a page.

For example, you need to add additional styles for input element. The input element has <code>.spec </code> class and specific <code>:-webkit-autofill</code> pseudo-class. It is necessary to change styles of the element if the element has these rules, i.e. the <code>.spec</code> class or the field is autocompleted. For example:

```css
  .input:-webkit-autofill,
  .spec {
      color: #000;
  }
```
However, we will find that styles do not work in browsers like Firefox, EDGE or IE. So this behavior is correct. The point is that we have a specific webkit selector that changes the logic of mixed styles.

A browser considers the rules invalid, because it does not know how to fully apply this styles when it use specific rules. 
To solve this problem, you need to divide styles for classes into two separate parts of code.

```css
  .input:-webkit-autofill {
     color: #000;
  }
  .spec {
      color: #000;
  }
```

No problems in the current implementation. A browser will consider style rules separately. It means that the browser will understand when need to apply <code>.spec</code> class regardless of the work of a specific pseudo-class.
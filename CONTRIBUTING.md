# Contributing to Web Awesome

Before contributing, please review the contributions guidelines at:

[webawesome.com/docs/resources/contributing](https://webawesome.com/docs/resources/contributing)

## Website Architecture

### Code Examples

`/docs/_utils/code-examples.js` is a small 11ty plugin that turns the code examples into previews. It relies on a client-side script of the same name that lives in /docs/assets/scripts and gets loaded into the site’s template.

That takes care of rendering standard code blocks. It supports certain modifier classes:
- `example`: opts a code snippet in to live demo rendering
- `no-edit`: removes the codepen button
- `open`: shows the code snippet by default

Modifier classes are used like this:
```
```html {.example .no-edit .open}
```

That will render an example without the CodePen button and with the code already shown.

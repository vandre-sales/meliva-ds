---
title: Z-index
description: Z-index properties ensure that Web Awesome components stack in a logical order.
layout: page.njk
---

Z-index properties make sure that certain Web Awesome components aren't mistakenly obscured. If you have elements with their own z-indices outside of Web Awesome, you can change these z-index properties as needed so that everything stacks appropriately.

| Custom Property               |  Default Value                        |
| ----------------------------- | ------------------------------- |
| `--wa-z-index-dropdown`   | <code>900</code> |
| `--wa-z-index-toast`   | <code>990</code> |
| `--wa-z-index-tooltip`   | <code>1000</code> |

```html {.example}
<div class="z-index-example">
  <div style="background-color: var(--wa-color-base-30); z-index: var(--wa-z-index-dropdown)"><code>--wa-z-index-dropdown</code></div>
  <div style="background-color: var(--wa-color-base-40); z-index: var(--wa-z-index-toast); margin-inline-start: 2em; margin-block-start: 2em"><code>--wa-z-index-toast</code></div>
  <div style="background-color: var(--wa-color-base-50); z-index: var(--wa-z-index-tooltip); margin-inline-start: 4em; margin-block-start: 4em;"><code>--wa-z-index-tooltip</code></div>
</div>

<style>
  .z-index-example {
    height: 8em;
    position: relative;
  }
  .z-index-example > div {
    aspect-ratio: 3 / 1;
    border-radius: var(--wa-border-radius-s);
    position: absolute;
    width: 12em;
  }
  .z-index-example code {
    background-color: transparent;
    color: white;
  }
</style>
```


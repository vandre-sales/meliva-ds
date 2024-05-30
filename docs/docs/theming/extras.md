---
title: Extras
description: The bonus Web Awesome properties you need to customize every nook and cranny.
layout: page.njk
---

<style>
  .swatch {
    border-radius: var(--wa-border-radius-s);
    line-height: 2;
    height: 2em;
    padding-inline: var(--wa-space-xs);
  }
</style>

## Focus

A consistent focus ring helps with predictable keyboard navigation. Together with [`--wa-color-focus`](/docs/theming/color/#interactions), these custom properties create a uniform focus state for Web Awesome components.


| Custom Property               |  Default Value                        |
| ----------------------------- | ------------------------------- |
| `--wa-focus-ring-style`   | <code>solid</code> |
| `--wa-focus-ring-width`   | <code>0.1875rem</code> |
| `--wa-focus-ring`   | <code>var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus)</code> |
| `--wa-focus-ring-offset`   | <code>0.0625rem</code> |

Navigate this form example with your keyboard to see your theme's focus ring in action.

```html {.example}
<form class="wa-block-spacing-m">
  <wa-input label="Text Input">
    <span slot="help-text">Press <kbd>Tab</kbd> to move focus to other interactive elements.</span>
  </wa-input>
  <wa-checkbox>Checkbox</wa-checkbox>
  <wa-button>Button</wa-button>
</form>

<style>
  form > * + * {
    display: block;
    width: fit-content;
    margin-block-start: var(--wa-space-m);
  }
</style>
```

<wa-divider></wa-divider>

## Links

Together with [`--wa-color-link`](/docs/theming/color/#text), using these custom properties to add text decoration to `<a>` elements helps signal that the text serves as a hyperlink.

| Custom Property               |  Default Value                        |
| ----------------------------- | ------------------------------- |
| `--wa-link-decoration-default`   | <code>underline color-mix(in oklab, var(--wa-color-text-link) 70%, transparent) dotted</code> |
| `--wa-link-decoration-hover`   | <code>underline</code> |

```html {.example}
<a href="#">Web Awesome anchor</a>
```

<wa-divider></wa-divider>

## Z-index

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


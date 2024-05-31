---
title: Typography
description: Get consistent font styles and vertical rhythm with Web Awesome's typography properties.
layout: page.njk
---

## Font Family

Font families are assigned specific roles &mdash; like heading or code &mdash; to help keep text styles consistent and customization easy. By default, these properties use system fonts and generic fallbacks to maximize performance.

| Custom Property               | Default Value |  Preview                        |
| ----------------------------- | - | ------------------------------- |
| `--wa-font-family-body`   | <code>ui-sans-serif, system-ui, sans-serif</code> | <div style="font-family: var(--wa-font-family-body)">Sphinx of black quartz, judge my vow.</div> |
| `--wa-font-family-heading`   | <code>var(--wa-font-family-body)</code> | <div style="font-family: var(--wa-font-family-heading)">Sphinx of black quartz, judge my vow.</div> |
| `--wa-font-family-code`   | <code>ui-monospace, monospace</code> | <div style="font-family: var(--wa-font-family-code)">Sphinx of black quartz, judge my vow.</div> |
| `--wa-font-family-longform`   | <code>ui-serif, serif</code> | <div style="font-family: var(--wa-font-family-longform)">Sphinx of black quartz, judge my vow.</div> |

## Font Size

Font sizes use the Major Second type scale, rounded to the nearest whole pixel assuming a 16px root font size. To maximize variation in larger font sizes, every other step on the scale is skipped.

Each font size value uses a `calc()` function with `--wa-font-size-multiplier` to increase or decrease all font sizes at once. By default, this multiplier is `1`. The table below lists only the result of the calculation.

| Custom Property               | Default Value |  Preview                        |
| ----------------------------- | - | ------------------------------- |
| `--wa-font-size-2xs`   | <code>0.6875rem</code> <small>(11px)</small> | <div style="font-size: var(--wa-font-size-2xs)">AaBb</div> |
| `--wa-font-size-xs`   | <code>0.75rem</code> <small>(12px)</small> | <div style="font-size: var(--wa-font-size-xs)">AaBb</div> |
| `--wa-font-size-s`   | <code>0.875rem</code> <small>(14px)</small> | <div style="font-size: var(--wa-font-size-s)">AaBb</div> |
| `--wa-font-size-m`   | <code>1rem</code> <small>(16px)</small> | <div style="font-size: var(--wa-font-size-m)">AaBb</div> |
| `--wa-font-size-l`   | <code>1.25rem</code> <small>(20px)</small> | <div style="font-size: var(--wa-font-size-l)">AaBb</div> |
| `--wa-font-size-xl`   | <code>1.625rem</code> <small>(26px)</small> | <div style="font-size: var(--wa-font-size-xl)">AaBb</div> |
| `--wa-font-size-2xl`   | <code>2rem</code> <small>(32px)</small> | <div style="font-size: var(--wa-font-size-2xl)">AaBb</div> |
| `--wa-font-size-3xl`   | <code>2.5625rem</code> <small>(41px)</small> | <div style="font-size: var(--wa-font-size-3xl)">AaBb</div> |
| `--wa-font-size-4xl`   | <code>3.25rem</code> <small>(52px)</small> | <div style="font-size: var(--wa-font-size-4xl)">AaBb</div> |

## Font Weight

Font weight properties are given common names &mdash; like light or bold &mdash; or assigned specific roles.

Common weights let you easily adjust the full range of weights for your theme.

| Custom Property               | Default Value |  Preview                        |
| ----------------------------- | - | ------------------------------- |
| `--wa-font-weight-light`   | <code>300</code> | <div style="font-weight: var(--wa-font-weight-light)">AaBb</div> |
| `--wa-font-weight-normal`   | <code>400</code> | <div style="font-weight: var(--wa-font-weight-normal)">AaBb</div> |
| `--wa-font-weight-semibold`   | <code>500</code> | <div style="font-weight: var(--wa-font-weight-semibold)">AaBb</div> |
| `--wa-font-weight-bold`   | <code>600</code> | <div style="font-weight: var(--wa-font-weight-bold)">AaBb</div> |

Role-based weights allow you to uniformly adjust the weight of certain types of text elements to keep text styles consistent.

| Custom Property               | Default Value |  Preview                        |
| ----------------------------- | - | ------------------------------- |
| `--wa-font-weight-body`   | <code>var(--wa-font-weight-normal)</code> | <div style="font-weight: var(--wa-font-weight-body)">AaBb</div> |
| `--wa-font-weight-heading`   | <code>var(--wa-font-weight-bold)</code> | <div style="font-weight: var(--wa-font-weight-heading)">AaBb</div> |
| `--wa-font-weight-action`   | <code>var(--wa-font-weight-semibold)</code> | <div style="font-weight: var(--wa-font-weight-action)">AaBb</div> |

In Web Awesome, we use `--wa-font-weight-action` for interactive text, such as button labels and tab names. We also recommend using `--wa-font-weight-action` for interactive text that doesn't otherwise signal its interactively, such as links without text decoration.

## Line Height

Line heights control the distance between lines of text and are unitless to scale proportionately with text size. For readability, `--wa-line-height-normal`, used for paragraph text, should be 1.5 or greater.


| Custom Property               | Default Value |  Preview                        |
| ----------------------------- | - | ------------------------------- |
| `--wa-line-height-condensed`   | <code>1.125</code> | <div style="line-height: var(--wa-line-height-condensed); border-block: 1px solid var(--wa-color-neutral-border-loud)">AaBb</div> |
| `--wa-line-height-normal`   | <code>1.6</code> | <div style="line-height: var(--wa-line-height-normal); border-block: 1px solid var(--wa-color-neutral-border-loud)">AaBb</div> |
| `--wa-line-height-expanded`   | <code>2</code> | <div style="line-height: var(--wa-line-height-expanded); border-block: 1px solid var(--wa-color-neutral-border-loud)">AaBb</div> |

## Links

Together with [`--wa-color-link`](/docs/theming/color/#text), these custom properties add text decoration to `<a>` elements to signal their role as hyperlinks.

| Custom Property               |  Default Value                        |
| ----------------------------- | ------------------------------- |
| `--wa-link-decoration-default`   | <code>underline color-mix(in oklab, var(--wa-color-text-link) 70%, transparent) dotted</code> |
| `--wa-link-decoration-hover`   | <code>underline</code> |

```html {.example}
<a href="#">Web Awesome anchor</a>
```
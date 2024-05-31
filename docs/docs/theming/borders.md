---
title: Borders
description: Change the edges and corners of your components with Web Awesome's border properties.
layout: page.njk
---

<style>
  .border-swatch {
    border-color: var(--wa-color-neutral-border-loud);
    border-style: var(--wa-border-style);
    border-width: var(--wa-border-width-s);
    border-radius: var(--wa-border-radius-s);
    line-height: 2;
    height: 3em;
    padding-inline: var(--wa-space-xs);
  }
</style>

## Style

Border style controls the line shape of borders throughout Web Awesome.

| Custom Property               | Default Value |  Preview                        |
| ----------------------------- | - | ------------------------------- |
| `--wa-border-style`   | <code>solid</code> | <div class="border-swatch" style="border-style: var(--wa-border-style)"></div> |

## Width

Border widths use `rem` units in order to scale proportionately with the root font size. 

Each border width value uses a `calc()` function with `--wa-border-width-multiplier` to increase or decrease all border widths at once. By default, this multiplier is `0.0625`. The table below lists only the result of the calculation.

| Custom Property               | Default Value |  Preview                        |
| ----------------------------- | - | ------------------------------- |
| `--wa-border-width-s`   | <code>0.0625rem</code> <small>(1px)</small> | <div class="border-swatch" style="border-width: var(--wa-border-width-s)"></div> |
| `--wa-border-width-m`   | <code>0.125rem</code> <small>(2px)</small> | <div class="border-swatch" style="border-width: var(--wa-border-width-m)"></div> |
| `--wa-border-width-l`   | <code>0.1875rem</code> <small>(3px)</small> | <div class="border-swatch" style="border-width: var(--wa-border-width-l)"></div> |

## Radius

Common border radius properties allow you to achieve specific shapes.

| Custom Property               | Default Value |  Preview                        |
| ----------------------------- | - | ------------------------------- |
| `--wa-border-radius-pill`   | <code>9999px</code> | <div class="border-swatch" style="border-radius: var(--wa-border-radius-pill)"></div> |
| `--wa-border-radius-circle`   | <code>50%</code> | <div class="border-swatch" style="aspect-ratio: 1 / 1; border-radius: var(--wa-border-radius-circle)"></div> |
| `--wa-border-radius-square`   | <code>0rem</code> | <div class="border-swatch" style="border-radius: var(--wa-border-radius-square)"></div> |

Size-based border radius properties allow you to customize the overall roundness of Web Awesome components. These use `rem` units in order to scale proportionately with the root font size. 

Each border radius value uses a `calc()` function with `--wa-border-radius-multiplier` to increase or decrease all border radii at once. By default, this multiplier is `0.375`. The table below lists only the result of the calculation.

| Custom Property               | Default Value |  Preview                        |
| ----------------------------- | - | ------------------------------- |
| `--wa-border-radius-xs`   | <code>0.1875rem</code> <small>(3px)</small> | <div class="border-swatch" style="border-radius: var(--wa-border-radius-xs)"></div> |
| `--wa-border-radius-s`   | <code>0.375rem</code> <small>(6px)</small> | <div class="border-swatch" style="border-radius: var(--wa-border-radius-s)"></div> |
| `--wa-border-radius-m`   | <code>0.75rem</code> <small>(12px)</small> | <div class="border-swatch" style="border-radius: var(--wa-border-radius-m)"></div> |
| `--wa-border-radius-l`   | <code>1.125rem</code> <small>(18px)</small> | <div class="border-swatch" style="border-radius: var(--wa-border-radius-l)"></div> |

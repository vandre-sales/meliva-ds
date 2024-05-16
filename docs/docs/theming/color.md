---
title: Color
description: Ensure consistent color usage with readable contrast with color properties.
layout: page.njk
---

<style>
  .color-name {
    font-weight: var(--wa-font-weight-medium);
    margin-block-end: var(--wa-space-2xs);
  }
  .color-group {
    display: flex;
    align-items: start;
    gap: 0.25em;
    margin-block-end: var(--wa-space-xl);
  }
  .color-preview {
    flex: 1 1 auto;
    font-size: var(--wa-font-size-xs);
  }
  .color-swatch {
    border-radius: var(--wa-corners-s);
    height: 3em;
  }
</style>

intro

## Literal colors

Literal colors are the lowest-level color properties in your theme. Each color is identified by a name, like red or gray, and a number that roughly corresponds to the color's perceived lightness. On this scale, 100 is the equivalent of pure white and 0 is the equivalent of pure black. Web Awesome defines 10 colors each with 11 lightness steps using the format `--wa-color-{name}-{#}`.

For easy WCAG 2.1 conformance, the lightness values between colors have a strong correlation to [relative luminance](https://www.w3.org/WAI/GL/wiki/Relative_luminance). To achieve accessible contrast ratios, even across hues, calculate the difference between the lightness values of any two colors:

- A difference of 40 between lightness values guarantees a minimum 3:1 contrast ratio, sufficient for large text and icons (AA).
- A difference of 50 between lightness values guarantees a minimum 4.5:1 contrast ratio, sufficient for normal text (AA) and large text (AAA).
- A difference of 60 between lightness values guarantees a minimum 7:1 contrast ratio, sufficient for all text (AAA).

<div class="color-name">Rose</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-rose-95)"></div>
    95
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-rose-90)"></div>
    90
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-rose-80)"></div>
    80
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-rose-70)"></div>
    70
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-rose-60)"></div>
    60
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-rose-50)"></div>
    50
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-rose-40)"></div>
    40
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-rose-30)"></div>
    30
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-rose-20)"></div>
    20
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-rose-10)"></div>
    10
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-rose-05)"></div>
    05
  </div>
</div>

<div class="color-name">Red</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-95)"></div>
    95
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-90)"></div>
    90
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-80)"></div>
    80
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-70)"></div>
    70
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-60)"></div>
    60
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-50)"></div>
    50
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-40)"></div>
    40
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-30)"></div>
    30
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-20)"></div>
    20
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-10)"></div>
    10
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-05)"></div>
    05
  </div>
</div>

<div class="color-name">Yellow</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-95)"></div>
    95
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-90)"></div>
    90
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-80)"></div>
    80
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-70)"></div>
    70
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-60)"></div>
    60
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-50)"></div>
    50
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-40)"></div>
    40
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-30)"></div>
    30
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-20)"></div>
    20
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-10)"></div>
    10
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-05)"></div>
    05
  </div>
</div>

<div class="color-name">Lime</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-lime-95)"></div>
    95
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-lime-90)"></div>
    90
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-lime-80)"></div>
    80
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-lime-70)"></div>
    70
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-lime-60)"></div>
    60
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-lime-50)"></div>
    50
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-lime-40)"></div>
    40
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-lime-30)"></div>
    30
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-lime-20)"></div>
    20
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-lime-10)"></div>
    10
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-lime-05)"></div>
    05
  </div>
</div>

<div class="color-name">Green</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-95)"></div>
    95
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-90)"></div>
    90
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-80)"></div>
    80
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-70)"></div>
    70
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-60)"></div>
    60
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-50)"></div>
    50
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-40)"></div>
    40
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-30)"></div>
    30
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-20)"></div>
    20
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-10)"></div>
    10
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-05)"></div>
    05
  </div>
</div>

<div class="color-name">Teal</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-teal-95)"></div>
    95
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-teal-90)"></div>
    90
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-teal-80)"></div>
    80
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-teal-70)"></div>
    70
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-teal-60)"></div>
    60
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-teal-50)"></div>
    50
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-teal-40)"></div>
    40
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-teal-30)"></div>
    30
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-teal-20)"></div>
    20
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-teal-10)"></div>
    10
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-teal-05)"></div>
    05
  </div>
</div>

<div class="color-name">Blue</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-95)"></div>
    95
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-90)"></div>
    90
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-80)"></div>
    80
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-70)"></div>
    70
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-60)"></div>
    60
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-50)"></div>
    50
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-40)"></div>
    40
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-30)"></div>
    30
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-20)"></div>
    20
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-10)"></div>
    10
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-05)"></div>
    05
  </div>
</div>

<div class="color-name">Indigo</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-95)"></div>
    95
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-90)"></div>
    90
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-80)"></div>
    80
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-70)"></div>
    70
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-60)"></div>
    60
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-50)"></div>
    50
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-40)"></div>
    40
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-30)"></div>
    30
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-20)"></div>
    20
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-10)"></div>
    10
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-05)"></div>
    05
  </div>
</div>

<div class="color-name">Violet</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-95)"></div>
    95
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-90)"></div>
    90
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-80)"></div>
    80
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-70)"></div>
    70
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-60)"></div>
    60
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-50)"></div>
    50
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-40)"></div>
    40
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-30)"></div>
    30
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-20)"></div>
    20
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-10)"></div>
    10
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-05)"></div>
    05
  </div>
</div>

<div class="color-name">Gray</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-95)"></div>
    95
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-90)"></div>
    90
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-80)"></div>
    80
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-70)"></div>
    70
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-60)"></div>
    60
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-50)"></div>
    50
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-40)"></div>
    40
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-30)"></div>
    30
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-20)"></div>
    20
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-10)"></div>
    10
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-05)"></div>
    05
  </div>
</div>

### Primary and Base Colors

We extend the palette of literal colors with two pseudo-literal color groups:

- **Primary** is your key brand color used to draw attention and designate actions.
- **Base** makes up the your content's body and structure.

The primary and base color groups reference another literal color group. By default, `--wa-color-primary-{#}` maps to `--wa-color-blue-{#}` and `--wa-color-base-{#}` maps to `--wa-color-gray-{#}`.

<div class="color-name">Primary</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-95)"></div>
    95
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-90)"></div>
    90
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-80)"></div>
    80
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-70)"></div>
    70
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-60)"></div>
    60
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-50)"></div>
    50
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-40)"></div>
    40
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-30)"></div>
    30
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-20)"></div>
    20
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-10)"></div>
    10
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-05)"></div>
    05
  </div>
</div>

<div class="color-name">Base</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-95)"></div>
    95
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-90)"></div>
    90
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-80)"></div>
    80
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-70)"></div>
    70
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-60)"></div>
    60
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-50)"></div>
    50
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-40)"></div>
    40
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-30)"></div>
    30
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-20)"></div>
    20
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-10)"></div>
    10
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-05)"></div>
    05
  </div>
</div>

## Foundational Colors

content - describe surfaces, overlays, text, etc. - all the colors to build the foundation of your theme

## Semantic Colors

content - describe brand, success, warning, danger, neutral
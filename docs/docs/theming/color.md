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
    flex-wrap: nowrap;
  }
  .color-group + * {
    margin-block-start: var(--wa-space-xl);
  }
  .color-preview {
    flex: 1 1 auto;
  }
  .color-swatch {
    border-radius: var(--wa-corners-s);
    line-height: 2;
    height: 2em;
    padding-inline: var(--wa-space-xs);
  }
  .color-swatch.text-only {
    padding-inline: 0;
  }
</style>

Web Awesome's color system includes a range of CSS custom properties to purposefully and consistently thread your color choices throughout your project.

## Literal Colors

Literal colors are the lowest level color properties in your theme. Each color is identified by a name, like red or gray, and a number that roughly corresponds to the color's perceived lightness. On this scale, 100 is equal to pure white and 0 is equal to pure black. Web Awesome defines 10 literal colors each with 11 lightness steps using the format `--wa-color-{name}-{#}`.

For easy WCAG 2.1 conformance, the lightness values between colors have a strong correlation to [relative luminance](https://www.w3.org/WAI/GL/wiki/Relative_luminance). For accessible contrast ratios, even across hues, calculate the difference between the lightness values of any two colors:

- A difference of 40 between lightness values ensures a minimum 3:1 contrast ratio, suitable for large text and icons (AA).
- A difference of 50 between lightness values ensures a minimum 4.5:1 contrast ratio, suitable for normal text (AA) and large text (AAA).
- A difference of 60 between lightness values ensures a minimum 7:1 contrast ratio, suitable for all text (AAA).

<div class="color-name">Red</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-95)"></div>
    <small>95</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-90)"></div>
    <small>90</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-80)"></div>
    <small>80</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-70)"></div>
    <small>70</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-60)"></div>
    <small>60</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-50)"></div>
    <small>50</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-40)"></div>
    <small>40</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-30)"></div>
    <small>30</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-20)"></div>
    <small>20</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-10)"></div>
    <small>10</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-red-05)"></div>
    <small>05</small>
  </div>
</div>

<div class="color-name">Yellow</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-95)"></div>
    <small>95</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-90)"></div>
    <small>90</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-80)"></div>
    <small>80</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-70)"></div>
    <small>70</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-60)"></div>
    <small>60</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-50)"></div>
    <small>50</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-40)"></div>
    <small>40</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-30)"></div>
    <small>30</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-20)"></div>
    <small>20</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-10)"></div>
    <small>10</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-yellow-05)"></div>
    <small>05</small>
  </div>
</div>

<div class="color-name">Green</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-95)"></div>
    <small>95</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-90)"></div>
    <small>90</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-80)"></div>
    <small>80</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-70)"></div>
    <small>70</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-60)"></div>
    <small>60</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-50)"></div>
    <small>50</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-40)"></div>
    <small>40</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-30)"></div>
    <small>30</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-20)"></div>
    <small>20</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-10)"></div>
    <small>10</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-green-05)"></div>
    <small>05</small>
  </div>
</div>

<div class="color-name">Blue</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-95)"></div>
    <small>95</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-90)"></div>
    <small>90</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-80)"></div>
    <small>80</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-70)"></div>
    <small>70</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-60)"></div>
    <small>60</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-50)"></div>
    <small>50</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-40)"></div>
    <small>40</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-30)"></div>
    <small>30</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-20)"></div>
    <small>20</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-10)"></div>
    <small>10</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-blue-05)"></div>
    <small>05</small>
  </div>
</div>

<div class="color-name">Indigo</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-95)"></div>
    <small>95</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-90)"></div>
    <small>90</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-80)"></div>
    <small>80</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-70)"></div>
    <small>70</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-60)"></div>
    <small>60</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-50)"></div>
    <small>50</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-40)"></div>
    <small>40</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-30)"></div>
    <small>30</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-20)"></div>
    <small>20</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-10)"></div>
    <small>10</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-indigo-05)"></div>
    <small>05</small>
  </div>
</div>

<div class="color-name">Violet</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-95)"></div>
    <small>95</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-90)"></div>
    <small>90</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-80)"></div>
    <small>80</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-70)"></div>
    <small>70</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-60)"></div>
    <small>60</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-50)"></div>
    <small>50</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-40)"></div>
    <small>40</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-30)"></div>
    <small>30</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-20)"></div>
    <small>20</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-10)"></div>
    <small>10</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-violet-05)"></div>
    <small>05</small>
  </div>
</div>

<div class="color-name">Gray</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-95)"></div>
    <small>95</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-90)"></div>
    <small>90</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-80)"></div>
    <small>80</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-70)"></div>
    <small>70</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-60)"></div>
    <small>60</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-50)"></div>
    <small>50</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-40)"></div>
    <small>40</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-30)"></div>
    <small>30</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-20)"></div>
    <small>20</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-10)"></div>
    <small>10</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-gray-05)"></div>
    <small>05</small>
  </div>
</div>

### Key Colors

We extend the palette of literal colors with two additional color groups to aid changing the key colors of your project:

- **Primary** is color you use to draw attention and signify actions.
- **Base** makes up your project's body and structure.

The primary and base color groups reference another literal color group. By default, `--wa-color-primary-{#}` maps to `--wa-color-blue-{#}` and `--wa-color-base-{#}` maps to `--wa-color-gray-{#}`.

<div class="color-name">Primary</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-95)"></div>
    <small>95</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-90)"></div>
    <small>90</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-80)"></div>
    <small>80</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-70)"></div>
    <small>70</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-60)"></div>
    <small>60</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-50)"></div>
    <small>50</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-40)"></div>
    <small>40</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-30)"></div>
    <small>30</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-20)"></div>
    <small>20</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-10)"></div>
    <small>10</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-primary-05)"></div>
    <small>05</small>
  </div>
</div>

<div class="color-name">Base</div>
<div class="color-group">
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-95)"></div>
    <small>95</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-90)"></div>
    <small>90</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-80)"></div>
    <small>80</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-70)"></div>
    <small>70</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-60)"></div>
    <small>60</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-50)"></div>
    <small>50</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-40)"></div>
    <small>40</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-30)"></div>
    <small>30</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-20)"></div>
    <small>20</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-10)"></div>
    <small>10</small>
  </div>
  <div class="color-preview">
    <div class="color-swatch" style="background-color: var(--wa-color-base-05)"></div>
    <small>05</small>
  </div>
</div>

## Foundational Colors

Foundational colors lay the groundwork for your project's content. These colors are grouped by their distinct roles.

### Surfaces

Surfaces help establish basic hierarchy, consisting of background layers that other components and content rest on. Surface colors support the concept of elevation, where `--wa-color-surface-raised` would be the closest to the user (e.g., dialogs and popup menus) and `--wa-color-surface-lowered` would be the farthest away (e.g., backdrops and wells).

| Custom Property               |  Preview                        |
| ----------------------------- | ------------------------------- |
| `--wa-color-surface-raised`   | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-surface-raised)"></div></div> |
| `--wa-color-surface-default`  | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-surface-default)"></div></div> |
| `--wa-color-surface-lowered`  | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-surface-lowered)"></div></div> |
| `--wa-color-surface-border`   | <div class="color-preview"><div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-surface-border)"></div></div> |

### Text

Text colors are used for standard text elements. We recommend a minimum 4.5:1 contrast ratio between text colors and surface colors.

| Custom Property               |  Preview                        |
| ----------------------------- | ------------------------------- |
| `--wa-color-text-normal`   | <div class="color-preview"><div class="color-swatch text-only" style="color: var(--wa-color-text-normal)">AaBb</div></div> |
| `--wa-color-text-quiet`  | <div class="color-preview"><div class="color-swatch text-only" style="color: var(--wa-color-text-quiet)">AaBb</div></div> |
| `--wa-color-text-link`  | <div class="color-preview"><div class="color-swatch text-only" style="color: var(--wa-color-text-link)">AaBb</div></div> |

### Selection

Selection colors are used for selected text. We recommend a minimum 4.5:1 contrast ratio between the background color and the text color.

| Custom Property               |  Preview                        |
| ----------------------------- | ------------------------------- |
| `--wa-color-selection-background`   | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-selection-background)"></div></div> |
| `--wa-color-selection-text`  | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-selection-background); color: var(--wa-color-selection-text)">AaBb</div></div> |

### Focus

Focus is used for the color of your project's focus ring. Using a single, consistent color allows for predictable keyboard navigation. We recommend a minimum 3:1 contrast ratio against surface colors and background colors wherever possible.

| Custom Property               |  Preview                        |
| ----------------------------- | ------------------------------- |
| `--wa-color-focus`   | <div class="color-preview"><div class="color-swatch" style="outline: var(--wa-focus-ring)"></div></div> |

### Overlays

Overlays provide a backdrop to isolate content, often allowing background colors or content to show through to preserve overall context. 

`--wa-color-overlay-modal` is meant for use behind modal content, like dialogs and drawers. `--wa-color-overlay-inline` is meant for use behind inline content where background colors of parent elements should show through to avoid conflicting colors.

| Custom Property               |  Preview                        |
| ----------------------------- | ------------------------------- |
| `--wa-color-overlay-modal`   | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-overlay-modal)"></div></div> |
| `--wa-color-overlay-inline`  | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-overlay-inline)"></div></div> |

### Shadow

Shadow is used to indicate elevation. `--wa-color-shadow` is used in your theme's preset shadows.

| Custom Property               |  Preview                        |
| ----------------------------- | ------------------------------- |
| `--wa-color-shadow`   | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-shadow)"></div></div> |

### Interactive Mix

Mix colors are used in `color-mix()` functions to achieve consistent interaction effects across components. We recommend using a color that is the inverse of your standard button labels to minimize any adverse effects on color contrast.

| Custom Property               |  Preview                        |
| ----------------------------- | ------------------------------- |
| `--wa-color-mix-hover`   | <div class="color-group"><div class="color-preview" style="flex: 2 0 auto"><div class="color-swatch" style="background-color: color-mix(in oklab, transparent, var(--wa-color-mix-hover))"></div></div><div class="color-preview"><div class="color-swatch" style="background-color: color-mix(in oklab, var(--wa-color-brand-fill-loud), var(--wa-color-mix-hover))"></div></div><div class="color-preview"><div class="color-swatch" style="background-color: color-mix(in oklab, var(--wa-color-success-fill-loud), var(--wa-color-mix-hover))"></div></div><div class="color-preview"><div class="color-swatch" style="background-color: color-mix(in oklab, var(--wa-color-warning-fill-loud), var(--wa-color-mix-hover))"></div></div><div class="color-preview"><div class="color-swatch" style="background-color: color-mix(in oklab, var(--wa-color-danger-fill-loud), var(--wa-color-mix-hover))"></div></div></div> |
| `--wa-color-mix-active`   | <div class="color-group"><div class="color-preview" style="flex: 2 0 auto"><div class="color-swatch" style="background-color: color-mix(in oklab, transparent, var(--wa-color-mix-active))"></div></div><div class="color-preview"><div class="color-swatch" style="background-color: color-mix(in oklab, var(--wa-color-brand-fill-loud), var(--wa-color-mix-active))"></div></div><div class="color-preview"><div class="color-swatch" style="background-color: color-mix(in oklab, var(--wa-color-success-fill-loud), var(--wa-color-mix-active))"></div></div><div class="color-preview"><div class="color-swatch" style="background-color: color-mix(in oklab, var(--wa-color-warning-fill-loud), var(--wa-color-mix-active))"></div></div><div class="color-preview"><div class="color-swatch" style="background-color: color-mix(in oklab, var(--wa-color-danger-fill-loud), var(--wa-color-mix-active))"></div></div></div> |


## Semantic Colors

Semantic colors help reinforce a specific message, intended usage, or expected results through familiar, meaningful hues. Each specify colors to use for fills, borders, and text so that they can be used across components with predictable results and easily assembled with readable contrast. There are five groups of semantic colors:

- **Brand** to reinforce your project's branding
- **Success** to express validity or confirmation
- **Neutral** for content that is idle, inactive, or innocuous
- **Warning** to express caution or uncertainty
- **Danger** to express errors or risk

| Custom Property               |  <code>brand</code>             |  <code>success</code>           |  <code>neutral</code>           |  <code>warning</code>           | <code>danger</code>             |
| ----------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `--wa-color-*-fill-quiet`   | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-brand-fill-quiet)"></div></div> |  <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-success-fill-quiet)"></div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-neutral-fill-quiet)"></div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-warning-fill-quiet)"></div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-danger-fill-quiet)"></div></div> |
| `--wa-color-*-fill-normal`   | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-brand-fill-normal)"></div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-success-fill-normal)"></div></div> |<div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-neutral-fill-normal)"></div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-warning-fill-normal)"></div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-danger-fill-normal)"></div></div> |
| `--wa-color-*-fill-loud`   | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-brand-fill-loud)"></div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-success-fill-loud)"></div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-neutral-fill-loud)"></div></div> |  <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-warning-fill-loud)"></div></div> |  <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-danger-fill-loud)"></div></div> |
| `--wa-color-*-border-quiet`   | <div class="color-preview"><div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-brand-border-quiet)"></div></div> | <div class="color-preview"><div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-success-border-quiet)"></div></div> | <div class="color-preview"><div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-neutral-border-quiet)"></div></div> | <div class="color-preview"><div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-warning-border-quiet)"></div></div> | <div class="color-preview"><div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-danger-border-quiet)"></div></div> |
| `--wa-color-*-border-normal`   | <div class="color-preview"><div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-brand-border-normal)"></div></div> | <div class="color-preview"><div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-success-border-normal)"></div></div> | <div class="color-preview"><div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-neutral-border-normal)"></div></div> | <div class="color-preview"><div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-warning-border-normal)"></div></div> | <div class="color-preview"><div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-danger-border-normal)"></div></div> |
| `--wa-color-*-border-loud`   | <div class="color-preview"><div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-brand-border-loud)"></div></div> | <div class="color-preview"><div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-success-border-loud)"></div></div> | <div class="color-preview"><div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-neutral-border-loud)"></div></div> | <div class="color-preview"><div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-warning-border-loud)"></div></div> | <div class="color-preview"><div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-danger-border-loud)"></div></div> |
| `--wa-color-*-on-quiet`  | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-brand-fill-quiet); color: var(--wa-color-brand-on-quiet)">AaBb</div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-success-fill-quiet); color: var(--wa-color-success-on-quiet)">AaBb</div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-neutral-fill-quiet); color: var(--wa-color-neutral-on-quiet)">AaBb</div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-warning-fill-quiet); color: var(--wa-color-warning-on-quiet)">AaBb</div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-danger-fill-quiet); color: var(--wa-color-danger-on-quiet)">AaBb</div></div> |
| `--wa-color-*-on-normal`  | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-brand-fill-normal); color: var(--wa-color-brand-on-normal)">AaBb</div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-success-fill-normal); color: var(--wa-color-success-on-normal)">AaBb</div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-neutral-fill-normal); color: var(--wa-color-neutral-on-normal)">AaBb</div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-warning-fill-normal); color: var(--wa-color-warning-on-normal)">AaBb</div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-danger-fill-normal); color: var(--wa-color-danger-on-normal)">AaBb</div></div> |
| `--wa-color-*-on-loud`  | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-brand-fill-loud); color: var(--wa-color-brand-on-loud)">AaBb</div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-success-fill-loud); color: var(--wa-color-success-on-loud)">AaBb</div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-neutral-fill-loud); color: var(--wa-color-neutral-on-loud)">AaBb</div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-warning-fill-loud); color: var(--wa-color-warning-on-loud)">AaBb</div></div> | <div class="color-preview"><div class="color-swatch" style="background-color: var(--wa-color-danger-fill-loud); color: var(--wa-color-danger-on-loud)">AaBb</div></div> |
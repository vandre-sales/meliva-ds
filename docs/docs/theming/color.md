---
title: Color
description: Ensure consistent use of color and readable contrast with Web Awesome's color properties.
layout: page.njk
---

<style>
  .color-name {
    font-weight: var(--wa-font-weight-semibold);
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
    border-radius: var(--wa-border-radius-s);
    line-height: 2;
    height: 2em;
    padding-inline: var(--wa-space-xs);
  }
  .color-swatch.text-only {
    padding-inline: 0;
  }
</style>

Web Awesome's color system is made up of CSS custom properties to help ensure consistent color use throughout your project.

Color is organized by three main categories:

- [Literal colors](/#literal-colors) that give familiar names to your starting color palette
- [Foundational colors](/#foundational-colors) that lay the groundwork for your theme
- [Semantic colors](/#semantic-colors) that draw attention and convey meaning


## Literal Colors

Literal colors are the lowest level color properties in your theme. Each color is identified by a name, like red or gray, and a number that roughly corresponds to the color's perceived lightness. On this scale, 100 is equal to pure white and 0 is equal to pure black.

Lightness values on this scale have a strong correlation to [relative luminance](https://www.w3.org/WAI/GL/wiki/Relative_luminance), which is used to calculate color contrast. To meet [WCAG 2.1 success criteria for minimum or enhanced contrast](https://www.w3.org/TR/WCAG21/#contrast-minimum), even across hues, calculate the difference between the lightness values of any two colors:

- A difference of 40 ensures a minimum 3:1 contrast ratio, suitable for large text and icons (AA)
- A difference of 50 ensures a minimum 4.5:1 contrast ratio, suitable for normal text (AA) and large text (AAA)
- A difference of 60 ensures a minimum 7:1 contrast ratio, suitable for all text (AAA)

Web Awesome defines seven literal colors each with 11 lightness values using the format `--wa-color-{name}-{#}`.

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

## Foundational Colors

Foundational colors lay the groundwork for the content and structure of your project. These colors are named according to their role in your theme.

### Key Colors

We provide aliases for a pair of literal color groups to aid changing the key colors of your project:

- **Primary** is used to draw attention and signify actions
- **Base** makes up your project's body and structure

By default, `--wa-color-primary-{#}` references `--wa-color-blue-{#}` and `--wa-color-base-{#}` references `--wa-color-gray-{#}`.

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

### Surfaces

Surfaces are background layers that other components and content rest on. Surface colors help convey hierarchy through a sense of elevation, where `--wa-color-surface-raised` is the closest to the user (e.g., dialogs and popup menus) and `--wa-color-surface-lowered` is the farthest away (e.g., wells).

| Custom Property               |  Preview                        |
| ----------------------------- | ------------------------------- |
| `--wa-color-surface-raised`   | <div class="color-swatch" style="background-color: var(--wa-color-surface-raised); box-shadow:var(--wa-shadow-s)"></div> |
| `--wa-color-surface-default`  | <div class="color-swatch" style="background-color: var(--wa-color-surface-default)"></div> |
| `--wa-color-surface-lowered`  | <div class="color-swatch" style="background-color: var(--wa-color-surface-lowered); box-shadow:var(--wa-shadow-xs)"></div> |
| `--wa-color-surface-border`   | <div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-surface-border)"></div> |

### Text

Text colors are used for standard text elements. We recommend a minimum 4.5:1 contrast ratio between text colors and surface colors.

| Custom Property               |  Preview                        |
| ----------------------------- | ------------------------------- |
| `--wa-color-text-normal`   | <div class="color-swatch text-only" style="color: var(--wa-color-text-normal)">AaBb</div> |
| `--wa-color-text-quiet`  | <div class="color-swatch text-only" style="color: var(--wa-color-text-quiet)">AaBb</div> |
| `--wa-color-text-link`  | <div class="color-swatch text-only" style="color: var(--wa-color-text-link)">AaBb</div> |

### Overlays

Overlays provide a backdrop to isolate content, often allowing background context to show through. 

| Custom Property               |  Preview                        |
| ----------------------------- | ------------------------------- |
| `--wa-color-overlay-modal`   | <div class="color-swatch" style="background-color: var(--wa-color-overlay-modal)"></div> |
| `--wa-color-overlay-inline`  | <div class="color-swatch" style="background-color: var(--wa-color-overlay-inline)"></div> |

### Shadow

Shadows indicate elevation and, often, interactivity. `--wa-color-shadow` is used to construct your theme's [shadow properties](/docs/theming/shadows).

| Custom Property               |  Preview                        |
| ----------------------------- | ------------------------------- |
| `--wa-color-shadow`   | <div class="color-swatch" style="background-color: var(--wa-color-shadow)"></div> |

### Interactions

#### Focus

Web Awesome uses a single, consistent focus color for predictable keyboard navigation. This is used alongside your [focus properties](/docs/theming/focus) to construct `--wa-focus-ring`. We recommend a minimum 3:1 contrast ratio against surface colors and background colors wherever possible.

| Custom Property               |  Preview                        |
| ----------------------------- | ------------------------------- |
| `--wa-color-focus`   | <div class="color-swatch" style="outline: var(--wa-focus-ring-style) var(--wa-focus-ring-width) var(--wa-color-focus)"></div> |

#### Hover and Active

We leverage `color-mix()` to achieve consistent hover and active states across components without the need for dozens of handpicked colors. These custom properties are used in `color-mix()` functions to contextually generate hover and active colors based on the color of the component.

| Custom Property               |  Preview                        |
| ----------------------------- | ------------------------------- |
| `--wa-color-mix-hover`   | <div class="color-swatch" style="text-align: center; background-image: linear-gradient(to right, color-mix(in oklab, transparent, var(--wa-color-mix-hover)) 25%, color-mix(in oklab, var(--wa-color-brand-fill-loud), var(--wa-color-mix-hover)) 25%, color-mix(in oklab, var(--wa-color-brand-fill-loud), var(--wa-color-mix-hover)) 75%, var(--wa-color-brand-fill-loud) 75%, var(--wa-color-brand-fill-loud))"><small style="color:var(--wa-color-brand-on-loud)">mixed</small></div> |
| `--wa-color-mix-active`   | <div class="color-swatch" style="text-align: center; background-image: linear-gradient(to right, color-mix(in oklab, transparent, var(--wa-color-mix-active)) 25%, color-mix(in oklab, var(--wa-color-brand-fill-loud), var(--wa-color-mix-active)) 25%, color-mix(in oklab, var(--wa-color-brand-fill-loud), var(--wa-color-mix-active)) 75%, var(--wa-color-brand-fill-loud) 75%, var(--wa-color-brand-fill-loud))"><small style="color:var(--wa-color-brand-on-loud);">mixed</small></div> |


## Semantic Colors

Semantic colors help reinforce a specific message, intended usage, or expected results through familiar, meaningful hues. Each color is identified by its semantic group, role, and attention using the format `--wa-color-{group}-{role}-{attention}`. There are five groups of semantic colors:

- **Brand** to reinforce your brand color
- **Success** for validity or confirmation
- **Neutral** for ordinary or inactive content
- **Warning** for caution or uncertainty
- **Danger** for errors or risk

Each group defines colors for specific roles so that colors can be easily assembled with predictable results and readable contrast. There are three roles:

- **Fill** for background colors or areas larger than a few pixels
- **Border** for borders, dividers, and other stroke-width elements
- **On** for content displayed on a fill (e.g., pair `--wa-color-danger-on-loud` with `--wa-color-danger-fill-loud`)

Finally, each color is named according to how much attention it draws. Here, we use noise as an analogy: a loud noise draws more attention than a quiet one. There are three levels of attention:

- **Quiet** draws the least attention
- **Normal** draws some attention
- **Loud** draws the most attention

| Custom Property               |  <code>brand</code>             |  <code>success</code>           |  <code>neutral</code>           |  <code>warning</code>           | <code>danger</code>             |
| ----------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- | ------------------------------- |
| `--wa-color-*-fill-quiet`   | <div class="color-swatch" style="background-color: var(--wa-color-brand-fill-quiet)"></div> |  <div class="color-swatch" style="background-color: var(--wa-color-success-fill-quiet)"></div> | <div class="color-swatch" style="background-color: var(--wa-color-neutral-fill-quiet)"></div> | <div class="color-swatch" style="background-color: var(--wa-color-warning-fill-quiet)"></div> | <div class="color-swatch" style="background-color: var(--wa-color-danger-fill-quiet)"></div> |
| `--wa-color-*-fill-normal`   | <div class="color-swatch" style="background-color: var(--wa-color-brand-fill-normal)"></div> | <div class="color-swatch" style="background-color: var(--wa-color-success-fill-normal)"></div> |<div class="color-swatch" style="background-color: var(--wa-color-neutral-fill-normal)"></div> | <div class="color-swatch" style="background-color: var(--wa-color-warning-fill-normal)"></div> | <div class="color-swatch" style="background-color: var(--wa-color-danger-fill-normal)"></div> |
| `--wa-color-*-fill-loud`   | <div class="color-swatch" style="background-color: var(--wa-color-brand-fill-loud)"></div> | <div class="color-swatch" style="background-color: var(--wa-color-success-fill-loud)"></div> | <div class="color-swatch" style="background-color: var(--wa-color-neutral-fill-loud)"></div> |  <div class="color-swatch" style="background-color: var(--wa-color-warning-fill-loud)"></div> |  <div class="color-swatch" style="background-color: var(--wa-color-danger-fill-loud)"></div> |
| `--wa-color-*-border-quiet`   | <div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-brand-border-quiet)"></div> | <div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-success-border-quiet)"></div> | <div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-neutral-border-quiet)"></div> | <div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-warning-border-quiet)"></div> | <div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-danger-border-quiet)"></div> |
| `--wa-color-*-border-normal`   | <div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-brand-border-normal)"></div> | <div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-success-border-normal)"></div> | <div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-neutral-border-normal)"></div> | <div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-warning-border-normal)"></div> | <div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-danger-border-normal)"></div> |
| `--wa-color-*-border-loud`   | <div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-brand-border-loud)"></div> | <div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-success-border-loud)"></div> | <div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-neutral-border-loud)"></div> | <div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-warning-border-loud)"></div> | <div class="color-swatch" style="border: var(--wa-border-width-s) solid var(--wa-color-danger-border-loud)"></div> |
| `--wa-color-*-on-quiet`  | <div class="color-swatch" style="background-color: var(--wa-color-brand-fill-quiet); color: var(--wa-color-brand-on-quiet)">AaBb</div> | <div class="color-swatch" style="background-color: var(--wa-color-success-fill-quiet); color: var(--wa-color-success-on-quiet)">AaBb</div> | <div class="color-swatch" style="background-color: var(--wa-color-neutral-fill-quiet); color: var(--wa-color-neutral-on-quiet)">AaBb</div> | <div class="color-swatch" style="background-color: var(--wa-color-warning-fill-quiet); color: var(--wa-color-warning-on-quiet)">AaBb</div> | <div class="color-swatch" style="background-color: var(--wa-color-danger-fill-quiet); color: var(--wa-color-danger-on-quiet)">AaBb</div> |
| `--wa-color-*-on-normal`  | <div class="color-swatch" style="background-color: var(--wa-color-brand-fill-normal); color: var(--wa-color-brand-on-normal)">AaBb</div> | <div class="color-swatch" style="background-color: var(--wa-color-success-fill-normal); color: var(--wa-color-success-on-normal)">AaBb</div> | <div class="color-swatch" style="background-color: var(--wa-color-neutral-fill-normal); color: var(--wa-color-neutral-on-normal)">AaBb</div> | <div class="color-swatch" style="background-color: var(--wa-color-warning-fill-normal); color: var(--wa-color-warning-on-normal)">AaBb</div> | <div class="color-swatch" style="background-color: var(--wa-color-danger-fill-normal); color: var(--wa-color-danger-on-normal)">AaBb</div> |
| `--wa-color-*-on-loud`  | <div class="color-swatch" style="background-color: var(--wa-color-brand-fill-loud); color: var(--wa-color-brand-on-loud)">AaBb</div> | <div class="color-swatch" style="background-color: var(--wa-color-success-fill-loud); color: var(--wa-color-success-on-loud)">AaBb</div> | <div class="color-swatch" style="background-color: var(--wa-color-neutral-fill-loud); color: var(--wa-color-neutral-on-loud)">AaBb</div> | <div class="color-swatch" style="background-color: var(--wa-color-warning-fill-loud); color: var(--wa-color-warning-on-loud)">AaBb</div> | <div class="color-swatch" style="background-color: var(--wa-color-danger-fill-loud); color: var(--wa-color-danger-on-loud)">AaBb</div> |
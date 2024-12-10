---
title: Page
description: Layouts offer an easy way to scaffold pages using minimal markup.
layout: component
isPro: true
---

The layout component is designed to power full webpages. It is flexible enough to handle most modern designs and includes a simple mechanism for handling desktop and mobile navigation.

A number of sections are available as part of the layout, most of which are optional. Content is populated by [slotting elements](/docs/usage/#slots) into various locations.

This component _does not_ implement any [content sectioning](https://developer.mozilla.org/en-US/docs/Web/HTML/Element#content_sectioning) or "semantic elements" internally (such as `<main>`, `<header>`, `<footer>`, etc.). Instead, we recommended that you slot in content sectioning elements wherever you feel they're appropriate.

## Layout Anatomy

This image depicts a page's anatomy, including the default positions of each section. The labels represent the [named slots](#slots) you can use to populate them.

Most slots are optional. Slots that have no content will not be shown, allowing you to opt-in to just the sections you actually need.

![Screenshot of Layout Anatomy showing various slots](/assets/images/layout-anatomy.svg)

:::info
If you're not familiar with how slots work in HTML, you might want to [learn more about slots](/docs/usage/#slots) before using this component.
:::

## Sticky Sections

The following sections of a page are "sticky" by default, meaning they remain in position as the user scrolls.

- `banner`
- `header`
- `sub-header`
- `navigation` (or `menu`)
- `aside`

This is often desirable, but you can change this behavior using the `disable-sticky` attribute. Use a space-delimited list of names to tell the page which sections should not be sticky.

```html
<wa-page disable-sticky="header aside"> ... </wa-page>
```

## Skip To Content

The layout provides a "skip to content" link that's visually hidden until the user tabs into it. You don't have to do anything to configure this, unless you want to change the text displayed in the link. In that case, you can slot in your own text using the `skip-to-content` slot.

This example localizes the "skip to content" link for German users.

```html
<wa-page>
  ...
  <span slot="skip-to-content">Zum Inhalt springen</span>
  ...
</wa-page>
```

## Spacing

Each slot specifies default padding and `display: flex` to set gaps between the slot's direct children. You can drop elements into each slot, and reasonable spacing is already applied for you.

Some slots have additional flexbox properties set by default. The following slots specify `justify-content: space-between` to evenly distribute child elements horizontally:
- `header`
- `subheader`
- `main-header`
- `main-footer`
- `footer`

The following slots specify `flex-direction: column` to arrange child elements vertically:
- `navigation-header`
- `navigation` (or `menu`)
- `navigation-footer`
- `aside`

You can specify your own padding, display, and flex properties for each slot with your own CSS. In this example, we're setting our own `gap` and `padding` for the `footer` slot:
```css
[slot="footer"] {
  gap: var(--wa-space-xl);
  padding: var(--wa-space-xl);
}
```

When using `<wa-page>`, make sure to zero out all paddings and margins on `<html>` and `<body>`, otherwise you may see unexpected gaps. The following styles are highly recommended when using `<wa-page>`.

```css
html,
body {
  min-height: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}
```

## Responsiveness

The layout component tries not to have too many opinions in terms of responsive behaviors — you get to decide with your own CSS and media queries how your content responds! However, the navigation menu _does_ respond by collapsing on smaller screens. The breakpoint at which this occurs is 768px by default, but you can change it using the `mobile-breakpoint` attribute.

```html
<wa-page mobile-breakpoint="600"> ... </wa-page>
```

You can provide a button to toggle the navigation menu anywhere inside the layout by adding the `data-toggle-nav` attribute. (This _does not_ have to be a Web Awesome button.)

```html
<wa-page mobile-breakpoint="600">
  ...
  <wa-button data-toggle-nav>Menu</wa-button>
  ...
</wa-page>
```

Alternatively, you can apply `nav-state="open"` and `nav-state="closed"` to the layout component to show and hide the navigation, respectively.

```html
<wa-page nav-state="open"> ... </wa-page>
```

## Providing Navigation Items

- TODO - example with navigation items
- TODO - example with`<h2>` and `<a>` as navigation items

## Examples

### Documentation Layout

```html {.example data-viewport}
<wa-button>Test</wa-button>
```


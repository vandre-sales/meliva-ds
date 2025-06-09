---
title: Divider
description: Dividers are used to visually separate or group elements.
tags: [organization, content, forms]
icon: divider
---

```html {.example}
<wa-divider></wa-divider>
```

## Examples

### Width

Use the `--width` custom property to change the width of the divider.

```html {.example}
<wa-divider style="--width: 4px;"></wa-divider>
```

### Color

Use the `--color` custom property to change the color of the divider.

```html {.example}
<wa-divider style="--color: tomato;"></wa-divider>
```

### Spacing

Use the `--spacing` custom property to change the amount of space between the divider and it's neighboring elements.

```html {.example}
<div style="text-align: center;">
  Above
  <wa-divider style="--spacing: 2rem;"></wa-divider>
  Below
</div>
```

### Orientation

The default orientation for dividers is `horizontal`. Set `orientation` attribute to `vertical` to draw a vertical divider. The divider will span the full height of its container.

```html {.example}
<div style="display: flex; align-items: center;">
  First
  <wa-divider orientation="vertical"></wa-divider>
  Middle
  <wa-divider orientation="vertical"></wa-divider>
  Last
</div>
```

### Menu Dividers

Use dividers in [menus](/docs/components/menu) to visually group menu items.

```html {.example}
<wa-dropdown style="max-width: 200px;">
  <wa-button slot="trigger" caret>Menu</wa-button>
  <wa-dropdown-item value="1">Option 1</wa-dropdown-item>
  <wa-dropdown-item value="2">Option 2</wa-dropdown-item>
  <wa-dropdown-item value="3">Option 3</wa-dropdown-item>
  <wa-divider></wa-divider>
  <wa-dropdown-item value="4">Option 4</wa-dropdown-item>
  <wa-dropdown-item value="5">Option 5</wa-dropdown-item>
  <wa-dropdown-item value="6">Option 6</wa-dropdown-item>
</wa-dropdown>
```

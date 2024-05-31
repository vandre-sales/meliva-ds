---
title: Component Groups
description: Style groups of components that share similar qualities with these Web Awesome custom properties.
layout: page.njk
---

For components that share similar qualities, Web Awesome includes custom properties to change the appearance of these related components all at once.

## Form Controls

| Custom Property               |  Default Value                        |
| ----------------------------- | ------------------------------- |
| `--wa-form-control-background`   | `var(--wa-color-surface-default)` |
| `--wa-form-control-border-style`   | `var(--wa-border-style)` |
| `--wa-form-control-border-width`   | `var(--wa-border-width-s)` |
| `--wa-form-control-border-radius`   | `var(--wa-border-radius-s)` |
| `--wa-form-control-activated-color`   | `var(--wa-color-brand-fill-loud)` |
| `--wa-form-control-resting-color`   | `var(--wa-color-neutral-border-loud)` |
| `--wa-form-control-label-color`   | `var(--wa-color-neutral-border-loud)` |
| `--wa-form-control-label-font-weight`   | `var(--wa-font-weight-normal)` |
| `--wa-form-control-label-line-height`   | `var(--wa-line-height-normal)` |
| `--wa-form-control-value-color`   | `var(--wa-color-text-normal)` |
| `--wa-form-control-value-font-weight`   | `var(--wa-font-weight-body)` |
| `--wa-form-control-value-line-height`   | `var(--wa-line-height-condensed)` |
| `--wa-form-control-placeholder-color`   | `var(--wa-color-base-60)` |
| `--wa-form-control-height-s`   | `calc(var(--wa-space-xs) * 2 + var(--wa-font-size-s) * var(--wa-form-control-value-line-height))` |
| `--wa-form-control-height-m`   | `calc(var(--wa-space-s) * 2 + var(--wa-font-size-m) * var(--wa-form-control-value-line-height))` |
| `--wa-form-control-height-l`   | `calc(var(--wa-space-m) * 2 + var(--wa-font-size-l) * var(--wa-form-control-value-line-height))` |
| `--wa-form-control-required-content`   | `'*'` |
| `--wa-form-control-required-content-color`   | `inherit` |
| `--wa-form-control-required-content-offset`   | `-0.1em` |

```html {.example}
<form class="wa-block-spacing-m">
  <wa-input label="Input">
    <span slot="help-text">Press <kbd>Tab</kbd> to move focus to other interactive elements.</span>
  </wa-input>
  <wa-select label="Select" value="option-1">
    <wa-option value="option-1">Select option 1</wa-option>
    <wa-option value="option-2">Select option 2</wa-option>
    <wa-option value="option-3">Select option 3</wa-option>
  </wa-select>
  <wa-radio-group label="Radio group" name="a" value="1">
    <wa-radio value="1">Radio option 1</wa-radio>
    <wa-radio value="2">Radio option 2</wa-radio>
    <wa-radio value="3">Radio option 3</wa-radio>
  </wa-radio-group>
  <wa-checkbox>Checkbox</wa-checkbox>
  <wa-switch>Switch</wa-switch>
  <wa-button>Button</wa-button>
</form>

<style>
  form > * + *, wa-radio {
    display: block;
    margin-block-start: var(--wa-space-m);
  }
  wa-radio {
    margin-block-start: var(--wa-space-2xs);
  }
  wa-radio, wa-checkbox, wa-switch, wa-button {
    width: fit-content;
  }
</style>
```

## Panels

| Custom Property               |  Default Value                        |
| ----------------------------- | ------------------------------- |
| `--wa-panel-border-style`   | `var(--wa-border-style)` |
| `--wa-panel-border-width`   | `var(--wa-border-width-s)` |
| `--wa-panel-border-radius`   | `var(--wa-border-radius-m)` |
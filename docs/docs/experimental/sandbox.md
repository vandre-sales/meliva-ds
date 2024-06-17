---
title: Theming Sandbox
description: TODO
layout: page.njk
---

## Card

```html {.example}
<wa-card with-image with-footer class="card-overview">
  <img
    slot="image"
    src="https://images.unsplash.com/photo-1559209172-0ff8f6d49ff7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=80"
    alt="A kitten sits patiently between a terracotta pot and decorative grasses."
  />

  <strong>Mittens</strong><br />
  This kitten is as cute as he is playful. Bring him home today!<br />
  <small>6 weeks old</small>

  <div slot="footer">
    <wa-button variant="brand" pill>More Info</wa-button>
    <wa-rating></wa-rating>
  </div>
</wa-card>

<style>
  .card-overview {
    max-width: 300px;
  }

  .card-overview small {
    color: var(--wa-color-text-quiet);
  }

  .card-overview [slot='footer'] {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>
```

## Alerts

```html {.example}
<wa-callout variant="brand">
  <wa-icon slot="icon" name="circle-info" variant="regular"></wa-icon>
  <strong>This is super informative</strong><br />
  You can tell by how pretty the alert is.
</wa-callout>
<br />
<wa-callout variant="success">
  <wa-icon slot="icon" name="circle-check" variant="regular"></wa-icon>
  <strong>Your changes have been saved</strong><br />
  You can safely exit the app now.
</wa-callout>
<br />
<wa-callout variant="neutral">
  <wa-icon slot="icon" name="gear" variant="regular"></wa-icon>
  <strong>Your settings have been updated</strong><br />
  Settings will take affect on next login.
</wa-callout>
<br />
<wa-callout variant="warning">
  <wa-icon slot="icon" name="triangle-exclamation" variant="regular"></wa-icon>
  <strong>Your session has ended</strong><br />
  Please login again to continue.
</wa-callout>
<br />
<wa-callout variant="danger">
  <wa-icon slot="icon" name="circle-exclamation" variant="regular"></wa-icon>
  <strong>Your account has been deleted</strong><br />
  We're very sorry to see you go!
</wa-callout>
```

## Badges and Tags

```html {.example}
<wa-badge variant="brand">Brand</wa-badge>
<wa-badge variant="success">Success</wa-badge>
<wa-badge variant="neutral">Neutral</wa-badge>
<wa-badge variant="warning">Warning</wa-badge>
<wa-badge variant="danger">Danger</wa-badge>
<br />
<wa-tag variant="brand">Brand</wa-tag>
<wa-tag variant="success">Success</wa-tag>
<wa-tag variant="neutral">Neutral</wa-tag>
<wa-tag variant="warning">Warning</wa-tag>
<wa-tag variant="danger">Danger</wa-tag>
```

## Buttons

```html {.example}
<wa-button variant="brand">Brand</wa-button>
<wa-button variant="success">Success</wa-button>
<wa-button variant="neutral">Neutral</wa-button>
<wa-button variant="warning">Warning</wa-button>
<wa-button variant="danger">Danger</wa-button>
<br /><br />
<wa-button variant="brand" appearance="outline">Brand</wa-button>
<wa-button variant="success" appearance="outline">Success</wa-button>
<wa-button variant="neutral" appearance="outline">Neutral</wa-button>
<wa-button variant="warning" appearance="outline">Warning</wa-button>
<wa-button variant="danger" appearance="outline">Danger</wa-button>
<br /><br />
<wa-button appearance="text">Text</wa-button>
<br /><br />
<wa-radio-group label="Radio button group" name="a" value="1">
  <wa-radio-button value="1">Option 1</wa-radio-button>
  <wa-radio-button value="2">Option 2</wa-radio-button>
  <wa-radio-button value="3">Option 3</wa-radio-button>
</wa-radio-group>
```

## Form controls

```html {.example}
<wa-checkbox>Unchecked</wa-checkbox>
<br />
<wa-checkbox checked>Checked</wa-checkbox>
<br /><br />
<wa-radio-group label="Radio" name="a" value="1">
  <wa-radio value="1">Option 1</wa-radio>
  <wa-radio value="2">Option 2</wa-radio>
  <wa-radio value="3">Option 3</wa-radio>
</wa-radio-group>
<br />
<wa-switch>Switch off</wa-switch>
<br />
<wa-switch checked>Switch on</wa-switch>
<br /><br />
<wa-range label="Range" help-text="Here's a bit of handy content." min="0" max="100"></wa-range>
<br /><br />
<wa-input label="Label" help-text="Super helpful and/or contextual content" placeholder="Placeholder"></wa-input>
<br />
<wa-select label="Select" multiple value="option-1 option-2">
  <wa-option value="option-1">Option 1</wa-option>
  <wa-option value="option-2">Option 2</wa-option>
  <wa-option value="option-3">Option 3</wa-option>
  <wa-option value="option-4">Option 4</wa-option>
  <wa-option value="option-5">Option 5</wa-option>
  <wa-option value="option-6">Option 6</wa-option>
</wa-select>
```

## Progress

```html {.example}
<wa-progress-ring value="25" style="--indicator-width: 4px;"></wa-progress-ring>
<wa-progress-bar value="60"></wa-progress-bar>
<wa-spinner></wa-spinner>
```

## Shadows

```html {.example}
<style>
  div.shadow {
    border: var(--wa-border-width-s) solid var(--wa-color-surface-border);
    border-radius: var(--wa-border-radius-s);
    display: inline-block;
    height: 4rem;
    margin-right: 2rem;
    width: 4rem;
  }
  </style>
<div class="shadow" style="box-shadow: var(--wa-shadow-xs);"></div>
<div class="shadow" style="box-shadow: var(--wa-shadow-s);"></div>
<div class="shadow" style="box-shadow: var(--wa-shadow-m);"></div>
<div class="shadow" style="box-shadow: var(--wa-shadow-l);"></div>
```

## Tests

```html {.example}
<wa-button size="medium" style="width: 100%;" caret>Medium</wa-button>
<br /><br />
<wa-select>
  <wa-option value="option-1">Option 1</wa-option>
  <wa-option value="option-2">Option 2</wa-option>
</wa-select>
<br /><br />
<wa-input placeholder="Small" size="small">
  <wa-icon name="house" variant="solid" slot="prefix"></wa-icon>
  <wa-icon name="comment" variant="solid" slot="suffix"></wa-icon>
</wa-input>
<wa-button size="small">
  <wa-icon slot="prefix" name="gear" variant="solid"></wa-icon>
  Settings
</wa-button>
<br /><br />
<wa-input placeholder="Medium" size="medium">
  <wa-icon name="house" variant="solid" slot="prefix"></wa-icon>
  <wa-icon name="comment" variant="solid" slot="suffix"></wa-icon>
</wa-input>
<wa-button size="medium">
  <wa-icon slot="prefix" name="gear" variant="solid"></wa-icon>
  Settings
</wa-button>
<br /><br />
<wa-input placeholder="Large" size="large">
  <wa-icon name="house" variant="solid" slot="prefix"></wa-icon>
  <wa-icon name="comment" variant="solid" slot="suffix"></wa-icon>
</wa-input>
<wa-button size="large">
  <wa-icon slot="prefix" name="gear" variant="solid"></wa-icon>
  Settings
</wa-button>
<br /><br />
<wa-button size="medium">
  <wa-icon slot="prefix" name="gear" variant="solid"></wa-icon>
</wa-button>
<br /><br />
<wa-button-group label="Alignment">
  <wa-button appearance="outline" variant="brand">Left</wa-button>
  <wa-button appearance="outline" variant="brand">Center</wa-button>
  <wa-button appearance="outline" variant="brand">Right</wa-button>
</wa-button-group>

<br /><br />

<wa-button-group label="Alignment">
  <wa-button appearance="outline" variant="success">Left</wa-button>
  <wa-button appearance="outline" variant="success">Center</wa-button>
  <wa-button appearance="outline" variant="success">Right</wa-button>
</wa-button-group>

<br /><br />

<wa-button-group label="Alignment">
  <wa-button appearance="outline">Left</wa-button>
  <wa-button appearance="outline">Center</wa-button>
  <wa-button appearance="outline">Right</wa-button>
</wa-button-group>

<br /><br />

<wa-button-group label="Alignment">
  <wa-button appearance="outline" variant="warning">Left</wa-button>
  <wa-button appearance="outline" variant="warning">Center</wa-button>
  <wa-button appearance="outline" variant="warning">Right</wa-button>
</wa-button-group>

<br /><br />

<wa-button-group label="Alignment">
  <wa-button appearance="outline" variant="danger">Left</wa-button>
  <wa-button appearance="outline" variant="danger">Center</wa-button>
  <wa-button appearance="outline" variant="danger">Right</wa-button>
</wa-button-group>
```
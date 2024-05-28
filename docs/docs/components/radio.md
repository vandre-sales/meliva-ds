---
title: Radio
description: Radios allow the user to select a single option from a group.
layout: component.njk
---

Radios are designed to be used with [radio groups](/components/radio-group).

```html {.example}
<wa-radio-group label="Select an option" name="a" value="1">
  <wa-radio value="1">Option 1</wa-radio><br>
  <wa-radio value="2">Option 2</wa-radio><br>
  <wa-radio value="3">Option 3</wa-radio>
</wa-radio-group>
```

{% raw %}
```jsx {.react}
import WaRadio from '@shoelace-style/shoelace/dist/react/radio';
import WaRadioGroup from '@shoelace-style/shoelace/dist/react/radio-group';

const App = () => (
  <WaRadioGroup label="Select an option" name="a" value="1">
    <WaRadio value="1">Option 1</WaRadio><br />
    <WaRadio value="2">Option 2</WaRadio><br />
    <WaRadio value="3">Option 3</WaRadio>
  </WaRadioGroup>
);
```
{% endraw %}

:::info
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Initial Value

To set the initial value and checked state, use the `value` attribute on the containing radio group.

```html {.example}
<wa-radio-group label="Select an option" name="a" value="3">
  <wa-radio value="1">Option 1</wa-radio><br>
  <wa-radio value="2">Option 2</wa-radio><br>
  <wa-radio value="3">Option 3</wa-radio>
</wa-radio-group>
```

{% raw %}
```jsx {.react}
import WaRadio from '@shoelace-style/shoelace/dist/react/radio';
import WaRadioGroup from '@shoelace-style/shoelace/dist/react/radio-group';

const App = () => (
  <WaRadioGroup label="Select an option" name="a" value="3">
    <WaRadio value="1">Option 1</WaRadio><br />
    <WaRadio value="2">Option 2</WaRadio><br />
    <WaRadio value="3">Option 3</WaRadio>
  </WaRadioGroup>
);
```
{% endraw %}

### Disabled

Use the `disabled` attribute to disable a radio.

```html {.example}
<wa-radio-group label="Select an option" name="a" value="1">
  <wa-radio value="1">Option 1</wa-radio><br>
  <wa-radio value="2" disabled>Option 2</wa-radio><br>
  <wa-radio value="3">Option 3</wa-radio>
</wa-radio-group>
```

{% raw %}
```jsx {.react}
import WaRadio from '@shoelace-style/shoelace/dist/react/radio';
import WaRadioGroup from '@shoelace-style/shoelace/dist/react/radio-group';

const App = () => (
  <WaRadioGroup label="Select an option" name="a" value="1">
    <WaRadio value="1">Option 1</WaRadio><br />
    <WaRadio value="2" disabled>Option 2</WaRadio><br />
    <WaRadio value="3">Option 3</WaRadio>
  </WaRadioGroup>
);
```
{% endraw %}

## Sizes

Add the `size` attribute to the [Radio Group](/components/radio-group) to change the radios' size.

```html {.example}
<wa-radio-group size="small" value="1">
  <wa-radio value="1">Small 1</wa-radio><br>
  <wa-radio value="2">Small 2</wa-radio><br>
  <wa-radio value="3">Small 3</wa-radio>
</wa-radio-group>

<br />

<wa-radio-group size="medium" value="1">
  <wa-radio value="1">Medium 1</wa-radio><br>
  <wa-radio value="2">Medium 2</wa-radio><br>
  <wa-radio value="3">Medium 3</wa-radio>
</wa-radio-group>

<br />

<wa-radio-group size="large" value="1">
  <wa-radio value="1">Large 1</wa-radio><br>
  <wa-radio value="2">Large 2</wa-radio><br>
  <wa-radio value="3">Large 3</wa-radio>
</wa-radio-group>
```

```jsx react
import WaRadio from '@shoelace-style/shoelace/dist/react/radio';

const App = () => (
  <>
    <WaRadioGroup size="small" value="1">
      <WaRadio value="1">Small 1</WaRadio><br />
      <WaRadio value="2">Small 2</WaRadio><br />
      <WaRadio value="3">Small 3</WaRadio>
    </WaRadioGroup>

    <br />

    <WaRadioGroup size="medium" value="1">
      <WaRadio value="1">Medium 1</WaRadio><br />
      <WaRadio value="2">Medium 2</WaRadio><br />
      <WaRadio value="3">Medium 3</WaRadio>
    </WaRadioGroup>

    <br />

    <WaRadioGroup size="large" value="1">
      <WaRadio value="1">Large 1</WaRadio><br />
      <WaRadio value="2">Large 2</WaRadio><br />
      <WaRadio value="3">Large 3</WaRadio>
    </WaRadioGroup>
  </>
);
```
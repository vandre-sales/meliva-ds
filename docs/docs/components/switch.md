---
title: Switch
description: Switches allow the user to toggle an option on or off.
layout: component.njk
---

```html {.example}
<wa-switch>Switch</wa-switch>
```

{% raw %}
```jsx {.react}
import WaSwitch from '@shoelace-style/shoelace/dist/react/switch';

const App = () => <WaSwitch>Switch</WaSwitch>;
```
{% endraw %}

:::info
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Checked

Use the `checked` attribute to activate the switch.

```html {.example}
<wa-switch checked>Checked</wa-switch>
```

{% raw %}
```jsx {.react}
import WaSwitch from '@shoelace-style/shoelace/dist/react/switch';

const App = () => <WaSwitch checked>Checked</WaSwitch>;
```
{% endraw %}

### Disabled

Use the `disabled` attribute to disable the switch.

```html {.example}
<wa-switch disabled>Disabled</wa-switch>
```

{% raw %}
```jsx {.react}
import WaSwitch from '@shoelace-style/shoelace/dist/react/switch';

const App = () => <WaSwitch disabled>Disabled</WaSwitch>;
```
{% endraw %}

### Sizes

Use the `size` attribute to change a switch's size.

```html {.example}
<wa-switch size="small">Small</wa-switch>
<br />
<wa-switch size="medium">Medium</wa-switch>
<br />
<wa-switch size="large">Large</wa-switch>
```

{% raw %}
```jsx {.react}
import WaSwitch from '@shoelace-style/shoelace/dist/react/switch';

const App = () => (
  <>
    <WaSwitch size="small">Small</WaSwitch>
    <br />
    <WaSwitch size="medium">Medium</WaSwitch>
    <br />
    <WaSwitch size="large">Large</WaSwitch>
  </>
);
```
{% endraw %}

### Help Text

Add descriptive help text to a switch with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html {.example}
<wa-switch help-text="What should the user know about the switch?">Label</wa-switch>
```

{% raw %}
```jsx {.react}
import WaSwitch from '@shoelace-style/shoelace/dist/react/checkbox';

const App = () => <WaSwitch help-text="What should the user know about the switch?">Label</WaSwitch>;
```
{% endraw %}

### Custom Styles

Use the available custom properties to change how the switch is styled.

```html {.example}
<wa-switch style="--width: 80px; --height: 40px; --thumb-size: 36px;">Really big</wa-switch>
```

{% raw %}
```jsx {.react}
import WaSwitch from '@shoelace-style/shoelace/dist/react/switch';

const App = () => (
  <WaSwitch
    style={{
      '--width': '80px',
      '--height': '32px',
      '--thumb-size': '26px'
    }}
  />
);
```
{% endraw %}
---
title: Range
description: Ranges allow the user to select a single value within a given range using a slider.
layout: component.njk
---

```html {.example}
<wa-range></wa-range>
```

{% raw %}
```jsx {.react}
import WaRange from '@shoelace-style/shoelace/dist/react/range';

const App = () => <WaRange />;
```
{% endraw %}

:::info
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the range an accessible label. For labels that contain HTML, use the `label` slot instead.

```html {.example}
<wa-range label="Volume" min="0" max="100"></wa-range>
```

{% raw %}
```jsx {.react}
import WaRange from '@shoelace-style/shoelace/dist/react/range';

const App = () => <WaRange label="Volume" min={0} max={100} />;
```
{% endraw %}

### Help Text

Add descriptive help text to a range with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html {.example}
<wa-range label="Volume" help-text="Controls the volume of the current song." min="0" max="100"></wa-range>
```

{% raw %}
```jsx {.react}
import WaRange from '@shoelace-style/shoelace/dist/react/range';

const App = () => <WaRange label="Volume" help-text="Controls the volume of the current song." min={0} max={100} />;
```
{% endraw %}

### Min, Max, and Step

Use the `min` and `max` attributes to set the range's minimum and maximum values, respectively. The `step` attribute determines the value's interval when increasing and decreasing.

```html {.example}
<wa-range min="0" max="10" step="1"></wa-range>
```

{% raw %}
```jsx {.react}
import WaRange from '@shoelace-style/shoelace/dist/react/range';

const App = () => <WaRange min={0} max={10} step={1} />;
```
{% endraw %}

### Disabled

Use the `disabled` attribute to disable a slider.

```html {.example}
<wa-range disabled></wa-range>
```

{% raw %}
```jsx {.react}
import WaRange from '@shoelace-style/shoelace/dist/react/range';

const App = () => <WaRange disabled />;
```
{% endraw %}

### Tooltip Placement

By default, the tooltip is shown on top. Set `tooltip` to `bottom` to show it below the slider.

```html {.example}
<wa-range tooltip="bottom"></wa-range>
```

{% raw %}
```jsx {.react}
import WaRange from '@shoelace-style/shoelace/dist/react/range';

const App = () => <WaRange tooltip="bottom" />;
```
{% endraw %}

### Disable the Tooltip

To disable the tooltip, set `tooltip` to `none`.

```html {.example}
<wa-range tooltip="none"></wa-range>
```

{% raw %}
```jsx {.react}
import WaRange from '@shoelace-style/shoelace/dist/react/range';

const App = () => <WaRange tooltip="none" />;
```
{% endraw %}

### Custom Track Colors

You can customize the active and inactive portions of the track using the `--track-color-active` and `--track-color-inactive` custom properties.

```html {.example}
<wa-range
  style="
  --track-color-active: var(--wa-color-brand-fill-loud);
  --track-color-inactive: var(--wa-color-brand-fill-normal);
"
></wa-range>
```

{% raw %}
```jsx {.react}
import WaRange from '@shoelace-style/shoelace/dist/react/range';

const App = () => (
  <WaRange
    style={{
      '--track-color-active': 'var(--wa-color-brand-fill-loud)',
      '--track-color-inactive': 'var(--wa-color-brand-fill-normal)'
    }}
  />
);
```
{% endraw %}

### Custom Track Offset

You can customize the initial offset of the active track using the `--track-active-offset` custom property.

```html {.example}
<wa-range
  min="-100"
  max="100"
  style="
  --track-color-active: var(--wa-color-brand-fill-loud);
  --track-color-inactive: var(--wa-color-brand-fill-normal);
  --track-active-offset: 50%;
"
></wa-range>
```

{% raw %}
```jsx {.react}
import WaRange from '@shoelace-style/shoelace/dist/react/range';

const App = () => (
  <WaRange
    min={-100}
    max={100}
    style={{
      '--track-color-active': 'var(--wa-color-brand-fill-loud)',
      '--track-color-inactive': 'var(--wa-color-brand-fill-normal)',
      '--track-active-offset': '50%'
    }}
  />
);
```
{% endraw %}

### Custom Tooltip Formatter

You can change the tooltip's content by setting the `tooltipFormatter` property to a function that accepts the range's value as an argument.

```html {.example}
<wa-range min="0" max="100" step="1" class="range-with-custom-formatter"></wa-range>

<script>
  const range = document.querySelector('.range-with-custom-formatter');
  range.tooltipFormatter = value => `Total - ${value}%`;
</script>
```

{% raw %}
```jsx {.react}
import WaRange from '@shoelace-style/shoelace/dist/react/range';

const App = () => <WaRange min={0} max={100} step={1} tooltipFormatter={value => `Total - ${value}%`} />;
```
{% endraw %}

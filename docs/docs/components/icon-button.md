---
title: Icon Button
description: Icons buttons are simple, icon-only buttons that can be used for actions and in toolbars.
layout: component.njk
---

For a full list of icons that come bundled with Web Awesome, refer to the [icon component](/components/icon).

```html {.example}
<wa-icon-button name="gear" label="Settings"></wa-icon-button>
```

{% raw %}
```jsx {.react}
import WaIconButton from '@shoelace-style/shoelace/dist/react/icon-button';

const App = () => <WaIconButton name="gear" label="Settings" />;
```
{% endraw %}

## Examples

### Sizes

Icon buttons inherit their parent element's `font-size`.

```html {.example}
<wa-icon-button name="pen-to-square" variant="solid" label="Edit" style="font-size: 1.5rem;"></wa-icon-button>
<wa-icon-button name="pen-to-square" variant="solid" label="Edit" style="font-size: 2rem;"></wa-icon-button>
<wa-icon-button name="pen-to-square" variant="solid" label="Edit" style="font-size: 2.5rem;"></wa-icon-button>
```

{% raw %}
```jsx {.react}
import WaIconButton from '@shoelace-style/shoelace/dist/react/icon-button';

const App = () => (
  <>
    <WaIconButton name="pen-to-square" variant="solid" label="Edit" style={{ fontSize: '1.5rem' }} />
    <WaIconButton name="pen-to-square" variant="solid" label="Edit" style={{ fontSize: '2rem' }} />
    <WaIconButton name="pen-to-square" variant="solid" label="Edit" style={{ fontSize: '2.5rem' }} />
  </>
);
```
{% endraw %}

### Colors

Icon buttons are designed to have a uniform appearance, so their color is not inherited. However, you can still customize them by styling the `base` part.

```html {.example}
<div class="icon-button-color">
  <wa-icon-button name="bold" variant="solid" label="Bold"></wa-icon-button>
  <wa-icon-button name="italic" variant="solid" label="Italic"></wa-icon-button>
  <wa-icon-button name="underline" variant="solid" label="Underline"></wa-icon-button>
</div>

<style>
  .icon-button-color wa-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color wa-icon-button::part(base):hover,
  .icon-button-color wa-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color wa-icon-button::part(base):active {
    color: #960077;
  }
</style>
```

{% raw %}
```jsx {.react}
import WaIconButton from '@shoelace-style/shoelace/dist/react/icon-button';

const css = `
  .icon-button-color wa-icon-button::part(base) {
    color: #b00091;
  }

  .icon-button-color wa-icon-button::part(base):hover,
  .icon-button-color wa-icon-button::part(base):focus {
    color: #c913aa;
  }

  .icon-button-color wa-icon-button::part(base):active {
    color: #960077;
  }
`;

const App = () => (
  <>
    <div className="icon-button-color">
      <WaIconButton name="type-bold" variant="solid" label="Bold" />
      <WaIconButton name="type-italic" variant="solid" label="Italic" />
      <WaIconButton name="type-underline" variant="solid" label="Underline" />
    </div>

    <style>{css}</style>
  </>
);
```
{% endraw %}

### Link Buttons

Use the `href` attribute to convert the button to a link.

```html {.example}
<wa-icon-button name="gear" variant="solid" label="Settings" href="https://example.com" target="_blank"></wa-icon-button>
```

{% raw %}
```jsx {.react}
import WaIconButton from '@shoelace-style/shoelace/dist/react/icon-button';

const App = () => <WaIconButton name="gear" variant="solid" label="Settings" href="https://example.com" target="_blank" />;
```
{% endraw %}

### Icon Button with Tooltip

Wrap a tooltip around an icon button to provide contextual information to the user.

```html {.example}
<wa-icon-button id="icon-button" name="gear" variant="solid" label="Settings"></wa-icon-button>
<wa-tooltip for="icon-button">Settings</wa-tooltip>
```

{% raw %}
```jsx {.react}
import WaIconButton from '@shoelace-style/shoelace/dist/react/icon-button';
import WaTooltip from '@shoelace-style/shoelace/dist/react/tooltip';

const App = () => (
  <>
    <WaIconButton id="icon-button" name="gear" variant="solid" />
    <WaTooltip for="icon-button">Settings</WaTooltip>
  </>
);
```
{% endraw %}

### Disabled

Use the `disabled` attribute to disable the icon button.

```html {.example}
<wa-icon-button name="gear" variant="solid" label="Settings" disabled></wa-icon-button>
```

{% raw %}
```jsx {.react}
import WaIconButton from '@shoelace-style/shoelace/dist/react/icon-button';

const App = () => <WaIconButton name="gear" variant="solid" label="Settings" disabled />;
```
{% endraw %}
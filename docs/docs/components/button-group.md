---
title: Button Group
description: Button groups can be used to group related buttons into sections.
layout: component.njk
---

```html {.example}
<wa-button-group label="Alignment">
  <wa-button>Left</wa-button>
  <wa-button>Center</wa-button>
  <wa-button>Right</wa-button>
</wa-button-group>
```

{% raw %}
```jsx {.react}
import WaButton from '@shoelace-style/shoelace/dist/react/button';
import WaButtonGroup from '@shoelace-style/shoelace/dist/react/button-group';

const App = () => (
  <WaButtonGroup label="Alignment">
    <WaButton>Left</WaButton>
    <WaButton>Center</WaButton>
    <WaButton>Right</WaButton>
  </WaButtonGroup>
);
```
{% endraw %}

## Examples

### Button Sizes

All button sizes are supported, but avoid mixing sizes within the same button group.

```html {.example}
<wa-button-group label="Alignment">
  <wa-button size="small">Left</wa-button>
  <wa-button size="small">Center</wa-button>
  <wa-button size="small">Right</wa-button>
</wa-button-group>

<br /><br />

<wa-button-group label="Alignment">
  <wa-button size="medium">Left</wa-button>
  <wa-button size="medium">Center</wa-button>
  <wa-button size="medium">Right</wa-button>
</wa-button-group>

<br /><br />

<wa-button-group label="Alignment">
  <wa-button size="large">Left</wa-button>
  <wa-button size="large">Center</wa-button>
  <wa-button size="large">Right</wa-button>
</wa-button-group>
```

{% raw %}
```jsx {.react}
import WaButton from '@shoelace-style/shoelace/dist/react/button';
import WaButtonGroup from '@shoelace-style/shoelace/dist/react/button-group';

const App = () => (
  <>
    <WaButtonGroup label="Alignment">
      <WaButton size="small">Left</WaButton>
      <WaButton size="small">Center</WaButton>
      <WaButton size="small">Right</WaButton>
    </WaButtonGroup>

    <br />
    <br />

    <WaButtonGroup label="Alignment">
      <WaButton size="medium">Left</WaButton>
      <WaButton size="medium">Center</WaButton>
      <WaButton size="medium">Right</WaButton>
    </WaButtonGroup>

    <br />
    <br />

    <WaButtonGroup label="Alignment">
      <WaButton size="large">Left</WaButton>
      <WaButton size="large">Center</WaButton>
      <WaButton size="large">Right</WaButton>
    </WaButtonGroup>
  </>
);
```
{% endraw %}

### Theme Buttons

Theme buttons are supported through the button's `variant` attribute.

```html {.example}
<wa-button-group label="Alignment">
  <wa-button variant="brand">Left</wa-button>
  <wa-button variant="brand">Center</wa-button>
  <wa-button variant="brand">Right</wa-button>
</wa-button-group>

<br /><br />

<wa-button-group label="Alignment">
  <wa-button variant="success">Left</wa-button>
  <wa-button variant="success">Center</wa-button>
  <wa-button variant="success">Right</wa-button>
</wa-button-group>

<br /><br />

<wa-button-group label="Alignment">
  <wa-button>Left</wa-button>
  <wa-button>Center</wa-button>
  <wa-button>Right</wa-button>
</wa-button-group>

<br /><br />

<wa-button-group label="Alignment">
  <wa-button variant="warning">Left</wa-button>
  <wa-button variant="warning">Center</wa-button>
  <wa-button variant="warning">Right</wa-button>
</wa-button-group>

<br /><br />

<wa-button-group label="Alignment">
  <wa-button variant="danger">Left</wa-button>
  <wa-button variant="danger">Center</wa-button>
  <wa-button variant="danger">Right</wa-button>
</wa-button-group>
```

{% raw %}
```jsx {.react}
import WaButton from '@shoelace-style/shoelace/dist/react/button';
import WaButtonGroup from '@shoelace-style/shoelace/dist/react/button-group';

const App = () => (
  <>
    <WaButtonGroup label="Alignment">
      <WaButton variant="brand">Left</WaButton>
      <WaButton variant="brand">Center</WaButton>
      <WaButton variant="brand">Right</WaButton>
    </WaButtonGroup>

    <br />
    <br />

    <WaButtonGroup label="Alignment">
      <WaButton variant="success">Left</WaButton>
      <WaButton variant="success">Center</WaButton>
      <WaButton variant="success">Right</WaButton>
    </WaButtonGroup>

    <br />
    <br />

    <WaButtonGroup label="Alignment">
      <WaButton>Left</WaButton>
      <WaButton>Center</WaButton>
      <WaButton>Right</WaButton>
    </WaButtonGroup>

    <br />
    <br />

    <WaButtonGroup label="Alignment">
      <WaButton variant="warning">Left</WaButton>
      <WaButton variant="warning">Center</WaButton>
      <WaButton variant="warning">Right</WaButton>
    </WaButtonGroup>

    <br />
    <br />

    <WaButtonGroup label="Alignment">
      <WaButton variant="danger">Left</WaButton>
      <WaButton variant="danger">Center</WaButton>
      <WaButton variant="danger">Right</WaButton>
    </WaButtonGroup>
  </>
);
```
{% endraw %}

### Pill Buttons

Pill buttons are supported through the button's `pill` attribute.

```html {.example}
<wa-button-group label="Alignment">
  <wa-button size="small" pill>Left</wa-button>
  <wa-button size="small" pill>Center</wa-button>
  <wa-button size="small" pill>Right</wa-button>
</wa-button-group>

<br /><br />

<wa-button-group label="Alignment">
  <wa-button size="medium" pill>Left</wa-button>
  <wa-button size="medium" pill>Center</wa-button>
  <wa-button size="medium" pill>Right</wa-button>
</wa-button-group>

<br /><br />

<wa-button-group label="Alignment">
  <wa-button size="large" pill>Left</wa-button>
  <wa-button size="large" pill>Center</wa-button>
  <wa-button size="large" pill>Right</wa-button>
</wa-button-group>
```

{% raw %}
```jsx {.react}
import WaButton from '@shoelace-style/shoelace/dist/react/button';
import WaButtonGroup from '@shoelace-style/shoelace/dist/react/button-group';

const App = () => (
  <>
    <WaButtonGroup label="Alignment">
      <WaButton size="small" pill>
        Left
      </WaButton>
      <WaButton size="small" pill>
        Center
      </WaButton>
      <WaButton size="small" pill>
        Right
      </WaButton>
    </WaButtonGroup>

    <br />
    <br />

    <WaButtonGroup label="Alignment">
      <WaButton size="medium" pill>
        Left
      </WaButton>
      <WaButton size="medium" pill>
        Center
      </WaButton>
      <WaButton size="medium" pill>
        Right
      </WaButton>
    </WaButtonGroup>

    <br />
    <br />

    <WaButtonGroup label="Alignment">
      <WaButton size="large" pill>
        Left
      </WaButton>
      <WaButton size="large" pill>
        Center
      </WaButton>
      <WaButton size="large" pill>
        Right
      </WaButton>
    </WaButtonGroup>
  </>
);
```
{% endraw %}

### Dropdowns in Button Groups

Dropdowns can be placed inside button groups as long as the trigger is an `<wa-button>` element.

```html {.example}
<wa-button-group label="Example Button Group">
  <wa-button>Button</wa-button>
  <wa-button>Button</wa-button>
  <wa-dropdown>
    <wa-button slot="trigger" caret>Dropdown</wa-button>
    <wa-menu>
      <wa-menu-item>Item 1</wa-menu-item>
      <wa-menu-item>Item 2</wa-menu-item>
      <wa-menu-item>Item 3</wa-menu-item>
    </wa-menu>
  </wa-dropdown>
</wa-button-group>
```

{% raw %}
```jsx {.react}
import WaButton from '@shoelace-style/shoelace/dist/react/button';
import WaButtonGroup from '@shoelace-style/shoelace/dist/react/button-group';
import WaDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import WaMenu from '@shoelace-style/shoelace/dist/react/menu';
import WaMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <WaButtonGroup label="Example Button Group">
    <WaButton>Button</WaButton>
    <WaButton>Button</WaButton>
    <WaDropdown>
      <WaButton slot="trigger" caret>
        Dropdown
      </WaButton>
      <WaMenu>
        <WaMenuItem>Item 1</WaMenuItem>
        <WaMenuItem>Item 2</WaMenuItem>
        <WaMenuItem>Item 3</WaMenuItem>
      </WaMenu>
    </WaDropdown>
  </WaButtonGroup>
);
```
{% endraw %}

### Split Buttons

Create a split button using a button and a dropdown. Use a [visually hidden](/components/visually-hidden) label to ensure the dropdown is accessible to users with assistive devices.

```html {.example}
<wa-button-group label="Example Button Group">
  <wa-button variant="brand">Save</wa-button>
  <wa-dropdown placement="bottom-end">
    <wa-button slot="trigger" variant="brand" caret>
      <wa-visually-hidden>More options</wa-visually-hidden>
    </wa-button>
    <wa-menu>
      <wa-menu-item>Save</wa-menu-item>
      <wa-menu-item>Save as&hellip;</wa-menu-item>
      <wa-menu-item>Save all</wa-menu-item>
    </wa-menu>
  </wa-dropdown>
</wa-button-group>
```

{% raw %}
```jsx {.react}
import WaButton from '@shoelace-style/shoelace/dist/react/button';
import WaButtonGroup from '@shoelace-style/shoelace/dist/react/button-group';
import WaDropdown from '@shoelace-style/shoelace/dist/react/dropdown';
import WaMenu from '@shoelace-style/shoelace/dist/react/menu';
import WaMenuItem from '@shoelace-style/shoelace/dist/react/menu-item';

const App = () => (
  <WaButtonGroup label="Example Button Group">
    <WaButton variant="brand">Save</WaButton>
    <WaDropdown placement="bottom-end">
      <WaButton slot="trigger" variant="brand" caret></WaButton>
      <WaMenu>
        <WaMenuItem>Save</WaMenuItem>
        <WaMenuItem>Save as&hellip;</WaMenuItem>
        <WaMenuItem>Save all</WaMenuItem>
      </WaMenu>
    </WaDropdown>
  </WaButtonGroup>
);
```
{% endraw %}

### Tooltips in Button Groups

Buttons can be wrapped in tooltips to provide more detail when the user interacts with them.

```html {.example}
<wa-button-group label="Alignment">
  <wa-button id="button-left">Left</wa-button>
  <wa-button id="button-center">Center</wa-button>
  <wa-button id="button-right">Right</wa-button>
</wa-button-group>

<wa-tooltip for="button-left">I'm on the left</wa-tooltip>
<wa-tooltip for="button-center">I'm in the middle</wa-tooltip>
<wa-tooltip for="button-right">I'm on the right</wa-tooltip>
```

{% raw %}
```jsx {.react}
import WaButton from '@shoelace-style/shoelace/dist/react/button';
import WaButtonGroup from '@shoelace-style/shoelace/dist/react/button-group';
import WaTooltip from '@shoelace-style/shoelace/dist/react/tooltip';

const App = () => (
  <>
    <WaButton-group label="Alignment">
      <WaButton id="button-left">Left</WaButton>
      <WaButton id="button-center">Center</WaButton>
      <WaButton id="button-right">Right</WaButton>
    </WaButton-group>

    <WaTooltip for="button-left">I'm on the left</WaTooltip>
    <WaTooltip for="button-center">I'm in the middle</WaTooltip>
    <WaTooltip for="button-right">I'm on the right</WaTooltip>
  </>
);
```
{% endraw %}

### Toolbar Example

Create interactive toolbars with button groups.

```html {.example}
<div class="button-group-toolbar">
  <wa-button-group label="History">
    <wa-button id="undo-button"><wa-icon name="undo" variant="solid" label="Undo"></wa-icon></wa-button>
    <wa-button id="redo-button"><wa-icon name="redo" variant="solid" label="Redo"></wa-icon></wa-button>
  </wa-button-group>

  <wa-button-group label="Formatting">
    <wa-button id="button-bold"><wa-icon name="bold" variant="solid" label="Bold"></wa-icon></wa-button>
    <wa-button id="button-italic"><wa-icon name="italic" variant="solid" label="Italic"></wa-icon></wa-button>
    <wa-button id="button-underline"><wa-icon name="underline" variant="solid" label="Underline"></wa-icon></wa-button>
  </wa-button-group>

  <wa-button-group label="Alignment">
    <wa-button id="button-align-left"><wa-icon name="align-left" variant="solid" label="Align Left"></wa-icon></wa-button>
    <wa-button id="button-align-center"><wa-icon name="align-center" variant="solid" label="Align Center"></wa-icon></wa-button>
    <wa-button id="button-align-right"><wa-icon name="align-right" variant="solid" label="Align Right"></wa-icon></wa-button>
  </wa-button-group>
</div>

<wa-tooltip for="undo-button">Undo</wa-tooltip>
<wa-tooltip for="redo-button">Redo</wa-tooltip>
<wa-tooltip for="button-bold">Bold</wa-tooltip>
<wa-tooltip for="button-italic">Italic</wa-tooltip>
<wa-tooltip for="button-underline">Underline</wa-tooltip>

<wa-tooltip for="button-align-left">Align Left</wa-tooltip>
<wa-tooltip for="button-align-center">Align Center</wa-tooltip>
<wa-tooltip for="button-align-right">Align Right</wa-tooltip>

<style>
  .button-group-toolbar wa-button-group:not(:last-of-type) {
    margin-right: var(--wa-space-xs);
  }
</style>
```

{% raw %}
```jsx {.react}
import WaButton from '@shoelace-style/shoelace/dist/react/button';
import WaButtonGroup from '@shoelace-style/shoelace/dist/react/button-group';
import WaIcon from '@shoelace-style/shoelace/dist/react/icon';
import WaTooltip from '@shoelace-style/shoelace/dist/react/tooltip';

const css = `
  .button-group-toolbar wa-button-group:not(:last-of-type) {
    margin-right: var(--wa-space-xs);
  }
`;

const App = () => (
  <>
    <div class="button-group-toolbar">
      <WaButton-group label="History">
        <WaButton id="undo-button"><WaIcon name="undo" variant="solid" label="Undo"></WaIcon></WaButton>
        <WaButton id="redo-button"><WaIcon name="redo" variant="solid" label="Redo"></WaIcon></WaButton>
      </WaButton-group>

      <WaButton-group label="Formatting">
        <WaButton id="button-bold"><WaIcon name="bold" variant="solid" label="Bold"></WaIcon></WaButton>
        <WaButton id="button-italic"><WaIcon name="italic" variant="solid" label="Italic"></WaIcon></WaButton>
        <WaButton id="button-underline"><WaIcon name="underline" variant="solid" label="Underline"></WaIcon></WaButton>
      </WaButton-group>

      <WaButton-group label="Alignment">
        <WaButton id="button-align-left"><WaIcon name="align-left" variant="solid" label="Align Left"></WaIcon></WaButton>
        <WaButton id="button-align-center"><WaIcon name="align-center" variant="solid" label="Align Center"></WaIcon></WaButton>
        <WaButton id="button-align-right"><WaIcon name="align-right" variant="solid" label="Align Right"></WaIcon></WaButton>
      </WaButton-group>
    </div>

    <WaTooltip for="undo-button">Undo</WaTooltip>
    <WaTooltip for="redo-button">Redo</WaTooltip>
    <WaTooltip for="button-bold">Bold</WaTooltip>
    <WaTooltip for="button-italic">Italic</WaTooltip>
    <WaTooltip for="button-underline">Underline</WaTooltip>

    <WaTooltip for="button-align-left"Align Left</WaTooltip>
    <WaTooltip for="button-align-center">Align Center</WaTooltip>
    <WaTooltip for="button-align-right">Align Right</WaTooltip>

    <style>{css}</style>
  </>
);
```
{% endraw %}
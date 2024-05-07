---
title: Tab Panel
description: Tab panels are used inside tab groups to display tabbed content.
layout: component.njk
---

```html {.example}
<wa-tab-group>
  <wa-tab slot="nav" panel="general">General</wa-tab>
  <wa-tab slot="nav" panel="custom">Custom</wa-tab>
  <wa-tab slot="nav" panel="advanced">Advanced</wa-tab>
  <wa-tab slot="nav" panel="disabled" disabled>Disabled</wa-tab>

  <wa-tab-panel name="general">This is the general tab panel.</wa-tab-panel>
  <wa-tab-panel name="custom">This is the custom tab panel.</wa-tab-panel>
  <wa-tab-panel name="advanced">This is the advanced tab panel.</wa-tab-panel>
  <wa-tab-panel name="disabled">This is a disabled tab panel.</wa-tab-panel>
</wa-tab-group>
```

{% raw %}
```jsx {.react}
import WaTab from '@shoelace-style/shoelace/dist/react/tab';
import WaTabGroup from '@shoelace-style/shoelace/dist/react/tab-group';
import WaTabPanel from '@shoelace-style/shoelace/dist/react/tab-panel';

const App = () => (
  <WaTabGroup>
    <WaTab slot="nav" panel="general">
      General
    </WaTab>
    <WaTab slot="nav" panel="custom">
      Custom
    </WaTab>
    <WaTab slot="nav" panel="advanced">
      Advanced
    </WaTab>
    <WaTab slot="nav" panel="disabled" disabled>
      Disabled
    </WaTab>

    <WaTabPanel name="general">This is the general tab panel.</WaTabPanel>
    <WaTabPanel name="custom">This is the custom tab panel.</WaTabPanel>
    <WaTabPanel name="advanced">This is the advanced tab panel.</WaTabPanel>
    <WaTabPanel name="disabled">This is a disabled tab panel.</WaTabPanel>
  </WaTabGroup>
);
```
{% endraw %}

:::info
Additional demonstrations can be found in the [tab group examples](/components/tab-group).
:::

---
title: Tab
description: Tabs are used inside tab groups to represent and activate tab panels.
layout: component.njk
---

```html {.example}
<wa-tab>Tab</wa-tab>
<wa-tab active>Active</wa-tab>
<wa-tab closable>Closable</wa-tab>
<wa-tab disabled>Disabled</wa-tab>
```

{% raw %}
```jsx {.react}
import WaTab from '@shoelace-style/shoelace/dist/react/tab';

const App = () => (
  <>
    <WaTab>Tab</WaTab>
    <WaTab active>Active</WaTab>
    <WaTab closable>Closable</WaTab>
    <WaTab disabled>Disabled</WaTab>
  </>
);
```
{% endraw %}

:::info
Additional demonstrations can be found in the [tab group examples](/components/tab-group).
:::

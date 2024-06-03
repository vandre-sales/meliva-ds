---
title: Tag
description: Tags are used as labels to organize things or to indicate a selection.
layout: component.njk
---

```html {.example}
<wa-tag variant="brand">Brand</wa-tag>
<wa-tag variant="success">Success</wa-tag>
<wa-tag variant="neutral">Neutral</wa-tag>
<wa-tag variant="warning">Warning</wa-tag>
<wa-tag variant="danger">Danger</wa-tag>
```

{% raw %}
```jsx {.react}
import WaTag from '@shoelace-style/shoelace/dist/react/tag';

const App = () => (
  <>
    <WaTag variant="brand">Brand</WaTag>
    <WaTag variant="success">Success</WaTag>
    <WaTag variant="neutral">Neutral</WaTag>
    <WaTag variant="warning">Warning</WaTag>
    <WaTag variant="danger">Danger</WaTag>
  </>
);
```
{% endraw %}

## Examples

### Sizes

Use the `size` attribute to change a tab's size.

```html {.example}
<wa-tag size="small">Small</wa-tag>
<wa-tag size="medium">Medium</wa-tag>
<wa-tag size="large">Large</wa-tag>
```

{% raw %}
```jsx {.react}
import WaTag from '@shoelace-style/shoelace/dist/react/tag';

const App = () => (
  <>
    <WaTag size="small">Small</WaTag>
    <WaTag size="medium">Medium</WaTag>
    <WaTag size="large">Large</WaTag>
  </>
);
```
{% endraw %}

### Pill

Use the `pill` attribute to give tabs rounded edges.

```html {.example}
<wa-tag size="small" pill>Small</wa-tag>
<wa-tag size="medium" pill>Medium</wa-tag>
<wa-tag size="large" pill>Large</wa-tag>
```

{% raw %}
```jsx {.react}
import WaTag from '@shoelace-style/shoelace/dist/react/tag';

const App = () => (
  <>
    <WaTag size="small" pill>
      Small
    </WaTag>
    <WaTag size="medium" pill>
      Medium
    </WaTag>
    <WaTag size="large" pill>
      Large
    </WaTag>
  </>
);
```
{% endraw %}

### Removable

Use the `removable` attribute to add a remove button to the tag.

```html {.example}
<div class="tags-removable">
  <wa-tag size="small" removable>Small</wa-tag>
  <wa-tag size="medium" removable>Medium</wa-tag>
  <wa-tag size="large" removable>Large</wa-tag>
</div>

<script>
  const div = document.querySelector('.tags-removable');

  div.addEventListener('wa-remove', event => {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  });
</script>

<style>
  .tags-removable wa-tag {
    transition: var(--wa-transition-normal) opacity;
  }
</style>
```

{% raw %}
```jsx {.react}
import WaTag from '@shoelace-style/shoelace/dist/react/tag';

const css = `
  .tags-removable wa-tag {
    transition: var(--wa-transition-normal) opacity;
  }
`;

const App = () => {
  function handleRemove(event) {
    const tag = event.target;
    tag.style.opacity = '0';
    setTimeout(() => (tag.style.opacity = '1'), 2000);
  }

  return (
    <>
      <div className="tags-removable">
        <WaTag size="small" removable onWaRemove={handleRemove}>
          Small
        </WaTag>

        <WaTag size="medium" removable onWaRemove={handleRemove}>
          Medium
        </WaTag>

        <WaTag size="large" removable onWaRemove={handleRemove}>
          Large
        </WaTag>
      </div>

      <style>{css}</style>
    </>
  );
};
```
{% endraw %}

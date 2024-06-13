---
title: Details
description: Details show a brief summary and expand to show additional content.
layout: component.njk
---

<!-- cspell:dictionaries lorem-ipsum -->

```html {.example}
<wa-details summary="Toggle Me">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</wa-details>
```

## Examples

### Disabled

Use the `disable` attribute to prevent the details from expanding.

```html {.example}
<wa-details summary="Disabled" disabled>
  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</wa-details>
```

### Customizing the Summary Icon

Use the `expand-icon` and `collapse-icon` slots to change the expand and collapse icons, respectively. To disable the animation, override the `rotate` property on the `summary-icon` part as shown below.

```html {.example}
<wa-details summary="Toggle Me" class="custom-icons">
  <wa-icon name="square-plus" slot="expand-icon" variant="regular"></wa-icon>
  <wa-icon name="square-minus" slot="collapse-icon" variant="regular"></wa-icon>

  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
  aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
</wa-details>

<style>
  wa-details.custom-icons::part(summary-icon) {
    /* Disable the expand/collapse animation */
    rotate: none;
  }
</style>
```

### Grouping Details

Details are designed to function independently, but you can simulate a group or "accordion" where only one is shown at a time by listening for the `wa-show` event.

```html {.example}
<div class="details-group-example">
  <wa-details summary="First" open>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </wa-details>

  <wa-details summary="Second">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </wa-details>

  <wa-details summary="Third">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
    aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
  </wa-details>
</div>

<script>
  const container = document.querySelector('.details-group-example');

  // Close all other details when one is shown
  container.addEventListener('wa-show', event => {
    if (event.target.localName === 'wa-details') {
      [...container.querySelectorAll('wa-details')].map(details => (details.open = event.target === details));
    }
  });
</script>

<style>
  .details-group-example wa-details:not(:last-of-type) {
    margin-bottom: var(--wa-space-2xs);
  }
</style>
```

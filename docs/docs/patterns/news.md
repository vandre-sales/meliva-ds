---
title: News
description: TODO
layout: page.njk
---

TODO Page Description

## Examples
### Paywall

```html{.example}
<div>
  <wa-dialog label="You've run out of free articles... loser" with-header class="dialog-header">
    <wa-button href="#">Register</wa-button>
  Already a subscriber? <a href="#">Login</a>
</wa-dialog>

<wa-button>Open Paywall</wa-button>

<script>
  const dialog = document.querySelector('.dialog-header');
  const openButton = dialog.nextElementSibling;

  openButton.addEventListener('click', () => dialog.open = true);
</script>

</div>
```
---
title: Patterns
description: TODO
---

Adding the `wa-valid` or `wa-invalid` class to a form control will change its appearance. This is useful for applying validation styles to server-rendered form controls.

## Blog

### Test

```html:preview
<wa-drawer label="Drawer" class="drawer-overview">
  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
  <wa-button slot="footer" variant="brand">Close</wa-button>
</wa-drawer>

<wa-button>Open Drawer</wa-button>

<script>
  const drawer = document.querySelector('.drawer-overview');
  const openButton = drawer.nextElementSibling;
  const closeButton = drawer.querySelector('wa-button[variant="brand"]');

  openButton.addEventListener('click', () => drawer.show());
  closeButton.addEventListener('click', () => drawer.hide());
</script>
```

## Hero

```html:preview
<wa-button>HI</wa-button>
</script>
```

## E-commerce

### Shopping Cart

### Product Overview

### Product List

### Promo Section

### Order Summaries

### Reviews

### Product Features

### Category Section

### Store Navigation

### Order History

### Incentives

```html:preview


<style>

</style>
```

<div style="display: grid; grid-template-columns: 1fr 1fr; gap: 2rem;">
  <div>
    <h3>Valid</h3>
    <wa-input class="wa-valid" label="Name" help-text="Just a first name is fine" placeholder="Enter your name"></wa-input><br>
    <wa-select class="wa-valid" label="Choose one" help-text="Make a choice already">
      <wa-option>There can be only one!</wa-option>
      <wa-option>Well, maybe two is OK</wa-option>
    </wa-select>
    <wa-textarea class="wa-valid" label="Bio" help-text="Tell us about yourself" placeholder="Enter a bio"></wa-textarea><br>
    <wa-range class="wa-valid" value="50" label="Volume" help-text="Crank it up"></wa-range><br>
    <wa-checkbox class="wa-valid" checked>I am awesome</wa-checkbox><br>
    <wa-checkbox class="wa-valid">So am I</wa-checkbox><br><br>
    <wa-switch class="wa-valid" checked>Still awesome</wa-switch><br>
    <wa-switch class="wa-valid">More awesome</wa-switch><br><br>
    <wa-radio-group class="wa-valid" label="Select an option" name="a" value="1">
      <wa-radio value="1">Option 1</wa-radio>
      <wa-radio value="2">Option 2</wa-radio>
      <wa-radio value="3">Option 3</wa-radio>
    </wa-radio-group><br>
    <wa-button variant="brand">Submit Form</wa-button>
  </div>
  <div>
    <h3>Invalid</h3>
    <wa-input class="wa-invalid" label="Name" help-text="Just a first name is fine" placeholder="Enter your name"></wa-input><br>
    <wa-select class="wa-invalid" label="Choose one" help-text="Make a choice already">
      <wa-option>There can be only one!</wa-option>
      <wa-option>Well, maybe two is OK</wa-option>
    </wa-select>
    <wa-textarea class="wa-invalid" label="Bio" help-text="Tell us about yourself" placeholder="Enter a bio"></wa-textarea><br>
    <wa-range class="wa-invalid" value="50" label="Volume" help-text="Crank it up"></wa-range><br>
    <wa-checkbox class="wa-invalid" checked>I am awesome</wa-checkbox><br>
    <wa-checkbox class="wa-invalid">So am I</wa-checkbox><br><br>
    <wa-switch class="wa-invalid" checked>Still awesome</wa-switch><br>
    <wa-switch class="wa-invalid">More awesome</wa-switch><br><br>
    <wa-radio-group class="wa-invalid" label="Select an option" name="a" value="1">
      <wa-radio value="1">Option 1</wa-radio>
      <wa-radio value="2">Option 2</wa-radio>
      <wa-radio value="3">Option 3</wa-radio>
    </wa-radio-group><br>
    <wa-button variant="brand">Submit Form</wa-button>
  </div>
</div>
```

---
title: E-commerce
description: TODO
layout: page.njk
---

TODO Page Description

## Examples

### Slide Over

```html {.example}
<wa-card class="card-header" style="width: 500px;">
  <div slot="header">
    <strong>Shopping Cart</strong>
    <wa-icon-button name="close" variant="solid" label="Settings"></wa-icon-button>
  </div>
    <section class="cart-item">
    <img src="https://source.unsplash.com/white-and-red-nike-air-force-1-high--iJgjj33eEk" alt="" width="300">
    <div>
      <div style="display:flex; justify-content: space-between; font-weight: 600;">
        <span>AJ1</span>
        <span>$170.00</span>
      </div>
      <div style="font-size: small;">Off-white Jordan One</div>
      <div style="display:flex; justify-content: space-between; align-items: center;">
        <span>Qty: 1</span>
        <wa-button appearance="text" size="small">Remove</wa-button>
      </div>
    </div>
  </section>
   <section class="cart-item">
    <img src="https://source.unsplash.com/smiling-woman-in-black-and-white-print-t-shirt-VW5VjskNXZ8" alt="" width="300">
    <div>
      <div style="display:flex; justify-content: space-between; font-weight: 600;">
        <span>The Trails</span>
        <span>$35.00</span>
      </div>
      <div style="font-size: small;">50/50 Cotton Poly Blend</div>
      <div style="display:flex; justify-content: space-between; align-items: center;">
        <span>Qty: 1</span>
        <wa-button appearance="text" size="small">Remove</wa-button>
      </div>
    </div>
  </section>
   <section class="cart-item">
    <img src="https://source.unsplash.com/man-standing-in-front-of-door-dG4Eb_oC5iM" alt="" width="300">
    <div>
      <div style="display:flex; justify-content: space-between; font-weight: 600;">
        <span>Outcast</span>
        <span>$27.00</span>
      </div>
      <div style="font-size: small;">100% Cotton</div>
      <div style="display:flex; justify-content: space-between; align-items: center;">
        <span>Qty: 1</span>
        <wa-button appearance="text" size="small">Remove</wa-button>
      </div>
    </div>
  </section>

  <div slot="footer">
    <div style="display:flex; justify-content: space-between; font-weight: 600;">
      <span>Subtotal</span>
      <span>$232.00</span>
    </div>
    <div style="font-size: small; margin-bottom: 1rem;">Shipping and taxes calculated at checkout.</div>
   <wa-button size="medium" variant="brand" style="width: 100%; margin-bottom: 1rem;">Medium</wa-button>
    or <a href="#">Continue shopping <wa-icon-button name="arrow-right" variant="solid" label="Settings"></wa-icon-button></a>
  </div>

</wa-card>

<style>


  .card-header [slot='header'] {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .card-header h3 {
    margin: 0;
  }

  .card-header wa-icon-button {
    font-size: var(--wa-font-size-m);
  }

  .cart-item {
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;

    &:not(:last-of-type) {
      padding-bottom: 1rem;
      border-bottom: 1px solid var(--border-color);
    }


    img {
      width: 6rem;
      flex-grow: 1;
    }

    div {
      flex-grow: 11;
    }
  }


</style>
```

### Two Column Cart

```html {.example}
<div class="two-column">
  <h1>Shopping Cart</h1>
  <div class="first-column">
    <section class="cart-item">
     <img class="cart-item-image" src="https://source.unsplash.com/white-crew-neck-t-shirt-acn5ERAeSb4" alt="" width="300">
    <div class="cart-item-info">
      <div class="cart-item-meta">
        <div>
          <span style="font-size: larger">Classic</span>
          <div>White - L</div>
          <span style="font-size: larger">$15.00</span>
        </div>

          <wa-select placeholder="1">
            <wa-option value="option-1">1</wa-option>
            <wa-option value="option-2">2</wa-option>
            <wa-option value="option-3">3</wa-option>
          </wa-select>
          <wa-icon-button name="close" variant="solid" label="Settings"></wa-icon-button>

      </div>
       <div style="display: flex;justify-content: flex-start;align-items: baseline;">
        <wa-icon name="check" style="color: green; margin-right: 0.5rem;"></wa-icon> In Stock
        </div>

    </div>
  </section>
  <section class="cart-item">
     <img class="cart-item-image" src="https://source.unsplash.com/blue-and-white-checkered-dress-shirt-RqYTuWkTdEs" alt="" width="300">
    <div class="cart-item-info">
      <div class="cart-item-meta">
        <div>
          <span style="font-size: larger">Button Up</span>
          <div>Blue - L</div>
          <span style="font-size: larger">$20.00</span>
        </div>

          <wa-select placeholder="1">
            <wa-option value="option-1">1</wa-option>
            <wa-option value="option-2">2</wa-option>
            <wa-option value="option-3">3</wa-option>
          </wa-select>
          <wa-icon-button name="close" variant="solid" label="Settings"></wa-icon-button>

      </div>
       <div style="display: flex;justify-content: flex-start;align-items: baseline;">
        <wa-icon name="check" style="color: green; margin-right: 0.5rem;"></wa-icon> In Stock
        </div>

    </div>
  </section>
  <section class="cart-item">
     <img class="cart-item-image" src="https://source.unsplash.com/white-and-blue-cat-printed-crew-neck-t-shirt-fEt6Wd4t4j0" alt="" width="300">
    <div class="cart-item-info">
      <div class="cart-item-meta">
        <div>
          <span style="font-size: larger">Kitten</span>
          <div>Egg - L</div>
          <span style="font-size: larger">$20.00</span>
        </div>

          <wa-select placeholder="1">
            <wa-option value="option-1">1</wa-option>
            <wa-option value="option-2">2</wa-option>
            <wa-option value="option-3">3</wa-option>
          </wa-select>
          <wa-icon-button name="close" variant="solid" label="Settings"></wa-icon-button>

      </div>
       <div style="display: flex;justify-content: flex-start;align-items: baseline;">
        <wa-icon name="check" style="color: green; margin-right: 0.5rem;"></wa-icon> In Stock
        </div>

    </div>
  </section>


  </div>
  <wa-card class="card-header second-column">
  <div slot="header">
    Order Summary

  </div>
  <div style="display:flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
    <span>Subtotal</span>
    <span>$55.00</span>
  </div>
  <div style="display:flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
    <span>Shipping</span>
    <span>$5.00</span>
  </div>
  <div style="display:flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
    <span>Tax</span>
    <span>$5.50</span>
  </div>
  <div style="display:flex; justify-content: space-between; border-bottom: 1px solid var(--border-color); padding-bottom: 1rem;">
    <span>Order Total</span>
    <span>$65.50</span>
  </div>

  <wa-button size="medium" variant="brand" style="width: 100%; margin-bottom: 1rem;">Checkout</wa-button>




</wa-card>

<style>
  .two-column {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    column-gap: 1rem;

    .first-column {
      grid-column: 1/8;
    }

    .second-column {
      grid-column: 8/14
    }

    .cart-item {
      display: grid;
      grid-template-columns: 30% 61%;
      column-gap: 0.5rem;
      margin-bottom: 1rem;

       &:not(:last-of-type) {
      padding-bottom: 1rem;
      border-bottom: 1px solid rgb(48, 50, 59);
    }


    }

    .cart-item-meta {
            display: grid;
    grid-template-columns: 45% 35% 20%;
    column-gap: 1rem;
      }


    h1 {
      width: 100%;
    grid-column: 1 / end;
    }
  }
</style>
</div>
```

### Single Column Cart

```html {.example}
<div class="single-column">
  <h1>Shopping Cart</h1>
  <div class="first-half half">
    <section class="cart-item">
    <img class="cart-item-image" src="https://source.unsplash.com/black-convertible-coupe-0CZwuZhiC84" alt="" >
    <div>
      <span style="display: flex;justify-content: space-between;">
        <span><strong>Convertible</strong></span>
        <span>$32.00</span>
      </span>
      <div>Eggplant</div>

       <div style="display: flex;justify-content: space-between;align-items: baseline;">
        <span><wa-icon name="check" style="color: green; margin-right: 0.5rem;"></wa-icon> In Stock</span>
        <wa-button appearance="text" size="small">Remove</wa-button>
        </div>
    </div>


  </section>
  <section class="cart-item">
    <img class="cart-item-image" src="https://source.unsplash.com/blue-open-door-pickup-truck-BCKgFzJbwz4" alt="" >
    <div>
      <span style="display: flex;justify-content: space-between;">
        <span><strong>Pickup</strong></span>
        <span>$32.00</span>
      </span>
      <div>Sky Blue</div>

       <div style="display: flex;justify-content: space-between;align-items: baseline;">
        <span><wa-icon name="check" style="color: green; margin-right: 0.5rem;"></wa-icon> In Stock</span>
        <wa-button appearance="text" size="small">Remove</wa-button>
        </div>
    </div>


  </section>
  <section class="cart-item">
    <img class="cart-item-image" src="https://source.unsplash.com/red-and-white-volkswagen-t-2-scale-model-GlDRYsruYJ8" alt="" >
    <div>
      <span style="display: flex;justify-content: space-between;">
        <span><strong>Volkswagon T2</strong></span>
        <span>$32.00</span>
      </span>
      <div>Red/White</div>

       <div style="display: flex;justify-content: space-between;align-items: baseline;">
        <span><wa-icon name="check" style="color: green; margin-right: 0.5rem;"></wa-icon> In Stock</span>
        <wa-button appearance="text" size="small">Remove</wa-button>
        </div>
    </div>


  </section>
   <div slot="footer">
    <div style="display:flex; justify-content: space-between; font-weight: 600;">
      <span>Subtotal</span>
      <span>$96.00</span>
    </div>
    <div style="font-size: small; margin-bottom: 1rem;">Shipping and taxes calculated at checkout.</div>
   <wa-button size="medium" variant="brand" style="width: 100%; margin-bottom: 1rem;">Medium</wa-button>
    or <a href="#">Continue shopping <wa-icon-button name="arrow-right" variant="solid" label="Settings"></wa-icon-button></a>
  </div>

  </div>
</div>
<style>
  .single-column {
    .cart-item {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      column-gap: 1rem;
      margin-bottom: 1rem;

       &:not(:last-of-type) {
      padding-bottom: 1rem;
      border-bottom: 1px solid rgb(48, 50, 59);
    }

    img {
      grid-column: 1/4;
      width: 100%;
      object-fit: cover;
      height: 90px;
    }

    div {
      grid-column: 4/-1;
      align-content: center;
    }


    }
  }
</style>
```

### Product Quickview

```html {.example}
<wa-card class="card-header">
  <div slot="header">
    <strong>Quickview</strong>
    <wa-icon-button name="close" variant="solid" label="Settings"></wa-icon-button>
  </div>
  <div style="
    display: grid;
    grid-template-columns: 35% 65%;
    grid-column-gap: 1rem;
">
  <img class="cart-item-image" src="https://source.unsplash.com/white-crew-neck-t-shirt-acn5ERAeSb4" alt="" width="300">
  <div>
    <h3>Quality Cotton Tee</h3>
    <span>$45.00</span>
    <div style="display: flex;justify-content: space-between;">
      <wa-rating label="Rating" precision="0.5" value="2.5"></wa-rating>
      <a href="#">See all ratings</a>
    </div>
    <wa-radio-group label="Color" name="a" value="1" style="margin-bottom: 1rem">
      <wa-radio-button value="1">White</wa-radio-button>
      <wa-radio-button value="2">Gray</wa-radio-button>
      <wa-radio-button value="3">Black</wa-radio-button>
    </wa-radio-group>
    <wa-radio-group label="Size"  name="a" value="1" style="margin-bottom: 1rem">
      <wa-radio-button value="1">Small</wa-radio-button>
      <wa-radio-button value="2">Medium</wa-radio-button>
      <wa-radio-button value="3">Large</wa-radio-button>
    </wa-radio-group>
    <wa-button size="medium" variant="brand" style="width: 100%; margin: 1rem 0;">Add to Cart</wa-button>

  </div>
  </div>
</wa-card>
```

### Product Review

```html {.example}
<div>
  <div>
    <h2>Customer Reviews</h2>
    <div>
      <wa-rating label="Rating" precision="0.5" value="2.5"></wa-rating> Based on 1624 reviews
    </div>
    <div style="margin-bottom: 2rem;">
      <span><wa-progress-bar value="50"></wa-progress-bar></span>
      <h3>Share your Thoughts</h3>
      <p>If you’ve used this product, share your thoughts with other customers</p>
      <wa-button size="medium">Write a Review</wa-button>
    </div>
  </div>
  <div style="margin-top: 1rem;">
    <div>
      <div style="border-bottom: 1px solid #eee; margin-bottom: 1rem;">
        <span style="display: flex; align-items: center;">
          <wa-avatar image="https://source.unsplash.com/bman-wearing-henley-top-portrait-7YVZYZeITc8" label="man-wearing-henley" style="margin-right: 1rem;"></wa-avatar>
          <span style="display: flex; flex-direction: column">Mark Henry <wa-rating label="Rating" precision="0.5" value="2.5"></wa-rating></span>
        </span>
        <p><em>I initially had my doubts, but once I got the widgets and played around with them, I became a believer.</em></p>
      </div>
      <div style="border-bottom: 1px solid #eee; margin-bottom: 1rem;">
        <span style="display: flex; align-items: center;">
          <wa-avatar image="https://source.unsplash.com/woman-wearing-black-crew-neck-shirt-3TLl_97HNJo" label="lady-in-turtleneck" style="margin-right: 1rem;"></wa-avatar>
          <span style="display: flex; flex-direction: column">Liz Michaels <wa-rating label="Rating" precision="0.5" value="2.5"></wa-rating></span>
        </span>
        <p><em>I'd definitely but these again.</em></p>
      </div>
      <div style="border-bottom: 1px solid #eee; margin-bottom: 1rem;">
        <span style="display: flex; align-items: center;">
          <wa-avatar image="https://source.unsplash.com/man-with-index-finger-on-lips-RukI4qZGlQs" label="man-with-hair" style="margin-right: 1rem;"></wa-avatar>
          <span style="display: flex; flex-direction: column">Todd Smith <wa-rating label="Rating" precision="0.5" value="2.5"></wa-rating></span>
        </span>
        <p><em>It was everything I wanted and more, would totally recommend.</em></p>
      </div>
    </div>
  </div>
</div>
```

### Order History

```html {.example}
<div>
  <h2>Order History</h2>
  <p>Check the status of recent orders, manage returns, and download invoices.</p>
  <div class="order-history-meta">
    <span class="order-history-meta-item">
      <strong>Order number</strong>
      <span>WU88191111</span>
    </span>
       <span class="order-history-meta-item">
      <strong>Date placed</strong>
      <span>January 22, 2021</span>
    </span>
       <span class="order-history-meta-item">
      <strong>Total amount</strong>
      <span>$95.00</span>
    </span>
      <span style="display: grid;grid-template-columns: 1fr 1fr;column-gap: 1rem;">
        <wa-button variant="neutral" appearance="outline">View Order</wa-button>
        <wa-button variant="neutral" appearance="outline">View Invoice</wa-button>
      </span>
  </div>
  <div>
    <div class="order-history-list-item" style="align-items: center;">
      <img class="cart-item-image" src="https://source.unsplash.com/beige-wooden-bar-stool-4kTbAMRAHtQ" alt="">
      <div>
        <span style="display: flex;justify-content: space-between;">
          <span><strong>Kitchen Stool</strong></span>
          <span><strong>$55.00</strong></span>
        </span>
        <p>TODO: add a description</p>
        <span>
          <a href="#">View Product</a> |  <a href="#">Buy Again</a>
        </span>
        <br/>
        <span>Out for Delivery</span>
      </div>
    </div>
    <div class="order-history-list-item" style="margin-top: 1rem; align-items: center;">
      <img class="cart-item-image" src="https://source.unsplash.com/green-succulent-in-teal-ceramic-vase-miziNqvJx5M" alt="">
      <div>
        <span style="display: flex;justify-content: space-between;">
          <span><strong>Succulent</strong></span>
          <span><strong>$5.00</strong></span>
        </span>
        <p>TODO: add a description</p>
        <span>
          <a href="#">View Product</a> |  <a href="#">Buy Again</a>
        </span>
        <br/>
        <span>Out for Delivery</span>
      </div>
    </div>
    <div class="order-history-list-item" style="margin-top: 1rem; align-items: center;">
      <img class="cart-item-image" src="https://source.unsplash.com/battercreek-coffee-pack-rsnzc-8dVs0" alt="">
      <div>
        <span style="display: flex;justify-content: space-between;">
          <span><strong>French Roast</strong></span>
          <span><strong>$35.00</strong></span>
        </span>
        <p>TODO: add a description</p>
        <span>
          <a href="#">View Product</a> |  <a href="#">Buy Again</a>
        </span>
        <br/>
        <span>Out for Delivery</span>
      </div>
    </div>
  </div>
</div>
<style>
  .order-history-meta {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1.5rem;

    .order-history-meta-item {
      display: flex;
      flex-direction: column;
    }

  }

  .order-history-list-item {
        display: grid;
    grid-template-columns: 18% 79%;
    column-gap: 1rem;
        border-bottom: 1px solid #eee;
    padding-bottom: 1rem;
  }
</style>
```

### Checkout

```html {.example}
<div class="checkout-form">
<div class="checkout-form-inputs">
  <h4 class="full-row" style="margin-top: 0.5rem;">Contact Info</h4>
  <wa-input type="email" label="Email Address" class="full-row"></wa-input>
  <hr class="full-row" />
  <h4 class="full-row" style="margin-top: 0.5rem;">Shipping Information</h4>
  <wa-input label="First Name" class="first-half"></wa-input>
  <wa-input label="Last Name" class="second-half" style="margin-top: 1.5rem;"></wa-input>
  <wa-input label="Company" class="full-row" style="margin-top: 1.5rem;"></wa-input>
  <wa-input label="Address" class="full-row" style="margin-top: 1.5rem;"></wa-input>
  <wa-input label="City" class="first-half" style="margin-top: 1.5rem;"></wa-input>
  <wa-select label="Country" placeholder="Country" class="second-half" style="margin-top: 1.5rem;">
    <wa-option value="option-1">Option 1</wa-option>
    <wa-option value="option-2">Option 2</wa-option>
    <wa-option value="option-3">Option 3</wa-option>
  </wa-select>
  <wa-input label="State" class="first-half" style="margin-top: 1.5rem;"></wa-input>
  <wa-input label="Postal Code" class="second-half" style="margin-top: 1.5rem;"></wa-input>
  <wa-input label="Phone" class=" full-row" style="margin-top: 1.5rem;"></wa-input>
  <hr class="full-row" />
    <wa-radio-group label="Delivery Method" help-text="Select an option that makes you proud." name="a" value="1" class="full-row" style="margin-top: 1.5rem;">
    <wa-radio-button value="1">Standard</wa-radio-button>
    <wa-radio-button value="2">Express</wa-radio-button>
  </wa-radio-group>
  <hr class="full-row" />
  <h4 class="full-row" style="margin-top: 0.5rem;">Payment</h4>
  <wa-radio-group label="Select an option" name="a" value="1" class="full-row" style="margin-top: 1.5rem;">
    <wa-radio value="1">Credit Card</wa-radio>
    <wa-radio value="3">Paypal</wa-radio>
  </wa-radio-group>
  <wa-input label="Card Number" class="full-row" style="margin-top: 1.5rem;"></wa-input>
<wa-input label="Name on Card" class="full-row" style="margin-top: 1.5rem;"></wa-input>
<wa-input label="Expiration Date" class="first-half" style="margin-top: 1.5rem;"></wa-input>
<wa-input label="CVC" class="second-half" style="margin-top: 1.5rem;"></wa-input>
</div>
<div class="checkout-form-summary">
  <h4>Order Summary</h4>
  <wa-card class="card-basic">
    <div class="summary-item">
      <img src="https://source.unsplash.com/pair-of-white-and-orange-athletic-shoes-on-white-box-dwKiHoqqxk8">
      <div class="summary-item-info">
        <span style="display: flex; justify-content: space-between;">
          <span class="item-heading">Dolce Runners</span>
          <wa-icon-button name="trash" variant="solid" label="Settings"></wa-icon-button>
        </span>
        <span class="subtle">Cream/Seafoam</span>
        <br />
        <span class="subtle">12.5</span>
        <span style="display:flex;justify-content: space-between; width: 100%;margin: 1rem 0 2rem;">
          <span class="item-price">$0.00</span>
          <wa-select placeholder="1" style="width: 70px; margin-left: auto">
            <wa-option value="option-1">1</wa-option>
            <wa-option value="option-2">2</wa-option>
            <wa-option value="option-3">3</wa-option>
          </wa-select>
          </span>
        </div>
      <hr style="grid-column: 1 / -1;">
    </div>
    <div class="summary-item">
      <img src="https://source.unsplash.com/white-and-brown-nike-sneaker-LV_4qM5Gf9c">
      <div class="summary-item-info">
        <span style="display: flex; justify-content: space-between;">
          <span class="item-heading">Dunk High</span>
          <wa-icon-button name="trash" variant="solid" label="Settings"></wa-icon-button>
        </span>
        <span class="subtle">Sand/Amber/Black</span>
        <br />
        <span class="subtle">12.5</span>
        <span style="display:flex;justify-content: space-between; width: 100%;margin: 1rem 0 2rem;">
          <span class="item-price">$180.00</span>
          <wa-select placeholder="1" style="width: 70px; margin-left: auto">
            <wa-option value="option-1">1</wa-option>
            <wa-option value="option-2">2</wa-option>
            <wa-option value="option-3">3</wa-option>
          </wa-select>
          </span>
        </div>
      <hr style="grid-column: 1 / -1;">
    </div>
    <div class="summary-item">
      <img src="https://source.unsplash.com/black-and-white-new-balance-low-top-sneaker-6zO5VKogoZE">
      <div class="summary-item-info">
        <span style="display: flex; justify-content: space-between;">
          <span class="item-heading">NB Runner</span>
          <wa-icon-button name="trash" variant="solid" label="Settings"></wa-icon-button>
        </span>
        <span class="subtle">Forrest Green</span>
        <br />
        <span class="subtle">12.5</span>
        <span style="display:flex;justify-content: space-between; width: 100%;margin: 1rem 0 2rem;">
          <span class="item-price">$48.99</span>
          <wa-select placeholder="1" style="width: 70px; margin-left: auto">
            <wa-option value="option-1">1</wa-option>
            <wa-option value="option-2">2</wa-option>
            <wa-option value="option-3">3</wa-option>
          </wa-select>
          </span>
        </div>
      <hr style="grid-column: 1 / -1;">
    </div>
 <wa-button size="medium" variant="brand" style="width: 100%; margin-bottom: 1rem;">Confirm Order</wa-button>
</wa-card>
</div>
</div>

<style>
  .checkout-form {
    display: grid;
    grid-template-columns: 1fr;
    grid-column-gap: 1rem;

    .checkout-form-inputs {
      display: grid;
      grid-template-columns: repeat(6, 1fr);
      grid-column-gap: 1rem;
    }
      .summary-item {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        grid-column-gap: 1rem;

        img {
          grid-column: 1/4;
        }

        .summary-item-info {
          grid-column: 4/12;
        }
      }
    /* & hr {
      border-width: 1px;
      margin: 1rem 0;
    } */
    .subtle {
      font-size: small;
    }

    .item-heading {
      font-size: large:
    }

    /* Grid utilities */

    .full-row {
      grid-column: 1/-1
    }

    .first-half {
      grid-column: 1/4
    }

    .second-half {
      grid-column: 4/7
    }

    .first-third {
      rid-column: 1/3
    }
    .second-third {
      rid-column: 3/5
    }
    .last-third {
      rid-column: 5/7
    }
  }
</style>
```

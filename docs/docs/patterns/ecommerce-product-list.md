---
title: E-commerce - Product Lists
description: TODO
layout: page.njk
---

TODO Page Description
## With Product Grid

```html{.example}
  <div class="with-product-grid">
    <div class="grid-item">
      <img class="grid-item-image" src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" />
      <div class="grid-item-name">Shirt</div>
      <wa-rating label="Rating" readonly value="3"></wa-rating>
      <a class="grid-item-reviews" href="#">38 Reviews</a>
      <div class="grid-item-price">$170</div>
    </div>
    <div class="grid-item">
      <img class="grid-item-image" src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" />
      <div class="grid-item-name">Shirt</div>
      <wa-rating label="Rating" readonly value="3"></wa-rating>
      <a class="grid-item-reviews" href="#">38 Reviews</a>
      <div class="grid-item-price">$170</div>
    </div>
    <div class="grid-item">
      <img class="grid-item-image" src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" />
      <div class="grid-item-name">Shirt</div>
      <wa-rating label="Rating" readonly value="3"></wa-rating>
      <a class="grid-item-reviews" href="#">38 Reviews</a>
      <div class="grid-item-price">$170</div>
    </div>
    <div class="grid-item">
      <img class="grid-item-image" src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" />
      <div class="grid-item-name">Shirt</div>
      <wa-rating label="Rating" readonly value="3"></wa-rating>
      <a class="grid-item-reviews" href="#">38 Reviews</a>
      <div class="grid-item-price">$170</div>
    </div>
  </div>
  <style>
    .with-product-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      border: var(--wa-panel-border-width) var(--wa-border-style) var(--wa-color-neutral-border-quiet);

      .grid-item {
        padding: 1.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }
      .grid-item:nth-of-type(odd) {
       
        border-right: var(--wa-panel-border-width) var(--wa-border-style) var(--wa-color-neutral-border-quiet);
      }
      .grid-item:not(:nth-last-child(-n + 2)) {
        border-bottom: var(--wa-panel-border-width) var(--wa-border-style) var(--wa-color-neutral-border-quiet);
      }

      .grid-item-image {
        width: 100%;
        object-fit: cover;
      }
    }
  </style>
```
## With inline Price
```html{.example}
  <div class="with-inline-price">
    <h2></h2>
    <div class="grid">
      <div class="group">
        <div>
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div>
          <div>
            <h3>
              <a href="#">Basic Tee</a>
            </h3>
            <p>Black</p>
          </div>
          <div>
            <p>$35</p>
          </div>
        </div>
      </div>
    </div>
  </div>
```
## With CTA Link
```html{.example}
  <div class="with-inline-price">
    <h2></h2>
    <div class="grid">
      <div class="group">
        <div>
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div>
          <div>
            <h3>
              <a href="#">Basic Tee</a>
            </h3>
            <p>Black</p>
          </div>
          <div>
            <p>$35</p>
          </div>
        </div>
      </div>
    </div>
  </div>
```

## With Color Swatches
```html{.example}
  <div class="with-inline-price">
    <h2></h2>
    <div class="grid">
      <div class="group">
        <div>
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div>
          <div>
            <h3>
              <a href="#">Basic Tee</a>
            </h3>
            <p>Black</p>
          </div>
          <div>
            <p>$35</p>
          </div>
        </div>
      </div>
    </div>
  </div>
```

## With Image Overlay
```html{.example}
  <div class="with-inline-price">
    <h2></h2>
    <div class="grid">
      <div class="group">
        <div>
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div>
          <div>
            <h3>
              <a href="#">Basic Tee</a>
            </h3>
            <p>Black</p>
          </div>
          <div>
            <p>$35</p>
          </div>
        </div>
      </div>
    </div>
  </div>
```

## With Border Grid
```html{.example}
  <div class="with-inline-price">
    <h2></h2>
    <div class="grid">
      <div class="group">
        <div>
          <img src=".jpghttps://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01" alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div>
          <div>
            <h3>
              <a href="#">Basic Tee</a>
            </h3>
            <p>Black</p>
          </div>
          <div>
            <p>$35</p>
          </div>
        </div>
      </div>
    </div>
  </div>
```

## Card with full details
```html{.example}
  <div class="with-inline-price">
    <h2></h2>
    <div class="grid">
      <div class="group">
        <div>
          <img src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" alt="Front of men's Basic Tee in black." class="h-full w-full object-cover object-center lg:h-full lg:w-full">
        </div>
        <div>
          <div>
            <h3>
              <a href="#">Basic Tee</a>
            </h3>
            <p>Black</p>
          </div>
          <div>
            <p>$35</p>
          </div>
        </div>
      </div>
    </div>
  </div>
```
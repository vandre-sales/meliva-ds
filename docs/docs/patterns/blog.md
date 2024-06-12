---
title: Blog
description: TODO
layout: page.njk
---

TODO Page Description

## Examples

### Hero
```html{.example}
<wa-carousel pagination>
  <wa-carousel-item>
    <img
      alt="The sun shines on the mountains and trees (by Adam Kool on Unsplash)"
      src="/assets/examples/carousel/mountains.jpg"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="A waterfall in the middle of a forest (by Thomas Kelly on Unsplash)"
      src="/assets/examples/carousel/waterfall.jpg"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="The sun is setting over a lavender field (by Leonard Cotte on Unsplash)"
      src="/assets/examples/carousel/sunset.jpg"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="A field of grass with the sun setting in the background (by Sapan Patel on Unsplash)"
      src="/assets/examples/carousel/field.jpg"
    />
  </wa-carousel-item>
  <wa-carousel-item>
    <img
      alt="A scenic view of a mountain with clouds rolling in (by V2osk on Unsplash)"
      src="/assets/examples/carousel/valley.jpg"
    />
  </wa-carousel-item>
</wa-carousel>

```

### Newsletter signup
```html{.example}
<div>
  <wa-input></wa-input><wa-button> <wa-icon name="search"></wa-icon></wa-button>
</div>
<wa-card>
  <h2>Subscribe to our Newsletter</h2>
  <p>To get the lastest and most quality design resources</p>
  <div class="subscribe-input"> <wa-input></wa-input><wa-button> <wa-icon name="search"></wa-icon></wa-button></div>
</wa-card>
<style>
  .subscribe-input {
    display: flex;
    width: 100%;

    wa-input {
      width: inherit;
    }

    wa-button {
      margin-left: 0.5rem;
    }
  }
</style>
```

### Posts List
```html{.example}
<wa-card>
  <div slot="header">
    Related Posts
   
  </div>
</wa-card>
```

### Related Posts
```html{.example}

```
### Article footer
```html{.example}
```

## Social Share

### Vertical
```html{.example}
<wa-card class="social-share-vertical" style="--border-radius: 4rem;">
  <wa-icon-button name="facebook" family="brands" variant="solid" label="Edit" href="https://example.com/"></wa-icon-button>
   <wa-icon-button name="x-twitter" family="brands" variant="solid" label="Edit" href="https://example.com/"></wa-icon-button>
    <wa-icon-button name="threads" family="brands" variant="solid" label="Edit" href="https://example.com/"></wa-icon-button>
    <wa-icon-button name="mastodon" family="brands" variant="solid" label="Edit" href="https://example.com/"></wa-icon-button>
    <wa-icon-button name="paper-plane" family="solid" variant="solid" label="Edit" href="https://example.com/"></wa-icon-button>
</wa-card>
<style>
  .social-share-vertical {
    display: block;
    margin: 0 auto;
    width: fit-content;

    wa-icon-button {
      font-size: 2.5rem;
      display: block;
      margin-bottom: .5rem;
    }
     wa-icon-button:last-of-type {
      margin-bottom: initial;
    }
  }
</style>
```

### Horizontal
```html{.example}
<wa-card>
  <div slot="header">
    Share this Article
  </div>
  <wa-icon-button name="facebook" family="brands" variant="solid" label="Edit" style="font-size: 1.5rem; background: red"></wa-icon-button>
   <wa-icon-button name="x-twitter" family="brands" variant="solid" label="Edit" style="font-size: 1.5rem;"></wa-icon-button>
    <wa-icon-button name="threads" family="brands" variant="solid" label="Edit" style="font-size: 1.5rem;"></wa-icon-button>
        <wa-icon-button name="mastodon" family="brands" variant="solid" label="Edit" style="font-size: 1.5rem;"></wa-icon-button>

    <wa-icon-button name="instagram" family="brands" variant="solid" label="Edit" style="font-size: 1.5rem;"></wa-icon-button>

    <wa-icon-button name="pinterest" family="brands" variant="solid" label="Edit" style="font-size: 1.5rem;"></wa-icon-button>
    <wa-icon-button name="linkedin" family="brands" variant="solid" label="Edit" style="font-size: 1.5rem;"></wa-icon-button>
    <div slot="footer">
      <div class="share-input">
         <wa-input></wa-input>
    <wa-button variant="brand"> <wa-icon slot="prefix" name="link" variant="solid"></wa-icon>Copy</wa-button>
      </div>
   
  </div>
</wa-card>
<style>
  .share-input {
    display: flex;
    
    wa-input {
          --border-radius: var(--wa-form-controls-corners) 0 0 var(--wa-form-controls-corners);
    }
    wa-button {
      --border-radius:  0 var(--wa-form-controls-corners)  var(--wa-form-controls-corners) 0;
    }
  }
</style>
```
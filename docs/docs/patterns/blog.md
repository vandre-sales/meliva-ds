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

### Social Share
```html{.example}
<wa-card>
  <wa-icon-button name="facebook" family="brands" variant="solid" label="Edit" style="font-size: 2.5rem;"></wa-icon-button>
   <wa-icon-button name="x-twitter" family="brands" variant="solid" label="Edit" style="font-size: 2.5rem;"></wa-icon-button>
    <wa-icon-button name="threads" family="brands" variant="solid" label="Edit" style="font-size: 2.5rem;"></wa-icon-button>
</wa-card>
```
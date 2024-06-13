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
<div class="article-footer">
  <div class="article-tags">
    <a href="#"><wa-tag size="medium" pill>UX</wa-tag></a>
    <a href="#"><wa-tag size="medium" pill>Product Design</wa-tag></a>
    <a href="#"><wa-tag size="medium" pill>Design</wa-tag></a>
    <a href="#"><wa-tag size="medium" pill>Prototyping</wa-tag></a>
  </div>
  <div class="article-actions">
    <wa-icon-button name="hands-clapping"></wa-icon-button>
  </div>
</div>
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
<wa-card class="social-share-horizontal">
  <div slot="header">
    Share this Article
  </div>
  <wa-icon-button name="facebook" family="brands" variant="solid" label="Edit" style="--background: #1877f225; --color: #1877f2"></wa-icon-button>
   <wa-icon-button name="x-twitter" family="brands" variant="solid" label="Edit" style="--background: #00000025; --color: #000000"></wa-icon-button>
    <wa-icon-button name="threads" family="brands" variant="solid" label="Edit" style="--background: #c32aa325; --color: #c32aa3"></wa-icon-button>
        <wa-icon-button name="mastodon" family="brands" variant="solid" label="Edit" style="--background: #6364ff25; --color: #6364ff"></wa-icon-button>

    <wa-icon-button name="instagram" family="brands" variant="solid" label="Edit" style="--background: #c32aa325; --color: #c32aa3"></wa-icon-button>

    <wa-icon-button name="pinterest" family="brands" variant="solid" label="Edit" style="--background: #bd081c25; --color: #bd081c"></wa-icon-button>
    <wa-icon-button name="linkedin" family="brands" variant="solid" label="Edit" style="--background: #0a66c225; --color: #0a66c2"></wa-icon-button>
    <div slot="footer">
      <div class="share-input">
         <wa-input value="https://fontawesome.com"></wa-input>
    <wa-button variant="brand"> <wa-icon slot="prefix" name="link" variant="solid"></wa-icon>Copy</wa-button>
      </div>
   
  </div>
</wa-card>
<style>
  .social-share-horizontal {
    margin: 0 auto;
    display: block;
    width: fit-content;

    wa-icon-button {
      --background: transparent;
      --color: initial;
      font-size: 1.5rem;
      border-radius: .25rem;
      background: var(--background);
    }
    wa-icon-button::part(base) {
      
      color: var(--color);
    }

    .share-input {
    display: flex;
    
    wa-input {
          --border-radius: var(--wa-form-controls-corners) 0 0 var(--wa-form-controls-corners);
    }
    wa-button {
      --border-radius:  0 var(--wa-form-controls-corners)  var(--wa-form-controls-corners) 0;
    }
  }
  }
  
</style>
```
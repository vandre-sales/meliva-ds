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
## Related articles
```html{.example}
<div>
  <wa-card>
    <div class="card-body">
      <div style="border-bottom: 1px solid var(--wa-color-surface-border);margin-bottom: 1rem; padding-bottom: 1rem;">
        <img src="/assets/images/patterns/article-flower.jpg" />
        <h2 style="margin-bottom: var(--wa-space-s);">Title</h2>
        <p style="margin-bottom: var(--wa-space-3xs);">Well, the way they make shows is, they make one show. That show's called a pilot.</p>
      
      <span style="font-size: small;font-weight: 600;font-style: italic;">sub-title</span>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <div>
            <img src="/assets/images/patterns/article-flower.jpg" />
       
        <p style="margin-bottom: var(--wa-space-3xs);">Normally, both your asses would be dead as fucking fried chicken.</p>
      
      <span style="font-size: small;font-weight: 600;font-style: italic;">sub-title</span>
        </div>
        <div>
            <img src="/assets/images/patterns/article-flower.jpg" />
       
        <p style="margin-bottom: var(--wa-space-3xs);">Besides, I've already been through too much shit this morning over this case to hand it over to your dumb ass.</p>
      
      <span style="font-size: small;font-weight: 600;font-style: italic;">sub-title</span>
        </div>
      </div>
    </div>
  </wa-card>
</div>
```

## Footer 
```html{.example}
<div class="news-footer">
  <div class="logo"> <wa-icon name="user-secret"></wa-icon> <h1 style="--wa-space-xl: 0;">Daily Snoop</h1></div>
  <div class="nav">
    <section>
      <h4 style="--wa-space-xl: 0;">Title</h4>
      <ul>
      <li>list 1</li>
      <li>list 2</li>
    </ul>
    </section>
    <section>
      <h4 style="--wa-space-xl: 0;">Title</h4>
      <ul>
      <li>list 1</li>
      <li>list 2</li>
    </ul>
    </section>
    <section>
      <h4 style="--wa-space-xl: 0;">Subscriptions</h4>
      <ul>
      <li><a href="#">Crossword</a></li>
      <li><a href="#">Newsletters</a></li>
      <li><a href="#">Podcast</a></li>
    </ul>
    </section>
  </div>
  <div class="social">
    <a href="">
      <wa-icon family="brands" name="bluesky"></wa-icon> 
    </a>
    <a href="">
      <wa-icon family="brands" name="instagram"></wa-icon> 
    </a>
    <a href="">
      <wa-icon family="brands" name="facebook"></wa-icon> 
    </a>
    <a href="">
      <wa-icon family="brands" name="mastodon"></wa-icon> 
    </a>
  </div>
  <div class="legal">&#169 2024 All rights reserved.</div>
</div>
<style>
  .news-footer {
    .logo {
      display: flex;
      align-items: center;
    }
    .nav {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }

    .nav ul {
      list-style-type: none;
      margin-left: 0;
    }
    .social a {
      text-decoration: none;
      display: inline-block;
    }
    .social a:not(:last-child) {
      margin-right: 1rem;
    }
  }
</style>
```
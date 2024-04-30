---
title: App
description: TODO
---

TODO Page Description

## Examples

### Action Plan

```html:preview
<wa-card>
  <h3>Manage subscription</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam.</p>
  <wa-button>Change Plan</wa-button>
</wa-card>
```

### Feeds

```html:preview
<div class="activity-feed">
  <div class="activity-group">
    <span class="connector"></span>
    <div class="activity">
      <wa-icon name="user-circle" class="fa-fw"></wa-icon>
      <p>Kicked ass and <strong>chewed bubblegum</strong></p>
      <span style="margin-left: auto"><em>Oct. 31st</em></span>
    </div>
  </div>
  <div class="activity-group">
    <span class="connector"></span>
    <div class="activity">
      <wa-icon name="thumbs-up" style="color: blue" class="fa-fw"></wa-icon>
      <p>Kicked ass and <strong>chewed bubblegum</strong></p>
      <span style="margin-left: auto"><em>Oct. 31st</em></span>
    </div>
  </div>
  <div class="activity-group">
    <span class="connector"></span>
    <div class="activity">
      <wa-icon name="crown" class="fa-fw"></wa-icon>
      <p>Kicked ass and <strong>chewed bubblegum</strong></p>
      <span style="margin-left: auto"><em>Oct. 31st</em></span>
    </div>
  </div>
  <div class="activity-group">
    <span class="connector"></span>
    <div class="activity">
      <wa-icon name="turtle" style="color: green" class="fa-fw"></wa-icon>
      <p>Kicked ass and <strong>chewed bubblegum</strong></p>
      <span style="margin-left: auto"><em>Oct. 31st</em></span>
    </div>
  </div>

</div>

<style>
  :root {
    --border-color: var(--wa-color-surface-border);
  }
  .activity-feed {
    wa-icon {
      margin-right: 1rem;
      font-size: 32px;
    }
    .fa-fw {
      text-align: center;
      width: 1.25em;
    }
    .activity {
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .activity-group:not(:first-child) {
          margin-top: .5rem;
    }
    .activity-group {
      position: relative;
    }

    .connector {
      position: absolute;
    background-color: var(--border-color);
    height: 25%;
    width: 0.125rem;
    margin-left: -1px;
    top: 2.5rem;
    left: 1rem;
    }

    .activity-group:last-of-type .connector {
      display: none;
    }
  }
</style>
```

### Grid

```html:preview
  <div>
    <ul class="grid-list">
      <li>
        <wa-card>
          <div class="card-top">
            <div><strong>John Carpenter</strong> <wa-badge variant="brand" style="    --background: var(--wa-color-brand-border-subtle);
    --border-color: var(--wa-color-brand-text-on-surface);
    --content-color: var(--wa-color-brand-text-on-surface);
}" pill>Brand</wa-badge><p>Master of Horror</p></div>
          <div><wa-avatar
  image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  label="Avatar of a gray tabby kitten looking down"
></wa-avatar></div>
          </div>

          <div class="contact-info">
            <div><wa-icon name="envelope"></wa-icon> Email</div>
            <div><wa-icon name="phone"></wa-icon> Phone</div>
          </div>
        </wa-card>
      </li>
      <li>
        <wa-card>
          <div class="card-top">
            <div><strong>John Carpenter</strong> <wa-badge variant="brand" style="    --background: var(--wa-color-brand-border-subtle);
    --border-color: var(--wa-color-brand-text-on-surface);
    --content-color: var(--wa-color-brand-text-on-surface);
}" pill>Brand</wa-badge><p>Master of Horror</p></div>
          <div><wa-avatar
  image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  label="Avatar of a gray tabby kitten looking down"
></wa-avatar></div>
          </div>

          <div class="contact-info">
            <div><wa-icon name="envelope"></wa-icon> Email</div>
            <div><wa-icon name="phone"></wa-icon> Phone</div>
          </div>
        </wa-card>
      </li>
      <li>
        <wa-card>
          <div class="card-top">
            <div><strong>John Carpenter</strong> <wa-badge variant="brand" style="    --background: var(--wa-color-brand-border-subtle);
    --border-color: var(--wa-color-brand-text-on-surface);
    --content-color: var(--wa-color-brand-text-on-surface);
}" pill>Brand</wa-badge><p>Master of Horror</p></div>
          <div><wa-avatar
  image="https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80"
  label="Avatar of a gray tabby kitten looking down"
></wa-avatar></div>
          </div>

          <div class="contact-info">
            <div><wa-icon name="envelope"></wa-icon> Email</div>
            <div><wa-icon name="phone"></wa-icon> Phone</div>
          </div>
        </wa-card>
      </li>


    </ul>
  </div>

  <style>
    .grid-list {
      wa-card {
        display: flex;
        flex-direction: column;
      }
      wa-card::part(body) {
        padding: 0;
      }

      .card-top {
        padding: var(--wa-space-xl);
        border-bottom: 1px solid var(--wa-color-surface-border);
        display: flex;
        justify-content: space-between;
      }

      .contact-info {
        div {
          width: 50%;
          padding: var(--wa-space-xl);
          display: flex;
          align-items: center;
          wa-icon {
            margin-right: .5rem;
          }
        }

        div:first-of-type {
          border-right: .25px solid var(--wa-color-surface-border);
        }
        div:last-of-type {
          border-left: .25px solid var(--wa-color-surface-border);
        }
        display: flex;
      }


      display: grid;
      grid-template-columns: 1fr;
      list-style-type: none;
    }

    @media (min-width: 1024px) {
      .grid-list {
        display: grid;
      grid-template-columns: repeat(2, 1fr);
      list-style-type: none;
      }
    }


  </style>
```

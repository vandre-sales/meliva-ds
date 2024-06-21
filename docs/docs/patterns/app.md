---
title: App
description: TODO
layout: page.njk
---

TODO Page Description

## Examples

### Action Plan

```html {.example}
<wa-card>
  <h3>Manage subscription</h3>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae voluptatibus corrupti atque repudiandae nam.</p>
  <wa-button>Change Plan</wa-button>
</wa-card>
```

### Feeds

```html {.example}
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

```html {.example}
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
            <div><wa-icon name="envelope" style="color: var(--wa-color-brand-spot);"></wa-icon> Email</div>
            <div><wa-icon name="phone" style="color: var(--wa-color-brand-spot);"></wa-icon> Phone</div>
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
            <div><wa-icon name="envelope" style="color: var(--wa-color-brand-spot);"></wa-icon> Email</div>
            <div><wa-icon name="phone" style="color: var(--wa-color-brand-spot);"></wa-icon> Phone</div>
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
            <div><wa-icon name="envelope" style="color: var(--wa-color-brand-spot);"></wa-icon> Email</div>
            <div><wa-icon name="phone" style="color: var(--wa-color-brand-spot);"></wa-icon> Phone</div>
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
            <div><wa-icon name="envelope" style="color: var(--wa-color-brand-spot);"></wa-icon> Email</div>
            <div><wa-icon name="phone" style="color: var(--wa-color-brand-spot);"></wa-icon> Phone</div>
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
            <div><wa-icon name="envelope" style="color: var(--wa-color-brand-spot);"></wa-icon> Email</div>
            <div><wa-icon name="phone" style="color: var(--wa-color-brand-spot);"></wa-icon> Phone</div>
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
            <div><wa-icon name="envelope" style="color: var(--wa-color-brand-spot);"></wa-icon> Email</div>
            <div><wa-icon name="phone" style="color: var(--wa-color-brand-spot);"></wa-icon> Phone</div>
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
      gap: 1rem;
      grid-template-columns: repeat(auto-fill, minmax(min(300px, 100%), 1fr));
      list-style-type: none;
      margin: 0;
    }

    /* @media (min-width: 1140px) {
      .grid-list {
        display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1rem;
      list-style-type: none;
      }
    }

    @media (min-width: 768px) {
      .grid-list {
        display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 1rem;
      list-style-type: none;
      }
    } */


  </style>
```

## Pagination

### Simple Pagination

```html {.example}
  <wa-card with-footer style="width: 100%;" class="simple-pagination">
    <div>Card body</div>
    <div slot="footer" class="footer">
      Showing 1 to 10 of 50 Results
      <span>
        <wa-button><wa-icon slot="prefix" name="gear" variant="solid"></wa-icon> Prev</wa-button>
        <wa-button>Next <wa-icon slot="suffix" name="gear" variant="solid"></wa-icon></wa-button>  
      </span>
    </div>
  </wa-card>
  <style>
    .simple-pagination {
      .footer {
            display: flex;
    justify-content: space-between;
    align-items: center;
      }
    }
  </style>
```
### Multi Page

```html {.example}
<wa-card with-footer style="width: 100%;" class="simple-pagination">
    <div>Card body</div>
    <div slot="footer" class="footer">
      Showing 1 to 10 of 50 Results
      <span>
       <wa-button-group label="Alignment">
  <wa-button size="small"><wa-icon name="exclamation-triangle"></wa-icon></wa-button>
  <wa-button size="small">1</wa-button>
  <wa-button size="small">2</wa-button>
  <wa-button size="small">...</wa-button>
  <wa-button size="small">9</wa-button>
  <wa-button size="small">10</wa-button>
  <wa-button size="small"><wa-icon name="exclamation-triangle"></wa-icon></wa-button>
</wa-button-group>
      </span>
    </div>
  </wa-card>
  <style>
    .simple-pagination {
      .footer {
            display: flex;
    justify-content: space-between;
    align-items: center;
      }
    }
  </style>
```

## Comment Box

```html{.example}
<form class="comment-box">
<wa-card with-footer>
  <wa-textarea resize="auto"></wa-textarea>
  <div slot="footer" class="comment-footer">
    <wa-button variant="text">
  <wa-icon slot="prefix" name="paperclip" variant="solid"></wa-icon>
  Attach a file
</wa-button><wa-button>Comment</wa-button>
  </div>
</wa-card>
</form>
<style>
  .comment-box {
    wa-card {
      width: 100%;
    }
  

    div.comment-footer {
      display: flex;
      justify-content: space-between;

    }
  }
</style>
```

## Description List

```html{.example}
<div>
  <div>
    <h3>Client Information</h3>
    <p>Personal details</p>
  </div>
  <dl>
    <div class="dl-item">
    <dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>
    </div>
    <div class="dl-item">
    <dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>
    </div>
    <div class="dl-item">
    <dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>
    </div>
    <div class="dl-item">
    <dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>
    </div>
  </dl>
</div>
<style>
  dl {
    div {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      padding: 1.5rem 0.75rem;
    }
    div:nth-child(odd) {
      background: var(--wa-color-surface-lowered);
    }
    dd {
      grid-column: span 2/ span 2;
      margin: 0;
    }
   
  }
</style>
```

## FAQ/Details

```html{.example}
<div>
  <dl>
    <div>
    <dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>
    </div>
  </dl>
</div>
```

## Pricing Tiers

```html{.example}
```

## Empty States

### Simple

```html{.example}
  <div class="empty-state simple">
    <wa-icon name="folders" style="font-size: 64px;"></wa-icon>
    <h4>No Project</h4>
    <p>Get started by one.</p>
    <wa-button variant="brand">
  <wa-icon slot="prefix" name="plus" variant="solid"></wa-icon>
  New Project
</wa-button>
  </div>
  <style>
    .empty-state {
      &.simple {
        display: flex;
        flex-direction: column;
        align-items: center;
      }

    
    }
  </style>
```

### With dashed border

```html{.example}
  <a href="#" class="empty-state dashed">
    <div class="border">
    <wa-icon name="database" style="font-size: 64px; margin: var(--wa-flow-spacing) 0 calc(var(--wa-flow-spacing)/ 2);"></wa-icon>
    <h4>No DBs</h4>
    <p>Get started by creating a database.</p>
  
</div>
  </a>
  <style>
    .empty-state {
      text-decoration: none;
      

      &.dashed .border {
        margin: 0 auto;
    width: 600px;
          display: flex;
        flex-direction: column;
        align-items: center;
        border: 2px dashed var(--wa-color-neutral-fill-highlight);
        padding: 1rem;
        border-radius: 20px;
      }
    }
  </style>
```
### With starting points

```html{.example}
<wa-card with-header with-footer>
  <div slot="header">
    <h4>Projects</h4>
    <p>You haven’t created a project yet. Get started by selecting a template or start from an empty project.</p>
  </div>
  <ul role="list" class="starting-point">
    <li>
      <div class="img" style="--img-bg: #5A86E6;"><wa-icon name="poo-storm" style="color: white; font-size: 28px;"></wa-icon></div>
      <div class="info">
        <strong>
          <span style="margin-right: 0.5rem;">Create a List</span> <wa-icon name="arrow-right"></wa-icon>
          </strong>
        <p style="margin:0;">Another to-do system you’ll try but eventually give up on.</p>
      </div>
    </li>
    <li>
      <div class="img" style="--img-bg: #E65ABA;"><wa-icon name="user-bounty-hunter" style="color: white; font-size: 28px;"></wa-icon></div>
      <div class="info">
        <strong><span style="margin-right: 0.5rem;">Create a Gallery</span> <wa-icon name="arrow-right"></wa-icon></strong>
        <p style="margin:0;">Another to-do system you’ll try but eventually give up on.</p>
      </div>
    </li>
    <li>
      <div class="img" style="--img-bg: #E6A15A;"><wa-icon name="skull-crossbones" style="color: white; font-size: 28px;"></wa-icon></div>
      <div class="info">
        <strong><span style="margin-right: 0.5rem;">Create a Spreadsheet</span> <wa-icon name="arrow-right"></wa-icon></strong>
        <p style="margin:0;">Another to-do system you’ll try but eventually give up on.</p>
      </div>
    </li>
    <li>
      <div class="img" style="--img-bg: #5AA2E6;"><wa-icon name="face-awesome" style="color: white; font-size: 28px;"></wa-icon></div>
      <div class="info">
        <strong><span style="margin-right: 0.5rem;">Create a Timeline</span> <wa-icon name="arrow-right"></wa-icon></strong>
        <p style="margin:0;">Another to-do system you’ll try but eventually give up on.</p>
      </div>
    </li>
    <li>
      <div class="img" style="--img-bg: #7AE6AE;"><wa-icon name="planet-ringed" style="color: white; font-size: 28px;"></wa-icon></div>
      <div class="info">
        <strong><span style="margin-right: 0.5rem;">Create a Calendar</span> <wa-icon name="arrow-right"></wa-icon></strong>
        <p style="margin:0;">Another to-do system you’ll try but eventually give up on.</p>
      </div>
    </li>
  </ul>
  <div slot="footer">
    <a href="#">Or start from an empty project →</a>
  </div>
</wa-card>
<style>
  .starting-point {
    list-style-type: none;

    li {
      display: flex;
      margin-bottom: 1rem;
    }
  }
  .img {
    --img-bg: #eee;
    background: var(--img-bg);
        width: 4rem;
    height: 4rem;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 1rem;
    border-radius: 0.5rem;
  }

  .info {
        display: flex;
    flex-direction: column;
    justify-content: center;

    strong {
      display: flex;
      align-items: center;
    }
  }
</style>
```

### With templates

### With recommendations grid

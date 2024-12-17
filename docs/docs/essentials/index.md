---
title: Essentials
description: TODO
---

Web Awesome works _with_ the platform, rather than trying to reinvent it.
If all you need is styles, you don’t need to use new `<wa-*>` elements!
We also provide styles that make native HTML elements look good so you can continue using what you know and gradually adopt Web Awesome as you see fit.

To use all Web Awesome Essentials, include the following stylesheet in your project:

```html
<link rel="stylesheet" href="{% cdnUrl 'styles/themes/applied.css' %}" />
```

Here’s what we have so far:

<!-- TODO make nice cards for these -->
<ul>
  {%- for page in collections.essentials | sort -%}
  <li>
    <a href="/docs/essentials/{{ page.fileSlug }}">{{ page.data.title }}</a>
  </li>
  {%- endfor -%}
</ul>

## Opting out of Essentials

If you don’t want to use all essentials, you can cherry pick just the parts you need.
For instructions on how to do that, refer to the individual pages.

You can also opt-out of Essentials styling by using a `wa-off` class on individual elements:

```html {.example}
<p>
  <button>I’m Awesome</button>
  <button class="wa-off">I’m not</button>
</p>

<blockquote>
  <p>Lorem Ipsum dolor sit amet</p>
  <button>I’m also awesome</button>
</blockquote>
<blockquote class="wa-off">
  <p>Lorem Ipsum dolor sit amet</p>
  <button >I’m also not</button>
</blockquote>
```

You can also use `wa-off-deep` to opt-out of Essentials styling for an element **and all its descendants**:

```html {.example}
<blockquote class="wa-off-deep">
  <p>Lorem Ipsum dolor sit amet</p>
  <button>I’m also not</button>
</blockquote>
```

This means you could opt an entire page out of Essentials styling by adding a `wa-off-deep` class to the `<html>` element.







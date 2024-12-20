---
title: Style Utilities
description: Web Awesome provides a few style utilities to customize styles in ways that cannot necessarily be described by semantic HTML.
  Some of these correspond to component attributes, but we also expose utility classes so you can apply these styles to native elements too.
layout: page-outline
---

## Usage

To use all Web Awesome page styles (including [native styles](/docs/native/)), include the following stylesheet in your project:

```html
<link rel="stylesheet" href="{% cdnUrl 'styles/webawesome.css' %}" />
```

Or, to _only_ include utilities:

```html
<link rel="stylesheet" href="{% cdnUrl 'styles/utilities.css' %}" />
```

You can also include individual utilities following the instructions in their pages.

<div id="component-grid" class="index-grid">
  <h2 class="index-category">Layout Utilities</h2>

  {%- for page in collections.utilities | sort -%}
  {%- if page.fileSlug != 'native' and 'layout' in page.data.tags -%}
    {% include "page-card.njk" %}
  {%- endif -%}
  {%- endfor -%}
</div>

<div id="component-grid" class="index-grid">
  <h2 class="index-category">Other Utilities</h2>

  {%- for page in collections.utilities | sort -%}
  {%- if page.fileSlug != 'native' and not ('layout' in page.data.tags) -%}
    {% include "page-card.njk" %}
  {%- endif -%}
  {%- endfor -%}
</div>

---
title: Style Utilities
description: Web Awesome provides a few style utilities to customize styles in ways that cannot necessarily be described by semantic HTML.
  Some of these correspond to component attributes, but we also expose utility classes so you can apply these styles to native elements too.
layout: page-outline
---

<div id="component-grid" class="index-grid">
  <h2 class="index-category">Layout</h2>

  {%- for page in collections.utilities | sort -%}
  {%- if page.fileSlug != 'native' and 'layout' in page.data.tags -%}
    {% include "page-card.njk" %}
  {%- endif -%}
  {%- endfor -%}
</div>

<div id="component-grid" class="index-grid">
  <h2 class="index-category">Other</h2>

  {%- for page in collections.utilities | sort -%}
  {%- if page.fileSlug != 'native' and not ('layout' in page.data.tags) -%}
    {% include "page-card.njk" %}
  {%- endif -%}
  {%- endfor -%}
</div>

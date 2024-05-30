---
title: Motion
description: Customize your theme's built-in transitions and animations with Web Awesome's motion properties.
layout: page.njk
---

<style>
  .motion-swatch {
    height: 2em;
    background-color: var(--wa-color-neutral-fill-normal);
    border-radius: var(--wa-border-radius-s);
  }

  .motion-swatch:hover {
    background-color: var(--wa-color-brand-fill-loud);
  }
</style>

## Transitions

| Custom Property               | Default Value |  Preview                        |
| ----------------------------- | - | ------------------------------- |
| `--wa-transition-normal`   | <code>250ms</code> | <div class="motion-swatch" style="transition: background-color var(--wa-transition-normal)"></div> |
| `--wa-transition-fast`   | <code>150ms</code> | <div class="motion-swatch" style="transition: background-color var(--wa-transition-fast)"></div> |
| `--wa-transition-faster`   | <code>75ms</code> | <div class="motion-swatch" style="transition: background-color var(--wa-transition-faster)"></div> |
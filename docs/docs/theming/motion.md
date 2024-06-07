---
title: Motion
description: Customize your theme's built-in transitions and animations with Web Awesome's motion properties.
layout: page.njk
---

<style>
  .swatch {
    background-color: var(--wa-color-neutral-fill-normal);
    border: none;
  }
  .swatch:hover {
    background-color: var(--wa-color-brand-fill-loud);
  }
</style>

Motion like transitions and animations can make interactions more lively and emphasize the relationship between a user's action and its outcome.

## Transition Duration

Web Awesome uses transitions to ease between component states.

| Custom Property          | Default Value |  Preview                                                                                    |
| ------------------------ | ------------- | ------------------------------------------------------------------------------------------- |
| `--wa-transition-slow`   | `300ms`       | <div class="swatch" style="transition: background-color var(--wa-transition-slow)"></div>   |
| `--wa-transition-normal` | `150ms`       | <div class="swatch" style="transition: background-color var(--wa-transition-normal)"></div> |
| `--wa-transition-fast`   | `75ms`        | <div class="swatch" style="transition: background-color var(--wa-transition-fast)"></div>   |
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

Motion like transitions and animations can make interactions more lively and emphasize the relationship between a user's action and its outcome.

## Transition Duration

Web Awesome uses transitions to ease between component states.

| Custom Property               | Default Value |  Preview                        |
| ----------------------------- | - | ------------------------------- |
| `--wa-transition-slow`   | <code>300ms</code> | <div class="motion-swatch" style="transition: background-color var(--wa-transition-slow)"></div> |
| `--wa-transition-normal`   | <code>150ms</code> | <div class="motion-swatch" style="transition: background-color var(--wa-transition-normal)"></div> |
| `--wa-transition-fast`   | <code>75ms</code> | <div class="motion-swatch" style="transition: background-color var(--wa-transition-fast)"></div> |
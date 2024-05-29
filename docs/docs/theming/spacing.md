---
title: Spacing
description: Lock down consistent spacing Web Awesome's space properties.
layout: page.njk
---

<style>
  .spacing-swatch {
    --dot-size: 0.5em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: var(--wa-color-neutral-fill-normal);
    height: 2em;
    margin-inline:var(--dot-size);
  }

  .spacing-swatch::before {
    content: '';
    aspect-ratio: 1 / 1;
    width: var(--dot-size);
    background-color: var(--wa-color-neutral-fill-loud);
    border-radius: 50%;
    margin-inline-start: calc(var(--dot-size) * -1);
  }

  .spacing-swatch::after {
    content: '';
    aspect-ratio: 1 / 1;
    width: var(--dot-size);
    background-color: var(--wa-color-neutral-fill-loud);
    border-radius: 50%;
    margin-inline-end: calc(var(--dot-size) * -1);
  }
</style>

| Custom Property               |  Preview                        |
| ----------------------------- | ------------------------------- |
| `--wa-space-3xs`   | <div class="spacing-swatch" style="width: var(--wa-space-3xs)"></div> |
| `--wa-space-2xs`   | <div class="spacing-swatch" style="width: var(--wa-space-2xs)"></div> |
| `--wa-space-xs`   | <div class="spacing-swatch" style="width: var(--wa-space-xs)"></div> |
| `--wa-space-s`   | <div class="spacing-swatch" style="width: var(--wa-space-s)"></div> |
| `--wa-space-m`   | <div class="spacing-swatch" style="width: var(--wa-space-m)"></div> |
| `--wa-space-l`   | <div class="spacing-swatch" style="width: var(--wa-space-l)"></div> |
| `--wa-space-xl`   | <div class="spacing-swatch" style="width: var(--wa-space-xl)"></div> |
| `--wa-space-2xl`   | <div class="spacing-swatch" style="width: var(--wa-space-2xl)"></div> |
| `--wa-space-3xl`   | <div class="spacing-swatch" style="width: var(--wa-space-3xl)"></div> |
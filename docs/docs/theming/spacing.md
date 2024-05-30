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

| Custom Property               | Default Value |  Preview                        |
| ----------------------------- | - | ------------------------------- |
| `--wa-space-3xs`   | <code>0.125rem</code> | <div class="spacing-swatch" style="width: var(--wa-space-3xs)"></div> |
| `--wa-space-2xs`   | <code>0.25rem</code> | <div class="spacing-swatch" style="width: var(--wa-space-2xs)"></div> |
| `--wa-space-xs`   | <code>0.5rem</code> | <div class="spacing-swatch" style="width: var(--wa-space-xs)"></div> |
| `--wa-space-s`   | <code>0.75rem</code> | <div class="spacing-swatch" style="width: var(--wa-space-s)"></div> |
| `--wa-space-m`   | <code>1rem</code> | <div class="spacing-swatch" style="width: var(--wa-space-m)"></div> |
| `--wa-space-l`   | <code>1.25rem</code> | <div class="spacing-swatch" style="width: var(--wa-space-l)"></div> |
| `--wa-space-xl`   | <code>1.5rem</code> | <div class="spacing-swatch" style="width: var(--wa-space-xl)"></div> |
| `--wa-space-2xl`   | <code>2rem</code> | <div class="spacing-swatch" style="width: var(--wa-space-2xl)"></div> |
| `--wa-space-3xl`   | <code>3rem</code> | <div class="spacing-swatch" style="width: var(--wa-space-3xl)"></div> |
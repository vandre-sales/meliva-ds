---
title: Changelog
description: Changes to each version of the project are documented here.
layout: page
---

Web Awesome follows [Semantic Versioning](https://semver.org/). Breaking changes in components with the <wa-badge variant="brand" pill>Stable</wa-badge> badge will not be accepted until the next major version. As such, all contributions must consider the project's roadmap and take this into consideration. Features that are deemed no longer necessary will be deprecated but not removed.

Components with the <wa-badge variant="warning" pill>Experimental</wa-badge> badge should not be used in production. They are made available as release candidates for development and testing purposes. As such, changes to experimental components will not be subject to semantic versioning.

New versions of Web Awesome are released as-needed and generally occur when a critical mass of changes have accumulated. At any time, you can see what's coming in the next release by visiting [next.shoelace.style](https://next.shoelace.style).

## 3.0 Changes (BREAKING)

- Disabled form controls will no longer have a `disabled` attribute set when they are disabled via property. IE: `el.disabled = true`. Instead use `:state(disabled)` to style them.
- Checkboxes will no longer have a `checked` attribute set when their `checked` property is changed. IE: `el.checked = true`. Instead, use the `:state(:checked)` and for unsupported browsers, use `[data-checked]`
- `data-optional`, `data-required`, `data-invalid`, `data-valid`, `data-user-invalid`, and `data-user-valid` have all been renamed to have a `data-wa-*` prefix. Like so: `data-wa-valid`, `data-wa-invalid`, to avoid any conflicts with user provided attributes.
- `<wa-checkbox>` and `<wa-switch>` now use `:state(checked)` and `[data-wa-checked]` for CSS styling their "checked" state. The "checked" attribute now maps to `defaultChecked` just like native HTML checkboxes.
- `<wa-radio>` has changed from `display: block;` to `display: inline-block`
- `getFormControls()` has been removed. We use Form Associated Custom Elements now and can reliably grab Web Awesome Elements via `formElement.elements`.
- Added `setKitCode()` and `getKitCode()` functions as well as support for setting kit codes declaratively with `data-webawesome-kit`
- Added `family` and `variant` attributes to `<wa-icon>` and `<wa-icon-button>`
- Added the `active` attribute to `<wa-tab-group>`
- Added an easier way to close dialogs by applying `data-dialog="dismiss"` to any button in the dialog
- Added an easier way to close drawers by applying `data-dialog="dismiss"` to any button in the drawer
- Added the `--show-duration` and `--hide-duration` custom properties to `<wa-details>`, `<wa-dialog>`, `<wa-drawer>`, `<sl-tree-item>`, and `<wa-popup>`
- Changed the attribute for setting the base path declaratively to `data-webawesome` instead of `data-shoelace`; additionally, you can place it on any element now instead of just the associated `<script>` tag
- `<wa-icon>` icons are no longer fixed width by default to accommodate variable width icons
- Changed the `sl` prefix to `wa` for Web Awesome, including tags, events, etc.
- Changed `primary` variants to `brand` in all components
- Changed the internal structure of `<wa-checkbox>` so that the internal checkbox now takes up the full height and width of its wrapping container.
- Changed `<wa-tab-group>` to implement a "roving tabindex" and `<wa-tab>` is no longer tabbable by default. This aligns closer to the APG pattern for tabs. [#2041]
- Changed `<wa-tooltip>` to no longer wrap content due to accessibility and styling issues. Tooltips are now associated using the `for` attribute + an `id` on the trigger [#123]
- Fixed a bug in `<wa-spinner>` that caused it to display incorrectly when zooming in Safari
- Improved submenu selection by implementing the [safe triangle](https://www.smashingmagazine.com/2023/08/better-context-menus-safe-triangles/) method [#1550]
- Improved tabbing in `<wa-tab-group>` so it uses a roving tab index instead of being able to cycle through each tab
- Removed `default` from `<wa-button>` and made `neutral` the new default
- Removed the `circle` modifier from `<wa-button>` because button's no longer have a set height
- Removed the `active-tab-indicator` part from `<wa-tab-group>`
- Removed the `closable` attribute from `<wa-tab>` because you can't nest interactive elements (see the updated example for a better method)
- Removed the `show()` method from `<wa-tab-group>` (use the `active` attribute instead)
- Removed the `show()` and `hide()` methods from `<wa-dialog>` and `<wa-drawer`> (toggle the `open` attribute instead)
- Removed JavaScript-based animation customizations due to high confusion and low usage
- Removed the `wa-request-close` event from `<wa-dialog>` and `<wa-drawer>` (use the `wa-hide` event instead)
- Removed `valueAsDate` from `<wa-input>`. Instead use the following to mimic browser behavior:
    setter: `waInput.value = new Date().toLocaleDateString()`
    getter: `new Date(waInput.value)`
- Removed `valueAsNumber` from `<wa-input>`. Instead you can use the following to mimic browser behavior:
    setter: `waInput.value = 5.toString()`
    getter: `Number(waInput.value)`

---

Coming from Shoelace? [The 2.x changelog can be found here.](https://shoelace.style/resources/changelog/)
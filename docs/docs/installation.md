---
title: Installation
description: Choose the installation method that works best for you.
layout: page.njk
---

You can load Web Awesome via CDN or by installing it locally. If you're using a framework, make sure to check out the pages for [React](/frameworks/react), [Vue](/frameworks/vue), and [Angular](/frameworks/angular) for additional information.

## CDN Installation (Easiest)

<wa-tab-group>
<wa-tab slot="nav" panel="autoloader" active>Autoloader</wa-tab>
<wa-tab slot="nav" panel="traditional">Traditional Loader</wa-tab>

<wa-tab-panel name="autoloader">

The experimental autoloader is the easiest and most efficient way to use Web Awesome. A lightweight script watches the DOM for unregistered Web Awesome elements and lazy loads them for you — even if they're added dynamically.

While convenient, autoloading may lead to a [Flash of Undefined Custom Elements](https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements/). The linked article describes some ways to alleviate it.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@%VERSION%/%CDNDIR%/themes/default.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@%VERSION%/%CDNDIR%/autoloader.js"></script>
```

</wa-tab-panel>

<wa-tab-panel name="traditional">

The traditional CDN loader registers all Web Awesome elements up front. Note that, if you're only using a handful of components, it will be much more efficient to stick with the autoloader. However, you can also [cherry pick](#cherry-picking) components if you want to load specific ones up front.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@%VERSION%/%CDNDIR%/themes/default.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@%VERSION%/%CDNDIR%/autoloader.js" ></script>
```

</wa-tab-panel>
</wa-tab-group>

### Dark Theme

The code above will load the light theme. If you want to use the [dark theme](/getting-started/themes#dark-theme) instead, update the stylesheet as shown below and add `<html class="wa-theme-default-dark">` to your page.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@%VERSION%/%CDNDIR%/themes/dark.css" />
```

### Light & Dark Theme

If you want to load the light or dark theme based on the user's `prefers-color-scheme` setting, use the stylesheets below. The `media` attributes ensure that only the user's preferred theme stylesheet loads and the `onload` attribute sets the appropriate [theme class](/getting-started/themes) on the `<html>` element.

```html
<link
  rel="stylesheet"
  media="(prefers-color-scheme:light)"
  href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@%VERSION%/%CDNDIR%/themes/default.css"
/>
<link
  rel="stylesheet"
  media="(prefers-color-scheme:dark)"
  href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@%VERSION%/%CDNDIR%/themes/dark.css"
  onload="document.documentElement.classList.add('wa-theme-default-dark');"
/>
```

Now you can [start using Web Awesome!](/getting-started/usage)

## npm installation

If you don't want to use the CDN, you can install Web Awesome from npm with the following command.

```bash
npm install @shoelace-style/shoelace
```

It's up to you to make the source files available to your app. One way to do this is to create a route in your app called `/shoelace` that serves static files from `node_modules/@shoelace-style/shoelace`.

Once you've done that, add the following tags to your page. Make sure to update `href` and `src` so they point to the route you created.

```html
<link rel="stylesheet" href="/shoelace/%NPMDIR%/themes/default.css" />
<script type="module" src="/shoelace/%NPMDIR%/autoloader.js"></script>
```

Alternatively, [you can use a bundler](#bundling).

:::info
For clarity, the docs will usually show imports from `@shoelace-style/shoelace`. If you're not using a module resolver or bundler, you'll need to adjust these paths to point to the folder Web Awesome is in.
:::

## Setting the Base Path

Some components rely on assets (icons, images, etc.) and Web Awesome needs to know where they're located. For convenience, Web Awesome will try to auto-detect the correct location based on the script you've loaded it from. This assumes assets are colocated with `autoloader.js` and will "just work" for most users.

However, if you're [cherry picking](#cherry-picking) or [bundling](#bundling) Web Awesome, you'll need to set the base path. You can do this one of two ways.

```html
<!-- Option 1: the data-webawesome attribute -->
<script src="bundle.js" data-webawesome="/path/to/shoelace/%NPMDIR%"></script>

<!-- Option 2: the setBasePath() method -->
<script src="bundle.js"></script>
<script type="module">
  import { setBasePath } from '@shoelace-style/shoelace/%NPMDIR%/utilities/base-path.js';
  setBasePath('/path/to/shoelace/%NPMDIR%');
</script>
```

:::info
An easy way to make sure the base path is configured properly is to check if [icons](/components/icon) are loading.
:::

### Referencing Assets

Most of the magic behind assets is handled internally by Web Awesome, but if you need to reference the base path for any reason, the same module exports a function called `getBasePath()`. An optional string argument can be passed, allowing you to get the full path to any asset.

```html
<script type="module">
  import { getBasePath, setBasePath } from '@shoelace-style/shoelace/%NPMDIR%/utilities/base-path.js';

  setBasePath('/path/to/assets');

  // ...

  // Get the base path, e.g. /path/to/assets
  const basePath = getBasePath();

  // Get the path to an asset, e.g. /path/to/assets/file.ext
  const assetPath = getBasePath('file.ext');
</script>
```

## Cherry Picking

Cherry picking can be done from [the CDN](#cdn-installation-easiest) or from [npm](#npm-installation). This approach will load only the components you need up front, while limiting the number of files the browser has to download. The disadvantage is that you need to import each individual component.

Here's an example that loads only the button component. Again, if you're not using a module resolver, you'll need to adjust the path to point to the folder Web Awesome is in.

```html
<link rel="stylesheet" href="/path/to/shoelace/%NPMDIR%/themes/default.css" />

<script type="module" data-webawesome="/path/to/shoelace/%NPMDIR%">
  import '@shoelace-style/shoelace/%NPMDIR%/components/button/button.js';

  // <wa-button> is ready to use!
</script>
```

You can copy and paste the code to import a component from the "Importing" section of the component's documentation. Note that some components have dependencies that are automatically imported when you cherry pick. If a component has dependencies, they will be listed in the "Dependencies" section of its docs.

:::warning
You will see files named `chunk.[hash].js` in the `chunks` directory. Never import these files directly, as they are generated and change from version to version.
:::

## Bundling

Web Awesome is distributed as a collection of standard ES modules that [all modern browsers can understand](https://caniuse.com/es6-module). However, importing a lot of modules can result in a lot of HTTP requests and potentially longer load times. Using a CDN can alleviate this, but some users may wish to further optimize their imports with a bundler.

To use Web Awesome with a bundler, first install Web Awesome along with your bundler of choice.

```bash
npm install @shoelace-style/webawesome
```

Now it's time to configure your bundler. Configurations vary for each tool, but here are some examples to help you get started.

- [Example webpack config](https://github.com/shoelace-style/webpack-example/blob/master/webpack.config.js)
- [Example Rollup config](https://github.com/shoelace-style/rollup-example/blob/master/rollup.config.js)

Once your bundler is configured, you'll be able to import Web Awesome components and utilities.

```js
import '@shoelace-style/webawesome/%NPMDIR%/themes/default.css';
import '@shoelace-style/webawesome/%NPMDIR%/components/button/button.js';
import '@shoelace-style/webawesome/%NPMDIR%/components/icon/icon.js';
import '@shoelace-style/webawesome/%NPMDIR%/components/input/input.js';
import '@shoelace-style/webawesome/%NPMDIR%/components/rating/rating.js';
import { setBasePath } from '@shoelace-style/webawesome/%NPMDIR%/utilities/base-path.js';

// Set the base path to the folder you copied Web Awesome's assets to
setBasePath('/path/to/webawesome/%NPMDIR%');

// <wa-button>, <wa-icon>, <wa-input>, and <wa-rating> are ready to use!
```

## The difference between CDN and npm

You'll notice that the CDN links all start with `/%CDNDIR%/<path>` and npm imports use `/%NPMDIR%/<path>`. The `/%CDNDIR%` files are bundled separately from the `/%NPMDIR%` files. The `/%CDNDIR%` files come pre-bundled, which means all dependencies are inlined so you do not need to worry about loading additional libraries. The `/%NPMDIR%` files **DO NOT** come pre-bundled, allowing your bundler of choice to more efficiently deduplicate dependencies, resulting in smaller bundles and optimal code sharing.

TL;DR:

- `@shoelace-style/webawesome/%CDNDIR%` is for CDN users
- `@shoelace-style/webawesome/%NPMDIR%` is for npm users

This change was introduced in `v2.5.0` to address issues around installations from npm loading multiple versions of libraries (such as the Lit) that Web Awesome uses internally.

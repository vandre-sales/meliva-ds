---
title: Installation
description: Choose the installation method that works best for you.
layout: page
---

You can load Web Awesome via CDN or by installing it locally. If you're using a framework, make sure to check out the pages for [React](/frameworks/react), [Vue](/frameworks/vue), and [Angular](/frameworks/angular) for additional information.

## Autoloading via CDN (Easiest)

The autoloader is the easiest way to use Web Awesome. A lightweight script watches the DOM for unregistered Web Awesome elements and lazy loads them for you — even if they're added dynamically.

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@%VERSION%/%CDNDIR%/themes/default.css" />
<script type="module" src="https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@%VERSION%/%CDNDIR%/autoloader.js"></script>
```

Now you can [start using Web Awesome!](/getting-started/usage)

:::info
While convenient, autoloading may lead to a [Flash of Undefined Custom Elements](https://www.abeautifulsite.net/posts/flash-of-undefined-custom-elements/). The linked article describes some ways to alleviate it.
:::

## Setting the Base Path

Some components rely on assets (icons, images, etc.) and Web Awesome needs to know where they're located. For convenience, Web Awesome will try to auto-detect the correct location based on the script you've loaded it from. This assumes assets are colocated with `autoloader.js` and will "just work" for most users.

If you're using the CDN, you can skip this section. However, if you're [cherry picking](#cherry-picking) or bundling Web Awesome, you'll need to set the base path. You can do this one of two ways.

```html
<!-- Option 1: the data-webawesome attribute -->
<script src="bundle.js" data-webawesome="/path/to/web-awesome/%NPMDIR%"></script>

<!-- Option 2: the setBasePath() method -->
<script type="module">
  import { setBasePath } from '/path/to/web-awesome/%NPMDIR%/webawesome.js';
  setBasePath('/path/to/web-awesome/%NPMDIR%');
</script>
```

### Referencing Assets

Most of the magic behind assets is handled internally by Web Awesome, but if you need to reference the base path for any reason, the same module exports a function called `getBasePath()`. An optional string argument can be passed, allowing you to get the full path to any asset.

```html
<script type="module">
  import { getBasePath, setBasePath } from '/path/to/web-awesome/%NPMDIR%/webawesome.js';

  setBasePath('/path/to/assets');

  // ...

  // Get the base path, e.g. /path/to/assets
  const basePath = getBasePath();

  // Get the path to an asset, e.g. /path/to/assets/file.ext
  const assetPath = getBasePath('file.ext');
</script>
```

## Using Font Awesome Kit Codes

Font Awesome users can set their kit code to unlock Font Awesome Pro icons. You can provide it through the `data-fa-kit-code` attribute or by calling the `setKitCode()` method.

```html
<!-- Option 1: the data-fa-kit-code attribute -->
<script src="bundle.js" data-fa-kit-code="abc123"></script>

<!-- Option 2: the setKitCode() method -->
<script type="module">
  import { setKitCode } from '/path/to/web-awesome/%NPMDIR%/webawesome.js';
  setBasePath('/path/to/web-awesome/%NPMDIR%');
</script>
```

## Cherry Picking

Cherry picking will only the components you need up front, while limiting the number of files the browser has to download. The disadvantage is that you need to import each individual component on each page it's used.

Here's an example that loads only the button component.

```html
<link rel="stylesheet" href="/path/to/web-awesome/%NPMDIR%/themes/default.css" />

<script type="module" data-webawesome="/path/to/web-awesome/%NPMDIR%">
  import '/path/to/web-awesome/%NPMDIR%/components/button/button.js';

  // <wa-button> is ready to use!
</script>
```

You can copy and paste the code to import a component from the "Importing" section of the component's documentation. Note that some components have dependencies that are automatically imported when you cherry pick. If a component has dependencies, they will be listed in the "Dependencies" section of its docs.

:::warning
You will see files named `chunk.[hash].js` in the `chunks` directory. Never import these files directly, as they are generated and change from version to version.
:::

## Using Web Awesome with npm

An npm package isn't available in the early backer alpha release, but we'll have one soon! For now, please enjoy Web Awesome from the CDN as described above.

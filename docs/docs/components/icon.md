---
title: Icon
description: Icons are symbols that can be used to represent various options within an application.
layout: component.njk
---

Web Awesome comes bundled with over 2,000 free icons courtesy of [Font Awesome](https://fontawesome.com/). These icons are part of the `default` icon library. Font Awesome Pro users can unlock additional icon families. Or, if you prefer, you can register your own [custom icon library](#icon-library).

:::info
Not sure which icon to use? [Find the perfect icon over at Font Awesome!](https://fontawesome.com/search?o=r&m=free&f=brands%2Cclassic)
:::

## Examples

### Families & Variants

The default icon library is Font Awesome Free, which comes with two icon families: `classic` and `brands`. Use the `family` attribute to set the icon family.

Many Font Awesome Pro icon families have variants such as `thin`, `light`, `regular`, and `solid`. Font Awesome Pro users can [provide their kit code](/docs/installation) to unlock additional families, including `sharp` and `duotone`. For these icon families, use the `variant` attribute to set the variant.

```html {.example}
<wa-icon family="brands" name="font-awesome"></wa-icon>
<wa-icon family="brands" name="web-awesome"></wa-icon>
```

{% raw %}
```jsx {.react}
import WaIcon from '@shoelace-style/shoelace/dist/react/icon';

const App = () => (
  <>
    <WaIcon family="brands" name="font-awesome" />
    <WaIcon family="brands" name="web-awesome" />
  </>
);
```
{% endraw %}

### Colors

Icons inherit their color from the current text color. Thus, you can set the `color` property on the `<wa-icon>` element or an ancestor to change the color.

```html {.example}
<div style="color: #4a90e2;">
  <wa-icon name="exclamation-triangle"></wa-icon>
  <wa-icon name="archive"></wa-icon>
  <wa-icon name="battery-three-quarters"></wa-icon>
  <wa-icon name="bell"></wa-icon>
</div>
<div style="color: #9013fe;">
  <wa-icon name="clock"></wa-icon>
  <wa-icon name="cloud"></wa-icon>
  <wa-icon name="download"></wa-icon>
  <wa-icon name="file"></wa-icon>
</div>
<div style="color: #417505;">
  <wa-icon name="flag"></wa-icon>
  <wa-icon name="heart"></wa-icon>
  <wa-icon name="image"></wa-icon>
  <wa-icon name="bolt-lightning"></wa-icon>
</div>
<div style="color: #f5a623;">
  <wa-icon name="microphone"></wa-icon>
  <wa-icon name="search"></wa-icon>
  <wa-icon name="star"></wa-icon>
  <wa-icon name="trash"></wa-icon>
</div>
```

{% raw %}
```jsx {.react}
import WaIcon from '@shoelace-style/shoelace/dist/react/icon';

const App = () => (
  <>
    <div style={{ color: '#4a90e2' }}>
      <WaIcon name="exclamation-triangle"></WaIcon>
      <WaIcon name="archive"></WaIcon>
      <WaIcon name="battery-three-quarters"></WaIcon>
      <WaIcon name="bell"></WaIcon>
    </div>
    <div style={{ color: '#9013fe' }}>
      <WaIcon name="clock"></WaIcon>
      <WaIcon name="cloud"></WaIcon>
      <WaIcon name="download"></WaIcon>
      <WaIcon name="file"></WaIcon>
    </div>
    <div style={{ color: '#417505' }}>
      <WaIcon name="flag"></WaIcon>
      <WaIcon name="heart"></WaIcon>
      <WaIcon name="image"></WaIcon>
      <WaIcon name="bolt-lightning"></WaIcon>
    </div>
    <div style={{ color: '#f5a623' }}>
      <WaIcon name="microphone"></WaIcon>
      <WaIcon name="search"></WaIcon>
      <WaIcon name="star"></WaIcon>
      <WaIcon name="trash"></WaIcon>
    </div>
  </>
);
```
{% endraw %}

### Sizing

Icons are sized relative to the current font size. To change their size, set the `font-size` property on the icon itself or on a parent element as shown below.

```html {.example}
<div style="font-size: 32px;">
  <wa-icon name="bell"></wa-icon>
  <wa-icon name="heart"></wa-icon>
  <wa-icon name="image"></wa-icon>
  <wa-icon name="microphone"></wa-icon>
  <wa-icon name="search"></wa-icon>
  <wa-icon name="star"></wa-icon>
</div>
```

{% raw %}
```jsx {.react}
import WaIcon from '@shoelace-style/shoelace/dist/react/icon';

const App = () => (
  <div style={{ fontSize: '32px' }}>
    <WaIcon name="exclamation-triangle" />
    <WaIcon name="archive" />
    <WaIcon name="battery-three-quarters" />
    <WaIcon name="bell" />
    <WaIcon name="clock" />
    <WaIcon name="cloud" />
    <WaIcon name="download" />
    <WaIcon name="file" />
    <WaIcon name="flag" />
    <WaIcon name="heart" />
    <WaIcon name="image" />
    <WaIcon name="bolt-lightning" />
    <WaIcon name="microphone" />
    <WaIcon name="search" />
    <WaIcon name="star" />
    <WaIcon name="trash" />
  </div>
);
```
{% endraw %}

### Fixed Width Icons

By default, icons have a 1em height and a variable width. Use the `fixed-width` attribute to render the host element in a 1em by 1em box.

```html {.example}
<wa-icon fixed-width name="cloud"></wa-icon>
<wa-icon fixed-width name="user"></wa-icon>
<wa-icon fixed-width name="truck"></wa-icon>
<wa-icon fixed-width name="file"></wa-icon>
<wa-icon fixed-width name="skating"></wa-icon>
<wa-icon fixed-width name="snowplow"></wa-icon>
```

{% raw %}
```jsx {.react}
import WaIcon from '@shoelace-style/shoelace/dist/react/icon';

const App = () => (
  <>
    <WaIcon fixed-width name="cloud" />
    <WaIcon fixed-width name="user" />
    <WaIcon fixed-width name="truck" />
    <WaIcon fixed-width name="file" />
    <WaIcon fixed-width name="skating" />
    <WaIcon fixed-width name="snowplow" />
  </>
);
```
{% endraw %}

### Labels

For non-decorative icons, use the `label` attribute to announce it to assistive devices.

```html {.example}
<wa-icon name="star" label="Add to favorites"></wa-icon>
```

{% raw %}
```jsx {.react}
import WaIcon from '@shoelace-style/shoelace/dist/react/icon';

const App = () => <WaIcon name="star" label="Add to favorites" />;
```
{% endraw %}

### Custom Icons

Custom icons can be loaded individually with the `src` attribute. Only SVGs on a local or CORS-enabled endpoint are supported. If you're using more than one custom icon, it might make sense to register a [custom icon library](#icon-libraries).

```html {.example}
<wa-icon src="https://shoelace.style/assets/images/shoe.svg" style="font-size: 4rem;"></wa-icon>
```

{% raw %}
```jsx {.react}
import WaIcon from '@shoelace-style/shoelace/dist/react/icon';

const App = () => <WaIcon src="https://shoelace.style/assets/images/shoe.svg" style={{ fontSize: '4rem' }}></WaIcon>;
```
{% endraw %}

## Icon Libraries

You can register additional icons to use with the `<wa-icon>` component through icon libraries. Icon files can exist locally or on a CORS-enabled endpoint (e.g. a CDN). There is no limit to how many icon libraries you can register and there is no cost associated with registering them, as individual icons are only requested when they're used.

Web Awesome ships with two built-in icon libraries, `default` and `system`. The [default icon library](#customizing-the-default-library) is provided courtesy of [Font Awesome](https://fontawesome.com/). The [system icon library](#customizing-the-system-library) contains only a small subset of icons that are used internally by Web Awesome components.

To register an additional icon library, use the `registerIconLibrary()` function that's exported from `dist/webawesome.js`. At a minimum, you must provide a name and a resolver function. The resolver function translates an icon name to a URL where the corresponding SVG file exists. Refer to the examples below to better understand how it works.

If necessary, a mutator function can be used to mutate the SVG element before rendering. This is necessary for some libraries due to the many possible ways SVGs are crafted. For example, icons should ideally inherit the current text color via `currentColor`, so you may need to apply `fill="currentColor` or `stroke="currentColor"` to the SVG element using this function.

Here's an example that registers an icon library located in the `/assets/icons` directory.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('my-icons', {
    resolver: (name, family, variant) => `/assets/icons/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>
```

To display an icon, set the `library` and `name` attributes of an `<wa-icon>` element.

```html
<!-- This will show the icon located at /assets/icons/smile.svg -->
<wa-icon library="my-icons" name="smile"></wa-icon>
```

If an icon is used before registration occurs, it will be empty initially but shown when registered.

The following examples demonstrate how to register a number of popular, open source icon libraries via CDN. Feel free to adapt the code as you see fit to use your own origin or naming conventions.

### Bootstrap Icons

This will register the [Bootstrap Icons](https://icons.getbootstrap.com/) library using the jsDelivr CDN. This library has two families: `regular` and `filled`.

Icons in this library are licensed under the [MIT License](https://github.com/twbs/icons/blob/main/LICENSE).

```html
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('default', {
    resolver: (name, family) => {
      const suffix = family === 'filled' ? '-fill' : '';
      return `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/${name}${suffix}.svg`
    }  
  });
</script>
```

### Boxicons

This will register the [Boxicons](https://boxicons.com/) library using the jsDelivr CDN. This library has three variations: regular (`bx-*`), solid (`bxs-*`), and logos (`bxl-*`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Creative Commons 4.0 License](https://github.com/atisawd/boxicons#license).

```html {.example}
<script type="module">
import { registerIconLibrary } from '/dist/webawesome.js';

registerIconLibrary('boxicons', {
    resolver: name => {
      let folder = 'regular';
      if (name.substring(0, 4) === 'bxs-') folder = 'solid';
      if (name.substring(0, 4) === 'bxl-') folder = 'logos';
      return `https://cdn.jsdelivr.net/npm/boxicons@2.0.5/svg/${folder}/${name}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="boxicons" name="bx-bot"></wa-icon>
  <wa-icon library="boxicons" name="bx-cookie"></wa-icon>
  <wa-icon library="boxicons" name="bx-joystick"></wa-icon>
  <wa-icon library="boxicons" name="bx-save"></wa-icon>
  <wa-icon library="boxicons" name="bx-server"></wa-icon>
  <wa-icon library="boxicons" name="bx-wine"></wa-icon>
  <br />
  <wa-icon library="boxicons" name="bxs-bot"></wa-icon>
  <wa-icon library="boxicons" name="bxs-cookie"></wa-icon>
  <wa-icon library="boxicons" name="bxs-joystick"></wa-icon>
  <wa-icon library="boxicons" name="bxs-save"></wa-icon>
  <wa-icon library="boxicons" name="bxs-server"></wa-icon>
  <wa-icon library="boxicons" name="bxs-wine"></wa-icon>
  <br />
  <wa-icon library="boxicons" name="bxl-apple"></wa-icon>
  <wa-icon library="boxicons" name="bxl-chrome"></wa-icon>
  <wa-icon library="boxicons" name="bxl-edge"></wa-icon>
  <wa-icon library="boxicons" name="bxl-firefox"></wa-icon>
  <wa-icon library="boxicons" name="bxl-opera"></wa-icon>
  <wa-icon library="boxicons" name="bxl-microsoft"></wa-icon>
</div>
```

### Lucide

This will register the [Lucide](https://lucide.dev/) icon library using the jsDelivr CDN. This project is a community-maintained fork of the popular [Feather](https://feathericons.com/) icon library.

Icons in this library are licensed under the [MIT License](https://github.com/lucide-icons/lucide/blob/master/LICENSE).

```html {.example}
<div style="font-size: 24px;">
  <wa-icon library="lucide" name="feather"></wa-icon>
  <wa-icon library="lucide" name="pie-chart"></wa-icon>
  <wa-icon library="lucide" name="settings"></wa-icon>
  <wa-icon library="lucide" name="map-pin"></wa-icon>
  <wa-icon library="lucide" name="printer"></wa-icon>
  <wa-icon library="lucide" name="shopping-cart"></wa-icon>
</div>

<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('lucide', {
    resolver: name => `https://cdn.jsdelivr.net/npm/lucide-static@0.16.29/icons/${name}.svg`
  });
</script>
```

### Heroicons

This will register the [Heroicons](https://heroicons.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/tailwindlabs/heroicons/blob/master/LICENSE).

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('heroicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/heroicons@2.0.1/24/outline/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="heroicons" name="chat-bubble-left"></wa-icon>
  <wa-icon library="heroicons" name="cloud"></wa-icon>
  <wa-icon library="heroicons" name="cog"></wa-icon>
  <wa-icon library="heroicons" name="document-text"></wa-icon>
  <wa-icon library="heroicons" name="gift"></wa-icon>
  <wa-icon library="heroicons" name="speaker-wave"></wa-icon>
</div>
```

### Iconoir

This will register the [Iconoir](https://iconoir.com/) library using the jsDelivr CDN.

Icons in this library are licensed under the [MIT License](https://github.com/lucaburgio/iconoir/blob/master/LICENSE).

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('iconoir', {
    resolver: name => `https://cdn.jsdelivr.net/gh/lucaburgio/iconoir@latest/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="iconoir" name="check-circled-outline"></wa-icon>
  <wa-icon library="iconoir" name="drawer"></wa-icon>
  <wa-icon library="iconoir" name="keyframes"></wa-icon>
  <wa-icon library="iconoir" name="headset-help"></wa-icon>
  <wa-icon library="iconoir" name="color-picker"></wa-icon>
  <wa-icon library="iconoir" name="wifi"></wa-icon>
</div>
```

### Ionicons

This will register the [Ionicons](https://ionicons.com/) library using the jsDelivr CDN. This library has three variations: outline (default), filled (`*-filled`), and sharp (`*-sharp`). A mutator function is required to polyfill a handful of styles we're not including.

Icons in this library are licensed under the [MIT License](https://github.com/ionic-team/ionicons/blob/master/LICENSE).

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('ionicons', {
    resolver: name => `https://cdn.jsdelivr.net/npm/ionicons@5.1.2/dist/ionicons/svg/${name}.svg`,
    mutator: svg => {
      svg.setAttribute('fill', 'currentColor');
      svg.setAttribute('stroke', 'currentColor');
      [...svg.querySelectorAll('.ionicon-fill-none')].map(el => el.setAttribute('fill', 'none'));
      [...svg.querySelectorAll('.ionicon-stroke-width')].map(el => el.setAttribute('stroke-width', '32px'));
    }
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="ionicons" name="alarm"></wa-icon>
  <wa-icon library="ionicons" name="american-football"></wa-icon>
  <wa-icon library="ionicons" name="bug"></wa-icon>
  <wa-icon library="ionicons" name="chatbubble"></wa-icon>
  <wa-icon library="ionicons" name="settings"></wa-icon>
  <wa-icon library="ionicons" name="warning"></wa-icon>
  <br />
  <wa-icon library="ionicons" name="alarm-outline"></wa-icon>
  <wa-icon library="ionicons" name="american-football-outline"></wa-icon>
  <wa-icon library="ionicons" name="bug-outline"></wa-icon>
  <wa-icon library="ionicons" name="chatbubble-outline"></wa-icon>
  <wa-icon library="ionicons" name="settings-outline"></wa-icon>
  <wa-icon library="ionicons" name="warning-outline"></wa-icon>
  <br />
  <wa-icon library="ionicons" name="alarm-sharp"></wa-icon>
  <wa-icon library="ionicons" name="american-football-sharp"></wa-icon>
  <wa-icon library="ionicons" name="bug-sharp"></wa-icon>
  <wa-icon library="ionicons" name="chatbubble-sharp"></wa-icon>
  <wa-icon library="ionicons" name="settings-sharp"></wa-icon>
  <wa-icon library="ionicons" name="warning-sharp"></wa-icon>
</div>
```

### Jam Icons

This will register the [Jam Icons](https://jam-icons.com/) library using the jsDelivr CDN. This library has two variations: regular (default) and filled (`*-f`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [MIT License](https://github.com/michaelampr/jam/blob/master/LICENSE).

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('jam', {
    resolver: name => `https://cdn.jsdelivr.net/npm/jam-icons@2.0.0/svg/${name}.svg`,
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="jam" name="calendar"></wa-icon>
  <wa-icon library="jam" name="camera"></wa-icon>
  <wa-icon library="jam" name="filter"></wa-icon>
  <wa-icon library="jam" name="leaf"></wa-icon>
  <wa-icon library="jam" name="picture"></wa-icon>
  <wa-icon library="jam" name="set-square"></wa-icon>
  <br />
  <wa-icon library="jam" name="calendar-f"></wa-icon>
  <wa-icon library="jam" name="camera-f"></wa-icon>
  <wa-icon library="jam" name="filter-f"></wa-icon>
  <wa-icon library="jam" name="leaf-f"></wa-icon>
  <wa-icon library="jam" name="picture-f"></wa-icon>
  <wa-icon library="jam" name="set-square-f"></wa-icon>
</div>
```

### Material Icons

This will register the [Material Icons](https://material.io/resources/icons/?style=baseline) library using the jsDelivr CDN. This library has three variations: outline (default), round (`*_round`), and sharp (`*_sharp`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/google/material-design-icons/blob/master/LICENSE).

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('material', {
    resolver: name => {
      const match = name.match(/^(.*?)(_(round|sharp))?$/);
      return `https://cdn.jsdelivr.net/npm/@material-icons/svg@1.0.5/svg/${match[1]}/${match[3] || 'outline'}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="material" name="notifications"></wa-icon>
  <wa-icon library="material" name="email"></wa-icon>
  <wa-icon library="material" name="delete"></wa-icon>
  <wa-icon library="material" name="volume_up"></wa-icon>
  <wa-icon library="material" name="settings"></wa-icon>
  <wa-icon library="material" name="shopping_basket"></wa-icon>
  <br />
  <wa-icon library="material" name="notifications_round"></wa-icon>
  <wa-icon library="material" name="email_round"></wa-icon>
  <wa-icon library="material" name="delete_round"></wa-icon>
  <wa-icon library="material" name="volume_up_round"></wa-icon>
  <wa-icon library="material" name="settings_round"></wa-icon>
  <wa-icon library="material" name="shopping_basket_round"></wa-icon>
  <br />
  <wa-icon library="material" name="notifications_sharp"></wa-icon>
  <wa-icon library="material" name="email_sharp"></wa-icon>
  <wa-icon library="material" name="delete_sharp"></wa-icon>
  <wa-icon library="material" name="volume_up_sharp"></wa-icon>
  <wa-icon library="material" name="settings_sharp"></wa-icon>
  <wa-icon library="material" name="shopping_basket_sharp"></wa-icon>
</div>
```

### Remix Icon

This will register the [Remix Icon](https://remixicon.com/) library using the jsDelivr CDN. This library groups icons by categories, so the name must include the category and icon separated by a slash, as well as the `-line` or `-fill` suffix as needed. A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Remix-Design/RemixIcon/blob/master/License).

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('remixicon', {
    resolver: name => {
      const match = name.match(/^(.*?)\/(.*?)?$/);
      match[1] = match[1].charAt(0).toUpperCase() + match[1].slice(1);
      return `https://cdn.jsdelivr.net/npm/remixicon@2.5.0/icons/${match[1]}/${match[2]}.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="remixicon" name="business/cloud-line"></wa-icon>
  <wa-icon library="remixicon" name="design/brush-line"></wa-icon>
  <wa-icon library="remixicon" name="business/pie-chart-line"></wa-icon>
  <wa-icon library="remixicon" name="development/bug-line"></wa-icon>
  <wa-icon library="remixicon" name="media/image-line"></wa-icon>
  <wa-icon library="remixicon" name="system/alert-line"></wa-icon>
  <br />
  <wa-icon library="remixicon" name="business/cloud-fill"></wa-icon>
  <wa-icon library="remixicon" name="design/brush-fill"></wa-icon>
  <wa-icon library="remixicon" name="business/pie-chart-fill"></wa-icon>
  <wa-icon library="remixicon" name="development/bug-fill"></wa-icon>
  <wa-icon library="remixicon" name="media/image-fill"></wa-icon>
  <wa-icon library="remixicon" name="system/alert-fill"></wa-icon>
</div>
```

### Tabler Icons

This will register the [Tabler Icons](https://tabler-icons.io/) library using the jsDelivr CDN. This library features over 1,950 open source icons.

Icons in this library are licensed under the [MIT License](https://github.com/tabler/tabler-icons/blob/master/LICENSE).

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('tabler', {
    resolver: name => `https://cdn.jsdelivr.net/npm/@tabler/icons@1.68.0/icons/${name}.svg`
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="tabler" name="alert-triangle"></wa-icon>
  <wa-icon library="tabler" name="arrow-back"></wa-icon>
  <wa-icon library="tabler" name="at"></wa-icon>
  <wa-icon library="tabler" name="ball-baseball"></wa-icon>
  <wa-icon library="tabler" name="cake"></wa-icon>
  <wa-icon library="tabler" name="files"></wa-icon>
  <br />
  <wa-icon library="tabler" name="keyboard"></wa-icon>
  <wa-icon library="tabler" name="moon"></wa-icon>
  <wa-icon library="tabler" name="pig"></wa-icon>
  <wa-icon library="tabler" name="printer"></wa-icon>
  <wa-icon library="tabler" name="ship"></wa-icon>
  <wa-icon library="tabler" name="toilet-paper"></wa-icon>
</div>
```

### Unicons

This will register the [Unicons](https://iconscout.com/unicons) library using the jsDelivr CDN. This library has two variations: line (default) and solid (`*-s`). A mutator function is required to set the SVG's `fill` to `currentColor`.

Icons in this library are licensed under the [Apache 2.0 License](https://github.com/Iconscout/unicons/blob/master/LICENSE). Some of the icons that appear on the Unicons website, particularly many of the solid variations, require a license and are therefore not available in the CDN.

```html {.example}
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('unicons', {
    resolver: name => {
      const match = name.match(/^(.*?)(-s)?$/);
      return `https://cdn.jsdelivr.net/npm/@iconscout/unicons@3.0.3/svg/${match[2] === '-s' ? 'solid' : 'line'}/${
        match[1]
      }.svg`;
    },
    mutator: svg => svg.setAttribute('fill', 'currentColor')
  });
</script>

<div style="font-size: 24px;">
  <wa-icon library="unicons" name="clock"></wa-icon>
  <wa-icon library="unicons" name="graph-bar"></wa-icon>
  <wa-icon library="unicons" name="padlock"></wa-icon>
  <wa-icon library="unicons" name="polygon"></wa-icon>
  <wa-icon library="unicons" name="rocket"></wa-icon>
  <wa-icon library="unicons" name="star"></wa-icon>
  <br />
  <wa-icon library="unicons" name="clock-s"></wa-icon>
  <wa-icon library="unicons" name="graph-bar-s"></wa-icon>
  <wa-icon library="unicons" name="padlock-s"></wa-icon>
  <wa-icon library="unicons" name="polygon-s"></wa-icon>
  <wa-icon library="unicons" name="rocket-s"></wa-icon>
  <wa-icon library="unicons" name="star-s"></wa-icon>
</div>
```

### Customizing the Default Library

The default icon library contains over 2,000 icons courtesy of [Font Awesome](https://fontawesome.com/). These are the icons that display when you use `<wa-icon>` without the `library` attribute. If you prefer to have these icons resolve elsewhere or to a different icon library, register an icon library using the `default` name and a custom resolver.

For example, this will change the default icon library to use [Bootstrap Icons](https://icons.getbootstrap.com/) loaded from the jsDelivr CDN.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('default', {
    resolver: (name, family) => {
      const suffix = family === 'filled' ? '-fill' : '';
      return `https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/icons/${name}${suffix}.svg`
    }  
  });
</script>
```

#### Customize the default library to use SVG sprites

To improve performance you can use a SVG sprites to avoid multiple trips for each SVG. The browser will load the sprite sheet once and then you reference the particular SVG within the sprite sheet using hash selector.

As always, make sure to benchmark these changes. When using HTTP/2, it may in fact be more bandwidth-friendly to use multiple small requests instead of 1 large sprite sheet.

:::warning
When using sprite sheets, the `wa-load` and `wa-error` events will not fire.

For security reasons, browsers may apply the same-origin policy on `<use>` elements located in the `<wa-icon>` shadow DOM and may refuse to load a cross-origin URL. There is currently no defined way to set a cross-origin policy for `<use>` elements. For this reason, sprite sheets should only be used if you're self-hosting them.
:::

```html
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('sprite', {
    resolver: name => `/assets/images/sprite.svg#${name}`,
    mutator: svg => svg.setAttribute('fill', 'currentColor'),
    spriteSheet: true
  });
</script>
```

### Customizing the System Library

The system library contains only the icons used internally by Web Awesome components. Unlike the default icon library, the system library does not rely on physical assets. Instead, its icons are hard-coded as data URIs into the resolver to ensure their availability.

If you want to change the icons Web Awesome uses internally, you can register an icon library using the `system` name and a custom resolver. If you choose to do this, it's your responsibility to provide all of the icons that are required by components. You can reference `src/components/library.system.ts` for a complete list of system icons used by Web Awesome.

```html
<script type="module">
  import { registerIconLibrary } from '/dist/webawesome.js';

  registerIconLibrary('system', {
    resolver: name => `/path/to/custom/icons/${name}.svg`
  });
</script>
```

---
title: Format Date
description: Formats a date/time using the specified locale and options.
layout: ../../../layouts/ComponentLayout.astro
---

Localization is handled by the browser's [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). No language packs are required.

```html:preview
<!-- Web Awesome 2 release date 🎉 -->
<wa-format-date date="2020-07-15T09:17:00-04:00"></wa-format-date>
```

```jsx:react
import WaFormatDate from '@shoelace-style/shoelace/dist/react/format-date';

const App = () => <WaFormatDate date="2020-07-15T09:17:00-04:00" />;
```

The `date` attribute determines the date/time to use when formatting. It must be a string that [`Date.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse) can interpret or a [`Date`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) object set via JavaScript. If omitted, the current date/time will be assumed.

:::tip
When using strings, avoid ambiguous dates such as `03/04/2020` which can be interpreted as March 4 or April 3 depending on the user's browser and locale. Instead, always use a valid [ISO 8601 date time string](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/parse#Date_Time_String_Format) to ensure the date will be parsed properly by all clients.
:::

## Examples

### Date & Time Formatting

Formatting options are based on those found in the [`Intl.DateTimeFormat` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat). When formatting options are provided, the date/time will be formatted according to those values. When no formatting options are provided, a localized, numeric date will be displayed instead.

```html:preview
<!-- Human-readable date -->
<wa-format-date month="long" day="numeric" year="numeric"></wa-format-date><br />

<!-- Time -->
<wa-format-date hour="numeric" minute="numeric"></wa-format-date><br />

<!-- Weekday -->
<wa-format-date weekday="long"></wa-format-date><br />

<!-- Month -->
<wa-format-date month="long"></wa-format-date><br />

<!-- Year -->
<wa-format-date year="numeric"></wa-format-date><br />

<!-- No formatting options -->
<wa-format-date></wa-format-date>
```

```jsx:react
import WaFormatDate from '@shoelace-style/shoelace/dist/react/format-date';

const App = () => (
  <>
    {/* Human-readable date */}
    <WaFormatDate month="long" day="numeric" year="numeric" />
    <br />

    {/* Time */}
    <WaFormatDate hour="numeric" minute="numeric" />
    <br />

    {/* Weekday */}
    <WaFormatDate weekday="long" />
    <br />

    {/* Month */}
    <WaFormatDate month="long" />
    <br />

    {/* Year */}
    <WaFormatDate year="numeric" />
    <br />

    {/* No formatting options */}
    <WaFormatDate />
  </>
);
```

### Hour Formatting

By default, the browser will determine whether to use 12-hour or 24-hour time. To force one or the other, set the `hour-format` attribute to `12` or `24`.

```html:preview
<wa-format-date hour="numeric" minute="numeric" hour-format="12"></wa-format-date><br />
<wa-format-date hour="numeric" minute="numeric" hour-format="24"></wa-format-date>
```

```jsx:react
import WaFormatDate from '@shoelace-style/shoelace/dist/react/format-date';

const App = () => (
  <>
    <WaFormatDate hour="numeric" minute="numeric" hour-format="12" />
    <br />
    <WaFormatDate hour="numeric" minute="numeric" hour-format="24" />
  </>
);
```

### Localization

Use the `lang` attribute to set the date/time formatting locale.

```html:preview
English: <wa-format-date lang="en"></wa-format-date><br />
French: <wa-format-date lang="fr"></wa-format-date><br />
Russian: <wa-format-date lang="ru"></wa-format-date>
```

```jsx:react
import WaFormatDate from '@shoelace-style/shoelace/dist/react/format-date';

const App = () => (
  <>
    English: <WaFormatDate lang="en" />
    <br />
    French: <WaFormatDate lang="fr" />
    <br />
    Russian: <WaFormatDate lang="ru" />
  </>
);
```

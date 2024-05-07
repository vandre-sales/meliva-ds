---
title: Textarea
description: Textareas collect data from the user and allow multiple lines of text.
layout: component.njk
---

```html {.example}
<wa-textarea></wa-textarea>
```

{% raw %}
```jsx {.react}
import WaTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <WaTextarea />;
```
{% endraw %}

:::info
This component works with standard `<form>` elements. Please refer to the section on [form controls](/getting-started/form-controls) to learn more about form submission and client-side validation.
:::

## Examples

### Labels

Use the `label` attribute to give the textarea an accessible label. For labels that contain HTML, use the `label` slot instead.

```html {.example}
<wa-textarea label="Comments"></wa-textarea>
```

{% raw %}
```jsx {.react}
import WaTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <WaTextarea label="Comments" />;
```
{% endraw %}

### Help Text

Add descriptive help text to a textarea with the `help-text` attribute. For help texts that contain HTML, use the `help-text` slot instead.

```html {.example}
<wa-textarea label="Feedback" help-text="Please tell us what you think."> </wa-textarea>
```

{% raw %}
```jsx {.react}
import WaTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <WaTextarea label="Feedback" help-text="Please tell us what you think." />;
```
{% endraw %}

### Rows

Use the `rows` attribute to change the number of text rows that get shown.

```html {.example}
<wa-textarea rows="2"></wa-textarea>
```

{% raw %}
```jsx {.react}
import WaTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <WaTextarea rows={2} />;
```
{% endraw %}

### Placeholders

Use the `placeholder` attribute to add a placeholder.

```html {.example}
<wa-textarea placeholder="Type something"></wa-textarea>
```

{% raw %}
```jsx {.react}
import WaTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <WaTextarea placeholder="Type something" />;
```
{% endraw %}

### Filled Textareas

Add the `filled` attribute to draw a filled textarea.

```html {.example}
<wa-textarea placeholder="Type something" filled></wa-textarea>
```

{% raw %}
```jsx {.react}
import WaTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <WaTextarea placeholder="Type something" filled />;
```
{% endraw %}

### Disabled

Use the `disabled` attribute to disable a textarea.

```html {.example}
<wa-textarea placeholder="Textarea" disabled></wa-textarea>
```

{% raw %}
```jsx {.react}
import WaTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <WaTextarea placeholder="Textarea" disabled />;
```
{% endraw %}

### Sizes

Use the `size` attribute to change a textarea's size.

```html {.example}
<wa-textarea placeholder="Small" size="small"></wa-textarea>
<br />
<wa-textarea placeholder="Medium" size="medium"></wa-textarea>
<br />
<wa-textarea placeholder="Large" size="large"></wa-textarea>
```

{% raw %}
```jsx {.react}
import WaTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => (
  <>
    <WaTextarea placeholder="Small" size="small"></WaTextarea>
    <br />
    <WaTextarea placeholder="Medium" size="medium"></WaTextarea>
    <br />
    <WaTextarea placeholder="Large" size="large"></WaTextarea>
  </>
);
```
{% endraw %}

### Prevent Resizing

By default, textareas can be resized vertically by the user. To prevent resizing, set the `resize` attribute to `none`.

```html {.example}
<wa-textarea resize="none"></wa-textarea>
```

{% raw %}
```jsx {.react}
import WaTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <WaTextarea resize="none" />;
```
{% endraw %}

### Expand with Content

Textareas will automatically resize to expand to fit their content when `resize` is set to `auto`.

```html {.example}
<wa-textarea resize="auto"></wa-textarea>
```

{% raw %}
```jsx {.react}
import WaTextarea from '@shoelace-style/shoelace/dist/react/textarea';

const App = () => <WaTextarea resize="auto" />;
```
{% endraw %}

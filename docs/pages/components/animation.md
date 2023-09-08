---
meta:
  title: Animation
  description: Animate elements declaratively with nearly 100 baked-in presets, or roll your own with custom keyframes.
layout: component
---

To animate an element, wrap it in `<wa-animation>` and set an animation `name`. The animation will not start until you add the `play` attribute. Refer to the [properties table](#properties) for a list of all animation options.

```html:preview
<div class="animation-overview">
  <wa-animation name="bounce" duration="2000" play><div class="box"></div></wa-animation>
  <wa-animation name="jello" duration="2000" play><div class="box"></div></wa-animation>
  <wa-animation name="heartBeat" duration="2000" play><div class="box"></div></wa-animation>
  <wa-animation name="flip" duration="2000" play><div class="box"></div></wa-animation>
</div>

<style>
  .animation-overview .box {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: var(--wa-color-brand-element-fill-vivid);
    margin: 1.5rem;
  }
</style>
```

```jsx:react
import WaAnimation from '@shoelace-style/shoelace/dist/react/animation';

const css = `
  .animation-overview .box {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: var(--wa-color-brand-element-fill-vivid);
    margin: 1.5rem;
  }
`;

const App = () => (
  <>
    <div class="animation-overview">
      <WaAnimation name="bounce" duration={2000} play>
        <div class="box" />
      </WaAnimation>
      <WaAnimation name="jello" duration={2000} play>
        <div class="box" />
      </WaAnimation>
      <WaAnimation name="heartBeat" duration={2000} play>
        <div class="box" />
      </WaAnimation>
      <WaAnimation name="flip" duration={2000} play>
        <div class="box" />
      </WaAnimation>
    </div>

    <style>{css}</style>
  </>
);
```

:::tip
The animation will only be applied to the first child element found in `<wa-animation>`.
:::

## Examples

### Animations & Easings

This example demonstrates all of the baked-in animations and easings. Animations are based on those found in the popular [Animate.css](https://animate.style/) library.

```html:preview
<div class="animation-sandbox">
  <wa-animation name="bounce" easing="ease-in-out" duration="2000" play>
    <div class="box"></div>
  </wa-animation>

  <div class="controls">
    <wa-select label="Animation" value="bounce"></wa-select>
    <wa-select label="Easing" value="linear"></wa-select>
    <wa-input label="Playback Rate" type="number" min="0" max="2" step=".25" value="1"></wa-input>
  </div>
</div>

<script type="module">
  import { getAnimationNames, getEasingNames } from '/dist/utilities/animation.js';

  const container = document.querySelector('.animation-sandbox');
  const animation = container.querySelector('wa-animation');
  const animationName = container.querySelector('.controls wa-select:nth-child(1)');
  const easingName = container.querySelector('.controls wa-select:nth-child(2)');
  const playbackRate = container.querySelector('wa-input[type="number"]');
  const animations = getAnimationNames();
  const easings = getEasingNames();

  animations.map(name => {
    const option = Object.assign(document.createElement('wa-option'), {
      textContent: name,
      value: name
    });
    animationName.appendChild(option);
  });

  easings.map(name => {
    const option = Object.assign(document.createElement('wa-option'), {
      textContent: name,
      value: name
    });
    easingName.appendChild(option);
  });

  animationName.addEventListener('wa-change', () => (animation.name = animationName.value));
  easingName.addEventListener('wa-change', () => (animation.easing = easingName.value));
  playbackRate.addEventListener('wa-input', () => (animation.playbackRate = playbackRate.value));
</script>

<style>
  .animation-sandbox .box {
    width: 100px;
    height: 100px;
    background-color: var(--wa-color-brand-element-fill-vivid);
  }

  .animation-sandbox .controls {
    max-width: 300px;
    margin-top: 2rem;
  }

  .animation-sandbox .controls wa-select {
    margin-bottom: 1rem;
  }
</style>
```

### Using Intersection Observer

Use an [Intersection Observer](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API) to control the animation when an element enters or exits the viewport. For example, scroll the box below in and out of your screen. The animation stops when the box exits the viewport and restarts each time it enters the viewport.

```html:preview
<div class="animation-scroll">
  <wa-animation name="jackInTheBox" duration="2000" iterations="1"><div class="box"></div></wa-animation>
</div>

<script>
  const container = document.querySelector('.animation-scroll');
  const animation = container.querySelector('wa-animation');
  const box = animation.querySelector('.box');

  // Watch for the box to enter and exit the viewport. Note that we're observing the box, not the animation element!
  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      // Start the animation when the box enters the viewport
      animation.play = true;
    } else {
      animation.play = false;
      animation.currentTime = 0;
    }
  });
  observer.observe(box);
</script>

<style>
  .animation-scroll .box {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: var(--wa-color-brand-element-fill-vivid);
  }
</style>
```

```jsx:react
import { useEffect, useRef, useState } from 'react';
import WaAnimation from '@shoelace-style/shoelace/dist/react/animation';

const css = `
  .animation-scroll {
    height: calc(100vh + 100px);
  }

  .animation-scroll .box {
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: var(--wa-color-brand-element-fill-vivid);
  }
`;

const App = () => {
  const animation = useRef(null);
  const box = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        animation.current.play = true;
      } else {
        animation.current.play = false;
        animation.current.currentTime = 0;
      }
    });

    if (box.current) {
      observer.observe(box.current);
    }
  }, [box]);

  return (
    <>
      <div class="animation-scroll">
        <WaAnimation ref={animation} name="jackInTheBox" duration={2000} iterations={1}>
          <div ref={box} class="box" />
        </WaAnimation>
      </div>

      <style>{css}</style>
    </>
  );
};
```

### Custom Keyframe Formats

Supply your own [keyframe formats](https://developer.mozilla.org/en-US/docs/Web/API/Web_Animations_API/Keyframe_Formats) to build custom animations.

```html:preview
<div class="animation-keyframes">
  <wa-animation easing="ease-in-out" duration="2000" play>
    <div class="box"></div>
  </wa-animation>
</div>

<script>
  const animation = document.querySelector('.animation-keyframes wa-animation');
  animation.keyframes = [
    {
      offset: 0,
      easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
      fillMode: 'both',
      transformOrigin: 'center center',
      transform: 'rotate(0)'
    },
    {
      offset: 1,
      easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
      fillMode: 'both',
      transformOrigin: 'center center',
      transform: 'rotate(90deg)'
    }
  ];
</script>

<style>
  .animation-keyframes .box {
    width: 100px;
    height: 100px;
    background-color: var(--wa-color-brand-element-fill-vivid);
  }
</style>
```

```jsx:react
import WaAnimation from '@shoelace-style/shoelace/dist/react/animation';

const css = `
  .animation-keyframes .box {
    width: 100px;
    height: 100px;
    background-color: var(--wa-color-brand-element-fill-vivid);
  }
`;

const App = () => (
  <>
    <div class="animation-keyframes">
      <WaAnimation
        easing="ease-in-out"
        duration={2000}
        play
        keyframes={[
          {
            offset: 0,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(0)'
          },
          {
            offset: 1,
            easing: 'cubic-bezier(0.250, 0.460, 0.450, 0.940)',
            fillMode: 'both',
            transformOrigin: 'center center',
            transform: 'rotate(90deg)'
          }
        ]}
      >
        <div class="box" />
      </WaAnimation>
    </div>

    <style>{css}</style>
  </>
);
```

### Playing Animations on Demand

Animations won't play until you apply the `play` attribute. You can omit it initially, then apply it on demand such as after a user interaction. In this example, the button will animate once every time the button is clicked.

```html:preview
<div class="animation-form">
  <wa-animation name="rubberBand" duration="1000" iterations="1">
    <wa-button variant="brand">Click me</wa-button>
  </wa-animation>
</div>

<script>
  const container = document.querySelector('.animation-form');
  const animation = container.querySelector('wa-animation');
  const button = container.querySelector('wa-button');

  button.addEventListener('click', () => {
    animation.play = true;
  });
</script>
```

```jsx:react
import { useState } from 'react';
import WaAnimation from '@shoelace-style/shoelace/dist/react/animation';
import WaButton from '@shoelace-style/shoelace/dist/react/button';

const App = () => {
  const [play, setPlay] = useState(false);

  return (
    <div class="animation-form">
      <WaAnimation name="rubberBand" duration={1000} iterations={1} play={play} onWaFinish={() => setPlay(false)}>
        <WaButton variant="brand" onClick={() => setPlay(true)}>
          Click me
        </WaButton>
      </WaAnimation>
    </div>
  );
};
```

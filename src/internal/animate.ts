/**
 * Applies a class to the specified element to animate it. The class is removed after the animation finishes and then
 * the promise resolves. If a timeout is provided, the class will be removed and the animation will
 */
export function animateWithClass(el: Element, className: string) {
  return new Promise<void>(resolve => {
    el.classList.add(className);
    el.addEventListener(
      'animationend',
      () => {
        el.classList.remove(className);
        resolve();
      },
      { once: true }
    );
  });
}

/** Parses a CSS duration and returns the number of milliseconds. */
export function parseDuration(delay: number | string) {
  delay = delay.toString().toLowerCase();

  if (delay.indexOf('ms') > -1) {
    return parseFloat(delay);
  }

  if (delay.indexOf('s') > -1) {
    return parseFloat(delay) * 1000;
  }

  return parseFloat(delay);
}

/** Tells if the user has enabled the "reduced motion" setting in their browser or OS. */
export function prefersReducedMotion() {
  const query = window.matchMedia('(prefers-reduced-motion: reduce)');
  return query.matches;
}

/**
 * Stops all active animations on the target element. Returns a promise that resolves after all animations are canceled.
 */
export function stopAnimations(el: HTMLElement) {
  return Promise.all(
    el.getAnimations().map(animation => {
      return new Promise(resolve => {
        const handleAnimationEvent = requestAnimationFrame(resolve);

        animation.addEventListener('cancel', () => handleAnimationEvent, { once: true });
        animation.addEventListener('finish', () => handleAnimationEvent, { once: true });
        animation.cancel();
      });
    })
  );
}

/**
 * We can't animate `height: auto`, but we can calculate the height and shim keyframes by replacing it with the
 * element's scrollHeight before the animation.
 */
export function shimKeyframesHeightAuto(keyframes: Keyframe[], calculatedHeight: number) {
  return keyframes.map(keyframe => ({
    ...keyframe,
    height: keyframe.height === 'auto' ? `${calculatedHeight}px` : keyframe.height
  }));
}

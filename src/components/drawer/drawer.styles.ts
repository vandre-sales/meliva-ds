import { css } from 'lit';

export default css`
  :host {
    --size: 25rem;
    --header-spacing: var(--wa-space-l);
    --body-spacing: var(--wa-space-l);
    --footer-spacing: var(--wa-space-l);
    --show-duration: 200ms;
    --hide-duration: 200ms;

    display: none;
  }

  :host([open]) {
    display: block;
  }

  .drawer {
    display: flex;
    flex-direction: column;
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
    background-color: var(--wa-color-surface-raised);
    border: none;
    box-shadow: var(--wa-shadow-level-3);
    overflow: auto;
    padding: 0;
    margin: 0;
    animation-duration: var(--show-duration);
    animation-timing-function: ease;

    &.show::backdrop {
      animation: show-backdrop var(--show-duration, 200ms) ease;
    }

    &.hide::backdrop {
      animation: show-backdrop var(--hide-duration, 200ms) ease reverse;
    }

    &.show.drawer--top {
      animation: show-drawer-from-top var(--show-duration) ease;
    }

    &.hide.drawer--top {
      animation: show-drawer-from-top var(--hide-duration) ease reverse;
    }

    &.show.drawer--end {
      animation: show-drawer-from-end var(--show-duration) ease;

      &.drawer--rtl {
        animation-name: show-drawer-from-start;
      }
    }

    &.hide.drawer--end {
      animation: show-drawer-from-end var(--hide-duration) ease reverse;

      &.drawer--rtl {
        animation-name: show-drawer-from-start;
      }
    }

    &.show.drawer--bottom {
      animation: show-drawer-from-bottom var(--show-duration) ease;
    }

    &.hide.drawer--bottom {
      animation: show-drawer-from-bottom var(--hide-duration) ease reverse;
    }

    &.show.drawer--start {
      animation: show-drawer-from-start var(--show-duration) ease;

      &.drawer--rtl {
        animation-name: show-drawer-from-end;
      }
    }

    &.hide.drawer--start {
      animation: show-drawer-from-start var(--hide-duration) ease reverse;

      &.drawer--rtl {
        animation-name: show-drawer-from-end;
      }
    }

    &.pulse {
      animation: pulse 250ms ease;
    }
  }

  .drawer:focus {
    outline: none;
  }

  .drawer--top {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
    flex-wrap: wrap;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--wa-font-size-l);
    line-height: var(--wa-line-height-condensed);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions wa-icon-button,
  .drawer__header-actions ::slotted(wa-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--wa-font-size-m);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    display: flex;
    flex-wrap: wrap;
    gap: var(--wa-space-xs);
    justify-content: end;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(wa-button:not(:last-of-type)) {
    margin-inline-end: var(--wa-spacing-xs);
  }

  .drawer::backdrop {
    /*
      NOTE: the ::backdrop element doesn't inherit properly in Safari yet, but it will in 17.4! At that time, we can
      remove the fallback values here.
    */
    background-color: var(--wa-color-overlay-modal, rgb(0 0 0 / 0.25));
  }

  @keyframes pulse {
    0% {
      scale: 1;
    }
    50% {
      scale: 1.01;
    }
    100% {
      scale: 1;
    }
  }

  @keyframes show-drawer {
    from {
      opacity: 0;
      scale: 0.8;
    }
    to {
      opacity: 1;
      scale: 1;
    }
  }

  @keyframes show-drawer-from-top {
    from {
      opacity: 0;
      translate: 0 -100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-end {
    from {
      opacity: 0;
      translate: 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-bottom {
    from {
      opacity: 0;
      translate: 0 100%;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-drawer-from-start {
    from {
      opacity: 0;
      translate: -100% 0;
    }
    to {
      opacity: 1;
      translate: 0 0;
    }
  }

  @keyframes show-backdrop {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @media (forced-colors: active) {
    .drawer {
      border: solid 1px white;
    }
  }
`;

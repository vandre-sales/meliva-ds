import { css } from 'lit';

export default css`
  :host {
    --background-color: transparent;
    --background-color-hover: var(--wa-color-neutral-fill-quiet);
    --error-color: var(--wa-color-danger-fill-loud);
    --success-color: var(--wa-color-success-fill-loud);

    display: inline-block;
    color: var(--wa-color-text-quiet);
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background-color: var(--background-color);
    border: none;
    border-radius: var(--wa-border-radius-s);
    color: inherit;
    font-size: inherit;
    padding: var(--wa-space-xs);
    cursor: pointer;
    transition: color var(--wa-transition-fast) var(--wa-transition-easing);
  }

  .copy-button__button:hover:not([disabled]),
  .copy-button__button:focus-visible:not([disabled]) {
    background-color: var(--background-color-hover);
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-hover));
  }

  .copy-button__button:active:not([disabled]) {
    color: color-mix(in oklab, currentColor, var(--wa-color-mix-active));
  }

  slot[name='success-icon'] {
    color: var(--success-color);
  }

  slot[name='error-icon'] {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }

  .show {
    animation: show 100ms ease;
  }

  .hide {
    animation: show 100ms ease reverse;
  }

  @keyframes show {
    from {
      scale: 0.25;
      opacity: 0.25;
    }
    to {
      scale: 1;
      opacity: 1;
    }
  }
`;

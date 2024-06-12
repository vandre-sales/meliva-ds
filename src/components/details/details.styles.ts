import { css } from 'lit';

export default css`
  :host {
    --background-color: var(--wa-color-surface-default);
    --border-color: var(--wa-color-surface-border);
    --border-radius: var(--wa-panel-border-radius);
    --border-style: var(--wa-panel-border-style);
    --border-width: var(--wa-panel-border-width);
    --icon-color: var(--wa-color-text-quiet);
    --spacing: var(--wa-space-m);
    --show-duration: 200ms;
    --hide-duration: 200ms;

    display: block;
  }

  .details {
    background-color: var(--background-color);
    border-color: var(--border-color);
    border-radius: var(--border-radius);
    border-style: var(--border-style);
    border-width: var(--border-width);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    padding: var(--spacing);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: calc(1px + var(--wa-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--icon-color);
    transition: rotate var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  /* Overflows get clipped during the closing animation if we don't wait until the close is gone. */
  :not(.details--open) .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--spacing);
  }

  .show {
  }

  .hide {
  }

  @keyframes show {
    from {
    }
    to {
    }
  }
`;

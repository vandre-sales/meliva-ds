import { css } from 'lit';

export default css`
  :host {
    --border-color: var(--wa-color-surface-default);
    --border-radius: var(--wa-corners-xs);
    --border-style: var(--wa-border-style);
    --border-width: var(--wa-border-width-s);

    display: inline-flex;
  }

  :host([variant='brand']) {
    --background: var(--wa-color-brand-fill-loud);
    --content-color: var(--wa-color-brand-on-loud);
  }

  :host([variant='success']) {
    --background: var(--wa-color-success-fill-loud);
    --content-color: var(--wa-color-success-on-loud);
  }

  :host([variant='warning']) {
    --background: var(--wa-color-warning-fill-loud);
    --content-color: var(--wa-color-warning-on-loud);
  }

  :host([variant='neutral']) {
    --background: var(--wa-color-neutral-fill-loud);
    --content-color: var(--wa-color-neutral-on-loud);
  }

  :host([variant='danger']) {
    --background: var(--wa-color-danger-fill-loud);
    --content-color: var(--wa-color-danger-on-loud);
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--wa-font-weight-semibold);
    line-height: 1;
    background: var(--background);
    border-color: var(--border-color);
    border-radius: var(--border-radius);
    border-style: var(--border-style);
    border-width: var(--border-width);
    color: var(--content-color);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--wa-corners-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    --pulse-color: var(--background);

    animation: pulse 1.5s infinite;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`;

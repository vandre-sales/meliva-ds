import { css } from 'lit';

export default css`
  :host {
    --border-color: var(--background-color);
    --border-radius: var(--wa-border-radius-xs);
    --border-style: var(--wa-border-style);
    --border-width: var(--wa-border-width-s);

    display: inline-flex;
  }

  :host([variant='brand']) {
    --background-color: var(--wa-color-brand-fill-loud);
    --content-color: var(--wa-color-brand-on-loud);
  }

  :host([variant='success']) {
    --background-color: var(--wa-color-success-fill-loud);
    --content-color: var(--wa-color-success-on-loud);
  }

  :host([variant='warning']) {
    --background-color: var(--wa-color-warning-fill-loud);
    --content-color: var(--wa-color-warning-on-loud);
  }

  :host([variant='neutral']) {
    --background-color: var(--wa-color-neutral-fill-loud);
    --content-color: var(--wa-color-neutral-on-loud);
  }

  :host([variant='danger']) {
    --background-color: var(--wa-color-danger-fill-loud);
    --content-color: var(--wa-color-danger-on-loud);
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--wa-font-weight-semibold);
    line-height: 1;
    background: var(--background-color);
    border-color: var(--border-color);
    border-radius: var(--border-radius);
    border-style: var(--border-style);
    border-width: var(--border-width);
    color: var(--content-color);
    white-space: nowrap;
    padding: 0.375em 0.625em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--wa-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    --pulse-color: var(--background-color);

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

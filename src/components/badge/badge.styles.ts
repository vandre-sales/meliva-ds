import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--wa-font-weight-medium);
    line-height: 1;
    border-radius: var(--wa-corners-1x);
    border: solid 1px var(--wa-color-surface-default);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--wa-color-brand-element-fill-vivid);
    color: var(--wa-color-brand-text-on-vivid);
  }

  .badge--success {
    background-color: var(--wa-color-success-element-fill-vivid);
    color: var(--wa-color-success-text-on-vivid);
  }

  .badge--neutral {
    background-color: var(--wa-color-neutral-element-fill-vivid);
    color: var(--wa-color-neutral-text-on-vivid);
  }

  .badge--warning {
    background-color: var(--wa-color-warning-element-fill-vivid);
    color: var(--wa-color-warning-text-on-vivid);
  }

  .badge--danger {
    background-color: var(--wa-color-danger-element-fill-vivid);
    color: var(--wa-color-danger-text-on-vivid);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--wa-corners-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--wa-color-brand-container-outline-vivid);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--wa-color-success-container-outline-vivid);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--wa-color-neutral-container-outline-vivid);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--wa-color-warning-container-outline-vivid);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--wa-color-danger-container-outline-vivid);
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

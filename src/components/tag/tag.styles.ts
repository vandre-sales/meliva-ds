import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--wa-color-brand-container-fill-muted);
    border-color: var(--wa-color-brand-element-outline-muted);
    color: var(--wa-color-brand-text-on-muted);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--wa-color-brand-text-on-muted);
  }

  .tag--success {
    background-color: var(--wa-color-success-container-fill-muted);
    border-color: var(--wa-color-success-element-outline-muted);
    color: var(--wa-color-success-text-on-muted);
  }

  .tag--success:active > sl-icon-button {
    color: var(--wa-color-success-text-on-muted);
  }

  .tag--neutral {
    background-color: var(--wa-color-neutral-container-fill-muted);
    border-color: var(--wa-color-neutral-element-outline-muted);
    color: var(--wa-color-neutral-text-on-muted);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--wa-color-neutral-text-on-muted);
  }

  .tag--warning {
    background-color: var(--wa-color-warning-container-fill-muted);
    border-color: var(--wa-color-warning-element-outline-muted);
    color: var(--wa-color-warning-text-on-muted);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--wa-color-warning-text-on-muted);
  }

  .tag--danger {
    background-color: var(--wa-color-danger-container-fill-muted);
    border-color: var(--wa-color-danger-element-outline-muted);
    color: var(--wa-color-danger-text-on-muted);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--wa-color-danger-text-on-muted);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--wa-font-size-xs);
    border-radius: var(--wa-corners-1x);
    padding: var(--wa-space-3xs) var(--wa-space-2xs);
  }

  .tag--medium {
    font-size: var(--wa-font-size-s);
    border-radius: var(--wa-corners-1x);
    padding: var(--wa-space-2xs) var(--wa-space-xs);
  }

  .tag--large {
    font-size: var(--wa-font-size-m);
    border-radius: var(--wa-corners-1x);
    padding: var(--wa-space-2xs) var(--wa-space-xs);
  }

  .tag__remove {
    margin-inline-start: var(--wa-space-2xs);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--wa-corners-pill);
  }
`;

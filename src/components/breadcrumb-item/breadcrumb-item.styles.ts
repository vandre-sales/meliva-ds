import { css } from 'lit';

export default css`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font: inherit;
    font-weight: var(--wa-font-weight-action);
    color: var(--wa-color-neutral-on-quiet);
    line-height: var(--wa-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--wa-border-radius-s);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: color var(--wa-transition-normal) var(--wa-transition-easing);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--wa-color-text-link);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: color-mix(in oklab, var(--wa-color-text-link), var(--wa-color-mix-hover));
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--wa-color-text-link);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: inline-flex;
  }

  ::slotted(*) {
    margin-inline-end: var(--wa-space-s) !important;
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--wa-space-s);
    user-select: none;
    -webkit-user-select: none;
  }
`;

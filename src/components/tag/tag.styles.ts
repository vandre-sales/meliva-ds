import { css } from 'lit';

export default css`
  :host {
    --border-radius: var(--wa-border-radius-xs);
    --border-style: var(--wa-border-style);
    --border-width: var(--wa-border-width-s);

    display: inline-block;
  }

  :host([variant='brand']) {
    --background-color: var(--wa-color-brand-fill-quiet);
    --border-color: var(--wa-color-brand-border-normal);
    --content-color: var(--wa-color-brand-on-normal);
  }

  :host([variant='success']) {
    --background-color: var(--wa-color-success-fill-quiet);
    --border-color: var(--wa-color-success-border-normal);
    --content-color: var(--wa-color-success-on-normal);
  }

  :host([variant='warning']) {
    --background-color: var(--wa-color-warning-fill-quiet);
    --border-color: var(--wa-color-warning-border-normal);
    --content-color: var(--wa-color-warning-on-normal);
  }

  :host([variant='neutral']) {
    --background-color: var(--wa-color-neutral-fill-quiet);
    --border-color: var(--wa-color-neutral-border-normal);
    --content-color: var(--wa-color-neutral-on-normal);
  }

  :host([variant='danger']) {
    --background-color: var(--wa-color-danger-fill-quiet);
    --border-color: var(--wa-color-danger-border-normal);
    --content-color: var(--wa-color-danger-on-normal);
  }

  .tag {
    display: flex;
    align-items: center;
    background-color: var(--background-color);
    border-color: var(--border-color);
    border-radius: var(--border-radius);
    border-style: var(--border-style);
    border-width: var(--border-width);
    color: var(--content-color);
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  .tag:hover > wa-icon-button {
    color: color-mix(in oklab, var(--content-color), var(--wa-color-mix-hover));
  }

  .tag:active > wa-icon-button {
    color: color-mix(in oklab, var(--content-color), var(--wa-color-mix-active));
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--wa-font-size-xs);
    height: calc(var(--wa-form-control-height-s) * 0.8);
    line-height: calc(var(--wa-form-control-height-s) - var(--wa-form-control-border-width) * 2);
    border-radius: var(--wa-border-radius-s);
    padding: 0 var(--wa-space-xs);
  }

  .tag--medium {
    font-size: var(--wa-font-size-s);
    height: calc(var(--wa-form-control-height-m) * 0.8);
    line-height: calc(var(--wa-form-control-height-m) - var(--wa-form-control-border-width) * 2);
    border-radius: var(--wa-border-radius-s);
    padding: 0 var(--wa-space-s);
  }

  .tag--large {
    font-size: var(--wa-font-size-m);
    height: calc(var(--wa-form-control-height-l) * 0.8);
    line-height: calc(var(--wa-form-control-height-l) - var(--wa-form-control-border-width) * 2);
    border-radius: var(--wa-border-radius-s);
    padding: 0 var(--wa-space-m);
  }

  .tag__remove {
    margin-inline-start: 0.75em;
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--wa-border-radius-pill);
  }
`;

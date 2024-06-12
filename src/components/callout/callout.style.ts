import { css } from 'lit';

export default css`
  :host {
    --border-radius: var(--wa-panel-border-radius);
    --border-style: var(--wa-panel-border-style);
    --border-width: var(--wa-panel-border-width);
    --icon-color: currentColor;
    --icon-size: var(--wa-font-size-l);
    --spacing: var(--wa-space-m);

    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  :host([variant='brand']) {
    --background-color: var(--wa-color-brand-fill-quiet);
    --border-color: var(--wa-color-brand-border-quiet);
    --content-color: var(--wa-color-brand-on-normal);
  }

  :host([variant='success']) {
    --background-color: var(--wa-color-success-fill-quiet);
    --border-color: var(--wa-color-success-border-quiet);
    --content-color: var(--wa-color-success-on-normal);
  }

  :host([variant='neutral']) {
    --background-color: var(--wa-color-neutral-fill-quiet);
    --border-color: var(--wa-color-neutral-border-quiet);
    --content-color: var(--wa-color-neutral-on-normal);
  }

  :host([variant='warning']) {
    --background-color: var(--wa-color-warning-fill-quiet);
    --border-color: var(--wa-color-warning-border-quiet);
    --content-color: var(--wa-color-warning-on-normal);
  }

  :host([variant='danger']) {
    --background-color: var(--wa-color-danger-fill-quiet);
    --border-color: var(--wa-color-danger-border-quiet);
    --content-color: var(--wa-color-danger-on-normal);
  }

  .callout {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--background-color);
    border-color: var(--border-color);
    border-radius: var(--border-radius);
    border-style: var(--border-style);
    border-width: var(--border-width);
    color: var(--content-color);
    font: inherit;
    padding: var(--spacing);
    margin: inherit;
  }

  .callout__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    color: var(--icon-color);
    font-size: var(--icon-size);
  }

  .callout__icon ::slotted(*) {
    margin-inline-end: var(--spacing) !important;
  }

  .callout__message {
    flex: 1 1 auto;
    display: block;
    overflow: hidden;
  }
`;

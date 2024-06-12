import { css } from 'lit';

export default css`
  :host {
    --background-color: var(--wa-color-surface-default);
    --border-color: var(--wa-color-surface-border);
    --border-radius: var(--wa-panel-border-radius);
    --border-style: var(--wa-panel-border-style);
    --border-width: var(--wa-panel-border-width);
    --box-shadow: var(--wa-shadow-s);
    --padding: var(--wa-space-xl);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--background-color);
    border-color: var(--border-color);
    border-radius: var(--border-radius);
    border-style: var(--border-style);
    border-width: var(--border-width);
    box-shadow: var(--box-shadow);
    color: var(--wa-color-text-normal);
    font: inherit;
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
    border-bottom-left-radius: 0 !important;
    border-bottom-right-radius: 0 !important;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: inherit;
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: inherit;
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`;

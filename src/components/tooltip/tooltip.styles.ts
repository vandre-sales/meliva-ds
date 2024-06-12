import { css } from 'lit';

export default css`
  :host {
    --background-color: var(--wa-tooltip-background-color);
    --border-radius: var(--wa-tooltip-border-radius);
    --max-width: 30ch;
    --padding: var(--wa-space-2xs) var(--wa-space-xs);

    display: inline-block;

    /** These styles are added so we dont interfere in the DOM. */
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: 1000;
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--border-radius);
    background-color: var(--background-color);
    font: inherit;
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
    text-align: start;
    white-space: normal;
    padding: var(--padding);
    user-select: none;
    -webkit-user-select: none;
  }
`;

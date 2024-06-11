import { css } from 'lit';

export default css`
  :host {
    --background: var(--wa-tooltip-background);
    --border-radius: var(--wa-tooltip-border-radius);
    --max-width: 30ch;
    --padding: var(--wa-space-2xs) var(--wa-space-xs);

    display: contents;
    color: var(--wa-tooltip-content-color);
    font-size: var(--wa-tooltip-font-size);
    line-height: var(--wa-tooltip-line-height);
  }

  .tooltip {
    --arrow-size: var(--wa-tooltip-arrow-size);
    --arrow-color: var(--wa-tooltip-background);
  }

  .tooltip::part(popup) {
    z-index: var(--wa-z-index-tooltip);
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
    background: var(--background);
    font: inherit;
    text-align: start;
    white-space: normal;
    padding: var(--padding);
    user-select: none;
    -webkit-user-select: none;
  }
`;

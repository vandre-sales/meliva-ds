import { css } from 'lit';

export default css`
  :host {
    --size: 25rem;
    --header-spacing: var(--wa-space-l);
    --body-spacing: var(--wa-space-l);
    --footer-spacing: var(--wa-space-l);

    display: contents;
  }

  .drawer {
    position: fixed;
    z-index: var(--wa-z-index-drawer);
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--wa-color-surface-raised);
    box-shadow: var(--wa-shadow-level-3);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--wa-font-size-l);
    line-height: var(--wa-line-height-compact);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--wa-space-2xs);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions wa-icon-button,
  .drawer__header-actions ::slotted(wa-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--wa-font-size-m);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(wa-button:not(:last-of-type)) {
    margin-inline-end: var(--wa-spacing-xs);
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--wa-color-overlay-modal);
    pointer-events: all;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px white;
    }
  }
`;

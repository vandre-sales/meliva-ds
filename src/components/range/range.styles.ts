import { css } from 'lit';

export default css`
  :host {
    --thumb-color: var(--wa-form-controls-activated-color);
    --thumb-shadow: 0 0 transparent;
    --thumb-size: calc(1rem * var(--wa-font-line-height-compact));
    --tooltip-offset: calc(var(--wa-tooltip-arrow-size) * 2.5);
    --track-color-active: var(--wa-color-neutral-fill-highlight);
    --track-color-inactive: var(--wa-color-neutral-fill-highlight);
    --track-active-offset: 0%;
    --track-height: calc(var(--thumb-size) / 4);

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: calc(var(--track-height) / 2);
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--wa-form-controls-height-m);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--thumb-color);
    box-shadow:
      var(--thumb-shadow),
      0 0 0 calc(var(--track-height) / 2) var(--wa-color-surface-default);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--thumb-color);
    box-shadow:
      var(--thumb-shadow),
      0 0 0 calc(var(--track-height) / 2) var(--wa-color-surface-default);
    transition:
      var(--wa-transition-fast) border-color,
      var(--wa-transition-fast) background-color,
      var(--wa-transition-fast) color,
      var(--wa-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--wa-z-index-tooltip);
    left: 0;
    border-radius: var(--wa-corners-s);
    background-color: var(--wa-color-neutral-spot);
    font: inherit;
    line-height: var(--wa-line-height-regular);
    color: var(--wa-color-neutral-text-on-spot);
    opacity: 0;
    padding: var(--wa-space-2xs) var(--wa-space-xs);
    transition: var(--wa-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--wa-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--wa-tooltip-arrow-size) solid var(--wa-color-neutral-spot);
    border-left: var(--wa-tooltip-arrow-size) solid transparent;
    border-right: var(--wa-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--wa-tooltip-arrow-size) solid var(--wa-color-neutral-spot);
    border-left: var(--wa-tooltip-arrow-size) solid transparent;
    border-right: var(--wa-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`;

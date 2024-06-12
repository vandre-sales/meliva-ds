import { css } from 'lit';

export default css`
  :host {
    --background-color: var(--wa-form-control-background);
    --background-color-checked: var(--wa-form-control-activated-color);
    --border-color: var(--wa-form-control-resting-color);
    --border-color-checked: var(--background-color-checked);
    --border-style: var(--wa-form-control-border-style);
    --border-width: var(--wa-form-control-border-width);
    --box-shadow: initial;
    --height: calc(1em * var(--wa-form-control-value-line-height));
    --thumb-color: var(--wa-form-control-resting-color);
    --thumb-color-checked: var(--wa-form-control-background);
    --thumb-shadow: initial;
    --thumb-size: calc((var(--height) - var(--border-width) * 2) * 0.75);
    --width: calc(var(--height) * 1.75);

    display: inline-block;
  }

  :host([size='small']) {
    font-size: var(--wa-font-size-s);
  }

  :host([size='medium']) {
    font-size: var(--wa-font-size-m);
  }

  :host([size='large']) {
    font-size: var(--wa-font-size-l);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font: inherit;
    color: var(--wa-form-control-value-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--background-color);
    border-color: var(--border-color);
    border-radius: var(--height);
    border-style: var(--border-style);
    border-width: var(--border-width);
    box-shadow: var(--box-shadow);
    transition:
      background var(--wa-transition-normal) var(--wa-transition-easing),
      border-color var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--thumb-color);
    border-radius: 50%;
    box-shadow: var(--thumb-shadow);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      translate var(--wa-transition-normal) var(--wa-transition-easing),
      background-color var(--wa-transition-normal) var(--wa-transition-easing),
      border-color var(--wa-transition-normal) var(--wa-transition-easing),
      box-shadow var(--wa-transition-normal) var(--wa-transition-easing);
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Focus */
  .switch:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--background-color-checked);
    border-color: var(--border-color-checked);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--thumb-color-checked);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--wa-form-control-required-content);
    color: var(--wa-form-control-required-content-color);
    margin-inline-start: var(--wa-form-control-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`;

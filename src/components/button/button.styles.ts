import { css } from 'lit';
import componentStyles from '../../styles/component.styles.js';

export default css`
  ${componentStyles}

  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border: none;
    font-family: var(--wa-font-family-body);
    font-weight: var(--wa-font-weight-normal);
    text-decoration: none;
    user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition: var(--wa-transition-faster) background-color, var(--wa-transition-faster) color,
      var(--wa-transition-faster) border, var(--wa-transition-faster) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--wa-focus-ring);
    outline-offset: var(--wa-focus-ring-offset);
  }

  .button--brand:focus-visible {
    outline-color: var(--wa-color-brand-element-fill-vivid);
  }

  .button--success:focus-visible {
    outline-color: var(--wa-color-success-element-fill-vivid);
  }

  .button--neutral:focus-visible {
    outline-color: var(--wa-color-neutral-element-fill-vivid);
  }

  .button--warning:focus-visible {
    outline-color: var(--wa-color-warning-element-fill-vivid);
  }

  .button--danger:focus-visible {
    outline-color: var(--wa-color-danger-element-fill-vivid);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Brand */
  .button--standard.button--brand {
    background-color: var(--wa-color-brand-element-fill-vivid);
    color: var(--wa-color-brand-text-on-vivid);
  }

  .button--standard.button--brand:hover:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-brand-element-fill-vivid), white 6%);
  }

  .button--standard.button--brand:active:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-brand-element-fill-vivid), black 6%);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--wa-color-success-element-fill-vivid);
    color: var(--wa-color-success-text-on-vivid);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-success-element-fill-vivid), white 6%);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-success-element-fill-vivid), black 6%);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--wa-color-neutral-element-fill-vivid);
    color: var(--wa-color-neutral-text-on-vivid);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-neutral-element-fill-vivid), white 6%);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-neutral-element-fill-vivid), black 6%);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--wa-color-warning-element-fill-vivid);
    color: var(--wa-color-warning-text-on-vivid);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-warning-element-fill-vivid), white 6%);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-warning-element-fill-vivid), black 6%);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--wa-color-danger-element-fill-vivid);
    color: var(--wa-color-danger-text-on-vivid);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-danger-element-fill-vivid), white 6%);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-danger-element-fill-vivid), black 6%);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Brand */
  .button--outline.button--brand {
    border-color: var(--wa-color-brand-element-outline-vivid);
    color: var(--wa-color-brand-text-on-surface);
  }

  .button--outline.button--brand:hover:not(.button--disabled),
  .button--outline.button--brand.button--checked:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-brand-element-fill-vivid), white 6%);
    border-color: color-mix(in oklch, var(--wa-color-brand-element-fill-vivid), white 6%);
    color: var(--wa-color-brand-text-on-vivid);
  }

  .button--outline.button--brand:active:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-brand-element-fill-vivid), black 6%);
    border-color: color-mix(in oklch, var(--wa-color-brand-element-fill-vivid), black 6%);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--wa-color-success-element-outline-vivid);
    color: var(--wa-color-success-text-on-surface);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-success-element-fill-vivid), white 6%);
    border-color: color-mix(in oklch, var(--wa-color-success-element-fill-vivid), white 6%);
    color: var(--wa-color-success-text-on-vivid);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-success-element-fill-vivid), black 6%);
    border-color: color-mix(in oklch, var(--wa-color-success-element-fill-vivid), black 6%);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--wa-color-neutral-element-outline-vivid);
    color: var(--wa-color-neutral-text-on-surface);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-neutral-element-fill-vivid), white 6%);
    border-color: color-mix(in oklch, var(--wa-color-neutral-element-fill-vivid), white 6%);
    color: var(--wa-color-neutral-text-on-vivid);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-neutral-element-fill-vivid), black 6%);
    border-color: color-mix(in oklch, var(--wa-color-neutral-element-fill-vivid), black 6%);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--wa-color-warning-element-outline-vivid);
    color: var(--wa-color-warning-text-on-surface);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-warning-element-fill-vivid), white 6%);
    border-color: color-mix(in oklch, var(--wa-color-warning-element-fill-vivid), white 6%);
    color: var(--wa-color-warning-text-on-vivid);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-warning-element-fill-vivid), black 6%);
    border-color: color-mix(in oklch, var(--wa-color-warning-element-fill-vivid), black 6%);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--wa-color-danger-element-outline-vivid);
    color: var(--wa-color-danger-text-on-surface);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-danger-element-fill-vivid), white 6%);
    border-color: color-mix(in oklch, var(--wa-color-danger-element-fill-vivid), white 6%);
    color: var(--wa-color-danger-text-on-vivid);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    background-color: color-mix(in oklch, var(--wa-color-danger-element-fill-vivid), black 6%);
    border-color: color-mix(in oklch, var(--wa-color-danger-element-fill-vivid), black 6%);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--wa-color-text-link);
  }

  .button--text:hover:not(.button--disabled) {
    color: color-mix(in oklch, var(--wa-color-text-link), white 6%);
  }

  .button--text:focus-visible:not(.button--disabled),
  .button--text:active:not(.button--disabled) {
    color: var(--wa-color-text-link);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    font-size: var(--wa-font-size-s);
    border-radius: var(--wa-corners-1x);
  }

  .button--medium {
    height: auto;
    font-size: var(--wa-font-size-m);
    border-radius: var(--wa-corners-1x);
  }

  .button--large {
    height: auto;
    font-size: var(--wa-font-size-l);
    border-radius: var(--wa-corners-1x);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--wa-corners-pill);
  }

  .button--pill.button--medium {
    border-radius: var(--wa-corners-pill);
  }

  .button--pill.button--large {
    border-radius: var(--wa-corners-pill);
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    --track-color: color-mix(in oklch, currentColor, transparent 90%);
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: var(--wa-space-xs) var(--wa-space-m);
  }

  .button--has-label.button--medium .button__label {
    padding: var(--wa-space-s) var(--wa-space-l);
  }

  .button--has-label.button--large .button__label {
    padding: var(--wa-space-m) var(--wa-space-xl);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--wa-space-xs);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--wa-space-xs);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--wa-space-s);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--wa-space-s);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--wa-space-s);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--wa-space-s);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--wa-space-xs);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--wa-space-xs);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--wa-space-s);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--wa-space-s);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--wa-space-s);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--wa-space-s);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host(.sl-button-group__button--first:not(.sl-button-group__button--last)) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host(.sl-button-group__button--inner) .button {
    border-radius: 0;
  }

  :host(.sl-button-group__button--last:not(.sl-button-group__button--first)) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host(.sl-button-group__button:not(.sl-button-group__button--first)) {
    margin-inline-start: calc(-1 * var(--wa-border-width-thin));
  }

  /* Add a visual separator between solid buttons */
  :host(.sl-button-group__button:not(.sl-button-group__button--first, .sl-button-group__button--radio):not(:hover))
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host(.sl-button-group__button--hover) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host(.sl-button-group__button--focus),
  :host(.sl-button-group__button[checked]) {
    z-index: 2;
  }
`;

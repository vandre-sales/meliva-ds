import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { defaultValue } from '../../internal/default-value.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { MirrorValidator } from '../../internal/validators/mirror-validator.js';
import { watch } from '../../internal/watch.js';
import { WebAwesomeFormAssociated } from '../../internal/webawesome-element.js';
import componentStyles from '../../styles/component.styles.js';
import formControlStyles from '../../styles/form-control.styles.js';
import styles from './switch.styles.js';
import type { CSSResultGroup, PropertyValues } from 'lit';

/**
 * @summary Switches allow the user to toggle an option on or off.
 * @documentation https://shoelace.style/components/switch
 * @status stable
 * @since 2.0
 *
 * @slot - The switch's label.
 * @slot help-text - Text that describes how to use the switch. Alternatively, you can use the `help-text` attribute.
 *
 * @event wa-blur - Emitted when the control loses focus.
 * @event wa-change - Emitted when the control's checked state changes.
 * @event wa-input - Emitted when the control receives input.
 * @event wa-focus - Emitted when the control gains focus.
 * @event wa-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The control that houses the switch's thumb.
 * @csspart thumb - The switch's thumb.
 * @csspart label - The switch's label.
 * @csspart form-control-help-text - The help text's wrapper.
 *
 * @cssproperty --background - The switch's background styles.
 * @cssproperty --background-checked - The switch's background styles when checked.
 * @cssproperty --border-color - The color of the switch's borders.
 * @cssproperty --border-color-checked - The color of the switch's borders when checked.
 * @cssproperty --border-style - The style of the switch's borders.
 * @cssproperty --border-width - The width of the switch's borders. Expects a single value.
 * @cssproperty --box-shadow - The shadow effects around the edges of the switch.
 * @cssproperty --height - The height of the switch.
 * @cssproperty --thumb-color - The color of the thumb.
 * @cssproperty --thumb-color-checked - The color of the thumb when checked.
 * @cssproperty --thumb-shadow - The shadow effects around the edges of the thumb.
 * @cssproperty --thumb-size - The size of the thumb.
 * @cssproperty --width - The width of the switch.
 */
@customElement('wa-switch')
export default class WaSwitch extends WebAwesomeFormAssociated {
  static styles: CSSResultGroup = [componentStyles, formControlStyles, styles];

  static get validators() {
    return [...super.validators, MirrorValidator()];
  }

  private readonly hasSlotController = new HasSlotController(this, 'help-text');

  @query('input[type="checkbox"]') input: HTMLInputElement;

  @state() private hasFocus = false;
  @property() title = ''; // make reactive to pass through

  /** The name of the switch, submitted as a name/value pair with form data. */
  @property() name = '';

  /** The current value of the switch, submitted as a name/value pair with form data. */
  @property() value: null | string;

  /** The switch's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Disables the switch. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Draws the switch in a checked state. */
  @property({ type: Boolean, reflect: true }) checked = false;

  /** The default value of the form control. Primarily used for resetting the form control. */
  @defaultValue('checked') defaultChecked = false;

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = null;

  /** Makes the switch a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** The switch's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ attribute: 'help-text' }) helpText = '';

  firstUpdated(changedProperties: PropertyValues<typeof this>) {
    super.firstUpdated(changedProperties);

    this.handleValueOrCheckedChange();
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('wa-blur');
  }

  private handleInput() {
    this.emit('wa-input');
  }

  private handleClick() {
    this.checked = !this.checked;
    this.emit('wa-change');
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('wa-focus');
  }

  private handleKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      this.checked = false;
      this.emit('wa-change');
      this.emit('wa-input');
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      this.checked = true;
      this.emit('wa-change');
      this.emit('wa-input');
    }
  }

  @watch(['value', 'checked'], { waitUntilFirstUpdate: true })
  handleValueOrCheckedChange() {
    this.value = this.checked ? this.value || 'on' : null;
    this.requestUpdate('value');
    this.input.checked = this.checked; // force a sync update
    // These @watch() commands seem to override the base element checks for changes, so we need to setValue for the form and and updateValidity()
    this.setValue(this.value, this.value);
    this.updateValidity();
  }

  @watch('disabled', { waitUntilFirstUpdate: true })
  handleDisabledChange() {
    // Disabled form controls are always valid
    this.updateValidity();
  }

  /** Simulates a click on the switch. */
  click() {
    this.input.click();
  }

  /** Sets focus on the switch. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the switch. */
  blur() {
    this.input.blur();
  }

  setValue(value: string | File | FormData | null, stateValue?: string | File | FormData | null | undefined): void {
    if (!this.checked) {
      this.value = null;
      this.internals.setFormValue(null, null);
      return;
    }

    if (!value) {
      value = 'on';
    }

    this.internals.setFormValue(value, stateValue);
  }

  formResetCallback(): void {
    this.checked = this.defaultChecked;
    this.handleValueOrCheckedChange();
    super.formResetCallback();
  }

  render() {
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;

    return html`
      <div
        class=${classMap({
          'form-control': true,
          'form-control--small': this.size === 'small',
          'form-control--medium': this.size === 'medium',
          'form-control--large': this.size === 'large',
          'form-control--has-help-text': hasHelpText
        })}
      >
        <label
          part="base"
          class=${classMap({
            switch: true,
            'switch--checked': this.checked,
            'switch--disabled': this.disabled,
            'switch--focused': this.hasFocus,
            'switch--small': this.size === 'small',
            'switch--medium': this.size === 'medium',
            'switch--large': this.size === 'large'
          })}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
            name=${this.name}
            value=${ifDefined(this.value)}
            .checked=${live(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked ? 'true' : 'false'}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${hasHelpText ? 'false' : 'true'}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wa-switch': WaSwitch;
  }
}

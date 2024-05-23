import '../icon/icon.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { HasSlotController } from '../../internal/slot.js';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';
import { RequiredValidator } from '../../internal/validators/required-validator.js';
import { watch } from '../../internal/watch.js';
import { WebAwesomeFormAssociatedElement } from '../../internal/webawesome-element.js';
import componentStyles from '../../styles/component.styles.js';
import formControlStyles from '../../styles/form-control.styles.js';
import styles from './checkbox.styles.js';
import type { CSSResultGroup, PropertyValues } from 'lit';

/**
 * @summary Checkboxes allow the user to toggle an option on or off.
 * @documentation https://shoelace.style/components/checkbox
 * @status stable
 * @since 2.0
 *
 * @dependency wa-icon
 *
 * @slot - The checkbox's label.
 * @slot help-text - Text that describes how to use the checkbox. Alternatively, you can use the `help-text` attribute.
 *
 * @event wa-blur - Emitted when the checkbox loses focus.
 * @event wa-change - Emitted when the checked state changes.
 * @event wa-focus - Emitted when the checkbox gains focus.
 * @event wa-input - Emitted when the checkbox receives input.
 * @event wa-invalid - Emitted when the form control has been checked for validity and its constraints aren't satisfied.
 *
 * @csspart base - The component's base wrapper.
 * @csspart control - The square container that wraps the checkbox's checked state.
 * @csspart control--checked - Matches the control part when the checkbox is checked.
 * @csspart control--indeterminate - Matches the control part when the checkbox is indeterminate.
 * @csspart checked-icon - The checked icon, a `<wa-icon>` element.
 * @csspart indeterminate-icon - The indeterminate icon, a `<wa-icon>` element.
 * @csspart label - The container that wraps the checkbox's label.
 * @csspart form-control-help-text - The help text's wrapper.
 *
 * @cssproperty --background - The checkbox's background styles.
 * @cssproperty --background-checked - The checkbox's background styles when checked.
 * @cssproperty --border-color - The color of the checkbox's borders.
 * @cssproperty --border-color-checked - The color of the checkbox's borders when checked.
 * @cssproperty --border-radius - The border radius of the checkbox's corners.
 * @cssproperty --border-style - The style of the checkbox's borders.
 * @cssproperty --border-width - The width of the checkbox's borders. Expects a single value.
 * @cssproperty --box-shadow - The shadow effects around the edges of the checkbox.
 * @cssproperty --toggle-size - The size of the checkbox.
 */
@customElement('wa-checkbox')
export default class WaCheckbox extends WebAwesomeFormAssociatedElement {
  static styles: CSSResultGroup = [componentStyles, formControlStyles, styles];
  static get validators() {
    return [
      ...super.validators,
      RequiredValidator({
        // Use a checkbox so we get "free" translation strings.
        validationElement: Object.assign(document.createElement('input'), {
          type: 'checkbox',
          required: true,
        })
      })
    ];
  }

  private readonly hasSlotController = new HasSlotController(this, 'help-text');

  @query('input[type="checkbox"]') input: HTMLInputElement;

  @state() private hasFocus = false;

  @property() title = ''; // make reactive to pass through

  /** The name of the checkbox, submitted as a name/value pair with form data. */
  @property({ reflect: true }) name = '';

  /** The current value of the checkbox, submitted as a name/value pair with form data. */
  @property() value: null | string;

  /** The checkbox's size. */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /** Disables the checkbox. */
  @property({ type: Boolean }) disabled = false;

  /**
   * Draws the checkbox in an indeterminate state. This is usually applied to checkboxes that represents a "select
   * all/none" behavior when associated checkboxes have a mix of checked and unchecked states.
   */
  @property({ type: Boolean, reflect: true }) indeterminate = false;


  /** Draws the checkbox in a checked state. */
  @property({ type: Boolean, attribute: false }) checked = this.hasAttribute("checked");

  /** The default value of the form control. Primarily used for resetting the form control. */
  @property({ type: Boolean, reflect: true, attribute: "checked" }) defaultChecked = this.hasAttribute("checked");

  /**
   * By default, form controls are associated with the nearest containing `<form>` element. This attribute allows you
   * to place the form control outside of a form and associate it with the form that has this `id`. The form must be in
   * the same document or shadow root for this to work.
   */
  @property({ reflect: true }) form = null;

  /** Makes the checkbox a required field. */
  @property({ type: Boolean, reflect: true }) required = false;

  /** The checkbox's help text. If you need to display HTML, use the `help-text` slot instead. */
  @property({ attribute: 'help-text' }) helpText = '';

  private handleClick() {
    this.checked = !this.checked;
    this.indeterminate = false;
    this.emit('wa-change');
  }

  private handleBlur() {
    this.hasFocus = false;
    this.emit('wa-blur');
  }

  private handleInput() {
    this.emit('wa-input');
  }

  private handleFocus() {
    this.hasFocus = true;
    this.emit('wa-focus');
  }

  @watch('defaultChecked')
  handleDefaultCheckedChange() {
    if (!this.hasInteracted && this.checked !== this.defaultChecked) {
      this.checked = this.defaultChecked;
      this.handleValueOrCheckedChange();
    }
  }

  handleValueOrCheckedChange() {
    this.toggleCustomState("checked", this.checked)
    this.value = this.checked ? this.value || 'on' : null;

    // These @watch() commands seem to override the base element checks for changes, so we need to setValue for the form and and updateValidity()
    this.setValue(this.value, this.value);
    this.updateValidity();
  }

  @watch(['checked', 'indeterminate'], { waitUntilFirstUpdate: true })
  handleStateChange() {
    this.input.checked = this.checked; // force a sync update
    this.input.indeterminate = this.indeterminate; // force a sync update
    this.updateValidity();
  }

  protected willUpdate(changedProperties: PropertyValues<this>): void {
    super.willUpdate(changedProperties);

    if (changedProperties.has('value') || changedProperties.has('checked')) {
      this.handleValueOrCheckedChange();
    }
  }

  formResetCallback() {
    // Evaluate checked before the super call because of our watcher on value.
    this.checked = this.defaultChecked;
    super.formResetCallback();
    this.handleValueOrCheckedChange();
  }

  /** Simulates a click on the checkbox. */
  click() {
    this.input.click();
  }

  /** Sets focus on the checkbox. */
  focus(options?: FocusOptions) {
    this.input.focus(options);
  }

  /** Removes focus from the checkbox. */
  blur() {
    this.input.blur();
  }

  render() {
    const hasHelpTextSlot = this.hasSlotController.test('help-text');
    const hasHelpText = this.helpText ? true : !!hasHelpTextSlot;

    //
    // NOTE: we use a <div> around the label slot because of this Chrome bug.
    //
    // https://bugs.chromium.org/p/chromium/issues/detail?id=1413733
    //
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
            checkbox: true,
            'checkbox--checked': this.checked,
            'checkbox--disabled': this.disabled,
            'checkbox--focused': this.hasFocus,
            'checkbox--indeterminate': this.indeterminate,
            'checkbox--small': this.size === 'small',
            'checkbox--medium': this.size === 'medium',
            'checkbox--large': this.size === 'large'
          })}
        >
          <span
            part="control${this.checked ? ' control--checked' : ''}${this.indeterminate
              ? ' control--indeterminate'
              : ''}"
            class="checkbox__control"
          >
            <input
              class="checkbox__input"
              type="checkbox"
              title=${this.title /* An empty title prevents browser validation tooltips from appearing on hover */}
              name=${this.name}
              value=${ifDefined(this.value)}
              .indeterminate=${live(this.indeterminate)}
              .checked=${live(this.checked)}
              .disabled=${this.disabled}
              .required=${this.required}
              aria-checked=${this.checked ? 'true' : 'false'}
              aria-describedby="help-text"
              @click=${this.handleClick}
              @input=${this.handleInput}
              @blur=${this.handleBlur}
              @focus=${this.handleFocus}
            />

            ${this.checked
              ? html`
                  <wa-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></wa-icon>
                `
              : ''}
            ${!this.checked && this.indeterminate
              ? html`
                  <wa-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></wa-icon>
                `
              : ''}
          </span>

          <div part="label" class="checkbox__label">
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
    'wa-checkbox': WaCheckbox;
  }
}

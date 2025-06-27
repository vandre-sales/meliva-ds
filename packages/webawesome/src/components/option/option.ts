import type { PropertyValues } from 'lit';
import { html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import getText from '../../internal/get-text.js';
import WebAwesomeElement from '../../internal/webawesome-element.js';
import { LocalizeController } from '../../utilities/localize.js';
import '../icon/icon.js';
import styles from './option.css';

/**
 * @summary Options define the selectable items within a select component.
 * @documentation https://backers.webawesome.com/docs/components/option
 * @status stable
 * @since 2.0
 *
 * @dependency wa-icon
 *
 * @slot - The option's label.
 * @slot start - An element, such as `<wa-icon>`, placed before the label.
 * @slot end - An element, such as `<wa-icon>`, placed after the label.
 *
 * @csspart checked-icon - The checked icon, a `<wa-icon>` element.
 * @csspart label - The option's label.
 * @csspart start - The container that wraps the `start` slot.
 * @csspart end - The container that wraps the `end` slot.
 *
 * @cssstate current - The user has keyed into the option, but hasn't selected it yet (shows a highlight)
 * @cssstate selected - The option is selected and has aria-selected="true"
 * @cssstate hover - Like `:hover` but works while dragging in Safari
 */
@customElement('wa-option')
export default class WaOption extends WebAwesomeElement {
  static css = styles;

  // @ts-expect-error - Controller is currently unused
  private readonly localize = new LocalizeController(this);
  private isInitialized = false;

  @query('.label') defaultSlot: HTMLSlotElement;

  // Set via the parent select
  @state() current = false;

  /**
   * The option's value. When selected, the containing form control will receive this value. The value must be unique
   * from other options in the same group. Values may not contain spaces, as spaces are used as delimiters when listing
   * multiple values.
   */
  @property({ reflect: true }) value = '';

  /** Draws the option in a disabled state, preventing selection. */
  @property({ type: Boolean }) disabled = false;

  /** @internal */
  @property({ type: Boolean, attribute: false }) selected = false;

  /** Selects an option initially. */
  @property({ type: Boolean, attribute: 'selected' }) defaultSelected = false;

  _label: string = '';
  /**
   * The option’s plain text label.
   * Usually automatically generated, but can be useful to provide manually for cases involving complex content.
   */
  @property()
  set label(value) {
    const oldValue = this._label;
    this._label = value || '';

    if (this._label !== oldValue) {
      this.requestUpdate('label', oldValue);
    }
  }

  get label(): string {
    if (this._label) {
      return this._label;
    }

    if (!this.defaultLabel) {
      this.updateDefaultLabel();
    }

    return this.defaultLabel;
  }

  /** The default label, generated from the element contents. Will be equal to `label` in most cases. */
  @state() defaultLabel = '';

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'option');
    this.setAttribute('aria-selected', 'false');

    this.addEventListener('mouseenter', this.handleHover);
    this.addEventListener('mouseleave', this.handleHover);
    this.updateDefaultLabel();
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();

    this.removeEventListener('mouseenter', this.handleHover);
    this.removeEventListener('mouseleave', this.handleHover);
  }

  private handleDefaultSlotChange() {
    // Tell the controller to update the label
    this.updateDefaultLabel();

    if (this.isInitialized) {
      // When the label changes, tell the controller to update
      customElements.whenDefined('wa-select').then(() => {
        const controller = this.closest('wa-select');
        if (controller) {
          controller.handleDefaultSlotChange();
          controller.selectionChanged?.();
        }
      });
    } else {
      this.isInitialized = true;
    }
  }

  private handleHover = (event: Event) => {
    // We need this because Safari doesn't honor :hover styles while dragging
    // Test case: https://codepen.io/leaverou/pen/VYZOOjy
    if (event.type === 'mouseenter') {
      this.customStates.set('hover', true);
    } else if (event.type === 'mouseleave') {
      this.customStates.set('hover', false);
    }
  };

  protected willUpdate(changedProperties: PropertyValues<this>): void {
    if (changedProperties.has('defaultSelected')) {
      if (!this.closest('wa-select')?.hasInteracted) {
        const oldVal = this.selected;
        this.selected = this.defaultSelected;
        this.requestUpdate('selected', oldVal);
      }
    }
    super.willUpdate(changedProperties);
  }

  updated(changedProperties: PropertyValues<this>) {
    super.updated(changedProperties);

    if (changedProperties.has('disabled')) {
      this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
    }

    if (changedProperties.has('selected')) {
      this.setAttribute('aria-selected', this.selected ? 'true' : 'false');
      this.customStates.set('selected', this.selected);
      this.handleDefaultSlotChange();
    }

    if (changedProperties.has('value')) {
      // Ensure the value is a string. This ensures the next line doesn't error and allows framework users to pass numbers
      // instead of requiring them to cast the value to a string.
      if (typeof this.value !== 'string') {
        this.value = String(this.value);
      }

      this.handleDefaultSlotChange();
    }

    if (changedProperties.has('current')) {
      this.customStates.set('current', this.current);
    }
  }

  private updateDefaultLabel() {
    let oldValue = this.defaultLabel;
    this.defaultLabel = getText(this).trim();
    let changed = this.defaultLabel !== oldValue;

    if (!this._label && changed) {
      // Uses default label, and it has changed
      this.requestUpdate('label', oldValue);
    }

    return changed;
  }

  render() {
    return html`
      <wa-icon
        part="checked-icon"
        class="check"
        name="check"
        library="system"
        variant="solid"
        aria-hidden="true"
      ></wa-icon>
      <slot part="start" name="start" class="start"></slot>
      <slot part="label" class="label" @slotchange=${this.handleDefaultSlotChange}></slot>
      <slot part="end" name="end" class="end"></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wa-option': WaOption;
  }
}

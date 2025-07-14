import type { PropertyValues } from 'lit';
import { html } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { animateWithClass } from '../../internal/animate.js';
import { HasSlotController } from '../../internal/slot.js';
import WebAwesomeElement from '../../internal/webawesome-element.js';
import styles from './dropdown-item.css';

/**
 * @summary Represents an individual item within a dropdown menu, supporting standard items, checkboxes, and submenus.
 * @documentation https://webawesome.com/docs/components/dropdown-item
 * @status experimental
 * @since 3.0
 *
 * @dependency wa-icon
 *
 * @event blur - Emitted when the dropdown item loses focus.
 * @event focus - Emitted when the dropdown item gains focus.
 *
 * @slot - The dropdown item's label.
 * @slot icon - An optional icon to display before the label.
 * @slot details - Additional content or details to display after the label.
 * @slot submenu - Submenu items, typically `<wa-dropdown-item>` elements, to create a nested menu.
 *
 * @csspart checkmark - The checkmark icon (a `<wa-icon>` element) when the item is a checkbox.
 * @csspart icon - The container for the icon slot.
 * @csspart label - The container for the label slot.
 * @csspart details - The container for the details slot.
 * @csspart submenu-icon - The submenu indicator icon (a `<wa-icon>` element).
 * @csspart submenu - The submenu container.
 */
@customElement('wa-dropdown-item')
export default class WaDropdownItem extends WebAwesomeElement {
  static css = styles;

  private readonly hasSlotController = new HasSlotController(this, '[default]', 'start', 'end');

  @query('#submenu') submenuElement: HTMLDivElement;

  /** @internal The controller will set this property to true when the item is active. */
  @property({ type: Boolean }) active = false;

  /** The type of menu item to render. */
  @property({ reflect: true }) variant: 'danger' | 'default' = 'default';

  /**
   * @internal The dropdown item's size.
   */
  @property({ reflect: true }) size: 'small' | 'medium' | 'large' = 'medium';

  /**
   * @internal The controller will set this property to true when at least one checkbox exists in the dropdown. This
   * allows non-checkbox items to draw additional space to align properly with checkbox items.
   */
  @property({ attribute: 'checkbox-adjacent', type: Boolean, reflect: true }) checkboxAdjacent = false;

  /**
   * @internal The controller will set this property to true when at least one item with a submenu exists in the
   * dropdown. This allows non-submenu items to draw additional space to align properly with items that have submenus.
   */
  @property({ attribute: 'submenu-adjacent', type: Boolean, reflect: true }) submenuAdjacent = false;

  /**
   * An optional value for the menu item. This is useful for determining which item was selected when listening to the
   * dropdown's `wa-select` event.
   */
  @property() value: string;

  /** Set to `checkbox` to make the item a checkbox. */
  @property({ reflect: true }) type: 'normal' | 'checkbox' = 'normal';

  /** Set to true to check the dropdown item. Only valid when `type` is `checkbox`. */
  @property({ type: Boolean }) checked = false;

  /** Disables the dropdown item. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Whether the submenu is currently open. */
  @property({ type: Boolean, reflect: true }) submenuOpen = false;

  /** @internal Store whether this item has a submenu */
  @state() hasSubmenu = false;

  connectedCallback() {
    super.connectedCallback();
    this.addEventListener('mouseenter', this.handleMouseEnter.bind(this));
    this.shadowRoot!.addEventListener('slotchange', this.handleSlotChange);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.closeSubmenu();
    this.removeEventListener('mouseenter', this.handleMouseEnter);
    this.shadowRoot!.removeEventListener('slotchange', this.handleSlotChange);
  }

  firstUpdated() {
    this.setAttribute('tabindex', '-1');
    this.hasSubmenu = this.hasSlotController.test('submenu');
    this.updateHasSubmenuState();
  }

  updated(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('active')) {
      this.setAttribute('tabindex', this.active ? '0' : '-1');
      this.customStates.set('active', this.active);
    }

    if (changedProperties.has('checked')) {
      this.setAttribute('aria-checked', this.checked ? 'true' : 'false');
      this.customStates.set('checked', this.checked);
    }

    if (changedProperties.has('disabled')) {
      this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
      this.customStates.set('disabled', this.disabled);
    }

    if (changedProperties.has('type')) {
      if (this.type === 'checkbox') {
        this.setAttribute('role', 'menuitemcheckbox');
      } else {
        this.setAttribute('role', 'menuitem');
      }
    }

    if (changedProperties.has('submenuOpen')) {
      this.customStates.set('submenu-open', this.submenuOpen);
      if (this.submenuOpen) {
        this.openSubmenu();
      } else {
        this.closeSubmenu();
      }
    }
  }

  private handleSlotChange = () => {
    this.hasSubmenu = this.hasSlotController.test('submenu');
    this.updateHasSubmenuState();

    if (this.hasSubmenu) {
      this.setAttribute('aria-haspopup', 'menu');
      this.setAttribute('aria-expanded', this.submenuOpen ? 'true' : 'false');
    } else {
      this.removeAttribute('aria-haspopup');
      this.removeAttribute('aria-expanded');
    }
  };

  /** Update the has-submenu custom state */
  private updateHasSubmenuState() {
    this.customStates.set('has-submenu', this.hasSubmenu);
  }

  /** Opens the submenu. */
  async openSubmenu() {
    if (!this.hasSubmenu || !this.submenuElement) return;

    // Notify parent dropdown to handle positioning
    this.notifyParentOfOpening();

    // Use Popover API to show the submenu
    this.submenuElement.showPopover();
    this.submenuElement.hidden = false;
    this.submenuElement.setAttribute('data-visible', '');
    this.submenuOpen = true;
    this.setAttribute('aria-expanded', 'true');

    // Animate the submenu
    await animateWithClass(this.submenuElement, 'show');

    // Set focus to the first submenu item
    setTimeout(() => {
      const items = this.getSubmenuItems();
      if (items.length > 0) {
        items.forEach((item, index) => (item.active = index === 0));
        items[0].focus();
      }
    }, 0);
  }

  /** Notifies the parent dropdown that this item is opening its submenu */
  private notifyParentOfOpening() {
    // First notify the parent that we're about to open
    const event = new CustomEvent('submenu-opening', {
      bubbles: true,
      composed: true,
      detail: { item: this },
    });
    this.dispatchEvent(event);

    // Find sibling items that have open submenus and close them
    const parent = this.parentElement;
    if (parent) {
      const siblings = [...parent.children].filter(
        el =>
          el !== this &&
          el.localName === 'wa-dropdown-item' &&
          el.getAttribute('slot') === this.getAttribute('slot') &&
          (el as WaDropdownItem).submenuOpen,
      ) as WaDropdownItem[];

      // Close each sibling submenu with animation
      siblings.forEach(sibling => {
        sibling.submenuOpen = false;
      });
    }
  }

  /** Closes the submenu. */
  async closeSubmenu() {
    if (!this.hasSubmenu || !this.submenuElement) return;

    this.submenuOpen = false;
    this.setAttribute('aria-expanded', 'false');

    if (!this.submenuElement.hidden) {
      await animateWithClass(this.submenuElement, 'hide');
      this.submenuElement.hidden = true;
      this.submenuElement.removeAttribute('data-visible');
      this.submenuElement.hidePopover();
    }
  }

  /** Gets all dropdown items in the submenu. */
  private getSubmenuItems(): WaDropdownItem[] {
    // Only get direct children with slot="submenu", not nested ones
    return [...this.children].filter(
      el =>
        el.localName === 'wa-dropdown-item' && el.getAttribute('slot') === 'submenu' && !el.hasAttribute('disabled'),
    ) as WaDropdownItem[];
  }

  /** Handles mouse enter to open the submenu */
  private handleMouseEnter() {
    if (this.hasSubmenu && !this.disabled) {
      this.notifyParentOfOpening();
      this.submenuOpen = true;
    }
  }

  render() {
    return html`
      ${this.type === 'checkbox'
        ? html`
            <wa-icon
              id="check"
              part="checkmark"
              exportparts="svg:checkmark__svg"
              library="system"
              name="check"
            ></wa-icon>
          `
        : ''}

      <span id="icon" part="icon">
        <slot name="icon"></slot>
      </span>

      <span id="label" part="label">
        <slot></slot>
      </span>

      <span id="details" part="details">
        <slot name="details"></slot>
      </span>

      ${this.hasSubmenu
        ? html`
            <wa-icon
              id="submenu-indicator"
              part="submenu-icon"
              exportparts="svg:submenu-icon__svg"
              library="system"
              name="chevron-right"
            ></wa-icon>
          `
        : ''}
      ${this.hasSubmenu
        ? html`
            <div
              id="submenu"
              part="submenu"
              popover="manual"
              role="menu"
              tabindex="-1"
              aria-orientation="vertical"
              hidden
            >
              <slot name="submenu"></slot>
            </div>
          `
        : ''}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wa-dropdown-item': WaDropdownItem;
  }
}

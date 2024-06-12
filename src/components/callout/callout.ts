import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { html } from 'lit';
import componentStyles from '../../styles/component.styles.js';
import styles from './callout.style.js';
import WebAwesomeElement from '../../internal/webawesome-element.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Callouts are used to display important messages inline.
 * @documentation https://shoelace.style/components/callout
 * @status stable
 * @since 2.0
 *
 * @slot - The callout's main content.
 * @slot icon - An icon to show in the callout. Works best with `<wa-icon>`.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The container that wraps the optional icon.
 * @csspart message - The container that wraps the callout's main content.
 *
 * @cssproperty --background-color - The callout's background color.
 * @cssproperty --border-color - The color of the callout's border.
 * @cssproperty --border-radius - The radius of the callout's corners.
 * @cssproperty --border-style - The style of the callout's borders.
 * @cssproperty --border-width - The width of the callout's borders.
 * @cssproperty --content-color - The color of the callout's content.
 * @cssproperty --icon-color - The color of the callout's icon.
 * @cssproperty --icon-size - The size of the callout's icon.
 * @cssproperty --padding - The padding within the callout. Expects a single value.
 */
@customElement('wa-callout')
export default class WaCallout extends WebAwesomeElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  /** The callout's theme variant. */
  @property({ reflect: true }) variant: 'brand' | 'success' | 'neutral' | 'warning' | 'danger' = 'brand';

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          callout: true,
          'callout--brand': this.variant === 'brand',
          'callout--success': this.variant === 'success',
          'callout--neutral': this.variant === 'neutral',
          'callout--warning': this.variant === 'warning',
          'callout--danger': this.variant === 'danger'
        })}
      >
        <div part="icon" class="callout__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="callout__message">
          <slot></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wa-callout': WaCallout;
  }
}

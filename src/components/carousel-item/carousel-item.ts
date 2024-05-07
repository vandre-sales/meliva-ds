import { customElement } from 'lit/decorators.js';
import { html } from 'lit';
import componentStyles from '../../styles/component.styles.js';
import styles from './carousel-item.styles.js';
import WebAwesomeElement from '../../internal/webawesome-element.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary A carousel item represent a slide within a [carousel](/components/carousel).
 *
 * @since 2.0
 * @status experimental
 *
 * @slot - The carousel item's content..
 *
 * @cssproperty --aspect-ratio - The slide's aspect ratio. Inherited from the carousel by default.
 *
 */
@customElement('wa-carousel-item')
export default class WaCarouselItem extends WebAwesomeElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('role', 'group');
  }

  render() {
    return html` <slot></slot> `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wa-carousel-item': WaCarouselItem;
  }
}

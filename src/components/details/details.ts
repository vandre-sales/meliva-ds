import '../icon/icon.js';
import { animate, parseDuration } from '../../internal/animate.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { html } from 'lit';
import { WaAfterHideEvent } from '../../events/after-hide.js';
import { WaAfterShowEvent } from '../../events/after-show.js';
import { WaHideEvent } from '../../events/hide.js';
import { waitForEvent } from '../../internal/event.js';
import { WaShowEvent } from '../../events/show.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import styles from './details.styles.js';
import WebAwesomeElement from '../../internal/webawesome-element.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Details show a brief summary and expand to show additional content.
 * @documentation https://shoelace.style/components/details
 * @status stable
 * @since 2.0
 *
 * @dependency wa-icon
 *
 * @slot - The details' main content.
 * @slot summary - The details' summary. Alternatively, you can use the `summary` attribute.
 * @slot expand-icon - Optional expand icon to use instead of the default. Works best with `<wa-icon>`.
 * @slot collapse-icon - Optional collapse icon to use instead of the default. Works best with `<wa-icon>`.
 *
 * @event wa-show - Emitted when the details opens.
 * @event wa-after-show - Emitted after the details opens and all animations are complete.
 * @event wa-hide - Emitted when the details closes.
 * @event wa-after-hide - Emitted after the details closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart header - The header that wraps both the summary and the expand/collapse icon.
 * @csspart summary - The container that wraps the summary.
 * @csspart summary-icon - The container that wraps the expand/collapse icons.
 * @csspart content - The details content.
 *
 * @cssproperty --background - The details' background styles.
 * @cssproperty --border-color - The details' border color.
 * @cssproperty --border-radius - The border radius for the details' corners. Expects a single value.
 * @cssproperty --border-style - The style of the details' borders.
 * @cssproperty --border-width - The width of the details' borders. Expects a single value.
 * @cssproperty --icon-color - The color of the details' icon.
 * @cssproperty --padding - The padding with the details. Expects a single value.
 * @cssproperty [--show-duration=200ms] - The show duration to use when applying built-in animation classes.
 * @cssproperty [--hide-duration=200ms] - The hide duration to use when applying built-in animation classes.
 */
@customElement('wa-details')
export default class WaDetails extends WebAwesomeElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  @query('.details') details: HTMLDetailsElement;
  @query('.details__header') header: HTMLElement;
  @query('.details__body') body: HTMLElement;
  @query('.details__expand-icon-slot') expandIconSlot: HTMLSlotElement;

  detailsObserver: MutationObserver;

  /**
   * Indicates whether or not the details is open. You can toggle this attribute to show and hide the details, or you
   * can use the `show()` and `hide()` methods and this attribute will reflect the details' open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /** The summary to show in the header. If you need to display HTML, use the `summary` slot instead. */
  @property() summary: string;

  /** Disables the details so it can't be toggled. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  firstUpdated() {
    this.body.style.height = this.open ? 'auto' : '0';
    if (this.open) {
      this.details.open = true;
    }

    this.detailsObserver = new MutationObserver(changes => {
      for (const change of changes) {
        if (change.type === 'attributes' && change.attributeName === 'open') {
          if (this.details.open) {
            this.show();
          } else {
            this.hide();
          }
        }
      }
    });
    this.detailsObserver.observe(this.details, { attributes: true });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.detailsObserver.disconnect();
  }

  private handleSummaryClick(event: MouseEvent) {
    event.preventDefault();

    if (!this.disabled) {
      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
      this.header.focus();
    }
  }

  private handleSummaryKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();

      if (this.open) {
        this.hide();
      } else {
        this.show();
      }
    }

    if (event.key === 'ArrowUp' || event.key === 'ArrowLeft') {
      event.preventDefault();
      this.hide();
    }

    if (event.key === 'ArrowDown' || event.key === 'ArrowRight') {
      event.preventDefault();
      this.show();
    }
  }

  @watch('open', { waitUntilFirstUpdate: true })
  async handleOpenChange() {
    if (this.open) {
      this.details.open = true;
      // Show
      const waShow = new WaShowEvent();
      this.dispatchEvent(waShow);
      if (waShow.defaultPrevented) {
        this.open = false;
        this.details.open = false;
        return;
      }

      const duration = parseDuration(getComputedStyle(this.body).getPropertyValue('--show-duration'));
      // We can't animate to 'auto', so use the scroll height for now
      await animate(
        this.body,
        [
          { height: '0', opacity: '0' },
          { height: `${this.body.scrollHeight}px`, opacity: '1' }
        ],
        {
          duration,
          easing: 'linear'
        }
      );
      this.body.style.height = 'auto';

      this.dispatchEvent(new WaAfterShowEvent());
    } else {
      // Hide
      const waHide = new WaHideEvent();
      this.dispatchEvent(waHide);
      if (waHide.defaultPrevented) {
        this.details.open = true;
        this.open = true;
        return;
      }

      const duration = parseDuration(getComputedStyle(this.body).getPropertyValue('--hide-duration'));
      // We can't animate from 'auto', so use the scroll height for now
      await animate(
        this.body,
        [
          { height: `${this.body.scrollHeight}px`, opacity: '1' },
          { height: '0', opacity: '0' }
        ],
        { duration, easing: 'linear' }
      );
      this.body.style.height = 'auto';

      this.details.open = false;
      this.dispatchEvent(new WaAfterHideEvent());
    }
  }

  /** Shows the details. */
  async show() {
    if (this.open || this.disabled) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'wa-after-show');
  }

  /** Hides the details */
  async hide() {
    if (!this.open || this.disabled) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'wa-after-hide');
  }

  render() {
    const isRtl = this.matches(':dir(rtl)');

    return html`
      <details
        part="base"
        class=${classMap({
          details: true,
          'details--open': this.open,
          'details--disabled': this.disabled,
          'details--rtl': isRtl
        })}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open ? 'true' : 'false'}
          aria-controls="content"
          aria-disabled=${this.disabled ? 'true' : 'false'}
          tabindex=${this.disabled ? '-1' : '0'}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <wa-icon library="system" variant="solid" name=${isRtl ? 'chevron-left' : 'chevron-right'}></wa-icon>
            </slot>
            <slot name="collapse-icon">
              <wa-icon library="system" variant="solid" name=${isRtl ? 'chevron-left' : 'chevron-right'}></wa-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wa-details': WaDetails;
  }
}

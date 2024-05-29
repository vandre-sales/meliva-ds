import '../icon-button/icon-button.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { waitForEvent } from '../../internal/event.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import styles from './alert.styles.js';
import WebAwesomeElement from '../../internal/webawesome-element.js';
import type { CSSResultGroup } from 'lit';

const toastStack = Object.assign(document.createElement('div'), { className: 'wa-toast-stack' });

/**
 * @summary Alerts are used to display important messages inline or as toast notifications.
 * @documentation https://shoelace.style/components/alert
 * @status stable
 * @since 2.0
 *
 * @dependency wa-icon-button
 *
 * @slot - The alert's main content.
 * @slot icon - An icon to show in the alert. Works best with `<wa-icon>`.
 *
 * @event wa-show - Emitted when the alert opens.
 * @event wa-after-show - Emitted after the alert opens and all animations are complete.
 * @event wa-hide - Emitted when the alert closes.
 * @event wa-after-hide - Emitted after the alert closes and all animations are complete.
 *
 * @csspart base - The component's base wrapper.
 * @csspart icon - The container that wraps the optional icon.
 * @csspart message - The container that wraps the alert's main content.
 * @csspart close-button - The close button, a `<wa-icon-button>`.
 * @csspart close-button__base - The close button's exported `base` part.
 *
 * @cssproperty --background - The alert's background styles.
 * @cssproperty --border-color - The color of the alert's border.
 * @cssproperty --border-radius - The border radius of the alert's corners.
 * @cssproperty --border-style - The style of the alert's borders.
 * @cssproperty --border-width - The width of the alert's borders.
 * @cssproperty --content-color - The color of the alert's content.
 * @cssproperty --icon-color - The color of the alert's icon.
 * @cssproperty --icon-size - The size of the alert's icon.
 * @cssproperty --padding - The padding within the alert. Expects a single value.
 */
@customElement('wa-alert')
export default class WaAlert extends WebAwesomeElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private autoHideTimeout: number;
  private readonly localize = new LocalizeController(this);

  @query('[part~="base"]') base: HTMLElement;

  /**
   * Indicates whether or not the alert is open. You can toggle this attribute to show and hide the alert, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the alert's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /** Enables a close button that allows the user to dismiss the alert. */
  @property({ type: Boolean, reflect: true }) closable = false;

  /** The alert's theme variant. */
  @property({ reflect: true }) variant: 'brand' | 'success' | 'neutral' | 'warning' | 'danger' = 'brand';

  /**
   * The length of time, in milliseconds, the alert will show before closing itself. If the user interacts with
   * the alert before it closes (e.g. moves the mouse over it), the timer will restart. Defaults to `Infinity`, meaning
   * the alert will not close on its own.
   */
  @property({ type: Number }) duration = Infinity;

  firstUpdated() {
    this.base.hidden = !this.open;
  }

  private restartAutoHide() {
    clearTimeout(this.autoHideTimeout);
    if (this.open && this.duration < Infinity) {
      this.autoHideTimeout = window.setTimeout(() => this.hide(), this.duration);
    }
  }

  private handleCloseClick() {
    this.hide();
  }

  private handleMouseMove() {
    this.restartAutoHide();
  }

  @watch('open', { waitUntilFirstUpdate: true })
  handleOpenChange() {
    if (this.open) {
      // Show
      this.emit('wa-show');

      if (this.duration < Infinity) {
        this.restartAutoHide();
      }

      this.base.hidden = false;
      this.emit('wa-after-show');
    } else {
      // Hide
      this.emit('wa-hide');

      clearTimeout(this.autoHideTimeout);

      this.base.hidden = true;
      this.emit('wa-after-hide');
    }
  }

  @watch('duration')
  handleDurationChange() {
    this.restartAutoHide();
  }

  /** Shows the alert. */
  async show() {
    if (this.open) {
      return undefined;
    }

    this.open = true;
    return waitForEvent(this, 'wa-after-show');
  }

  /** Hides the alert */
  async hide() {
    if (!this.open) {
      return undefined;
    }

    this.open = false;
    return waitForEvent(this, 'wa-after-hide');
  }

  /**
   * Displays the alert as a toast notification. This will move the alert out of its position in the DOM and, when
   * dismissed, it will be removed from the DOM completely. By storing a reference to the alert, you can reuse it by
   * calling this method again. The returned promise will resolve after the alert is hidden.
   */
  async toast() {
    return new Promise<void>(resolve => {
      if (toastStack.parentElement === null) {
        document.body.append(toastStack);
      }

      toastStack.appendChild(this);

      // Wait for the toast stack to render
      requestAnimationFrame(() => {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions -- force a reflow for the initial transition
        this.clientWidth;
        this.show();
      });

      this.addEventListener(
        'wa-after-hide',
        () => {
          toastStack.removeChild(this);
          resolve();

          // Remove the toast stack from the DOM when there are no more alerts
          if (toastStack.querySelector('wa-alert') === null) {
            toastStack.remove();
          }
        },
        { once: true }
      );
    });
  }

  render() {
    return html`
      <div
        part="base"
        class=${classMap({
          alert: true,
          'alert--open': this.open,
          'alert--closable': this.closable,
          'alert--brand': this.variant === 'brand',
          'alert--success': this.variant === 'success',
          'alert--neutral': this.variant === 'neutral',
          'alert--warning': this.variant === 'warning',
          'alert--danger': this.variant === 'danger'
        })}
        role="alert"
        aria-hidden=${this.open ? 'false' : 'true'}
        @mousemove=${this.handleMouseMove}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable
          ? html`
              <wa-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="xmark"
                library="system"
                variant="solid"
                label=${this.localize.term('close')}
                @click=${this.handleCloseClick}
              ></wa-icon-button>
            `
          : ''}
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wa-alert': WaAlert;
  }
}

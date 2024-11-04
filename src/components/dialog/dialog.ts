import '../icon-button/icon-button.js';
import { animateWithClass } from '../../internal/animate.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query } from 'lit/decorators.js';
import { html, isServer } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { lockBodyScrolling, unlockBodyScrolling } from '../../internal/scroll.js';
import { WaAfterHideEvent } from '../../events/after-hide.js';
import { WaAfterShowEvent } from '../../events/after-show.js';
import { WaHideEvent } from '../../events/hide.js';
import { WaShowEvent } from '../../events/show.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import styles from './dialog.styles.js';
import WebAwesomeElement from '../../internal/webawesome-element.js';
import type { CSSResultGroup } from 'lit';

/**
 * @summary Dialogs, sometimes called "modals", appear above the page and require the user's immediate attention.
 * @documentation https://backers.webawesome.com/docs/components/dialog
 * @status stable
 * @since 2.0
 *
 * @dependency wa-icon-button
 *
 * @slot - The dialog's main content.
 * @slot label - The dialog's label. Alternatively, you can use the `label` attribute.
 * @slot header-actions - Optional actions to add to the header. Works best with `<wa-icon-button>`.
 * @slot footer - The dialog's footer, usually one or more buttons representing various options.
 *
 * @event wa-show - Emitted when the dialog opens.
 * @event wa-after-show - Emitted after the dialog opens and all animations are complete.
 * @event {{ source: Element }} wa-hide - Emitted when the dialog is requested to close. Calling
 *  `event.preventDefault()` will prevent the dialog from closing. You can inspect `event.detail.source` to see which
 *  element caused the dialog to close. If the source is the dialog element itself, the user has pressed [[Escape]] or
 *  the dialog has been closed programmatically. Avoid using this unless closing the dialog will result in destructive
 *  behavior such as data loss.
 * @event wa-after-hide - Emitted after the dialog closes and all animations are complete.
 *
 * @csspart header - The dialog's header. This element wraps the title and header actions.
 * @csspart header-actions - Optional actions to add to the header. Works best with `<wa-icon-button>`.
 * @csspart title - The dialog's title.
 * @csspart close-button - The close button, a `<wa-icon-button>`.
 * @csspart close-button__base - The close button's exported `base` part.
 * @csspart body - The dialog's body.
 * @csspart footer - The dialog's footer.
 *
 * @cssproperty --background-color - The dialog's background color.
 * @cssproperty --border-radius - The radius of the dialog's corners.
 * @cssproperty --box-shadow - The shadow effects around the edges of the dialog.
 * @cssproperty --spacing - The amount of space around and between the dialog's content.
 * @cssproperty --width - The preferred width of the dialog. Note that the dialog will shrink to accommodate smaller screens.
 * @cssproperty [--show-duration=200ms] - The animation duration when showing the dialog.
 * @cssproperty [--hide-duration=200ms] - The animation duration when hiding the dialog.
 */
@customElement('wa-dialog')
export default class WaDialog extends WebAwesomeElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private readonly localize = new LocalizeController(this);
  private originalTrigger: HTMLElement | null;
  private closeWatcher: CloseWatcher | null;

  @query('.dialog') dialog: HTMLDialogElement;

  /**
   * Indicates whether or not the dialog is open. You can toggle this attribute to show and hide the dialog, or you can
   * use the `show()` and `hide()` methods and this attribute will reflect the dialog's open state.
   */
  @property({ type: Boolean, reflect: true }) open = false;

  /**
   * The dialog's label as displayed in the header. You should always include a relevant label, as it is required for
   * proper accessibility. If you need to display HTML, use the `label` slot instead.
   */
  @property({ reflect: true }) label = '';

  /** Renders the dialog with a header. */
  @property({ attribute: 'with-header', type: Boolean, reflect: true }) withHeader = false;

  /** Renders the dialog with a footer. */
  @property({ attribute: 'with-footer', type: Boolean, reflect: true }) withFooter = false;

  /** When enabled, the dialog will be closed when the user clicks outside of it. */
  @property({ attribute: 'light-dismiss', type: Boolean }) lightDismiss = false;

  firstUpdated() {
    if (this.open) {
      this.addOpenListeners();
      this.dialog.showModal();
      lockBodyScrolling(this);
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    unlockBodyScrolling(this);
    this.removeOpenListeners();
  }

  private async requestClose(source: Element) {
    // Hide
    const waHideEvent = new WaHideEvent({ source });
    this.dispatchEvent(waHideEvent);

    if (waHideEvent.defaultPrevented) {
      this.open = true;
      animateWithClass(this.dialog, 'pulse');
      return;
    }

    this.removeOpenListeners();

    await animateWithClass(this.dialog, 'hide');

    this.open = false;
    this.dialog.close();
    unlockBodyScrolling(this);

    // Restore focus to the original trigger
    const trigger = this.originalTrigger;
    if (typeof trigger?.focus === 'function') {
      setTimeout(() => trigger.focus());
    }

    this.dispatchEvent(new WaAfterHideEvent());
  }

  private addOpenListeners() {
    if ('CloseWatcher' in window) {
      this.closeWatcher?.destroy();
      this.closeWatcher = new CloseWatcher();
      this.closeWatcher.onclose = () => {
        this.requestClose(this.dialog);
      };
    } else {
      this.closeWatcher?.destroy();
      document.addEventListener('keydown', this.handleDocumentKeyDown);
    }
  }

  private removeOpenListeners() {
    document.removeEventListener('keydown', this.handleDocumentKeyDown);
  }

  private handleDialogCancel(event: Event) {
    event.preventDefault();

    if (!this.dialog.classList.contains('hide')) {
      this.requestClose(this.dialog);
    }
  }

  private handleDialogClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const button = target.closest('[data-dialog="close"]');

    // Close when a button with [data-dialog="close"] is clicked
    if (button) {
      event.stopPropagation();
      this.requestClose(button);
    }
  }

  private async handleDialogPointerDown(event: PointerEvent) {
    // Detect when the backdrop is clicked
    if (event.target === this.dialog) {
      if (this.lightDismiss) {
        this.requestClose(this.dialog);
      } else {
        await animateWithClass(this.dialog, 'pulse');
      }
    }
  }

  private handleDocumentKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.open) {
      event.preventDefault();
      event.stopPropagation();
      this.requestClose(this.dialog);
    }
  };

  @watch('open', { waitUntilFirstUpdate: true })
  handleOpenChange() {
    // Open or close the dialog
    if (this.open && !this.dialog.open) {
      this.show();
    } else if (this.dialog.open) {
      this.open = true;
      this.requestClose(this.dialog);
    }
  }

  /** Shows the dialog. */
  private async show() {
    // Show
    const waShowEvent = new WaShowEvent();
    this.dispatchEvent(waShowEvent);
    if (waShowEvent.defaultPrevented) {
      this.open = false;
      return;
    }

    this.addOpenListeners();
    this.originalTrigger = document.activeElement as HTMLElement;
    this.open = true;
    this.dialog.showModal();

    lockBodyScrolling(this);

    // Set focus on autocomplete if it exists
    requestAnimationFrame(() => {
      const elementToFocus = this.querySelector<HTMLButtonElement>('[autofocus]');
      if (elementToFocus && typeof elementToFocus.focus === 'function') {
        elementToFocus.focus();
      }
    });

    await animateWithClass(this.dialog, 'show');

    this.dispatchEvent(new WaAfterShowEvent());
  }

  render() {
    return html`
      <dialog
        part="dialog"
        class=${classMap({
          dialog: true,
          'dialog--open': this.open,
          'dialog--with-header': this.withHeader,
          'dialog--with-footer': this.withFooter
        })}
        @cancel=${this.handleDialogCancel}
        @click=${this.handleDialogClick}
        @pointerdown=${this.handleDialogPointerDown}
      >
        ${this.withHeader
          ? html`
              <header part="header" class="dialog__header">
                <h2 part="title" class="dialog__title" id="title">
                  <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                  <slot name="label"> ${this.label.length > 0 ? this.label : String.fromCharCode(65279)} </slot>
                </h2>
                <div part="header-actions" class="dialog__header-actions">
                  <slot name="header-actions"></slot>
                  <wa-icon-button
                    part="close-button"
                    exportparts="base:close-button__base"
                    class="dialog__close"
                    name="xmark"
                    label=${this.localize.term('close')}
                    library="system"
                    variant="solid"
                    @click="${(event: PointerEvent) => this.requestClose(event.target as Element)}"
                  ></wa-icon-button>
                </div>
              </header>
            `
          : ''}

        <div part="body" class="dialog__body"><slot></slot></div>

        ${this.withFooter
          ? html`
              <footer part="footer" class="dialog__footer">
                <slot name="footer"></slot>
              </footer>
            `
          : ''}
      </dialog>
    `;
  }
}

// Ugly, but it fixes light dismiss in Safari: https://bugs.webkit.org/show_bug.cgi?id=267688
if (!isServer) {
  document.body.addEventListener('pointerdown', () => {
    /* empty */
  });
}

declare global {
  interface HTMLElementTagNameMap {
    'wa-dialog': WaDialog;
  }
}

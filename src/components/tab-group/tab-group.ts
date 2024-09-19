import '../icon-button/icon-button.js';
import '../tab-panel/tab-panel.js';
import '../tab/tab.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { html } from 'lit';
import { LocalizeController } from '../../utilities/localize.js';
import { scrollIntoView } from '../../internal/scroll.js';
import { WaTabHideEvent } from '../../events/tab-hide.js';
import { WaTabShowEvent } from '../../events/tab-show.js';
import { watch } from '../../internal/watch.js';
import componentStyles from '../../styles/component.styles.js';
import styles from './tab-group.styles.js';
import WebAwesomeElement from '../../internal/webawesome-element.js';
import type { CSSResultGroup } from 'lit';
import type WaTab from '../tab/tab.js';
import type WaTabPanel from '../tab-panel/tab-panel.js';

/**
 * @summary Tab groups organize content into a container that shows one section at a time.
 * @documentation https://backers.webawesome.com/docs/components/tab-group
 * @status stable
 * @since 2.0
 *
 * @dependency wa-icon-button
 * @dependency wa-tab
 * @dependency wa-tab-panel
 *
 * @slot - Used for grouping tab panels in the tab group. Must be `<wa-tab-panel>` elements.
 * @slot nav - Used for grouping tabs in the tab group. Must be `<wa-tab>` elements.
 *
 * @event {{ name: String }} wa-tab-show - Emitted when a tab is shown.
 * @event {{ name: String }} wa-tab-hide - Emitted when a tab is hidden.
 *
 * @csspart base - The component's base wrapper.
 * @csspart nav - The tab group's navigation container where tabs are slotted in.
 * @csspart tabs - The container that wraps the tabs.
 * @csspart body - The tab group's body where tab panels are slotted in.
 * @csspart scroll-button - The previous/next scroll buttons that show when tabs are scrollable, an `<wa-icon-button>`.
 * @csspart scroll-button--start - The starting scroll button.
 * @csspart scroll-button--end - The ending scroll button.
 * @csspart scroll-button__base - The scroll button's exported `base` part.
 *
 * @cssproperty --indicator-color - The color of the active tab indicator.
 * @cssproperty --track-color - The color of the indicator's track (the line that separates tabs from panels).
 * @cssproperty --track-width - The width of the indicator's track (the line that separates tabs from panels).
 */
@customElement('wa-tab-group')
export default class WaTabGroup extends WebAwesomeElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  private readonly localize = new LocalizeController(this);

  private activeTab?: WaTab;
  private mutationObserver: MutationObserver;
  private resizeObserver: ResizeObserver;
  private tabs: WaTab[] = [];
  private focusableTabs: WaTab[] = [];
  private panels: WaTabPanel[] = [];

  @query('.tab-group') tabGroup: HTMLElement;
  @query('.tab-group__body') body: HTMLSlotElement;
  @query('.tab-group__nav') nav: HTMLElement;

  @state() private hasScrollControls = false;

  /** Sets the active tab. */
  @property({ reflect: true }) active = '';

  /** The placement of the tabs. */
  @property() placement: 'top' | 'bottom' | 'start' | 'end' = 'top';

  /**
   * When set to auto, navigating tabs with the arrow keys will instantly show the corresponding tab panel. When set to
   * manual, the tab will receive focus but will not show until the user presses spacebar or enter.
   */
  @property() activation: 'auto' | 'manual' = 'auto';

  /** Disables the scroll arrows that appear when tabs overflow. */
  @property({ attribute: 'no-scroll-controls', type: Boolean }) noScrollControls = false;

  connectedCallback() {
    super.connectedCallback();

    this.resizeObserver = new ResizeObserver(() => {
      this.updateScrollControls();
    });

    this.mutationObserver = new MutationObserver(mutations => {
      // Update aria labels when the DOM changes
      if (mutations.some(m => !['aria-labelledby', 'aria-controls'].includes(m.attributeName!))) {
        setTimeout(() => this.setAriaLabels());
      }

      // Sync tabs when disabled states change
      if (mutations.some(m => m.attributeName === 'disabled')) {
        this.syncTabsAndPanels();
      }
    });

    // After the first update...
    this.updateComplete.then(() => {
      this.syncTabsAndPanels();
      this.mutationObserver.observe(this, { attributes: true, childList: true, subtree: true });
      this.resizeObserver.observe(this.nav);

      // Set initial tab state when the tabs become visible
      const intersectionObserver = new IntersectionObserver((entries, observer) => {
        if (entries[0].intersectionRatio > 0) {
          this.setAriaLabels();

          if (this.active) {
            const tab = this.tabs.find(t => t.panel === this.active);

            if (tab) {
              this.setActiveTab(tab);
            }
          } else {
            this.setActiveTab(this.getActiveTab() ?? this.tabs[0], { emitEvents: false });
          }

          observer.unobserve(entries[0].target);
        }
      });
      intersectionObserver.observe(this.tabGroup);
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.mutationObserver?.disconnect();
    this.resizeObserver?.unobserve(this.nav);
  }

  private getAllTabs() {
    const slot = this.shadowRoot!.querySelector<HTMLSlotElement>('slot[name="nav"]')!;

    return [...(slot.assignedElements() as WaTab[])].filter(el => {
      return el.tagName.toLowerCase() === 'wa-tab';
    });
  }

  private getAllPanels() {
    return [...this.body.assignedElements()].filter(el => el.tagName.toLowerCase() === 'wa-tab-panel') as [WaTabPanel];
  }

  private getActiveTab() {
    return this.tabs.find(el => el.active);
  }

  private handleClick(event: MouseEvent) {
    const target = event.target as HTMLElement;
    const tab = target.closest('wa-tab');
    const tabGroup = tab?.closest('wa-tab-group');

    // Ensure the target tab is in this tab group
    if (tabGroup !== this) {
      return;
    }

    if (tab !== null) {
      this.setActiveTab(tab, { scrollBehavior: 'smooth' });
    }
  }

  private handleKeyDown(event: KeyboardEvent) {
    const target = event.target as HTMLElement;
    const tab = target.closest('wa-tab');
    const tabGroup = tab?.closest('wa-tab-group');

    // Ensure the target tab is in this tab group
    if (tabGroup !== this) {
      return;
    }

    // Activate a tab
    if (['Enter', ' '].includes(event.key)) {
      if (tab !== null) {
        this.setActiveTab(tab, { scrollBehavior: 'smooth' });
        event.preventDefault();
      }
      return;
    }

    // Move focus left or right
    if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) {
      const activeEl = this.tabs.find(t => t.matches(':focus'));
      const isRtl = this.matches(':dir(rtl)');
      let nextTab: null | WaTab = null;

      if (activeEl?.tagName.toLowerCase() === 'wa-tab') {
        if (event.key === 'Home') {
          nextTab = this.focusableTabs[0];
        } else if (event.key === 'End') {
          nextTab = this.focusableTabs[this.focusableTabs.length - 1];
        } else if (
          (['top', 'bottom'].includes(this.placement) && event.key === (isRtl ? 'ArrowRight' : 'ArrowLeft')) ||
          (['start', 'end'].includes(this.placement) && event.key === 'ArrowUp')
        ) {
          const currentIndex = this.tabs.findIndex(el => el === activeEl);
          nextTab = this.findNextFocusableTab(currentIndex, 'backward');
        } else if (
          (['top', 'bottom'].includes(this.placement) && event.key === (isRtl ? 'ArrowLeft' : 'ArrowRight')) ||
          (['start', 'end'].includes(this.placement) && event.key === 'ArrowDown')
        ) {
          const currentIndex = this.tabs.findIndex(el => el === activeEl);
          nextTab = this.findNextFocusableTab(currentIndex, 'forward');
        }

        if (!nextTab) {
          return;
        }

        nextTab.tabIndex = 0;
        nextTab.focus({ preventScroll: true });

        if (this.activation === 'auto') {
          this.setActiveTab(nextTab, { scrollBehavior: 'smooth' });
        } else {
          this.tabs.forEach(tabEl => {
            tabEl.tabIndex = tabEl === nextTab ? 0 : -1;
          });
        }

        if (['top', 'bottom'].includes(this.placement)) {
          scrollIntoView(nextTab, this.nav, 'horizontal');
        }

        event.preventDefault();
      }
    }
  }

  private findNextFocusableTab(currentIndex: number, direction: 'forward' | 'backward') {
    let nextTab = null;
    const iterator = direction === 'forward' ? 1 : -1;
    let nextIndex = currentIndex + iterator;

    while (currentIndex < this.tabs.length) {
      nextTab = this.tabs[nextIndex] || null;

      if (nextTab === null) {
        // This is where wrapping happens. If we're moving forward and get to the end, then we jump to the beginning. If we're moving backward and get to the start, then we jump to the end.
        if (direction === 'forward') {
          nextTab = this.focusableTabs[0];
        } else {
          nextTab = this.focusableTabs[this.focusableTabs.length - 1];
        }
        break;
      }

      if (!nextTab.disabled) {
        break;
      }

      nextIndex += iterator;
    }

    return nextTab;
  }

  private handleScrollToStart() {
    this.nav.scroll({
      left:
        this.localize.dir() === 'rtl'
          ? this.nav.scrollLeft + this.nav.clientWidth
          : this.nav.scrollLeft - this.nav.clientWidth,
      behavior: 'smooth'
    });
  }

  private handleScrollToEnd() {
    this.nav.scroll({
      left:
        this.localize.dir() === 'rtl'
          ? this.nav.scrollLeft - this.nav.clientWidth
          : this.nav.scrollLeft + this.nav.clientWidth,
      behavior: 'smooth'
    });
  }

  private setActiveTab(tab: WaTab, options?: { emitEvents?: boolean; scrollBehavior?: 'auto' | 'smooth' }) {
    options = {
      emitEvents: true,
      scrollBehavior: 'auto',
      ...options
    };

    if (tab !== this.activeTab && !tab.disabled) {
      const previousTab = this.activeTab;
      this.active = tab.panel;
      this.activeTab = tab;

      // Sync active tab and panel
      this.tabs.forEach(el => {
        el.active = el === this.activeTab;
        el.tabIndex = el === this.activeTab ? 0 : -1;
      });

      this.panels.forEach(el => (el.active = el.name === this.activeTab?.panel));

      if (['top', 'bottom'].includes(this.placement)) {
        scrollIntoView(this.activeTab, this.nav, 'horizontal', options.scrollBehavior);
      }

      // Emit events
      if (options.emitEvents) {
        if (previousTab) {
          this.dispatchEvent(new WaTabHideEvent({ name: previousTab.panel }));
        }

        this.dispatchEvent(new WaTabShowEvent({ name: this.activeTab.panel }));
      }
    }
  }

  private setAriaLabels() {
    // Link each tab with its corresponding panel
    this.tabs.forEach(tab => {
      const panel = this.panels.find(el => el.name === tab.panel);
      if (panel) {
        tab.setAttribute('aria-controls', panel.getAttribute('id')!);
        panel.setAttribute('aria-labelledby', tab.getAttribute('id')!);
      }
    });
  }

  // This stores tabs and panels so we can refer to a cache instead of calling querySelectorAll() multiple times.
  private syncTabsAndPanels() {
    this.tabs = this.getAllTabs();
    this.focusableTabs = this.tabs.filter(el => !el.disabled);
    this.panels = this.getAllPanels();

    // After updating, show or hide scroll controls as needed
    this.updateComplete.then(() => this.updateScrollControls());
  }

  @watch('active')
  updateActiveTab() {
    const tab = this.tabs.find(el => el.panel === this.active);

    if (tab) {
      this.setActiveTab(tab, { scrollBehavior: 'smooth' });
    }
  }

  @watch('noScrollControls', { waitUntilFirstUpdate: true })
  updateScrollControls() {
    if (this.noScrollControls) {
      this.hasScrollControls = false;
    } else {
      // In most cases, we can compare scrollWidth to clientWidth to determine if scroll controls should show. However,
      // Safari appears to calculate this incorrectly when zoomed at 110%, causing the controls to toggle indefinitely.
      // Adding a single pixel to the comparison seems to resolve it.
      //
      // See https://github.com/shoelace-style/shoelace/issues/1839
      this.hasScrollControls =
        ['top', 'bottom'].includes(this.placement) && this.nav.scrollWidth > this.nav.clientWidth + 1;
    }
  }

  render() {
    const isRtl = this.hasUpdated ? this.matches(':dir(rtl)') : this.dir === 'rtl';

    return html`
      <div
        part="base"
        class=${classMap({
          'tab-group': true,
          'tab-group--top': this.placement === 'top',
          'tab-group--bottom': this.placement === 'bottom',
          'tab-group--start': this.placement === 'start',
          'tab-group--end': this.placement === 'end',
          'tab-group--rtl': isRtl,
          'tab-group--has-scroll-controls': this.hasScrollControls
        })}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls
            ? html`
                <wa-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${isRtl ? 'chevron-right' : 'chevron-left'}
                  library="system"
                  variant="solid"
                  label=${this.localize.term('scrollToStart')}
                  @click=${this.handleScrollToStart}
                ></wa-icon-button>
              `
            : ''}

          <!-- We have a focus listener because in Firefox (and soon to be Chrome) overflow containers are focusable. -->
          <div class="tab-group__nav" @focus=${() => this.activeTab?.focus({ preventScroll: true })}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls
            ? html`
                <wa-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${isRtl ? 'chevron-left' : 'chevron-right'}
                  library="system"
                  variant="solid"
                  label=${this.localize.term('scrollToEnd')}
                  @click=${this.handleScrollToEnd}
                ></wa-icon-button>
              `
            : ''}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wa-tab-group': WaTabGroup;
  }
}

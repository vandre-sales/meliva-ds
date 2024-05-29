import '../checkbox/checkbox.js';
import '../icon/icon.js';
import '../spinner/spinner.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, state } from 'lit/decorators.js';
import { html } from 'lit';
import { live } from 'lit/directives/live.js';
import { LocalizeController } from '../../utilities/localize.js';
import { parseDuration, stopAnimations } from '../../internal/animate.js';
import { watch } from '../../internal/watch.js';
import { when } from 'lit/directives/when.js';
import componentStyles from '../../styles/component.styles.js';
import styles from './tree-item.styles.js';
import WebAwesomeElement from '../../internal/webawesome-element.js';
import type { CSSResultGroup, PropertyValueMap } from 'lit';

/**
 * @summary A tree item serves as a hierarchical node that lives inside a [tree](/components/tree).
 * @documentation https://shoelace.style/components/tree-item
 * @status stable
 * @since 2.0
 *
 * @dependency wa-checkbox
 * @dependency wa-icon
 * @dependency wa-spinner
 *
 * @event wa-expand - Emitted when the tree item expands.
 * @event wa-after-expand - Emitted after the tree item expands and all animations are complete.
 * @event wa-collapse - Emitted when the tree item collapses.
 * @event wa-after-collapse - Emitted after the tree item collapses and all animations are complete.
 * @event wa-lazy-change - Emitted when the tree item's lazy state changes.
 * @event wa-lazy-load - Emitted when a lazy item is selected. Use this event to asynchronously load data and append
 *  items to the tree before expanding. After appending new items, remove the `lazy` attribute to remove the loading
 *  state and update the tree.
 *
 * @slot - The default slot.
 * @slot expand-icon - The icon to show when the tree item is expanded.
 * @slot collapse-icon - The icon to show when the tree item is collapsed.
 *
 * @csspart base - The component's base wrapper.
 * @csspart item - The tree item's container. This element wraps everything except slotted tree item children.
 * @csspart item--disabled - Applied when the tree item is disabled.
 * @csspart item--expanded - Applied when the tree item is expanded.
 * @csspart item--indeterminate - Applied when the selection is indeterminate.
 * @csspart item--selected - Applied when the tree item is selected.
 * @csspart indentation - The tree item's indentation container.
 * @csspart expand-button - The container that wraps the tree item's expand button and spinner.
 * @csspart spinner - The spinner that shows when a lazy tree item is in the loading state.
 * @csspart spinner__base - The spinner's base part.
 * @csspart label - The tree item's label.
 * @csspart children - The container that wraps the tree item's nested children.
 * @csspart checkbox - The checkbox that shows when using multiselect.
 * @csspart checkbox__base - The checkbox's exported `base` part.
 * @csspart checkbox__control - The checkbox's exported `control` part.
 * @csspart checkbox__control--checked - The checkbox's exported `control--checked` part.
 * @csspart checkbox__control--indeterminate - The checkbox's exported `control--indeterminate` part.
 * @csspart checkbox__checked-icon - The checkbox's exported `checked-icon` part.
 * @csspart checkbox__indeterminate-icon - The checkbox's exported `indeterminate-icon` part.
 * @csspart checkbox__label - The checkbox's exported `label` part.
 *
 * @cssproperty [--show-duration=200ms] - The animation duration when expanding tree items.
 * @cssproperty [--hide-duration=200ms] - The animation duration when collapsing tree items.
 */
@customElement('wa-tree-item')
export default class WaTreeItem extends WebAwesomeElement {
  static styles: CSSResultGroup = [componentStyles, styles];

  static isTreeItem(node: Node) {
    return node instanceof Element && node.getAttribute('role') === 'treeitem';
  }

  private readonly localize = new LocalizeController(this);

  @state() indeterminate = false;
  @state() isLeaf = false;
  @state() loading = false;
  @state() selectable = false;

  /** Expands the tree item. */
  @property({ type: Boolean, reflect: true }) expanded = false;

  /** Draws the tree item in a selected state. */
  @property({ type: Boolean, reflect: true }) selected = false;

  /** Disables the tree item. */
  @property({ type: Boolean, reflect: true }) disabled = false;

  /** Enables lazy loading behavior. */
  @property({ type: Boolean, reflect: true }) lazy = false;

  @query('slot:not([name])') defaultSlot: HTMLSlotElement;
  @query('slot[name=children]') childrenSlot: HTMLSlotElement;
  @query('.tree-item__item') itemElement: HTMLDivElement;
  @query('.tree-item__children') childrenContainer: HTMLDivElement;
  @query('.tree-item__expand-button slot') expandButtonSlot: HTMLSlotElement;

  connectedCallback() {
    super.connectedCallback();

    this.setAttribute('role', 'treeitem');
    this.setAttribute('tabindex', '-1');

    if (this.isNestedItem()) {
      this.slot = 'children';
    }
  }

  firstUpdated() {
    this.childrenContainer.hidden = !this.expanded;
    this.childrenContainer.style.height = this.expanded ? 'auto' : '0';

    this.isLeaf = !this.lazy && this.getChildrenItems().length === 0;
    this.handleExpandedChange();
  }

  private async animateCollapse() {
    this.emit('wa-collapse');

    await stopAnimations(this.childrenContainer);
    // We can't animate from 'auto', so use the scroll height for now
    const duration = parseDuration(getComputedStyle(this.childrenContainer).getPropertyValue('--hide-duration'));
    await this.childrenContainer.animate(
      [
        { height: `${this.childrenContainer.scrollHeight}px`, opacity: '1', overflow: 'hidden' },
        { height: '0', opacity: '0', overflow: 'hidden' }
      ],
      { duration, easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)' }
    ).finished;
    this.childrenContainer.hidden = true;

    this.emit('wa-after-collapse');
  }

  // Checks whether the item is nested into an item
  private isNestedItem(): boolean {
    const parent = this.parentElement;
    return !!parent && WaTreeItem.isTreeItem(parent);
  }

  private handleChildrenSlotChange() {
    this.loading = false;
    this.isLeaf = !this.lazy && this.getChildrenItems().length === 0;
  }

  protected willUpdate(changedProperties: PropertyValueMap<WaTreeItem> | Map<PropertyKey, unknown>) {
    if (changedProperties.has('selected') && !changedProperties.has('indeterminate')) {
      this.indeterminate = false;
    }
  }

  private async animateExpand() {
    this.emit('wa-expand');

    await stopAnimations(this.childrenContainer);
    this.childrenContainer.hidden = false;
    // We can't animate to 'auto', so use the scroll height for now
    const duration = parseDuration(getComputedStyle(this.childrenContainer).getPropertyValue('--show-duration'));
    await this.childrenContainer.animate(
      [
        { height: '0', opacity: '0', overflow: 'hidden' },
        { height: `${this.childrenContainer.scrollHeight}px`, opacity: '1', overflow: 'hidden' }
      ],
      {
        duration,
        easing: 'cubic-bezier(0.4, 0.0, 0.2, 1)'
      }
    ).finished;
    this.childrenContainer.style.height = 'auto';

    this.emit('wa-after-expand');
  }

  @watch('loading', { waitUntilFirstUpdate: true })
  handleLoadingChange() {
    this.setAttribute('aria-busy', this.loading ? 'true' : 'false');

    if (!this.loading) {
      this.animateExpand();
    }
  }

  @watch('disabled')
  handleDisabledChange() {
    this.setAttribute('aria-disabled', this.disabled ? 'true' : 'false');
  }

  @watch('selected')
  handleSelectedChange() {
    this.setAttribute('aria-selected', this.selected ? 'true' : 'false');
  }

  @watch('expanded', { waitUntilFirstUpdate: true })
  handleExpandedChange() {
    if (!this.isLeaf) {
      this.setAttribute('aria-expanded', this.expanded ? 'true' : 'false');
    } else {
      this.removeAttribute('aria-expanded');
    }
  }

  @watch('expanded', { waitUntilFirstUpdate: true })
  handleExpandAnimation() {
    if (this.expanded) {
      if (this.lazy) {
        this.loading = true;

        this.emit('wa-lazy-load');
      } else {
        this.animateExpand();
      }
    } else {
      this.animateCollapse();
    }
  }

  @watch('lazy', { waitUntilFirstUpdate: true })
  handleLazyChange() {
    this.emit('wa-lazy-change');
  }

  /** Gets all the nested tree items in this node. */
  getChildrenItems({ includeDisabled = true }: { includeDisabled?: boolean } = {}): WaTreeItem[] {
    return this.childrenSlot
      ? ([...this.childrenSlot.assignedElements({ flatten: true })].filter(
          (item: WaTreeItem) => WaTreeItem.isTreeItem(item) && (includeDisabled || !item.disabled)
        ) as WaTreeItem[])
      : [];
  }

  render() {
    const isRtl = this.matches(':dir(rtl)');
    const showExpandButton = !this.loading && (!this.isLeaf || this.lazy);

    return html`
      <div
        part="base"
        class="${classMap({
          'tree-item': true,
          'tree-item--expanded': this.expanded,
          'tree-item--selected': this.selected,
          'tree-item--disabled': this.disabled,
          'tree-item--leaf': this.isLeaf,
          'tree-item--has-expand-button': showExpandButton,
          'tree-item--rtl': this.localize.dir() === 'rtl'
        })}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled ? 'item--disabled' : ''}
            ${this.expanded ? 'item--expanded' : ''}
            ${this.indeterminate ? 'item--indeterminate' : ''}
            ${this.selected ? 'item--selected' : ''}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${classMap({
              'tree-item__expand-button': true,
              'tree-item__expand-button--visible': showExpandButton
            })}
            aria-hidden="true"
          >
            ${when(
              this.loading,
              () => html` <wa-spinner part="spinner" exportparts="base:spinner__base"></wa-spinner> `
            )}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <wa-icon name=${isRtl ? 'chevron-left' : 'chevron-right'} library="system" variant="solid"></wa-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <wa-icon name=${isRtl ? 'chevron-left' : 'chevron-right'} library="system" variant="solid"></wa-icon>
            </slot>
          </div>

          ${when(
            this.selectable,
            () => html`
              <wa-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${live(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></wa-checkbox>
            `
          )}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'wa-tree-item': WaTreeItem;
  }
}

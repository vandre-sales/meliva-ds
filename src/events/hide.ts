export class WaHideEvent extends Event {
  constructor() {
    super('wa-hide', { bubbles: true, cancelable: true, composed: true });
  }
}

declare global {
  interface GlobalEventHandlersEventMap {
    'wa-hide': WaHideEvent;
  }
}

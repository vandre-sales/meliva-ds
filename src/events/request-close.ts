export class WaRequestCloseEvent extends Event {
  readonly detail: WaRequestCloseEventDetail;

  constructor(detail: WaRequestCloseEventDetail) {
    super('wa-request-close', { bubbles: true, cancelable: false, composed: true });
    this.detail = detail;
  }
}

interface WaRequestCloseEventDetail {
  source: Element;
}

declare global {
  interface GlobalEventHandlersEventMap {
    'wa-request-close': WaRequestCloseEvent;
  }
}

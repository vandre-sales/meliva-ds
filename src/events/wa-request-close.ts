export type WaRequestCloseEvent = CustomEvent<{ source: Element }>;

declare global {
  interface GlobalEventHandlersEventMap {
    'wa-request-close': WaRequestCloseEvent;
  }
}

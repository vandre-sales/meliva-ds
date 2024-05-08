import { LitElement, type PropertyValues } from 'lit';
import { property } from 'lit/decorators.js';

// Match event type name strings that are registered on GlobalEventHandlersEventMap...
type EventTypeRequiresDetail<T> = T extends keyof GlobalEventHandlersEventMap
  ? // ...where the event detail is an object...
    GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, unknown>>
    ? // ...that is non-empty...
      GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, never>>
      ? never
      : // ...and has at least one non-optional property
        Partial<GlobalEventHandlersEventMap[T]['detail']> extends GlobalEventHandlersEventMap[T]['detail']
        ? never
        : T
    : never
  : never;

// The inverse of the above (match any type that doesn't match EventTypeRequiresDetail)
type EventTypeDoesNotRequireDetail<T> = T extends keyof GlobalEventHandlersEventMap
  ? GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, unknown>>
    ? GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, never>>
      ? T
      : Partial<GlobalEventHandlersEventMap[T]['detail']> extends GlobalEventHandlersEventMap[T]['detail']
        ? T
        : never
    : T
  : T;

// `keyof EventTypesWithRequiredDetail` lists all registered event types that require detail
type EventTypesWithRequiredDetail = {
  [EventType in keyof GlobalEventHandlersEventMap as EventTypeRequiresDetail<EventType>]: true;
};

// `keyof EventTypesWithoutRequiredDetail` lists all registered event types that do NOT require detail
type EventTypesWithoutRequiredDetail = {
  [EventType in keyof GlobalEventHandlersEventMap as EventTypeDoesNotRequireDetail<EventType>]: true;
};

// Helper to make a specific property of an object non-optional
type WithRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] };

// Given an event name string, get a valid type for the options to initialize the event that is more restrictive than
// just CustomEventInit when appropriate (validate the type of the event detail, and require it to be provided if the
// event requires it)
type SlEventInit<T> = T extends keyof GlobalEventHandlersEventMap
  ? GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, unknown>>
    ? GlobalEventHandlersEventMap[T] extends CustomEvent<Record<PropertyKey, never>>
      ? CustomEventInit<GlobalEventHandlersEventMap[T]['detail']>
      : Partial<GlobalEventHandlersEventMap[T]['detail']> extends GlobalEventHandlersEventMap[T]['detail']
        ? CustomEventInit<GlobalEventHandlersEventMap[T]['detail']>
        : WithRequired<CustomEventInit<GlobalEventHandlersEventMap[T]['detail']>, 'detail'>
    : CustomEventInit
  : CustomEventInit;

// Given an event name string, get the type of the event
type GetCustomEventType<T> = T extends keyof GlobalEventHandlersEventMap
  ? GlobalEventHandlersEventMap[T] extends CustomEvent<unknown>
    ? GlobalEventHandlersEventMap[T]
    : CustomEvent<unknown>
  : CustomEvent<unknown>;

// `keyof ValidEventTypeMap` is equivalent to `keyof GlobalEventHandlersEventMap` but gives a nicer error message
type ValidEventTypeMap = EventTypesWithRequiredDetail | EventTypesWithoutRequiredDetail;

export default class WebAwesomeElement extends LitElement {
  // Make localization attributes reactive
  @property() dir: string;
  @property() lang: string;

  /** Emits a custom event with more convenient defaults. */
  emit<T extends string & keyof EventTypesWithoutRequiredDetail>(
    name: EventTypeDoesNotRequireDetail<T>,
    options?: SlEventInit<T> | undefined
  ): GetCustomEventType<T>;
  emit<T extends string & keyof EventTypesWithRequiredDetail>(
    name: EventTypeRequiresDetail<T>,
    options: SlEventInit<T>
  ): GetCustomEventType<T>;
  emit<T extends string & keyof ValidEventTypeMap>(
    name: T,
    options?: SlEventInit<T> | undefined
  ): GetCustomEventType<T> {
    const event = new CustomEvent(name, {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: {},
      ...options
    });

    this.dispatchEvent(event);

    return event as GetCustomEventType<T>;
  }
}

export interface Validator<T extends WebAwesomeFormAssociated = WebAwesomeFormAssociated> {
  observedAttributes?: string[];
  checkValidity: (element: T) => {
    message: string;
    isValid: boolean;
    invalidKeys: Exclude<keyof ValidityState, 'valid'>[];
  };
  message?: string | ((element: T) => string);
}

export interface WebAwesomeFormControl extends WebAwesomeElement {
  // Form attributes
  name: null | string;
  value: unknown;
  disabled?: boolean;
  defaultValue?: unknown;
  defaultChecked?: boolean;
  checked?: boolean;
  defaultSelected?: boolean;
  selected?: boolean;
  form?: string;

  // Constraint validation attributes
  pattern?: string;
  min?: number | string | Date;
  max?: number | string | Date;
  step?: number | 'any';
  required?: boolean;
  minlength?: number;
  maxlength?: number;

  // Form validation properties
  readonly validity: ValidityState;
  readonly validationMessage: string;

  // Form validation methods
  checkValidity: () => boolean;
  getForm: () => HTMLFormElement | null;
  reportValidity: () => boolean;
  setCustomValidity: (message: string) => void;
}

// setFormValue omitted so that we can use `setValue`
export class WebAwesomeFormAssociated
  extends WebAwesomeElement
  implements Omit<ElementInternals, 'form' | 'setFormValue'>, WebAwesomeFormControl
{
  static formAssociated = true;

  /**
   * Validators are static because they have `observedAttributes`, essentially attributes to "watch"
   * for changes. Whenever these attributes change, we want to be notified and update the validator.
   */
  static get validators(): Validator[] {
    return [];
  }

  // Append all Validator "observedAttributes" into the "observedAttributes" so they can run.
  static get observedAttributes() {
    const parentAttrs = new Set(/** @type {string[]} */ super.observedAttributes || []);

    for (const validator of this.validators) {
      if (!validator.observedAttributes) {
        continue;
      }

      for (const attr of validator.observedAttributes) {
        parentAttrs.add(attr);
      }
    }

    return [...parentAttrs];
  }

  // Form attributes
  // These should properly just use `@property` accessors.
  name: null | string = null;
  value: unknown = null;
  defaultValue: unknown = null;
  disabled: boolean = false;
  required: boolean = false;

  // Form validation methods
  internals: ElementInternals;

  assumeInteractionOn: string[] = ['wa-input'];

  // Additional
  input?: (HTMLElement & { value: unknown }) | HTMLInputElement | HTMLTextAreaElement;

  validators: Validator[] = [];

  // Should these be private?
  @property({ state: true }) valueHasChanged: boolean = false;
  @property({ state: true }) hasInteracted: boolean = false;

  // This works around a limitation in Safari. It is a hacky way for us to preserve customErrors generated by the user.
  __manualCustomError = false;

  private emittedEvents: string[] = [];

  constructor() {
    super();

    try {
      this.internals = this.attachInternals();
    } catch (_e) {
      // console.error('Element internals are not supported in your browser. Consider using a polyfill');
    }

    const ctor = this.constructor as typeof LitElement;

    if (ctor.properties?.disabled?.reflect === true) {
      // console.warn(`The following element has their "disabled" property set to reflect.`);
      // console.warn(this);
      // console.warn('For further reading: https://github.com/whatwg/html/issues/8365');
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.updateValidity();

    // eslint-disable-next-line
    this.addEventListener('invalid', this.emitInvalid);

    // Lazily evaluate after the constructor to allow people to override the `assumeInteractionOn`
    this.assumeInteractionOn.forEach(event => {
      this.addEventListener(event, this.handleInteraction);
    });
  }

  firstUpdated(...args: Parameters<LitElement['firstUpdated']>) {
    super.firstUpdated(...args);
    this.updateValidity();
  }

  emitInvalid = (e: Event) => {
    if (e.target !== this) return;

    this.emit('wa-invalid');
  };

  protected willUpdate(changedProperties: PropertyValues<this>) {
    if (changedProperties.has('defaultValue')) {
      if (!this.hasInteracted) {
        this.value = this.defaultValue;
      }
    }

    if (changedProperties.has('value') || changedProperties.has('disabled')) {
      // this is a hack because of how "disabled" attribute can be set by static HTML, but then changed via property, but we don't
      // want to use reflection because of a bug in "formDisabledCallback"
      if (!this.disabled) {
        this.removeAttribute('disabled');
      }

      if (this.hasInteracted && this.value !== this.defaultValue) {
        this.valueHasChanged = true;
      }

      if (this.input) {
        this.input.value = this.value;
      }

      const value = this.value;

      // Accounts for the snowflake case on `<wa-select>`
      if (Array.isArray(value)) {
        if (this.name) {
          const formData = new FormData();
          for (const val of value) {
            formData.append(this.name, val as string);
          }
          this.setValue(formData, formData);
        }
      } else {
        this.setValue(value as FormData | string | File | null, value as FormData | string | File | null);
      }
    }

    this.updateValidity();
    super.willUpdate(changedProperties);
  }

  private handleInteraction = (event: Event) => {
    const emittedEvents = this.emittedEvents;
    if (!emittedEvents.includes(event.type)) {
      emittedEvents.push(event.type);
    }

    // Mark it as user-interacted as soon as all associated events have been emitted
    if (emittedEvents.length === this.assumeInteractionOn?.length) {
      this.hasInteracted = true;
    }
  };

  get labels() {
    return this.internals.labels;
  }

  getForm() {
    return this.internals.form;
  }

  get validity() {
    return this.internals.validity;
  }

  // Not sure if this supports `novalidate`. Will need to test.
  get willValidate() {
    return this.internals.willValidate;
  }

  get validationMessage() {
    return this.internals.validationMessage;
  }

  checkValidity() {
    this.updateValidity();
    return this.internals.checkValidity();
  }

  reportValidity() {
    this.updateValidity();
    return this.internals.reportValidity();
  }

  /**
   * Override this to change where constraint validation popups are anchored.
   */
  get validationTarget(): undefined | HTMLElement {
    return (this.input || undefined) as undefined | HTMLElement;
  }

  setValidity(...args: Parameters<typeof this.internals.setValidity>) {
    const flags = args[0];
    const message = args[1];
    let anchor = args[2];

    if (!anchor) {
      anchor = this.validationTarget;
    }

    this.internals.setValidity(flags, message, anchor || undefined);

    this.setCustomStates();
  }

  setCustomStates() {
    const required = Boolean(this.required);
    const isValid = this.internals.validity.valid;
    const hasInteracted = this.hasInteracted;

    this.toggleCustomState('required', required);
    this.toggleCustomState('optional', !required);
    this.toggleCustomState('invalid', !isValid);
    this.toggleCustomState('valid', isValid);
    this.toggleCustomState('user-invalid', !isValid && hasInteracted);
    this.toggleCustomState('user-valid', isValid && hasInteracted);
  }

  /**
   * Do not use this when creating a "Validator". This is intended for end users of components.
   *   we track manually defined custom errors so we don't clear them on accident in our validators.
   *
   */
  setCustomValidity(message: string) {
    if (!message) {
      this.__manualCustomError = false;
      this.setValidity({});
      return;
    }

    this.__manualCustomError = true;
    this.setValidity({ customError: true }, message, this.validationTarget);
  }

  formResetCallback() {
    this.resetValidity();
    this.hasInteracted = false;
    this.valueHasChanged = false;
    this.emittedEvents = [];
    this.updateValidity();
  }

  formDisabledCallback(isDisabled: boolean) {
    this.disabled = isDisabled;

    this.updateValidity();
  }

  /**
   * Called when the browser is trying to restore element’s state to state in which case reason is “restore”, or when the browser is trying to fulfill autofill on behalf of user in which case reason is “autocomplete”. In the case of “restore”, state is a string, File, or FormData object previously set as the second argument to setFormValue.
   */
  formStateRestoreCallback(state: string | File | FormData | null, reason: 'autocomplete' | 'restore') {
    this.value = state;

    if (reason === 'restore') {
      this.resetValidity();
    }

    this.updateValidity();
  }

  setValue(...args: Parameters<typeof this.internals.setFormValue>) {
    const [value, state] = args;

    this.internals.setFormValue(value, state);
  }

  get allValidators() {
    const staticValidators = (this.constructor as typeof WebAwesomeFormAssociated).validators || [];

    const validators = this.validators || [];
    return [...staticValidators, ...validators];
  }

  /**
   * Reset validity is a way of removing manual custom errors and native validation.
   */
  resetValidity() {
    this.setCustomValidity('');
    this.setValidity({});
  }

  updateValidity() {
    if (
      this.disabled ||
      this.hasAttribute('disabled') ||
      !this.willValidate //
    ) {
      this.resetValidity();
      return;
    }

    const validators = this.allValidators;

    if (!validators?.length) {
      // If there's no validators, we do nothing. We also don't want to mess with custom errors, so we just stop here.
      return;
    }

    type ValidityKey = { -readonly [P in keyof ValidityState]: ValidityState[P] };

    const flags: Partial<ValidityKey> = {
      // Dont trust custom errors from the Browser. Safari breaks the spec.
      customError: Boolean(this.__manualCustomError)
    };

    const formControl = this.validationTarget || this.input || undefined;

    let finalMessage = '';

    for (const validator of validators) {
      const { isValid, message, invalidKeys } = validator.checkValidity(this);

      if (isValid) {
        continue;
      }

      if (!finalMessage) {
        finalMessage = message;
      }

      if (invalidKeys?.length >= 0) {
        (invalidKeys as (keyof ValidityState)[]).forEach(str => (flags[str] = true));
      }
    }

    // This is a workaround for preserving custom errors
    if (!finalMessage) {
      finalMessage = this.validationMessage;
    }

    this.setValidity(flags, finalMessage, formControl);
  }

  // Custom states
  addCustomState(state: string) {
    try {
      // @ts-expect-error CustomStateSet doesn't exist in TS yet.
      (this.internals.states as Set<string>).add(state);
    } catch (_) {
      // Without this, test suite errors.
    } finally {
      this.setAttribute(`data-${state}`, '');
    }
  }

  deleteCustomState(state: string) {
    try {
      // @ts-expect-error CustomStateSet doesn't exist in TS yet.
      (this.internals.states as Set<string>).delete(state);
    } catch (_) {
      // Without this, test suite errors.
    } finally {
      this.removeAttribute(`data-${state}`);
    }
  }

  toggleCustomState(state: string, force: boolean) {
    if (force) {
      this.addCustomState(state);
      return;
    }

    if (!force) {
      this.deleteCustomState(state);
      return;
    }

    this.toggleCustomState(state, !this.hasCustomState(state));
  }

  hasCustomState(state: string) {
    let bool = false;

    try {
      // @ts-expect-error CustomStateSet doesn't exist in TS yet.
      bool = (this.internals.states as Set<string>).has(state);
    } catch (_) {
      // Without this, test suite errors.
    } finally {
      if (!bool) {
        bool = this.hasAttribute(`data-${state}`);
      }
    }

    return bool;
  }
}

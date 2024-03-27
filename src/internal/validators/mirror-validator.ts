import type { Validator } from '../webawesome-element.js';

type ValidatorElement = HTMLElement & {
  value: string | null | File | FormData;
  formControl?: HTMLElement & ElementInternals;
};

/**
 * This validator is for if you have an exact copy of your element in the shadow DOM. Rather than needing
 *   custom translations and error messages, you can simply rely on the element "formControl" in your shadow dom.
 */
export const MirrorValidator: Validator<ValidatorElement> = {
  checkValidity(element) {
    const formControl = element.formControl;

    const validity: ReturnType<Validator<ValidatorElement>['checkValidity']> = {
      message: '',
      isValid: true,
      invalidKeys: []
    };

    if (!formControl) return validity;

    const isValid = formControl.checkValidity();
    if (isValid) return validity;

    validity.isValid = false;
    validity.message = formControl.validationMessage;
    for (const key in formControl.validity) {
      if (key === 'valid') {
        continue;
      }

      const checkedKey = key as Exclude<keyof ValidityState, 'valid'>;

      if (formControl.validity[checkedKey]) {
        validity.invalidKeys.push(checkedKey);
      }
    }

    return validity;
  }
};

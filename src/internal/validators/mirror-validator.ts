import type { Validator } from '../webawesome-element.js';

/**
 * This validator is for if you have an exact copy of your element in the shadow DOM. Rather than needing
 *   custom translations and error messages, you can simply rely on the element "formControl" in your shadow dom.
 */
export const MirrorValidator: Validator = {
  checkValidity(element) {
    const formControl = element.formControl;

    const validity: ReturnType<Validator['checkValidity']> = {
      message: '',
      isValid: true,
      invalidKeys: []
    };

    if (!formControl) {
      // element.setValidity({})
      return validity
    }

    const isValid = formControl.checkValidity();
    if (isValid) {
      // element.setValidity({})
      return validity;
    }

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

import type { Validator } from '../webawesome-element.js';

export interface GroupRequiredValidatorOptions {
  /** This is a cheap way for us to get translation strings for the user without having proper translations. */
  validationElement: HTMLInputElement;
}

// Used to validate groups of elements and not just a single element.
// https://codepen.io/paramagicdev/pen/eYorwrz
export const GroupRequiredValidator = (options: GroupRequiredValidatorOptions): Validator => {
  const { validationElement } = options;

  const obj: Validator = {
    observedAttributes: ['required'],
    message: validationElement.validationMessage,
    checkValidity(this: typeof GroupRequiredValidator, element) {
      const validity: ReturnType<Validator['checkValidity']> = {
        message: '',
        isValid: true,
        invalidKeys: []
      };

      const markInvalid = () => {
        validity.message = typeof obj.message === 'function' ? obj.message(element) : obj.message || '';
        validity.isValid = false;
        validity.invalidKeys.push('valueMissing');
      };

      const isRequired = element.required ?? element.hasAttribute('required');

      // Always valid if the element isn't required.
      // Always valid if no name.
      if (!isRequired) {
        return validity;
      }

      // If there's no name, we just check if the individual element has a value.
      if (!element.name || !element.getAttribute('name')) {
        const value = element.value;

        let isEmpty = !value;

        if (Array.isArray(value)) {
          isEmpty = value.length === 0;
        }

        if (isEmpty) {
          markInvalid();
        }

        return validity;
      }

      const form = element.getForm();

      // Can't evaluate if there is no form.
      if (!form) {
        return validity;
      }

      const formDataValue = new FormData(form).get(element.name);

      // Can't do !formDataValue because we don't want "false" to trigger. False could technically be valid.
      if (formDataValue === null || formDataValue === undefined || formDataValue === '') {
        markInvalid();
      }

      return validity;
    }
  };

  return obj;
};

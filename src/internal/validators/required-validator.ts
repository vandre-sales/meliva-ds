import type { Validator } from '../webawesome-element.js';

export interface RequiredValidatorOptions {
  /** This is a cheap way for us to get translation strings for the user without having proper translations. */
  validationElement?: HTMLSelectElement | HTMLInputElement;
}

export const RequiredValidator = (options: RequiredValidatorOptions = {}): Validator => {
  let { validationElement } = options

  if (!validationElement) {
    validationElement = Object.assign(document.createElement("input"), { required: true })
  }

  const obj: Validator = {
    observedAttributes: ['required'],
    message: validationElement.validationMessage, // @TODO: Add a translation.
    checkValidity(element) {
      const validity: ReturnType<Validator['checkValidity']> = {
        message: '',
        isValid: true,
        invalidKeys: []
      };

      const isRequired = element.required ?? element.hasAttribute('required');

      // Always true if the element isn't required.
      if (!isRequired) {
        return validity;
      }

      const value = element.value;

      let isEmpty = !value;

      if (Array.isArray(value)) {
        isEmpty = value.length === 0;
      }

      if (isEmpty) {
        validity.message = typeof obj.message === 'function' ? obj.message(element) : obj.message || '';
        validity.isValid = false;
        validity.invalidKeys.push('valueMissing');
      }

      return validity;
    }
  };

  return obj;
};

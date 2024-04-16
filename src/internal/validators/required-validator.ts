import type { Validator } from '../webawesome-element.js';

export const RequiredValidator: Validator = {
  observedAttributes: ["required"],
  message: "Please fill out this field", // @TODO: Add a translation.
  checkValidity (this: typeof RequiredValidator, element) {
    const validity: ReturnType<Validator["checkValidity"]> = {
      message: "",
      isValid: true,
      invalidKeys: []
    }

    const isRequired = element.required ?? element.hasAttribute("required")

    // Always true if the element isn't required.
    if (!isRequired) {
      return validity
    }

    const value = element.value

    let isEmpty = !value

    if (Array.isArray(value)) {
      isEmpty = value.length === 0
    }

    if (isEmpty) {
      validity.message = typeof this.message === "function" ? this.message(element) : (this.message || "")
      validity.isValid = false
      validity.invalidKeys.push("valueMissing")
    }

    return validity
  }
}

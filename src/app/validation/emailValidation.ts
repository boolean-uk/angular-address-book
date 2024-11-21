import { AbstractControl, ValidationErrors } from '@angular/forms';

export const emailValidation = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = '' + control.value;
  if (!value) {
    return { emailValidation: true };
  }
  if (!value.endsWith('@boolean.co.uk')) {
    return { emailValidation: true };
  }

  return null;
};
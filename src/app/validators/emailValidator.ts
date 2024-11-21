import { AbstractControl, ValidationErrors } from '@angular/forms';

export const emailValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = '' + control.value;
  if (!value.endsWith('@boolean.co.uk')) {
    return { emailValidator: true };
  }
  return null;
};

import { AbstractControl, ValidationErrors } from '@angular/forms';

export const whiteSpacesValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = '' + control.value;
  if (/\s/.test(value)) {
    return { whiteSpacesValidator: true };
  }
  return null;
};

import { AbstractControl, ValidationErrors } from '@angular/forms';

export const whiteSpaceValidation = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = '' + control.value;
  if (!value) {
    return { whiteSpaceValidation: true };
  }
  if (value.includes(' ')) {
    return { whiteSpaceValidation: true };
  }

  return null;
};
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const noSpacesValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  if ((control.value as string).indexOf(' ') !== -1) {
    return { noSpaces: true };
  }
  return null;
};

export const emailValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = '' + control.value;
  if (!value) {
    return { isEmailValid: true };
  }
  if (!value.endsWith('@boolean.co.uk')) {
    return { isEmailValid: true };
  }
  return null;
};

import { AbstractControl, ValidationErrors } from '@angular/forms';

export const cityValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = '' + control.value;
  if (!value) {
    return { cityValidator: true };
  }
  if (value.endsWith(' ')) {
    return { cityValidator: true };
  }
  if (value.startsWith(' ')) {
    return { cityValidator: true };
  }
  return null;
};

export const cityValidatorEmail = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = '' + control.value;
  if (!value.includes('@')) {
    return { cityValidator: true };
  }
  if(!value.endsWith('@boolean.co.uk')) return { cityValidator: true };
  return null;
};

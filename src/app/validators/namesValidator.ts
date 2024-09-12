import { AbstractControl, ValidationErrors } from '@angular/forms';

export const namesValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = '' + control.value;
  if (value.includes(' ')) {
    return { namesValidator: true };
  }
  return null;
};

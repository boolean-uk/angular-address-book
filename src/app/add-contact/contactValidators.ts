import { AbstractControl, ValidationErrors } from '@angular/forms';

export const noSpaceValidator = (
  control: AbstractControl
): ValidationErrors | null => {
  const value = '' + control.value;
  if (value && value.trim().includes(' ')) {
    return { hasSpace: true };
  }

  return null;
};

export const emailValidator =(
  control: AbstractControl
): ValidationErrors | null => {
  const emailPattern = /^[A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z]{2,}$/
  const value = '' + control.value;
  if (control.value && !emailPattern.test(control.value)) {
    return { invalidEmail: true };
  }

  return null;
}

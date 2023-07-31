import {AbstractControl, ValidationErrors} from "@angular/forms";

export const emptySpaceFree = (control: AbstractControl): ValidationErrors | null => {
  const value: string = control.value
  if (value && value.includes(" ")) return {containsSpaces: true}
  return null;
}

export const booleanDomain = (control: AbstractControl): ValidationErrors | null => {
  const value: string = control.value
  if (value && !value.endsWith('@boolean.co.uk')) return {endsWith: true}
  return null;
}

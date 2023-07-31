import {FormControl} from "@angular/forms";

export function noSpacesValidator(control: FormControl): { [key: string]: any } | null {
  const hasSpaces = /\s/.test(control.value);
  return hasSpaces ? { hasSpaces: true } : null;
}

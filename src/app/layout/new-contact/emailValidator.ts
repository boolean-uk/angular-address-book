import {FormControl} from "@angular/forms";

export function emailValidator(control: FormControl): { [key: string]: any } | null {
  const email = control.value;
  if (email && !email.endsWith('@boolean.co.uk')) {
    return { invalidEmail: true };
  }
  return null;
}

import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

export function asyncEmailValidator(
  control: AbstractControl
): Observable<ValidationErrors | null> {
  const emailRegex: RegExp = /^[a-z0-9._%+-]+@[a-z]{7}.[a-z]{2}.[a-z]{2}$/;
  const email: string = '' + control.value;

  if (!email.endsWith('@boolean.co.uk') || !emailRegex.test(email)) {
    return of({ asyncEmailValidator: true });
  }
  return of(null);
}

import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable, of } from 'rxjs';

export function asyncNameValidator(
  control: AbstractControl
): Observable<ValidationErrors | null> {
  const name: string = '' + control.value;

  if (name.length <= 3 || name.includes(' ')) {
    return of({ asyncNameValidator: true });
  }
  return of(null);
}

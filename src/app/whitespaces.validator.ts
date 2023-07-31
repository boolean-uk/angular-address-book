import { AbstractControl, ValidationErrors } from '@angular/forms';
  
export class NoSpaceValidator {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        const value = control.value as string | null;
      
        if (value !== null && value.indexOf(' ') >= 0) {
          return { cannotContainSpace: true };
        }
      
        return null;
      }
}
import { AbstractControl, ValidationErrors } from '@angular/forms';
  
export class EmailValidator {
    static containsBooleanCoUk(control: AbstractControl): ValidationErrors | null {
        const value = control.value as string | null;
      
        if (value !== null && !value.includes("@boolean.co.uk")) {
          return { containsBooleanCoUk: true };
        }
      
        return null;
      }
}
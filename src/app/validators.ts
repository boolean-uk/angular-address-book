import { AbstractControl, ValidationErrors } from '@angular/forms';

export function emailValidator(control: AbstractControl): ValidationErrors | null {
    const regex: RegExp = /^[a-zA-Z0-9._%+-]+@boolean\.uk\.com$/;
    const email: string = '' + control.value;
    if(!regex.test(email)) 
        return { emailValidator: false };
    return null;
}

export function nameValidator (control: AbstractControl): ValidationErrors | null {
    const regex: RegExp = /^[A-Z][a-z]{2,}$/;
    const name: string = '' + control.value;
    if(!regex.test(name)) 
        return { nameValidator: true };
    return null;
}
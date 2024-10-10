import { AbstractControl, ValidationErrors } from "@angular/forms";

export function noXssOrSql(control: AbstractControl): ValidationErrors | null {
    const xssPattern = /<\s*script.*?>|<\/\s*script.*?>|<.*?>/i;
    const sqlPattern = /\b(SELECT|INSERT|DELETE|UPDATE|DROP|TABLE|FROM|WHERE|UNION|--|;|--|OR|AND)\b/i;

    if (xssPattern.test(control.value) || sqlPattern.test(control.value)) {
        return {invalidInput: true}
    }
    return null;
}

import { Injectable } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactFormService {
  constructor(private fb: FormBuilder) {}

  createContactForm(contact?: Contact): FormGroup {
    return this.fb.group({
      firstName: [
        contact?.firstName || '',
        [
          Validators.required,
          Validators.min(3),
          Validators.pattern(/^[^\s]*$/),
        ],
      ],
      lastName: [
        contact?.lastName || '',
        [
          Validators.required,
          Validators.min(3),
          Validators.pattern(/^[^\s]*$/),
        ],
      ],
      email: [
        contact?.email || '',
        [
          Validators.required,
          Validators.pattern(/^([A-Za-z]|[0-9])+@boolean.co.uk$/),
        ],
      ],
      street: [contact?.street || '', Validators.required],
      city: [contact?.city || '', Validators.required],
    });
  }
}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact, ContactService } from '../contact.service';
import { Router } from '@angular/router';
import * as uuid from 'uuid';
@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
})
export class CreateContactComponent {
  contactForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _contactService: ContactService,
    private _router: Router
  ) {
    this.contactForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        id: uuid.v4(),
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city,
      };
      this.contactForm.reset();
      this._contactService.addContact(newContact);
      this._router.navigate(['/contacts']);
    }
  }
}

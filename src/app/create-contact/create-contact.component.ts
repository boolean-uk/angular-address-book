import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Contact, ContactService } from '../contact.service';
import { Router } from '@angular/router';
import { asyncNameValidator } from 'src/app/validators/nameValidator';
import { asyncEmailValidator } from 'src/app/validators/emailValidator';
@Component({
  selector: 'app-create-contact',
  templateUrl: './create-contact.component.html',
  styleUrls: ['./create-contact.component.css'],
})
export class CreateContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(
    private _formBuilder: FormBuilder,
    private _contactService: ContactService,
    private _router: Router
  ) {
    this.contactForm = this._formBuilder.group({
      firstName: ['', Validators.required, asyncNameValidator],
      lastName: ['', Validators.required, asyncNameValidator],
      street: ['', Validators.required],
      city: ['', Validators.required],
      email: ['', Validators.required, asyncEmailValidator],
    });
  }
  ngOnInit(): void {}

  onSubmit() {
    if (this.contactForm.valid) {
      const newContact: Contact = {
        id: this._contactService.getContactsLength().toString(),
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city,
        email: this.contactForm.value.email,
      };
      this._contactService.addContact(newContact);
      this._router.navigate(['/contacts']);
    } else {
      alert('All fields are required.');
    }
  }
}

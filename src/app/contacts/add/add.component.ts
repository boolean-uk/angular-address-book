import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  contactForm: FormGroup;
  formBuilder = inject(FormBuilder);
  contactService = inject(ContactsService);
  router = inject(Router);

  myContact: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    street: '',
    city: '',
  };

  constructor() {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  addContact() {
    (this.myContact.firstName = this.contactForm.value.firstName),
      (this.myContact.lastName = this.contactForm.value.lastName),
      (this.myContact.street = this.contactForm.value.street),
      (this.myContact.city = this.contactForm.value.city),
      this.contactService.addContact(this.myContact);

    this.contactForm.reset();

    this.router.navigate(['cars']);
  }
}

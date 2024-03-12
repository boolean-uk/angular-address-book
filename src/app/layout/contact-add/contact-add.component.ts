import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-contact-add',
  templateUrl: './contact-add.component.html',
  styleUrls: ['./contact-add.component.css'],
})
export class ContactAddComponent {
  contact: Contact = {
    id: 1,
    firstName: '',
    lastName: '',
    street: '',
    city: '',
  };
  contactForm: FormGroup;
  contactService = inject(ContactsService);
  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  addContact() {
    if (this.contactForm.valid) {
      this.contact = {
        id: this.contactService.contacts.length,
        firstName: this.contactForm.value.firstName,
        lastName: this.contactForm.value.lastName,
        street: this.contactForm.value.street,
        city: this.contactForm.value.city,
      };
      this.contactService.addContact(this.contact);
    } else {
      console.log('Not valid form');
      
    }
  }
}

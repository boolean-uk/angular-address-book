import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactsService } from '../../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  myContact: Contact = {id: 1, firstName: '', lastName: '', street: '', city: ''};
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
    this.myContact = {
      id: this.contactService.contacts.length +1,
      firstName: this.contactForm.value.firstName,
      lastName: this.contactForm.value.lastName,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.contactService.addContact(this.myContact);
  }
}

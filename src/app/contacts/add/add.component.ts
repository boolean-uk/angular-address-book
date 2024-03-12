import { Component, inject } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../contact.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css'],
})
export class AddComponent {
  contactService = inject(ContactService)
  contactForm: FormGroup;
  newContact: Contact = {
    id: 0,
    firstname: '',
    lastname: '',
    street: '',
    city: '',
  };

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      street: ["", Validators.required],
      city: ["", Validators.required]
    })
  }

  addNewContact() {
    this.newContact = {
      id: this.contactService.contacts.length + 1,
      firstname: this.contactForm.value.firstname,
      lastname: this.contactForm.value.lastname,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };

    this.contactService.addContact(this.newContact)
    this.contactForm.reset()
  }
}

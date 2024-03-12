import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-add',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent {
  contact: Contact = { id: 1, name: '', street: '', city: '' };
  contactForm: FormGroup;
  contactService = inject(ContactService);
  router = inject(Router);

  constructor(private formBuilder: FormBuilder) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  addContact() {
    this.contact = {
      id: this.contactService.contacts.length + 1,
      name: this.contactForm.value.name,
      street: this.contactForm.value.street,
      city: this.contactForm.value.city,
    };
    this.contactService.addContact(this.contact);

    this.router.navigate(['/contacts']);
  }
}
import { Component, inject } from '@angular/core';
import { ContactsService } from 'src/app/contact.service';
import { Contact } from '../models/contact';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  contactForm: FormGroup;
  formBuilder = inject(FormBuilder);
  contactService = inject(ContactsService);
  route = inject(ActivatedRoute);
  router = inject(Router);

  myContact: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    street: '',
    city: '',
  };

  constructor() {
    const givenContact = this.contactService.getContactById(
      Number(this.route.snapshot.paramMap.get('id'))
    );
    this.contactForm = this.formBuilder.group({
      firstName: [givenContact?.firstName, Validators.required],
      lastName: [givenContact?.lastName, Validators.required],
      street: [givenContact?.street, Validators.required],
      city: [givenContact?.city, Validators.required],
    });
  }

  init() {
    console.log('Works');
  }

  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactService.getContactById(Number(this.id));

  editContact(contactId: number) {
    console.log('Given contact is ' + contactId);
    this.myContact.id = contactId;
    this.myContact.firstName = this.contactForm.value.firstName;
    this.myContact.lastName = this.contactForm.value.lastName;
    this.myContact.street = this.contactForm.value.street;
    this.myContact.city = this.contactForm.value.city;
    this.contactService.addContact(this.myContact);

    this.contactForm.reset();

    this.router.navigate(['contacts']);
  }
}

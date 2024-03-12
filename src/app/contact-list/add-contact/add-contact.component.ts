import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent {
  contactForm: FormGroup;
  contactService: ContactsService;

  constructor(
    private formBuilder: FormBuilder,
    contactsService: ContactsService
  ) {
    this.contactForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      street: ['', Validators.required],
      city: ['', Validators.required],
    });
    this.contactService = contactsService;
  }

  onSubmit() {
    console.warn('Your order has been submitted', this.contactForm);
    this.contactService.addContact(
      this.contactForm.value.firstname,
      this.contactForm.value.lastname,
      this.contactForm.value.street,
      this.contactForm.value.city
    );
  }
}

import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-new-form',
  templateUrl: './contact-new-form.component.html',
  styleUrls: ['./contact-new-form.component.css'],
})
export class ContactNewFormComponent {
  constructor(
    private contactService: ContactService,
    private fb: FormBuilder
  ) {}

  newContactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
  });

  addNewContact() {
    this.contactService.addNewContact(
      this.newContactForm.value as Omit<Contact, 'id'>
    );
  }
}

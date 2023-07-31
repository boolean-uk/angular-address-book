import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Contact } from '../contact';
import { ContactFormService } from '../contact-form.service';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-new-form',
  templateUrl: './contact-new-form.component.html',
  styleUrls: ['./contact-new-form.component.css'],
})
export class ContactNewFormComponent {
  constructor(
    private contactService: ContactService,
    private contactFormService: ContactFormService,
    private fb: FormBuilder
  ) {}

  newContactForm = this.contactFormService.createContactForm();

  addNewContact() {
    this.contactService
      .addNewContact(this.newContactForm.value as Omit<Contact, 'id'>)
      .subscribe();
  }
}

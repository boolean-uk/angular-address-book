import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Contact } from '../interfaces/contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css'],
})
export class AddContactComponent {
  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  contactForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    street: ['', Validators.required],
    city: ['', Validators.required],
  });

  contact: Contact | null = null;

  submit() {
    if (this.contactForm.valid) {
      this.contact = {
        id: this.contactService.getId(),
        firstName: this.contactForm.value.firstName!,
        lastName: this.contactForm.value.lastName!,
        street: this.contactForm.value.street!,
        city: this.contactForm.value.city!,
      };
      console.log(this.contact);
      this.contactService.addContact(this.contact);
    }

    this.contactForm.reset();
  }
}

// new-contact.component.ts
import { Component } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css'],
})
export class NewContactComponent {
  firstName: string = '';
  lastName: string = '';
  street: string = '';
  city: string = '';

  constructor(private contactService: ContactService) {}

  createContact() {
    const newContact = {
      id: Date.now(),
      firstName: this.firstName,
      lastName: this.lastName,
      street: this.street,
      city: this.city,
    };
    this.contactService.addContact(newContact);
    this.firstName = '';
    this.lastName = '';
    this.street = '';
    this.city = '';
  }
}

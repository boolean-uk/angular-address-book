import { Component } from '@angular/core';
import { Contact } from '../Contact';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css'],
})
export class NewContactComponent {
  newContact: Contact | undefined;

  saveContact(contact: Contact): void {
    // Handle saving the contact data (e.g., sending it to a service, etc.)
    console.log('Saving contact:', contact);
  }
}

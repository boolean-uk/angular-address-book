import { Component } from '@angular/core';
import { Contact } from '../Contact';
import { CONTACTS } from '../mock-contacts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-contact',
  templateUrl: './new-contact.component.html',
  styleUrls: ['./new-contact.component.css'],
})
export class NewContactComponent {
  newContact: Contact | undefined;

  constructor(private router: Router) {}

  saveContact(contact: Contact): void {
    // Handle saving the contact data (e.g., sending it to a service, etc.)
    this.newContact = { ...contact };

    CONTACTS.push(this.newContact);

    alert('Contact saved!');

    this.router.navigate(['/contact-list']);
  }
}

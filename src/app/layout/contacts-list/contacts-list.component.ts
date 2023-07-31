import { Component } from '@angular/core';
import { Contact } from '../contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent {
  newContact: Contact | null = null
  addToContacts() {
    if (!this.newContact) {
      return;
    }

    this.contactsList.push(this.newContact);
    this.newContact = null;
  }
  contactsList: Contact[] = [];
}

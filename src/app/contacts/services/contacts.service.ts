import { Injectable } from '@angular/core';
import { Contact } from '../contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contact[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', street: 'React', city: 'js' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', street: 'React', city: 'js' },
  ];

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }

  updateContact(updatedContact: Contact): void {
    const index = this.contacts.findIndex(contact => contact.id === updatedContact.id)

    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
  }
}

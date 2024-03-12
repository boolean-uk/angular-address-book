import { Injectable } from '@angular/core';
import { Contact } from './model/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  public contacts: Contact[] = [];

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    } else {
      return contact;
    }
  }

  public getAllContacts(): Contact[] {
    console.log('Contacts: ', this.contacts);
    return this.contacts;
  }

  public addContact(contact: Contact) {
    console.log('Added: ', contact);
    this.contacts.push(contact);
  }

  updateContact(updatedContact: Contact) {
    const index = this.contacts.findIndex(
      (c: Contact) => c.id === updatedContact.id
    );
    if (index !== -1) {
      this.contacts[index] = updatedContact;
      console.log('Updated: ', this.contacts[index]);
    } else {
      console.error('Could not find contact');
    }
  }
}

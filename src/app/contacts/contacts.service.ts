import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;

  public getContactById(id: number | null) : Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }

  public addContact(contact: Contact) {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact)
  }

  public editContact(contact: Contact) {
    const oldContactIndex = this.contacts.findIndex(c => c.id === contact.id)
    if(oldContactIndex === -1) {
      return false;
    }
    this.contacts[oldContactIndex] = contact;
    return true;
  }
}

import { Injectable } from '@angular/core';
import { Contact } from './contact/models/contact';
import { CONTACTS } from './data/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [...CONTACTS];
  private maxId: number;

  constructor() {
  this.maxId = this.contacts.reduce((max, contact) => {
    // Ensuring contact.id is treated as a number in this context
    const contactId = contact.id ?? 0;
    return contactId > max ? contactId : max;
  }, 0);
  }

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }

  public getAllContacts(): Contact[] {
    return this.contacts;
  }

  public addContact(contact: Contact) {
    contact.id = ++this.maxId;
    this.contacts.push(contact);
  }

  public editContactById(contact: Contact) {
    this.contacts = this.contacts.map((existingContact) =>
      existingContact.id === contact.id ? contact : existingContact
    );
  }

  public deleteContactById(contactId: number) {
    this.contacts = this.contacts.filter((contact) => contact.id !== contactId);
  }
}


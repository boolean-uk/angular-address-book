import { Injectable } from '@angular/core';
import { Contact } from './contacts/models/contact';
import { contacts } from './contacts/data/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private currentId: number = 1;
  public contacts: Contact[] = contacts;

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    } else {
      return contact;
    }
  }

  public getAllContacts(): Contact[] {
    return this.contacts;
  }

  public addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  public editContact(contact: Contact) {
    const index = this.contacts.findIndex((c) => c.id === contact.id);
    this.contacts[index] = contact;
  }
}

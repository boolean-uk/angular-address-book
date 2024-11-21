import { Injectable } from '@angular/core';
import { Contact } from './contacts/models/contact';
import { CONTACTS } from './data/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;

  public getAllContacts(): Contact[] {
    return this.contacts;
  }

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }

  public addNewContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  public editContact(contact: Contact): void {
    const index = this.contacts.findIndex((c) => c.id === contact.id);
    this.contacts[index] = contact;
  }
}

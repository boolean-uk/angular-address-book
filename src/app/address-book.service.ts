import { Injectable } from '@angular/core';
import { Contact } from './contacts/models/contact';

@Injectable({
  providedIn: 'root',
})
export class AddressBookService {
  public contacts: Contact[] = [];

  public getAll(): Contact[] {
    return this.contacts;
  }

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((c) => c.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }

  public addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  public updateContact(updatedContact: Contact) {
    this.contacts = this.contacts.map((contact) =>
      contact.id === updatedContact.id ? updatedContact : contact
    );
  }
}

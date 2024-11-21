import { Injectable } from '@angular/core';

import { CONTACTS } from './data/contacts';
import { Contact } from './contacts/models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  public contacts: Contact[] = CONTACTS;

  public getAllContacts(): Contact[] {
    console.log(this.contacts);
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

  public editContact(editContact: Contact): void {
    const index = this.contacts.findIndex((car) => car.id === editContact.id);

    this.contacts[index] = editContact;
  }

  constructor() {}
}

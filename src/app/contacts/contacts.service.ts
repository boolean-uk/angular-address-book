import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;

  public AddContact(c: Contact) {
    c.id = this.contacts.length + 1;
    this.contacts.push(c);
  }
  public EditContact(id: number, c: Contact) {
    const contact = this.GetContactById(id);
    if (contact) {
      contact.firstName = c.firstName;
      contact.lastName = c.lastName;
      contact.street = c.street;
      contact.city = c.city;
    }
  }
  public GetContactById(id: number | null) {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }
  // constructor() { }
}

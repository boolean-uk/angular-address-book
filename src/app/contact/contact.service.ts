import { Injectable } from '@angular/core';
import { Contact } from './model/contact';
import { CONTACTS } from './data/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  public contacts: Contact[] = CONTACTS;
  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }
  public AddContact(c: Contact) {
    c.id = this.contacts.length + 1;
    this.contacts.push(c);
    console.log(c);
    console.log(this.contacts);
  }

  public editContact(id: number | null, c: Contact) {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (contact) {
      contact.firstName = c.firstName;
      contact.lastName = c.lastName;
      contact.email = c.email;
      contact.phone = c.phone;
    }
    console.log(c);
    console.log(this.contacts);
  }
}
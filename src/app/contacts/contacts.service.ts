import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;
  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((c) => c.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }
  public AddContact(contact: Contact) {
    const maxId = this.contacts.reduce(
      (max, obj) => (obj.id > max ? obj.id : max),
      -Infinity
    );
    contact.id = maxId + 1;
    this.contacts.push(contact);
    console.log(contact);
    console.log(this.contacts);
  }
  public EditContact(contact: Contact) {
    const index = this.contacts.findIndex((c) => c.id === contact.id);
    this.contacts[index] = { ...contact };
    console.log(contact);
    console.log(this.contacts);
  }
}

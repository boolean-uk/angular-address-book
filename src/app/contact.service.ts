import { Injectable } from '@angular/core';
import { Contact } from './interfaces/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private id: number = 1;
  private contacts: Contact[] = [];

  addContact(contact: Contact) {
    if (contact) this.contacts.push(contact);
    this.id++;
  }

  getContact(id: number): Contact | null {
    console.log(id);
    console.log(this.contacts);
    const foundContact = this.contacts?.find((contact) => contact.id == id);
    console.log(foundContact);
    return foundContact !== undefined ? foundContact : null;
  }

  getId() {
    return this.id;
  }

  getContacts() {
    return this.contacts;
  }
}

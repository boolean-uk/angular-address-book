import { Injectable } from '@angular/core';
import { Contact } from './contact/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [];
  private nextContactId = 1; 

  constructor() {}

  addContact(contact: Contact) {
    contact.id = this.nextContactId++;
    this.contacts.push(contact);
  }

  getContacts() {
    return this.contacts;
  }

  getContactById(id: number) {
    return this.contacts.find((contact) => contact.id === id);
  }
}

import { Injectable } from '@angular/core';
import { contactData } from './data';
import { contact } from './contactType';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts = contactData

  getAllContacts() {
    return this.contacts
  }

  getContactById(id: number) {
    return this.contacts.find(contact => contact.id === id )
  }

  addContact(contact: contact) {
    this.contacts.push(contact)
  }

  updateContact(contact: contact) {
    this.contacts = this.contacts.map((c) => (c.id === contact.id ? { ...c, ...contact } : c))
  }
}

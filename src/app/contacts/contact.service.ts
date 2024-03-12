import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public contacts: Contact[] = CONTACTS
  
  public getContacts() : Contact[] {
    return this.contacts;
  }

  public getContactById(id: number | null) : Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id)

    return contact === undefined ? null : contact
  }

  public addContact(contact: Contact) {
    this.contacts.push(contact)
  }
}

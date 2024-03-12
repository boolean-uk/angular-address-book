import { Injectable } from '@angular/core';
import { CONTACTS, Contact } from './contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contact[] = CONTACTS;

  getContact(contactId: number): Contact | undefined {
    return this.contacts.find((contact) => contact.id === contactId);
  }

  createContact(name: string, email: string) {
    const newContact: Contact = {
      id: this.contacts.length + 1,
      name,
      email,
    };
    this.contacts.push(newContact);
    console.log("contacts: ", this.contacts)
  }
}

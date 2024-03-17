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

  createContact(
    firstName: string,
    lastName: string,
    email: string,
    street: string, 
    city: string
    ) {
    const newContact: Contact = {
      id: this.contacts.length + 1,
      firstName,
      lastName,
      email,
      street,
      city
    };
    this.contacts.push(newContact);
  }
}

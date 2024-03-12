import { Injectable } from '@angular/core';
import { CONTACTS, Contact } from './contacts/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contact: Contact[] = CONTACTS;

  getContact(id: string): Contact | undefined {
    return this.contact.find((c) => c.id.toString() === id);
  }
  createContact(name: string, surname: string, street: string, city: string) {
    const newContact: Contact = {
      id: this.contact.length + 1,
      name,
      surname,
      street,
      city,
    };

    this.contact.push(newContact);
  }
  constructor() {}
}

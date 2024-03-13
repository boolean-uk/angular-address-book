import { Injectable } from '@angular/core';
import { CONTACTS, Contact } from './contacts/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contact: Contact[] = CONTACTS;

  getContact(id: number): Contact | undefined {
    console.log(this.contact);
    return this.contact.find((c) => c.id === id);
  }
  createContact(name: string, surname: string, street: string, city: string) {
    const newContact: Contact = {
      id: this.contact.length + 1,
      name,
      surname,
      street,
      city,
    };

    console.log(CONTACTS);
    CONTACTS.push(newContact);
    console.log(CONTACTS);
  }
  constructor() {}
}

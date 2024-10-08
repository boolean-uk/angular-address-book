import { Injectable } from '@angular/core';
import { Contact } from './model/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  currentId: number = 1;
  #contacts: Contact[] = [
    {
      id: this.currentId++,
      firstName: 'Dave',
      lastName: 'Ames',
      city: 'Southampton',
      street: 'Southampton street 1',
    },
  ];

  getById(id: number): Contact | null {
    const contact = this.#contacts.find((contact) => contact.id === id);
    if (contact === undefined) return null;
    return contact;
  }

  getAll(): Contact[] {
    return this.#contacts;
  }

  add(contact: Contact) {
    this.#contacts.push(contact);
  }

  update(id: number, contact: Contact) {
    let existing = this.#contacts.find((c) => c.id === id)!;
    existing.firstName = contact.firstName;
    existing.lastName = contact.lastName;
    existing.city = contact.city;
    existing.street = contact.street;
  }
}

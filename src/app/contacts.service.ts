import { Injectable } from '@angular/core';

export interface Contact {
  id: number;
  firstname: string;
  lastname: string;
  street: string;
  city: string;
}

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts: Contact[] = [
    {
      id: 1,
      firstname: 'John',
      lastname: 'Doe',
      street: '123 Main St',
      city: 'New York',
    },
  ];

  constructor() {}

  addContact(
    firstname: string,
    lastname: string,
    street: string,
    city: string
  ) {
    const id = this.contacts.length + 1;
    const newUser = { id, firstname, lastname, street, city };
    this.contacts.push(newUser);
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
  }

  editContact(id: number, updatedContact: Contact) {
    const newContact = { ...updatedContact };
    this.contacts = this.contacts.map((contact) =>
      contact.id === id ? newContact : contact
    );
  }

  getContact(id: number) {
    return this.contacts.find((contact) => contact.id === id);
  }
}

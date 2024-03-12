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
  contacts: Contact[] = [];

  constructor() {
    const storedContacts = sessionStorage.getItem('contacts');
    if (storedContacts) {
      this.contacts = JSON.parse(storedContacts);
    }
  }

  addContact(
    firstname: string,
    lastname: string,
    street: string,
    city: string
  ) {
    const id = this.contacts.length + 1;
    const newUser = { id, firstname, lastname, street, city };
    this.contacts.push(newUser);
    this.saveContactsToSessionStorage();
  }

  deleteContact(id: number) {
    this.contacts = this.contacts.filter((contact) => contact.id !== id);
    this.saveContactsToSessionStorage();
  }

  editContact(id: number, updatedContact: Contact) {
    const newContact = { ...updatedContact };
    this.contacts = this.contacts.map((contact) =>
      contact.id === id ? newContact : contact
    );
    this.saveContactsToSessionStorage();
  }

  getContact(id: number) {
    return this.contacts.find((contact) => contact.id === id);
  }

  private saveContactsToSessionStorage() {
    sessionStorage.setItem('contacts', JSON.stringify(this.contacts));
  }
}

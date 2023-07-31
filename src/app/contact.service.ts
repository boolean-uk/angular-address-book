import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  _contacts: Contact[] = [];

  constructor() { }

  addContact(contact: Contact): void {
    this._contacts.push(contact)
  }

  getContacts(): Contact[] {
    return this._contacts
  }
}

export interface Contact {
  firstName: string;
  lastName: string;
  street: string;
  city: string;
}

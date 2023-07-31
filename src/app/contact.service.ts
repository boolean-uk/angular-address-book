import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContactService {
  _contacts: Contact[] = [];
  id: number = 0;

  constructor() { }

  addContact(contact: Contact): void {
    contact.id = this.id;
    this._contacts.push(contact)
    this.id++;
  }

  getContacts(): Contact[] {
    return this._contacts
  }

  getContactById(id: number): Contact {
    return this._contacts[id]
  }
}

export interface Contact {
  id?: number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
}

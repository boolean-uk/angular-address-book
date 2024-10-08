import { Injectable } from '@angular/core';

export interface Contact {
  id: number;
  firstName?: string;
  lastName?: string;
  street?: string;
  city?: string;
}

export interface ContactData {
  firstName?: string;
  lastName?: string;
  street?: string;
  city?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, firstName: 'John', lastName: 'Snow', street: '123 Main St', city: 'Anytown'},
    { id: 2, firstName: 'Jane', lastName: 'Doe', street: '456 Main St', city: 'Anytown'}
  ];

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: ContactData): void {
    const newId = this.contacts.length + 1;
    this.contacts.push({ ...contact, id: newId });
  }

  removeContact(id: number): void {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }
}

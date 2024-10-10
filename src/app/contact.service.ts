// contact.service.ts
import { Injectable } from '@angular/core';

interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', street: '123 Main St', city: 'Anytown' },
    { id: 2, firstName: 'Jane', lastName: 'Doe', street: '123 Main St', city: 'Anytown' },
    { id: 3, firstName: 'Jonas', lastName: 'Doe', street: '123 Main St', city: 'Anytown' },
    { id: 4, firstName: 'Jenny', lastName: 'Doe', street: '123 Main St', city: 'Anytown' }
  ];

  getContacts() {
    return this.contacts;
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  getContactById(id: number) {
    return this.contacts.find(contact => contact.id === id);
  }
}
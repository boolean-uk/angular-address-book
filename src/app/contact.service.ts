import { Injectable } from '@angular/core';

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  private contacts: Contact[] = [];

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContact(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }

  addContact(contact: Contact): void {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
  }
}
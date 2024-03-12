import { Injectable } from '@angular/core';
import { CONTACTS, Contact } from './contacts/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts: Contact[] = CONTACTS;

  getUser(contactId: number): Contact | undefined {
    return this.contacts.find((contact) => contact.id === contactId);
  }

  createUser(firstname: string, lastname: string, street: string, city: string) {    
    const newUser: Contact = {
      id: this.contacts.length + 1,
      firstname,
      lastname,
      street,
      city
    };
    this.contacts.push(newUser);
  }

  editUser(contactId: number, newData: Partial<Contact>): boolean {
    const index = this.contacts.findIndex((contact) => contact.id === contactId);
    if (index !== -1) {
      this.contacts[index] = { ...this.contacts[index], ...newData };
      return true; 
    }
    return false;
  }
}
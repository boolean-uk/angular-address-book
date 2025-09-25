import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { contacts } from './data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contact[] = [...contacts];
  private nextId = 2;

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContactById(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }

  addContact(contact: Omit<Contact, 'id'>): Contact {
    const newContact: Contact = {
      ...contact,
      id: this.nextId++
    };
    this.contacts.push(newContact);
    return newContact;
  }

  updateContact(id: number, contact: Omit<Contact, 'id'>): Contact | null {
    const index = this.contacts.findIndex(c => c.id === id);
    if (index !== -1) {
      this.contacts[index] = { ...contact, id };
      return this.contacts[index];
    }
    return null;
  }

  deleteContact(id: number): boolean {
    const index = this.contacts.findIndex(c => c.id === id);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      return true;
    }
    return false;
  }
}
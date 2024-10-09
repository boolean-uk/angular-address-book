import { Injectable } from '@angular/core';
import { Contact } from './models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];
  private nextId = 1;

  constructor() {
    this.contacts = [
      { id: this.nextId++, firstName: "Frank", lastName: "Roger", street: "Lives there", city:"Oslo"}, 
      { id: this.nextId++, firstName: "Ruud", lastName: "Olfsen", street: "Holmenkolltoppen", city:"Oslo"},
    ]
  }

  getContacts(): Contact[] {
    return this.contacts;
  }

  // Takes in id, a number, and returns either a contact or undefined.
  getContact(id: number): Contact | undefined {
    return this.contacts.find((contact) => contact.id === id);
  }

  addContact(contact: Contact): void {
    contact.id = this.nextId++;
    this.contacts.push(contact);
  }

  updateContact(updatedContact: Contact): boolean {
    const index = this.contacts.findIndex((contact) => contact.id === updatedContact.id);
    if (index !== -1) {
      this.contacts[index] = updatedContact;
      return true;
    }
    return false;
  }

}

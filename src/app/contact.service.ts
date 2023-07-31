import { Injectable } from '@angular/core';
import { Contact } from 'src/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [];

  constructor() {
    this.contacts = [
      {
        firstName: 'John',
        lastName: 'Doe',
        street: '123 Main St',
        city: 'New York',
      },
    ];
  }

  getAllContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  updateContact(index: number, updatedContact: Contact): void {
    if (index >= 0 && index < this.contacts.length) {
      this.contacts[index] = updatedContact;
    }
  }

  deleteContact(index: number): void {
    if (index >= 0 && index < this.contacts.length) {
      this.contacts.splice(index, 1);
    }
  }
  getContactById(index: number) {
    return this.contacts[index];
  }
}

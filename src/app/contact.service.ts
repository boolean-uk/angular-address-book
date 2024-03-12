// contact.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts = [
    {
      id: 1,
      firstName: 'Joe',
      lastName: 'Blogs',
      street: '123 Street',
      city: 'City',
    },
  ];

  getContacts() {
    return this.contacts;
  }

  addContact(contact: any) {
    this.contacts.push(contact);
  }
  getContactById(id: number) {
    return this.contacts.find((contact) => contact.id === id);
  }

  updateContact(updatedContact: any) {
    const index = this.contacts.findIndex(
      (contact) => contact.id === updatedContact.id
    );
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    } else {
      console.error('Contact not found:', updatedContact);
    }
  }
}

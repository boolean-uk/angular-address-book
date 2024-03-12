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
    // Add more contacts here
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
}

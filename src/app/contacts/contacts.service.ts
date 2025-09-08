//CONTACT SERVICE
import { Injectable } from '@angular/core';
import { Contact } from './contacts.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, name: 'Alice Smith', email: 'alice@example.com', phone: '123-456-7890' },
    { id: 2, name: 'Bob Johnson', email: 'bob@example.com', phone: '234-567-8901' },
    { id: 3, name: 'Charlie Brown', email: 'charlie@example.com', phone: '345-678-9012' }
  ];

  getContacts(): Contact[] {
    return this.contacts;
  }

addContact(contact: Contact) {
  contact.id = this.contacts.length + 1;
  this.contacts.push(contact);
}

deleteContact(id: number) {
  this.contacts = this.contacts.filter(c => c.id !== id);
}
}
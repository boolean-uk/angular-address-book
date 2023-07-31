import { Injectable } from '@angular/core';
import { Contact } from 'src/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];

  constructor() { }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }
  getContacts(): Contact[] {
    return this.contacts;
  }
  getContactById(id: string): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }
}

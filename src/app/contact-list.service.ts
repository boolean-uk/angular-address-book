import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactListService {
  private contactsKey = 'contacts';
  private contacts: Contact[] = [];

  constructor() {
    this.loadContacts();
  }
  private loadContacts(): void {
    const savedContacts = localStorage.getItem(this.contactsKey);
    if (savedContacts) {
      this.contacts = JSON.parse(savedContacts);
    }
  }
  private saveContacts(): void {
    localStorage.setItem(this.contactsKey, JSON.stringify(this.contacts));
  }
  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(newContact: Contact): void {
    this.contacts.push(newContact);
    this.saveContacts();
  }
  getContactById(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }
}
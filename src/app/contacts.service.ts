import { Injectable } from '@angular/core';
import { Contact } from './contacts/models/contact';
import { CONTACTS } from './data/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: Contact[] = CONTACTS;

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }
  public getAllContacts(): Contact[] {
    return this.contacts;
  }
  public addNewContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  public updateTheContact(contact: Contact): void {
    const index = this.contacts.findIndex((item) => item.id === contact.id);
    if (index !== -1) {
      this.contacts[index] = contact;
    }
  }
}

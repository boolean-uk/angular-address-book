import { Injectable } from '@angular/core';
import { Contact } from './contacts/models/contact';
import { CONTACTS } from './contacts/data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = CONTACTS;
  private currentId: number = this.contacts.length;

  public getAllContacts(): Contact[] {
    return this.contacts;
  }

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }

  public addContact(contact: Contact) {
    this.currentId++
    this.contacts.push({ ...contact, id: this.currentId})
  }

  public updateContact(id: number, contact: Contact): Contact | string {
    let contactToUpdate = this.contacts.at(id-1);
    if (contactToUpdate) {
      contactToUpdate = contact;
      this.contacts[id-1] = contact
      return contact;
    }
    return "No contact found here"
  }
}

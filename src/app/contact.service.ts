import { Injectable } from '@angular/core';
import { Contact } from './contacts/models/contact';
import { CONTACTS } from './contacts/data/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private currentId: number = 2; // Starting at 2 since we have two example data contacts already
  private contacts: Contact[] = CONTACTS;

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contacts) => contacts.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }

  public getAllContacts(): Contact[] {
    return this.contacts;
  }

  public addContact(contact: Contact) {
    const mayExist = this.contacts.find((c) => c.id === contact.id);
    if (mayExist === undefined) {
      this.currentId++;
      this.contacts.push({ ...contact, id: this.currentId });
    } else {
      this.contacts[this.contacts.indexOf(mayExist)] = contact;
    }
  }

  public updateContact(contact: Contact) {}
}

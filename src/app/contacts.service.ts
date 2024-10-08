import { Injectable } from '@angular/core';
import { Contact } from './contact/models/contact';
import { CONTACTS } from './contact/data/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contacts: Contact[] = CONTACTS;
  private currentId: number = this.contacts.length;

  public getAllContacts(): Contact[] {
    return this.contacts;
  }

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    return contact ? contact : null;
  }

  public addContact(contact: Contact): void {
    contact.id = ++this.currentId;
    this.contacts.push({ ...contact, id: this.currentId });
  }

  public updateContact(contact: Contact): void {
    const index = this.contacts.findIndex((c) => c.id === contact.id);
    this.contacts[index] = contact;
  }
}

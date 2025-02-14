import { Injectable } from '@angular/core';
import Contact from '../models/contact';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;

  public addContact(contact: Contact) {
    contact.id =
      this.contacts.reduce((value, x) => (value > x.id! ? value : x.id!), 0) +
      1;
    this.contacts.push(contact);
  }

  public updateContact(updatedContact: Contact) {
    const index = this.contacts.findIndex(
      (contact) => contact.id === updatedContact.id
    );
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
  }

  public GetContactById(id: number): Contact | undefined {
    return this.contacts.find((contact) => contact.id === id);
  }
}

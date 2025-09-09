import { Injectable } from '@angular/core';
import { Contact } from './models/contacts';
import { CONTACTS } from '../data/contacts';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;

  public AddContact(c: Contact) {
  c.id = this.contacts.length + 1;
  this.contacts.push(c);
  }

  public GetContactById(id: number | null) {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }

  public UpdateContact(updated: Contact) {
    const idx = this.contacts.findIndex(c => c.id === updated.id);
    if (idx !== -1) {
      this.contacts[idx] = updated;
    }
  }
}
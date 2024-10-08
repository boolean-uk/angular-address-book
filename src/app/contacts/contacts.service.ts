import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacts : Contact[] = CONTACTS;

  constructor() { }

  public addContact(c: Contact) {
    c.id = this.contacts.length + 1;
    this.contacts.push(c)
  }

  public getContact(id: number|null) {
    const contact = this.contacts.find((c) => c.id === id)
    if (!contact) {
      return null;
    }
    return contact
  }
}

import { Injectable } from '@angular/core';
import { Contact } from 'src/types';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  public contacts: Array<Contact> = CONTACTS;
  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((c) => c.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }
  public AddContact(c: Contact) {
    c.id = this.contacts.reduce((acc, cur) => (cur.id > acc ? cur.id : acc), 0) + 1;
    this.contacts.push(c);
  }
}
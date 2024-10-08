import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
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
    const contact = this.contacts.find((c) => c.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }
}

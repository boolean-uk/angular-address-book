import { Injectable } from '@angular/core';
import { CONTACTS } from '../data/contacts';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS

  public Add(c: Contact) {
    c.id = this.contacts.length + 1;
    this.contacts.push(c)
  }

  public GetById(id:number | null) {
    const contact = this.contacts.find((c) => c.id === id)
    if (!contact) {
      return null;
    }
    return contact;
  }
}

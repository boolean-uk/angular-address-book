import { Injectable } from '@angular/core';
import { CONTACTS } from '../data/data';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class AdressbookService {

  constructor() { }
  public contacts:Contact[] = CONTACTS

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }
  public AddContact(c: Contact) {
    c.id = this.contacts.length + 1;
    this.contacts.push(c);
    console.log(c);
    console.log(this.contacts);
  }
}

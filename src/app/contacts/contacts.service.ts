import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;
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

  public EditContact(c: Contact){
    const index = this.contacts.map(c => c.id).indexOf(c.id);
    if (index !== -1){
      this.contacts[index] = c;
    } else {
      console.error('Missing contact, cannot update');
    }
    console.log(c);
    console.log(this.contacts);
  };
}

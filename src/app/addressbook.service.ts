import { Injectable } from '@angular/core';
import { Contact } from './addressbook/models/contact'
import { CONTACTS } from './data/addressbook'


@Injectable({
  providedIn: 'root'
})
export class AddressbookService {
  private _currentId: number = 1;
  public contacts: Contact[] = CONTACTS;
  //constructor() { }

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((c) => c.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }

  public getAllContacts(): Contact[] {
    return this.contacts;
  }

  public addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  public updateContact(updatedContact: Contact) {
    this.contacts = this.contacts.map((contact) =>
      contact.id == updatedContact.id ? updatedContact : contact
    );    
  }
}
 
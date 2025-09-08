import { Injectable } from '@angular/core';
import { Contact } from '../addressbook/model/addressbook';
import { CONTACTS } from '../addressbook/data/contact';

@Injectable({
  providedIn: 'root'
})
export class AddressbookService {
  private contacts: Contact[] = CONTACTS
  private currentId: number = this.contacts.length

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id)
    return !contact ? null : contact
  }

  public getAllContacts(): Contact[] {
    return this.contacts
  }

  public addContact(contact: Contact) {
    this.currentId++;
    this.contacts.push({...contact, id: this.currentId});
  }
  constructor() { }
}

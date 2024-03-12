import { Injectable } from '@angular/core';
import { Contact } from './contacts/models/contact';
import { ContactsData } from './data/ContactsData';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // constructor() { }
  private currentId: number = 1;
  public contacts: Contact[] = ContactsData;

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);

    if(!contact) {
      return null;
    } 
    return contact;
  }

  public getAllContacts(): Contact[] {
    return this.contacts
  }

  public addContact(contact: Contact) {
    this.contacts.push(contact)
  }
}

import { Injectable } from '@angular/core';
import { Contact } from './contacts/models/contact';
import { CONTACTS } from './data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private currentId: number = 1;
  public contacts: Contact[] = CONTACTS;

    public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id)
    if (!contact) {
      return null;
    }
    return contact;
  }

  public updateContact(updatedContact: Contact) {
    this.contacts = this.contacts.map((contact) =>
      contact.id == updatedContact.id ? updatedContact : contact
    );    
  }

  public getAllContacts(): Contact[] {
    return this.contacts;
  }

  public addContact(contact: Contact) {
    this.contacts.push(contact);
  }
}

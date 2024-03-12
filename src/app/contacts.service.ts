import { Injectable } from '@angular/core';
import { Contact } from './contacts/models/contact';
import { CONTACTS } from './contacts/data/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private currentId: number = 1; //set current id which will be overridden
  public contacts: Contact[] = CONTACTS;

  public getContactById(id: number | null): Contact | null { //konstiga = returen
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }

  public getAllContacts(): Contact[] {
    return this.contacts;
  }

  //addContact method
  public addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  //edit contact method
  public editContact(updatedContact: Contact) {
    const index = this.contacts.findIndex(
      (contact) => Number(contact.id) === Number(updatedContact.id)
    );
    this.contacts[index] = updatedContact;
  }
}

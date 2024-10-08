import { CONTACTS } from "./contacts/data/contacts";
import { Contact } from "./contacts/models/contact";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  //private currentId: number = 1;
  private contacts: Contact[] = CONTACTS;
  private currentId: number = this.contacts.length;


  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }

  public getAllContacts(): Contact[] {
    return this.contacts;
  }

  public addContact(contact: Contact) {
    this.currentId++;
    this.contacts.push({ ...contact, id: this.currentId });
  }

  public editContact(contact: Contact) {
    const contactToEdit = this.contacts.find((contactEdit) => contactEdit.id === contact.id);
    if (!contactToEdit) {
      return null;
    }
    const index = this.contacts.indexOf(contactToEdit);
    this.contacts[index] = contact;
    return contact;
  }
}

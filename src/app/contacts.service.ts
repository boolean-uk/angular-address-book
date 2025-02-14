import { Injectable } from '@angular/core';
import { Contact } from './contacts/contact';
import { CONTACTS } from './contacts/data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contact[] = CONTACTS;
  private currentId: number = this.contacts.length;

  // constructor() { }

  public getAllContacts(): Contact[] {
    return this.contacts;
  }

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find(c => c.id == id);
    return contact ? contact : null;
  }

  public addContact(contact: Contact): void {
    this.contacts.push({...contact, id: this.currentId++})
  }

  public deleteContactWithId(id: number): void {
    this.contacts = this.contacts.filter(c => c.id != id)
  }

  public editContact(id: number | null, updatedValues: Contact): void {
    const contact = this.contacts.find(c => c.id == id);
    if (contact) {
      contact.firstName = updatedValues.firstName;
      contact.lastName = updatedValues.lastName;
      contact.street = updatedValues.street;
      contact.city = updatedValues.city;
    }
  }
}

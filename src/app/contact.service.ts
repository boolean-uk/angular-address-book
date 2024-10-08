import { CONTACTS } from './contacts/data/contacts';
import { Contacts } from './contacts/models/contact'; 
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contacts[] = CONTACTS;
  private currentId: number = this.contacts.length;

  public getContactById(id: number | null): Contacts | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }

  public getAllContacts(): Contacts[] {
    return this.contacts;
  }

  public addContact(car: Contacts) {
    this.currentId++; 
    this.contacts.push({ ...car, id: this.currentId });
  }
}

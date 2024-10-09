import { Injectable } from '@angular/core';
import { Contact } from './contacts/models/contact'
import { CONTACTS } from './contacts/data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private currentId: number = 3;
  private contacts: Contact[] = CONTACTS;

  public getById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }

  public getAll(): Contact[] {
    return this.contacts;
  }

  public addContact(contact: Contact) {
    this.currentId++; // Get a new value each time we add a car
    this.contacts.push({ ...contact, id: this.currentId }); // Set that value in the object we push
  }
}

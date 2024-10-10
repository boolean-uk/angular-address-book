import { Injectable } from '@angular/core';
import { Contact } from './model/contact';
import { CONTACTS } from './data/contacts';

@Injectable({
  providedIn: 'root',
})

export class ContactsService {
  private contacts: Contact[] = CONTACTS;

  public getContacts(): Contact[] {
    return this.contacts;
  }

  public addContact(contact: Contact): void {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
  }

  public getContactById(id: number): Contact | null {
    return this.contacts.find(contact => contact.id === id) || null;
  }

}

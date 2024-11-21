import { Injectable } from '@angular/core';
import { Contact } from '../contacts/model';
import { CONTACTS } from '../contacts/data';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: Contact[] = CONTACTS;

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContact(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }

  addContact(contact: Contact): void {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
  }

  updateContact(contact: Contact): boolean {
    const index = this.contacts.findIndex(c => c.id === contact.id);
    if (index !== -1) {
      this.contacts[index] = contact;
      return true;
    }
    return false;
  }
}

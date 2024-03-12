import { Injectable } from '@angular/core';
import { CONTACTS, Contact } from './contacts/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts: Contact[] = CONTACTS;

  getContact(contactId: number): Contact | undefined {
    return this.contacts.find((contact) => contact.id === contactId);
  }
}

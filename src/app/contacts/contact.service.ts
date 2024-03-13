import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import {CONTACTS} from '../data/contacts';

@Injectable({
    providedIn: 'root',
})
export class ContactService{
    public contacts: Contact[] = CONTACTS;
    public getContactById(id: number | null): Contact | null {
        const contact = this.contacts.find((contact) => contact.id === id);
        if (!contact) {
          return null;
        }
      return contact;
    }

    public AddContact(c: Contact) {
      c.id = this.contacts.length + 1;
      this.contacts.push(c);
      console.log(c);
      console.log(this.contacts);
    }

    public updateContact(updatedContact: Contact): void {
      const index = this.contacts.findIndex(contact => contact.id === updatedContact.id);
      if (index !== -1) {
        this.contacts[index] = { ...updatedContact }; // Update the contact in the array
      }
    }
}


import { Injectable } from '@angular/core';
import { Contact } from './contact/models/contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private currentId: number = 1;
  public contacts: Contact[] = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      street: '123 Main St',
      city: 'Anytown',
    },
    {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      street: '456 Elm St',
      city: 'Othertown',
    },
  ];

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contacts) => contacts.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }

  public getAllContacts(): Contact[] {
    return this.contacts;
  }

  public addContact(contact: Contact) {
    this.contacts.push(contact);
  }

  public updateContact(updatedContact: Contact) {
    this.contacts = this.contacts.map((contact) =>
      contact.id == updatedContact.id ? updatedContact : contact
    );
  }
}

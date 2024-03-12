import { Injectable } from '@angular/core';

export type Contact = {
  id: number,
  firstName: string,
  lastName: string,
  street: string,
  city: string
};

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = []
  getContact(contactId: number): Contact | undefined
  {
    return this.contacts.find((contact) => contact.id === contactId)
  }

  addContact(firstName: string, lastName: string, street: string, city: string): void
  {
    const newContact: Contact =
    {
      id: this.contacts.length + 1,
      firstName,
      lastName,
      street,
      city
    }
    this.contacts.push(newContact)
  }
}

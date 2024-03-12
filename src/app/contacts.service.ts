import { Injectable } from '@angular/core';

export type Contact = {
  id: number,
  firstName: string,
  lastName: string,
  street: string,
  city: string
};

export const CONTACTS: Contact[] = [
  {
    id: 1,
    firstName: 'Klara',
    lastName: 'Andersson',
    street: "Viby",
    city: "Sollentuna"
  }
]

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = CONTACTS
  getContact(contactId: number): Contact | undefined
  {
    return this.contacts.find((contact) => contact.id === contactId)
  }

  editContact(id: number, firstName: string, lastName: string, street: string, city: string): void
  {
    const newContact = 
    {
      id: id,
      firstName,
      lastName,
      street,
      city
    }

    const tmpContacts = this.contacts.map((contact) => 
    {
      if (contact.id === newContact.id) return newContact
      return contact
    })
    this.contacts = tmpContacts
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

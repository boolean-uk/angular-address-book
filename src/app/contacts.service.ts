import { Injectable } from '@angular/core'
import { CONTACTS, Contact } from './contacts/contacts'

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS

  // getContacts(): Contact[] {
  //   return this.contacts
  // }

  getContact(contactId: number): Contact | null {
    const foundContact = this.contacts.find((c) => c.id === contactId)
    return foundContact || null
  }

  addContact(
    firstName: string,
    lastName: string,
    street: string,
    city: string
  ): void {
    const newContact: Contact = {
      id:
        this.contacts.length > 0
          ? this.contacts[this.contacts.length - 1].id + 1
          : 1,
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
    }

    console.log('new contact id', newContact.id)

    this.contacts.push(newContact)
  }
}

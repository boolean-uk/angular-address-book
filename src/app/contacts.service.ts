import { Injectable } from '@angular/core'
import { CONTACTS, Contact } from './contacts/contacts'
import { last } from 'rxjs'

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS

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

    this.contacts.push(newContact)
  }

  updateContact(
    contactId: number,
    firstName: string,
    lastName: string,
    street: string,
    city: string
  ): void {
    const updatedContact: Contact = {
      id: contactId,
      firstName: firstName,
      lastName: lastName,
      street: street,
      city: city,
    }

    const contactIndexToUpdate = CONTACTS.findIndex((c) => c.id === contactId)
    if (contactIndexToUpdate === -1) {
      return
    }

    CONTACTS[contactIndexToUpdate] = updatedContact
  }
}

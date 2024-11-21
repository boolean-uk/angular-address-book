import { Injectable } from '@angular/core';
import { CONTACTS, Contact, ContactArray } from './layout/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts: ContactArray = CONTACTS;

  getContact(contactId: number): Contact | undefined {
    return this.contacts.find((contact) => contact.id === contactId);
  }

  createContact(
    firstName: string,
    lastName: string,
    street: string,
    city: string
  ) {
    const newContact: Contact = {
      id: this.contacts.length + 1,
      firstName,
      lastName,
      street,
      city,
    };
    this.contacts.push(newContact);
  }

  updateContact(
    contactId: number,
    firstName: string,
    lastName: string,
    street: string,
    city: string
  ) {
    var upContact =
      this.contacts.find((contact) => contact.id === contactId) || null;

    if (upContact === null) {
      console.log('Contact not found!');
    } else {
      if (firstName !== '') upContact.firstName = firstName;
      if (lastName !== '') upContact.lastName = lastName;
      if (street !== '') upContact.street = street;
      if (city !== '') upContact.city = city;

      const newContact: Contact = {
        id: upContact.id,
        firstName: upContact.firstName,
        lastName: upContact.lastName,
        street: upContact.street,
        city: upContact.city,
      };

      this.contacts = this.contacts.map((item) => {
        console.log(item.id, contactId);
        if (item.id === contactId) {
          console.log(newContact);
          return { ...item, ...newContact };
        }
        return item;
      });
    }
  }
}

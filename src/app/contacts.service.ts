import { Injectable } from '@angular/core';
import { CONTACTS, Contact } from './contacts/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  contacts: Contact[] = CONTACTS;

  getContacts(): Contact[] | undefined {
    // Get the contacts array
    // Input: n/a
    // Return: List of Contact or undefined
    return this.contacts;
  }
  getContact(contactId: number): Contact | undefined {
    // Get the object with provided id from contacts array
    // Input: contactId (number)
    // Return: Contact or undefined
    return this.contacts.find((contact) => contact.id === contactId);
  }
  createContact(name: string, phoneNr: string) {
    // Create an object with provided data and push into contacts array
    // Input: name (string), phoneNumber (string)
    // Return: n/a
    const newContact: Contact = {
      id: this.contacts.length + 1,
      name,
      phoneNr,
    };
    this.contacts.push(newContact);
    console.log(this.contacts);
  }
  updateContact(id: number, name: string, phoneNr: string) {
    // Update an existing object with provided data and update contacts array
    // Input: id (number), name (string), phoneNumber (string)
    // Return: n/a
    const contact = this.getContact(id);
    if (contact !== undefined) {
      contact.name = name;
      contact.phoneNr = phoneNr;
    } else {
      console.log('No contact with id: ', id, ' found');
    }
  }
}

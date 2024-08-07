import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = [
    new Contact('Ken', 'Pawlowski', 'Bohaterow 12', 'Warsaw', 'ken@boolean.co.uk'),
    new Contact('Barbie', 'Sperkach', 'Warszawska 45', 'Warsaw', 'barbie@boolean.co.uk'),
  ];

  getContacts(): Contact[] {
    return this.contacts;
  }

  getContactByNames(firstName: string, lastName: string): Contact | undefined {
    return this.contacts.find((contact) => {
      return contact.firstName === firstName && contact.lastName === lastName;
    });
  }

  addContact(contact: Contact) {
    this.contacts.push(contact);
  }
}

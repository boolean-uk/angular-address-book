import { Injectable } from '@angular/core';
import { Contact } from 'src/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    {
      id: '0',
      firstName: 'Adam',
      lastName: 'Kowalski',
      street: 'Dluga',
      city: 'Warszawa'
    },
    {
      id: '1',
      firstName: 'Jan',
      lastName: 'Kowalski',
      street: 'Chmielna',
      city: 'Warszawa'
    },
    {
      id: '2',
      firstName: 'Anna',
      lastName: 'Nowak',
      street: 'Polska',
      city: 'Krakow'
    },
  ];

  constructor() { }

  addContact(contact: Contact): void {
    this.contacts.push(contact);
  }
  getContacts(): Contact[] {
    return this.contacts;
  }
  getContactById(id: string): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }
}

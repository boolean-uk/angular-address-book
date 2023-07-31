import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private contactsList: Contact[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      street: 'Lincoln 2',
      city: 'San Francisco',
      id: 'da12384e5sda434x',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      street: 'Main Street',
      city: 'New York',
      id: 'sadz49edxcv2432',
    },
    {
      firstName: 'Bob',
      lastName: 'Johnson',
      street: 'Oak Avenue',
      city: 'Los Angeles',
      id: 'asde34dcxvzsc23r',
    },
  ];
  constructor() {}

  setData(data: Contact) {
    const contactWithId = { ...data, id: uuidv4() };
    this.contactsList = [...this.contactsList, contactWithId];
  }

  getData() {
    return this.contactsList;
  }

  getContactById(id: string): Contact {
    return this.contactsList.find((contact) => contact.id === id)!;
  }
}

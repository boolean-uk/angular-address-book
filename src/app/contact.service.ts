import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  contacts = [
    {
      id: 1,
      firstName: 'Bruno',
      lastName: 'Fernandes',
      street: 'Trash street',
      city: 'Manchester',
    }, 
    {
      id: 2,
      firstName: 'Alexander',
      lastName: 'Isak',
      street: 'Huvudstagatan',
      city: 'Solna',
    },
  ];

  constructor(private router: Router) {}

  getContacts() {
    return this.contacts;
  }

  addContact(contact: any) {
    contact.id = this.contacts.length + 1; 
    this.contacts.push(contact);
  }

  getContactById(id: number) {
    return this.contacts.find(contact => contact.id === id);
  }

  updateContact(id: number, updatedContact: any) {
    const contactIndex = this.contacts.findIndex(contact => contact.id === id);
    if (contactIndex !== -1) {
      this.contacts[contactIndex] = { id, ...updatedContact };
    }
  }
  
}

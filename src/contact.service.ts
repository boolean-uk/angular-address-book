import { Injectable } from '@angular/core';
import { Contact } from './model/Contact';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  public currentId: number = 1;
  private contacts: Contact[] = [
    {
      id: this.currentId++,
      firstName: 'Dave',
      lastName: 'Ames',
      city: 'Southampton',
      street: 'Southampton street 1',
    },
  ];

  public getById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) return null;
    return contact;
  }

  public getAll(): Contact[] {
    return this.contacts;
  }

  public add(contact: Contact) {
    this.contacts.push(contact);
    console.log(this.contacts);
  }
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Contact {
  id: number;
  name: string;
  street: string;
  city: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [
    { id: 1, name: 'John Doe', street: '123 Main St', city: 'Anytown'},
    { id: 2, name: 'Jane Doe', street: '456 Main St', city: 'Anytown'}
  ];

  getContacts(): Contact[] {
    return this.contacts;
  }

  addContact(contact: Contact): void {
    const newId = this.contacts.length + 1;
    this.contacts.push({ ...contact, id: newId });
  }

  removeContact(id: number): void {
    this.contacts = this.contacts.filter(contact => contact.id !== id);
  }
}

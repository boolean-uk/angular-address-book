import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root',
})
export class ContactServiceService {
  private _contacts: Contact[] = [];
  private _contactSubject = new BehaviorSubject<Contact[]>([]);
  constructor() {}

  addContact(contact: Contact) {
    this._contacts.push(contact);
    this._contactSubject.next(this._contacts);
  }
  getContacts() {
    return this._contactSubject.asObservable();
  }

  getContactById(id: string) {
    return this._contacts.find((contact) => contact.id === id);
  }
}

export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  street: string;
  city: string;
}

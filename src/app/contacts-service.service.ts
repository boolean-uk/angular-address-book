import { Injectable } from '@angular/core';
import { Contact } from './layout/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsServiceService {
  private _contacts: Contact[] = [];
  private _nextId: number = 0;
  constructor() { }

  get contacts(): Contact[] {
    return this._contacts;
  }

  get nextId(): number {
    return this._nextId;
  }
  
  addContact(contact: Contact): void {
    this._contacts.push(contact);
    this._nextId++;
  }

  getContact(id: number): Contact | null {
    if (this._contacts.includes(this._contacts[id])) {
      return this._contacts[id];
    }
    return null;
  }
}

import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { CONTACTS } from '../Data/contacts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacts: Contact[] = CONTACTS;
  private nextId: number;

  constructor() { 
    this.nextId = this.contacts.length  + 1;
  }

  public addContact(contact: Contact): void {
    contact.id = this.nextId++;
    this.contacts.push(contact);

  }

  getContactById(id: number): Observable<Contact | undefined> {
    const contact = this.contacts.find(c => c.id === id);
    return of(contact);
  }
  public editContact(updatedContact: Contact): void {
    const index = this.contacts.findIndex(c => c.id === updatedContact.id);
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
  }
}

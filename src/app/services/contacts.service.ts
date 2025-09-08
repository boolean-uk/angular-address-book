import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { CONTACTS } from '../data/contacts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;
  private lastId: number = this.contacts.length

  public AddContact(contact: Contact): void {
    this.lastId++;
    contact.id = this.lastId;
    this.contacts.push(contact);
  }

  GetContactById(id: number): Observable<Contact | undefined> {
    const contact = this.contacts.find((c) => c.id === id);
    return of(contact)
  }

  public EditContact(editContact: Contact): void {
    const contact = this.contacts.find((c) => c.id === editContact.id);
    if (contact === undefined) return; 
    contact.name = editContact.name;
    contact.street = editContact.street;
    contact.city = editContact.city
  }

}

import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { CONTACTS } from '../data/contacts';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;

  public AddContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  public GetContactById(id: number): Observable<Contact | undefined> {
    const contact = this.contacts.find(contact => contact.id === id);
    return of(contact);
  }

  public updateContact(updatedContact: Contact): Observable<void> {
    const index = this.contacts.findIndex(contact => contact.id === updatedContact.id);
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    }
    return of(undefined);
  }
}
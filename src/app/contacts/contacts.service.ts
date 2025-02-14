import { Injectable } from '@angular/core';
import { Contact } from "./models/contact"
import { CONTACTS } from "./data/contacts"
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;

  public AddContact(contact: Contact): void {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
  }

  GetContactById(id: number): Observable<Contact | undefined> {
    const beer = this.contacts.find((b) => b.id === id);
    return of(beer);
  }

  public EditContact(updatedContact: Contact): void {
    const contactId = this.contacts.findIndex(
      (contact) => contact.id === updatedContact.id
    );
    if (contactId !== -1)
      this.contacts[contactId] = updatedContact;
  }
}

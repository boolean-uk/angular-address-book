import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Contact } from 'src/interface/contact';
import { CONTACTS } from 'src/data/contactData';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;

  public AddContact(contact: Contact): void {
    this.contacts.push(contact);
  }
  public GetContactById(id: number): Observable<Contact | undefined> {
    const contact = this.contacts.find((b) => b.id === id);
    return of(contact);
  }
  public EditContact(editedContact: Contact) {
    const contact = this.contacts.findIndex((b) => b.id === editedContact.id);
    this.contacts[contact] = editedContact;
  }
}
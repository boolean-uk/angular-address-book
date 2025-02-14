import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';
import { CONTACT } from '../data/contacts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  public contacts: Contact[] = CONTACT;

  public AddContact(contact: Contact): void {
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
  }
  public GetContactById(id: number): Observable<Contact | undefined> {
    const contact = this.contacts.find((contact) => contact.id === id);
    return of(contact);
  }
}

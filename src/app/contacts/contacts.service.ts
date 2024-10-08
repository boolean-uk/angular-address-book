import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACTS } from '../data/contacts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacts: Contact[] = CONTACTS;

  public AddContact(c: Contact) {
    c.id = this.contacts.length + 1;
    this.contacts.push(c);
  }

  public GetContactById(id: number | null) : Observable<Contact | null> {
    const contact = this.contacts.find((c) => c.id === id);
  
    return of(contact ? contact : null);
  }

  public UpdateContact(c: Contact) : void{
    const index = this.contacts.findIndex(contact => contact.id === c.id);
    if (index > -1) {
      this.contacts[index] = c;
    }
  }
}

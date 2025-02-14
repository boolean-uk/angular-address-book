import { Injectable } from '@angular/core';
import { Contact } from '../models/contact';
import { CONTACTS } from '../data/contacts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacts: Contact [] = CONTACTS;
  
  public AddContact( contact: Contact):void {
    this.contacts.push(contact);
  }

  GetContactById(id: number): Observable<Contact | undefined> {
    const contact = this.contacts.find((b) => b.id === id);
    return of(contact);
  }

  public EditContact(contact: Contact, id: number): void {
    const index = this.contacts.findIndex(x => x.id === id);
    if (index !== -1) {
      this.contacts[index] = contact; 
    }
  }
  

}

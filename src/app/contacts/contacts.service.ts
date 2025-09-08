import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';

import { Contact } from './models/contact';
import { CONTACTS } from './data/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;
  private lastId:number;

  constructor(){
    this.lastId = this.contacts.length > 0 ? this.contacts[this.contacts.length-1].id  ?? 0: 0;
  }

  public AddContact(contact: Contact): void {
    this.lastId++;
    contact.id = this.lastId;
    console.log(contact)
    this.contacts.push(contact);
  }
  GetContactById(id: number): Observable<Contact | undefined> {
    const contact = this.contacts.find((b) => b.id === id);
    return of(contact);
  }

  
}
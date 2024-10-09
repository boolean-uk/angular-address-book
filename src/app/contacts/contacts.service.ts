import { Injectable, OnInit } from '@angular/core';
import { Contact } from '../models/contact';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService implements OnInit{

  public contacts: Contact[] = CONTACTS;
  
  ngOnInit(): void {
    console.log('ExampleComponent initialized');
  }

  public AddContact(c: Contact) {
    c.id = this.contacts.length + 1;
    this.contacts.push(c);
  }

  public GetContactById(id: number | null) {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }

  public updateContact(id: number, updatedContact: Contact): boolean {
    const index = this.contacts.findIndex((contact) => contact.id === id);
    if (index === -1) {
      return false;
    }
    this.contacts[index] = { ...this.contacts[index], ...updatedContact };
    return true;
  }
}

import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacts:Contact[] = CONTACTS;

  public AddContact(c:Contact) {
    let id = 1;
    // Generate new Unique ID
    if (this.contacts.length > 0) {
      let maxId = this.contacts[0].id;
      for (let i = 1; i < this.contacts.length; i++) {
        if(this.contacts[i].id > maxId) {
          maxId = this.contacts[i].id;
        }
      }
      id = maxId + 1;
    }

    c.id = id;
    this.contacts.push(c);
  }

  public EditContact(c:Contact) {
    let index = this.contacts.findIndex(contact => contact.id === c.id) 
    if(index !== -1) {
      this.contacts[index] = c;
    }
  }

  public GetContactById(id:number):Contact|null {
    const contact = this.contacts.find(contact => contact.id === id);
    if(!contact) {
      return null;
    }
    return contact;
  }
}

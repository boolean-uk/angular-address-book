import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { ContactsDefault } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = ContactsDefault;
  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }
  public AddContact(c: Contact) {
    c.id = this.contacts.length + 1;
    this.contacts.push(c);
    console.log(c);
    console.log(this.contacts);
  }
  public EditContact(c: Contact){
    const currentContact = this.contacts.find(x => x.id === c.id);
    if(currentContact) {
        currentContact.firstName = c.firstName;
        currentContact.lastName = c.lastName;
        currentContact.address = c.address;
    }
  }
  public CheckContact(c: Contact){
    if(this.contacts.find(x => x.id === c.id)){
      return true;
    } else {
      return false;
    }
  }
}

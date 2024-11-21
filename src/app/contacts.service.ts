import { Injectable } from '@angular/core';
import { Contact } from './contacts/models/contact';
import { CONTACTS } from './data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacts : Contact[] = CONTACTS

  addContact(newContact: Contact) : void {
    newContact.id = this.contacts.length + 1;
    this.contacts.push(newContact)
  }

  getContactById(id: number) : Contact | null {
    const contact = this.contacts.find(c => c.id === id);
    return contact || null;
  }

  updateContact(contact: Contact){
    const index = this.contacts.findIndex(c => c.id === contact.id);
    if (index !== -1) {
      this.contacts[index] = contact;
      console.log(contact)
    } else {
      console.error('contact not found')
    }
   
  }
}

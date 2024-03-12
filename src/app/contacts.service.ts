import { Injectable } from '@angular/core';
import { Contact } from './contacts/model/contact';
import { CONTACTS } from './contacts/data/CONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private currentId: number = 1;

  public contacts: Contact[] = CONTACTS;

  public getAllContacts(): Contact[] {
    return this.contacts;
  }

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find(contact => contact.id === id);
    if(!contact){
      return null;
    }
    return contact;
  }


  public addContact(contact: Contact){
    this.contacts.push(contact);
  }

  public editContact(contact: Contact){
    const index = this.contacts.findIndex(c => c.id === contact.id);
    this.contacts[index] = contact;
  }
}

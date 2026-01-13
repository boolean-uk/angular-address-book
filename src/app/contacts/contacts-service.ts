import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;
  
  public updateContact(updatedContact : Contact) : void {
    this.contacts[this.contacts.findIndex(c => c.id === updatedContact.id)] = updatedContact;
  }

  public getLastId() : number {
    return Number(this.contacts.at(this.contacts.length - 1)?.id);
  }

  public AddContact(contact : Contact) : void {
    this.contacts.push(contact);
  }

  public getContactById(id: number | null) : Contact | null {
    const contact = this.contacts.find(c => c.id === id);
    return contact ? contact : null;
  }

}

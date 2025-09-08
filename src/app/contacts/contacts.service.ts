import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Contact } from '../models/contact';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;

  public AddContact(contact: Contact): void {
    this.contacts.push(contact)
  }

  public GetContactById(id: number | null){
    const contact = this.contacts.find((c) => c.id === id);
    if(contact == null){
      return null;
    }
    return contact;
  }

  public EditContact(contact:Contact): void {
    const thisContact = this.GetContactById(contact.id)
    if (thisContact != null){
      thisContact.name = contact.name,
      thisContact.phone = contact.phone,
      thisContact.email = contact.email,
      thisContact.address = contact.address

    }
  }

  //constructor() { }
}

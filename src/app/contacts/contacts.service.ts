import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacts:Contact[] = CONTACTS;

  public AddContact(c:Contact):void{
    c.id = this.contacts.length + 1;
    this.contacts.push(c)
  }

  public EditContact(c:Contact){
    const contact = this.contacts.find((contact)=> c.id === contact.id);
    if(!contact){
      return null;
    }
    const index = this.contacts.indexOf(contact)
    this.contacts[index] = c;
    return c;
  }

  public GetById(id:number){
    const contact = this.contacts.find((c)=> c.id === id);
    if(!contact){
      return null;
    }
    console.log(contact)
    return contact;
  }
}

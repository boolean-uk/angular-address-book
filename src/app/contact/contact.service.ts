import { Injectable } from '@angular/core';
import { CONTACTS } from '../data/contactsData';
import {Contact, CreateContact} from 'src/model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }

  public contacts : Contact[] = CONTACTS;

  AddContact(contact : CreateContact) : void {
    let c : Contact = {
      ...contact,
      id: Math.max(...this.contacts.map((c) => {return c.id})) + 1
      }; 
    this.contacts.push(c);
    
    
  }

  GetContacts() : Contact[]{
    return this.contacts;
  }

  GetContactById(id : number) : Contact | undefined {
    console.log(this.contacts)
    const contact = this.contacts.find((contact) => contact.id == id)
      return contact;
    
    }

    UpdateContact(ID: number, update : CreateContact){
      let contact : Contact = {...update, id: ID}
      let currentContact = this.contacts.find(c => c.id === ID);

      if (currentContact !== undefined){
        this.contacts[this.contacts.indexOf(currentContact)] = contact;
      }

      

    }
  
}

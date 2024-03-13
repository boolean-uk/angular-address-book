import { Injectable } from '@angular/core';
import { Contact } from './models/contact'
import { CONTACTS } from '../data/contacts'

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacts: Contact[] = CONTACTS;

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }
 
  public AddContact(c: Contact) {
    if(c.id == 0){
    c.id = this.contacts.length + 1;
    this.contacts.push(c);}else{
     const contactIndex = this.contacts.findIndex(contact=>contact.id == c.id)
     this.contacts[contactIndex] = c;
     console.log(this.contacts) 
    }
  }

  public EditContact(c: Contact) {
    if(c.id !== 0){
      const contactIndex = this.contacts.findIndex(contact=>contact.id == c.id)
     this.contacts[contactIndex] = c;
     console
   }else{
     alert("Contact Not found")
    }
  }

 


}
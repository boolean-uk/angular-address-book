import { Injectable } from '@angular/core';
import { CONTACTS } from '../data/contacts';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacts: Contact[] = CONTACTS;
  public AddContact(c:Contact)
  {
    c.id = this.contacts.length+1;
    this.contacts.push(c);
  }

  public GetContactById(id:number | null)
  {
    const contact = this.contacts.find((contact) => contact.id === id);
    if(!contact){
      return null;
    }
    return contact;
  }

  public UpdateContact(editContact: Contact)
  {
    //find index for contact with matching id, and update content at this index with the edited object.
    const contactIndex = this.contacts.findIndex((contact) => contact.id == editContact.id)

    if(contactIndex !== -1){
      this.contacts[contactIndex] = editContact;
    }
    return "Contact could not be edited!"
  }
}

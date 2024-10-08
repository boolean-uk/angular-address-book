import { Injectable } from '@angular/core';
import { CONTACTS } from './contacts/data/contacts';
import { Contact } from './contacts/models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  private contacts: Contact[] = CONTACTS
  private currentId: number = this.contacts.length


  getContactById(id: number | null): Contact | null{
    const contact = this.contacts.find((contact) => contact.id === Number(id))
    if (!contact){
      console.log("Couldn't find contact by id:", id)
      return null
    }

    console.log("found contact:", contact.toString());
    return contact;
  }

  getAllContacts(){
    return this.contacts;
  }

  public addContact(contact: Contact){
    this.contacts.push({...contact, id: ++this.currentId})
  }

  public editContact(contact: Contact) {
    // Find the index of the contact that matches the given id
    const contactIndex = this.contacts.findIndex((cont) => cont.id === contact.id);
    
    console.log("edit contact:", contactIndex)
    // If the contact exists, update it with the new data
    if (contactIndex !== -1) {
      this.contacts[contactIndex] = contact; // Update the contact
    }
  }

}

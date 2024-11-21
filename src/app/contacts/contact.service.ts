import { Injectable } from '@angular/core';
import { CONTACTS } from './data/contacts';
import { Contact } from './models/contact';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  getContacts() {return CONTACTS}

  public getContactById(id: number | null){
    const contact = CONTACTS.find((contact) => contact.id === id)
    if(!contact ){
      return null
    }
    return contact;
  }
  public addContact(contact: Contact){
    contact.id = CONTACTS.length + 1
    CONTACTS.push(contact)
  }

  public editContact(id: number, EditedContact: Contact){
    let contactToEdit = CONTACTS.find((contact) => contact.id === id)
    if(contactToEdit){
      contactToEdit.id = id
      contactToEdit.firstName = EditedContact.firstName
      contactToEdit.lastName = EditedContact.lastName
      contactToEdit.street = EditedContact.street
      contactToEdit.city = EditedContact.city
    }
  }
}

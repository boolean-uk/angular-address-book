import { Injectable } from '@angular/core';
import { Contact } from './contacts/models/contact';
import { CONTACTS } from './contacts/data/contacts';


@Injectable({
  providedIn: 'root'
})
export class ContactService {

  
  private contacts: Contact[] = CONTACTS;
  private currentId: number = this.contacts.length;


  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find(contact => contact.id === id)
    if(!contact){
      return null;
    }
    return contact;
  }

  public getAllContacts(): Contact[] {
    return this.contacts;
  }

  public addContact(contact: Contact) {
    this.currentId++;
    this.contacts.push({ ...contact, id: this.currentId});
  }

  public editContact(contact: Contact, id: string) {
    const contactToUpdate = this.contacts.find(contactToUpdate => contactToUpdate.id === Number(id))
    if(contactToUpdate){
      Object.assign(contactToUpdate, { 
        firstName: contact.firstName,
        lastName: contact.lastName,
        street: contact.street,
        city: contact.city
       })
    }
  }

}

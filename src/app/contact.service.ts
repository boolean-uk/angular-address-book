import { Injectable } from '@angular/core';
import { Contact } from './contacts/models/contact';
import { CONTACTS } from './data/contacts';
const CARS: never[]=[]

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  

  private contacts: Contact[] = CONTACTS;
  private currentId: number = this.contacts.length;

  public getContactById(id: number | null): Contact | null {
    const contact = this.contacts.find((contact) => Number(contact.id) === Number(id))
    if (!contact){
      return null;
    }
    return contact;
  }

  public getAllContacts(): Contact[] {
    return this.contacts;
  }
  
  public addContact(contact: Contact){
    this.currentId++;
    this.contacts.push({ ...contact, id: this.currentId})
  }

  public editContact(contact: Contact, id: Number){
    const contactToEdit=this.contacts.filter((contact => contact.id === id));
    const index=this.contacts.indexOf(contactToEdit[0]);
    this.contacts[index]=contact;
  }

}

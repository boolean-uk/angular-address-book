import { Injectable } from '@angular/core';
import { Contact } from '../contacts/models/contact';
import { CONTACTS } from '../contacts/data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private contacts : Contact[] = CONTACTS
  private currentId: number = this.contacts.length

  public getAllContacts() : Contact[] {
    return this.contacts
  }
  public getContactById(id : number | null) : Contact | null{
    const contact = this.contacts.find((contact)=>contact.id === id)
    console.log(this.contacts)
    console.log(contact)
    console.log(id)

    return !contact ? null : contact
  }


  public addContact(contact : Contact) : void {
    this.currentId++
    this.contacts.push({... contact, id: this.currentId})
  }

}

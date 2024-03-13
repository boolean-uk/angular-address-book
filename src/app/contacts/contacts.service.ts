import { Injectable } from '@angular/core';
import { Contact } from "../contacts/models/contact";

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

  public AddContact(contact: Contact){
    contact.id = this.contacts.length + 1;
    this.contacts.push(contact);
    console.log(contact);
    console.log(this.contacts);
  }

  public editContact(contact: Contact){
    console.log(this.contacts);
    console.log(contact);
    const index = this.contacts.findIndex(c => c.id === contact.id);
    console.log(index)
    this.contacts[index] = contact;
  }

}

export const CONTACTS: Contact[] = [
  {
    id: 1,
    firstName: "Tom",
    lastName: "Brady",
    street: "Brady Street 2",
    city: "Brady City",
  },
  {
    id: 2,
    firstName: "Cillian",
    lastName: "Murphy",
    street: "Murphy Street 3",
    city: "Murphy City",
  }
]

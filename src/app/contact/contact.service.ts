import { Injectable } from "@angular/core";
import { Contact } from "./contact";


@Injectable({
  providedIn: 'root',
})

export class ContactService {
  public contacts: Contact[] = [];
  public iterator: number = 0;

  public addContact(contact: Contact) {
    contact.id = this.iterator++;
    this.contacts.push(contact);
  }

  public getContactById(id: number | null) {
    const contact =  this.contacts.find(contact => contact.id === id);
    if (!contact) {
      return null;
    }
    return contact;
  }
}

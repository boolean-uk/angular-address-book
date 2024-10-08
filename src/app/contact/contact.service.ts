import { Injectable } from '@angular/core';
import {Contacts} from "../data/contacts";
import {Contact} from "./models/contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public contacts: Contact[] = Contacts;

  public AddContact(c: Contact) {
    c.id = this.contacts.length + 1;
    this.contacts.push(c);
  }

  public EditContact(c: Contact) {
    const contact = this.contacts.find(x => x.id === c.id);
    if (!contact) return
    contact.name = c.name;
    contact.email = c.email;
    contact.phone = c.phone;
    contact.birthday = c.birthday;
  }

  public GetContactById(id: number | null) {
    const contact = this.contacts.find(contact => contact.id === id);
    if (!contact) return null;
    return contact;
  }

  constructor() {
  }
}

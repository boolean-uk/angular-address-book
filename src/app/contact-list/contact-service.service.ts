import { Injectable } from '@angular/core';
import { Contact } from './model/contact';
import { CONTACTS } from './Data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  public contacts: Contact[] = CONTACTS;

  public AddContact(c: Contact) {
    c.id = this.contacts.length + 1;
    this.contacts.push(c)
  }

  public GetContactById(id: number | null){
    const contact = this.contacts.find((contact) => contact.id === id);
    if (!contact){
      return null;
    }
    return contact
  }
}

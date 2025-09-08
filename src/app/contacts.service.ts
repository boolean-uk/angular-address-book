import { Injectable } from '@angular/core';
import { Contact } from './contacts/models/contact';
import { CONTACTS } from './contacts/data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacts: Contact[] = CONTACTS;

  public AddContact(c: Contact) {
    c.id = this.contacts.length+1;
    this.contacts.push(c);
  }

  public GetContactById(id: number | null){
    const contact = this.contacts.find(c => c.id === id);
    if (!contact){
      return null;
    }
    return contact;
  }

  public inContacts(id:number){
    return (this.GetContactById(id) !== null)
  }

  public EditContact(c: Contact) {
    const currentContact = this.GetContactById(c.id)
    if (currentContact !== null) {
      currentContact!.name = c.name;
    }
  }
}

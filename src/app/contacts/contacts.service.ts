import { Injectable } from '@angular/core';
import { Contact } from './model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = [];

  public addContact(c : Contact){
    c.id = this.contacts.length + 1;
    this.contacts.push(c);
  }

  public getContactById(id : Number): Contact | null{
    const contact = this.contacts.find(c => c.id == id)
    return contact ? contact : null;
  }

  public editContactById(id : number, contact : Contact | null){
    if ( contact ) {
      const index = this.contacts.findIndex(c => c.id == id);
      this.contacts[index] = contact;
    }
  }
}

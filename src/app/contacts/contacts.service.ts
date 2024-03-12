import { Injectable } from '@angular/core';
import { CONTACTS } from './data/contacts';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;

  public getContactById(id: Number | null): Contact | null {
    const contact = this.contacts.find(c => c.id === id);
    return contact ? contact : null;
  }
}

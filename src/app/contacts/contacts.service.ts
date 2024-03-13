import { Injectable } from '@angular/core';
import { MockDatabase } from './data/contacts';
import { Contact, ContactInsertDTO } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = MockDatabase.CONTACTS;

  public getContactById(id: Number | null): Contact | null {
    const contact = this.contacts.find(c => c.id === id);
    return contact ? contact : null;
  }

  public postContact(contact: ContactInsertDTO) {
    MockDatabase.addEntry(contact)
  }
}

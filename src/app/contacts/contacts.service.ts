import { Injectable } from '@angular/core';
import { MockDatabase } from './data/contacts';
import { Contact, ContactDTO } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = MockDatabase.getAll();

  public getContactById(id: number | null): Contact | null {
    const contact = MockDatabase.getById(id)
    return contact ? contact : null;
  }

  public postContact(contact: ContactDTO) {
    MockDatabase.addEntry(contact)
  }

  public putContact(id: number, input: ContactDTO) {
    MockDatabase.updateEntry(id, input)
  }
}

import { Contact } from '../models/contact.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private currentId = 0;
  private contactsSource = new BehaviorSubject<Contact[]>([]);

  public contacts$ = this.contactsSource.asObservable();

  constructor() {}

  getContacts() {
    return this.contacts$;
  }

  addContact(contact: Contact) {
    const currentContacts = this.contactsSource.value;
    const newContactWithId = { ...contact, id: this.incrementAndGetId() };
    this.contactsSource.next([...currentContacts, newContactWithId]);
  }

  getContactById(id: number): Contact | undefined {
    return this.contactsSource.value.find((contact) => contact.id === id);
  }

  updateContact(updatedContact: Contact) {
    const contacts = this.contactsSource.value;
    const index = contacts.findIndex((i) => i.id === updatedContact.id);
    if (index !== -1) {
      contacts[index] = updatedContact;
      this.contactsSource.next(contacts);
    } else {
      throw new Error('Contact not found');
    }
  }

  private incrementAndGetId(): number {
    return ++this.currentId;
  }
}

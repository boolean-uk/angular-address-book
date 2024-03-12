import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contactsSource = new BehaviorSubject<Contact[]>([]);
  private currentId = 0;
  public contacts$ = this.contactsSource.asObservable();

  constructor() {}

  addContact(contact: Contact) {
    const currentContacts = this.contactsSource.value;
    const newContactWithId = { ...contact, id: this.incrementAndGetId() };
    this.contactsSource.next([...currentContacts, newContactWithId]);
  }
  getContacts() {
    return this.contacts$;
  }

  getContactById(id: number): Contact | undefined {
    return this.contactsSource.value.find((contact) => contact.id === id);
  }

  updateContact(updatedContact: Contact) {
    const contacts = this.contactsSource.value;
    const index = contacts.findIndex((c) => c.id === updatedContact.id);
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

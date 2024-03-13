import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from './contact-model';

const contactList = [
  {
    id: 1,
    firstName: 'New Contact',
    lastName: 'New Last',
    street: 'Asperhold',
    city: 'Sandens',
  },
  {
    id: 2,
    firstName: 'Kristian',
    lastName: 'Verdum',
    street: 'Kannik',
    city: 'Stavanger',
  },
  {
    id: 3,
    firstName: 'George',
    lastName: 'Bush',
    street: 'Kannik',
    city: 'Stavanger',
  },
  {
    id: 4,
    firstName: 'Last Contact',
    lastName: 'Last Last',
    street: 'Elvegate',
    city: 'Sandnes',
  },
  {
    id: 5,
    firstName: 'Kristian',
    lastName: 'Verdum',
    street: 'Kannik',
    city: 'Stavanger',
  },
  {
    id: 6,
    firstName: 'Aziz',
    lastName: 'Zafar',
    street: 'Asperholen',
    city: 'Sandnes',
  },
];

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private contacts: Contact[] = contactList;
  private currentId = Math.max(...contactList.map(contact => contact.id)); // Initialize currentId based on the maximum ID in contactList
  private contactsSource = new BehaviorSubject<Contact[]>(this.contacts);
  public contacts$: Observable<Contact[]> = this.contactsSource.asObservable();

  constructor() {}

  // Method to set contacts
  setContacts(contacts: Contact[]): void {
    this.contacts = contacts;
    this.contactsSource.next(this.contacts);
    
    // Update currentId based on the maximum ID present in the received contacts
    const maxId = contacts.reduce((max, contact) => Math.max(max, contact.id), this.currentId);
    this.currentId = maxId;
  }

  addContact(contact: Contact): void {
    contact.id = ++this.currentId; // Assign the next available ID
    this.contacts.push(contact);
    this.contactsSource.next(this.contacts);
  }

  getContacts(): Observable<Contact[]> {
    return this.contacts$;
  }

  getContactById(id: number): Contact | undefined {
    return this.contacts.find((contact) => contact.id === id);
  }

  updateContact(updatedContact: Contact): void {
    const index = this.contacts.findIndex((c) => c.id === updatedContact.id);
    if (index !== -1) {
      this.contacts[index] = updatedContact;
      this.contactsSource.next(this.contacts);
    } else {
      throw new Error('Contact not found');
    }
  }
  deleteContact(id: number): void {
    const index = this.contacts.findIndex((contact) => contact.id === id);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      this.contactsSource.next(this.contacts);
    } else {
      throw new Error('Contact not found');
    }
  }
}

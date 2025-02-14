import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from '../models/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];
  private contactsSubject = new BehaviorSubject<Contact[]>([]);

  constructor() {
    this.loadContacts();
    if (this.contacts.length === 0) {
      const sampleContacts: Omit<Contact, 'id'>[] = [
        {
          firstName: 'Ada',
          lastName: 'Lovelace',
          email: 'ada@algorithm.dev',
          phone: '555-0001',
          address: '1 Programming Lane, Binary City'
        },
        {
          firstName: 'Null',
          lastName: 'Pointer',
          email: 'segfault@crash.com',
          phone: '555-0000',
          address: '404 Not Found Street'
        },
        {
          firstName: 'Cookie',
          lastName: 'Monster',
          email: 'cookie@browser.web',
          phone: '555-NOMNOM',
          address: 'Session Storage Avenue'
        },
        {
          firstName: 'Stack',
          lastName: 'Overflow',
          email: 'copy.paste@stackoverflow.com',
          phone: '555-HELP',
          address: '127.0.0.1 Localhost Road'
        },
        {
          firstName: 'Recursion',
          lastName: 'Recursion',
          email: 'see.previous@email.com',
          phone: '555-LOOP',
          address: 'Base Case Boulevard'
        },
        {
          firstName: 'Foo',
          lastName: 'Bar',
          email: 'foo.bar@placeholder.test',
          phone: '555-1337',
          address: 'Variable Valley'
        },
        {
          firstName: 'Bug',
          lastName: 'Catcher',
          email: 'not.a.feature@debug.net',
          phone: '555-FIX1',
          address: 'Try Catch Court'
        }
      ];

      sampleContacts.forEach(contact => this.addContact(contact));
    }
  }

  private loadContacts(): void {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      this.contacts = JSON.parse(storedContacts);
      this.contactsSubject.next(this.contacts);
    }
  }

  private saveContacts(): void {
    localStorage.setItem('contacts', JSON.stringify(this.contacts));
    this.contactsSubject.next(this.contacts);
  }

  getContacts(): Observable<Contact[]> {
    return this.contactsSubject.asObservable();
  }

  getContact(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }

  addContact(contact: Omit<Contact, 'id'>): Contact {
    const newContact = {
      ...contact,
      id: this.generateId()
    };
    this.contacts.push(newContact);
    this.saveContacts();
    return newContact;
  }

  updateContact(id: number, contact: Omit<Contact, 'id'>): Contact | undefined {
    const index = this.contacts.findIndex(c => c.id === id);
    if (index !== -1) {
      const updatedContact = { ...contact, id };
      this.contacts[index] = updatedContact;
      this.saveContacts();
      return updatedContact;
    }
    return undefined;
  }

  deleteContact(id: number): boolean {
    const index = this.contacts.findIndex(c => c.id === id);
    if (index !== -1) {
      this.contacts.splice(index, 1);
      this.saveContacts();
      return true;
    }
    return false;
  }

  private generateId(): number {
    return this.contacts.length > 0
      ? Math.max(...this.contacts.map(c => c.id)) + 1
      : 1;
  }
} 
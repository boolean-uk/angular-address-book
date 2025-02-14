import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Contact } from '../models/contact.interface';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];
  private contactsSubject = new BehaviorSubject<Contact[]>([]);

  getContacts(): Observable<Contact[]> {
    return this.contactsSubject.asObservable();
  }

  getContact(id: number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id);
  }

  addContact(contact: Omit<Contact, 'id'>): void {
    const newContact = {
      ...contact,
      id: this.contacts.length + 1
    };
    this.contacts.push(newContact);
    this.contactsSubject.next([...this.contacts]);
  }

  updateContact(contact: Contact): void {
    const index = this.contacts.findIndex(c => c.id === contact.id);
    if (index !== -1) {
      this.contacts[index] = contact;
      this.contactsSubject.next([...this.contacts]);
    }
  }
} 
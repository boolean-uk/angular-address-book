import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

export interface Contact {
  id: number;
  firstName: string;
  lastName: string;
  street?: string;
  city?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsSource = new BehaviorSubject<Contact[]>([
    { id: 1, firstName: 'Stan', lastName: 'Lee' , street:'test', city:'jnd'},
    { id: 2, firstName: 'Jane', lastName: 'Doe' , street:'testie', city:'jfdasnd'}
  ]);
  contacts$ = this.contactsSource.asObservable();

  get contacts(): Contact[] {
    return this.contactsSource.getValue();
  }

  addContact(contact: Omit<Contact, 'id'>): void {
    const newId = this.contacts.length > 0 ? this.contacts[this.contacts.length - 1].id + 1 : 1;
    const newContact: Contact = { ...contact, id: newId };
    const updatedContacts = [...this.contacts, newContact];
    this.contactsSource.next(updatedContacts); 
  }
}

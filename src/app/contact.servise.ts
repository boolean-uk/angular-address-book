import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Contact } from './contacts/model/contact';
import { CONTACTS } from './data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactsSubject: BehaviorSubject<Contact[]> = new BehaviorSubject<Contact[]>(CONTACTS);
  public contacts$: Observable<Contact[]> = this.contactsSubject.asObservable();

  private currentId: number = 1;

  constructor() {
    // Calculate currentId based on existing contacts
    if (CONTACTS.length > 0) {
      this.currentId = Math.max(...CONTACTS.map(contact => contact.id)) + 1;
    }
  }

  public getContactById(id: number | null): Observable<Contact | null> {
    return this.contacts$.pipe(
      map(contacts => contacts.find(contact => contact.id === id) || null)
    );
  }

  public getAllContacts(): Observable<Contact[]> {
    return this.contacts$;
  }

  public addContact(contact: Contact) {
    contact.id = this.currentId++;
    this.contactsSubject.next([...this.contactsSubject.value, contact]);
  }
}

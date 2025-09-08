import { Injectable } from '@angular/core';
import { Contact } from '../models/Contact';
import { testContacts } from '../data/testContactData';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = testContacts;

  public AddContact(c: Contact): void {
    this.contacts.push(c);
  }

  public EditContact(c: Contact): boolean {
    const iToReplace = this.contacts.findIndex((curr) => (curr.id === c.id));

    if (iToReplace > -1) {
      this.contacts[iToReplace] = c;
      return true;
    } else {
      return false;
    }
  }

  public GetContactById(id: number): Observable<Contact | undefined> {
    const beer = this.contacts.find((c) => c.id === id);
    return of(beer);
  }

  public GetNextId(): number {
    if (this.contacts.length === 0) {
      return 1;
    }

    return Math.max(...this.contacts.map(c => c.id)) + 1;
  }

  // constructor() { }
}

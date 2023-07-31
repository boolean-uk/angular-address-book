import { Injectable } from '@angular/core';
import { ContactType } from './contact-list/contact-list.component';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: ContactType[] = [];

  getContacts(): ContactType[] {
    return this.contacts;
  }

  addContact(contact: ContactType): void {
    this.contacts.push(contact);
  }
}

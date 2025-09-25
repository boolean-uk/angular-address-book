import { Injectable } from '@angular/core';
import { CONTACTS } from '../data/contacts';
import { HttpClient } from '@angular/common/http';
import { Contact } from '../models/contacts';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts: Contact[] = CONTACTS;

  public AddContact(contact: Contact): void {
    this.contacts.push(contact);
  }

  GetContactById(id: number) {
    const contact = this.contacts.find((c) => c.id === id);
    return contact ?? null;
  }

  EditContact(newContact: Contact) {
  }

}

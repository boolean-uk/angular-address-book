import { Injectable } from '@angular/core';
import { Contact } from './models/contacts';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
    public contacts: Contact[] = CONTACTS;

    public AddContact(contact: Contact): void {
        this.contacts.push(contact);
    }

    public GetContactById(id: number): Contact | undefined {
        return this.contacts.find(contact => contact.id === id);
    }
}
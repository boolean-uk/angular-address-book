import { Injectable } from '@angular/core';
import { CONTACTS, Contact } from './contact/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  contacts: Contact[] = CONTACTS;
  id: number;
  constructor() {
    this.id = this.contacts.length + 1
  }

  getContact(id: number): Contact | undefined {
    return this.contacts.find((c) => c.id === id);
  }

  createContact(firstName: string, lastName: string, email: string) {
    console.log("Create new contact")
    const newContact: Contact = {
      id: this.id,
      firstName: firstName,
      lastName: lastName,
      email: email
    }
    this.id++;
    this.contacts.push(newContact)
  }
}

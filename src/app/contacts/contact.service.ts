import {Injectable} from '@angular/core';

export interface Contact {
  firstName: string | null,
  lastName: string | null,
  address: string | null,
  phoneNumber: string | null,
  email: string | null
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = []

  constructor() {
  }

  getContacts(): Contact[] {
    return this.contacts
  }

  addContact(newContact: Contact): void {
    this.contacts.push(newContact)
  }
}

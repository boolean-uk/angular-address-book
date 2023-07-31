import {Injectable} from '@angular/core';

export interface Contact {
  firstName: string,
  lastName: string,
  address: string,
  phoneNumber: string,
  email: string
}

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
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

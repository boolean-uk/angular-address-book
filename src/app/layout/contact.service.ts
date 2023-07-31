import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ContactService {

  private contactsList: Contact[] = [];

  constructor() { }

  addToList(contact: Contact) {
    this.contactList.push(contact)
  }

  get contactList() {
    return this.contactsList;
  }

}

export interface Contact {
  firstname: string
  lastname: string
  street: string
  city: string
}

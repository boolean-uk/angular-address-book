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

  getContactById(idStr: string) {
    const id = Number(idStr);
    const contact = this.contactsList.find((contact) => contact.id === id);
    console.log('found  contact', contact);
    return contact;
  }

}

export interface Contact {
  id: number
  firstname: string
  lastname: string
  street: string
  city: string
  email: string
}
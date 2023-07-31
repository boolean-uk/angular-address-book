import { Injectable } from "@angular/core";
import { Contact } from "../model/contact.model";

@Injectable({
    providedIn: 'root',
  })
export class ContactService {
    constructor () {}

    contactList: Contact[] = [];

    addContact(contact: Contact) {
      this.contactList.push(contact);
    }

    getContactList() {
        return this.contactList;
    }
}
import { Injectable } from "@angular/core";
import { Contact } from "../model/contact.model";

@Injectable({
    providedIn: 'root',
  })
export class ContactService {
    constructor () {}

    contactList: Contact[] = [{firstName: "Joe", lastName: "Parker", street: "Hoxton 34", city: "London", email: "joe@boolean.co.uk"}];

    addContact(contact: Contact) {
      this.contactList.push(contact);
    }

    getContactList() {
        console.log(this.contactList)
        return this.contactList;   
    }

    getContactById(id: number) {
      return this.contactList.at(id)
    }
}
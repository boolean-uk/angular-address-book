import {Injectable} from '@angular/core';
import {Contact} from "../contact";

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private _contacts: Contact[] = [
    {
      id: '1',
      firstName: "The",
      lastName: "Guy",
      street: "TheStreet",
      city: "TheCity",
    },
    {
      id: '2',
      firstName: "Another",
      lastName: "Guy",
      street: "AnotherStreet",
      city: "SomeCity",
    },
    {
      id: '3',
      firstName: "Some",
      lastName: "Gal",
      street: "SomeStreet",
      city: "AnotherCity",
    },
  ];

  getContacts(): Contact[] {
    return this._contacts;
  }

  getContactById(id : string) : Contact | undefined {
    return this._contacts.find((contact: Contact) => contact.id === id);
  }

  addContact(contact: Contact) {
    contact.id = crypto.randomUUID();
    this._contacts.push(contact);
    console.log(this._contacts);
  }

  removeContact(contact: Contact) {
    const index = this._contacts.indexOf(contact);
    if (index > -1) {
      this._contacts.splice(index, 1);
    }
  }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreatedContactsService {
  contacts: Contact[] = [];
  constructor() {}

  addContact(contact: Contact){
    this.contacts.push(contact);
  }

  getContacts(){
    return this.contacts;
  }

}

export class Contact {
  constructor(public id: number, public firstName: string | null, public lastName: string | null, public street: string | null, public city: string | null, public email: string | null) {
  }
}

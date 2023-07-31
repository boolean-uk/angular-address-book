import { Injectable } from '@angular/core';

import { v4 as uuidv4 } from 'uuid'; //for id

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacts: any[] = [];
  constructor() { }

  addContact(contact:any){
    const newContact = { ...contact, id: uuidv4() };
    this.contacts.push(newContact);
  }

  getContactById(id: string): any {
    return this.contacts.find(contact => contact.id === id);
  }

}

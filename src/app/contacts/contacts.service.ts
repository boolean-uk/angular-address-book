import { Injectable } from '@angular/core';
import { Contact } from './models/contact';
import { CONTACTS } from '../data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  public contacts:Contact[] = CONTACTS;
  
  public AddContact(c:Contact){
    c.id = this.contacts.length + 1;
    this.contacts.push(c);
  }

  public getContactbyId(id:number|null){
    const pet = this.contacts.find(p => p.id === id);
    if (!pet) {
      return null
    }
    return pet;
  }
}

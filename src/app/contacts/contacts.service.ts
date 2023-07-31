import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacts: any[] = [];
  constructor() { }

  addContact(contact:any){
    this.contacts.push(contact);
  }

}

import { Injectable } from '@angular/core';
import { CONTACTS } from '../data/contacts';
import { Contact } from '../models/contact';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacts: Contact[] = CONTACTS

  public addContact(contact: Contact){
    this.contacts.push(contact);

  }
  GetContactById(id:number): Observable<Contact| undefined> {
    const contact= this.contacts.find((b)=> b.id==id)
    return of(contact);
  }


}

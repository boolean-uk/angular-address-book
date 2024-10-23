import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { Observable, of } from 'rxjs';
import { CONTACTS } from './Data/data';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
    public contacts:  Contact[] = CONTACTS;

    public addContact(p: Contact){
      p.id = this.contacts.length + 1;
      this.contacts.push(p);
    }

    public getContactById(id: number | null): Observable<Contact | null> {
      const returnedContact = this.contacts.find(p => p.id === id) || null;
      return of (returnedContact);
    }

    public updateContact(p: Contact) : Observable<void> {
      const index = this.contacts.findIndex(contact => contact.id === p.id);
      if(index !== -1){
        this.contacts[index] = p;
      }
      return of();
    }

}

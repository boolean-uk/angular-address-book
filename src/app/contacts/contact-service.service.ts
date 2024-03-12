import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Contact } from '../items/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private contactLink = new Subject<Contact>();
  currentLink = this.contactLink.asObservable();

  setContact(contact: Contact) {
    this.contactLink.next(contact)
  }
}

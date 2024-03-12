import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../items/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private contactsSource = new BehaviorSubject<Contact[]>([
      {firstName: "Tim", 
      lastName: "Johnsen", 
      street: "Somewhere 123", 
      city: "Atlantis"
    }, 
    {firstName: "Allan", 
      lastName: "Burke", 
      street: "Here 777", 
      city: "El Dorado"
    }
  ]);
  contacts = this.contactsSource.asObservable();

  addContact(contact: Contact) {
    this.contactsSource.next([...this.contactsSource.value, contact])
  }

  getContactByName(firstName: string, lastName: string) {
    return this.contactsSource.value.filter((c) => c.firstName === firstName && c.lastName === lastName)[0] || undefined
  }
}

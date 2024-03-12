import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Contact } from '../items/Contact';

@Injectable({
  providedIn: 'root'
})
export class ContactServiceService {
  private contactsSource = new BehaviorSubject<Contact[]>([
    { id: 0,
      firstName: "Tim", 
      lastName: "Johnsen", 
      street: "Somewhere 123", 
      city: "Atlantis"
    }, 
    { id: 1,
      firstName: "Allan", 
      lastName: "Burke", 
      street: "Here 777", 
      city: "El Dorado"
    }
  ]);
  contacts = this.contactsSource.asObservable();

  getNumberOfContacts() {
    return this.contactsSource.value.length;
  }

  addContact(contact: Contact) {
    this.contactsSource.next([...this.contactsSource.value, contact])
  }

  getContactById(id: number) {
    return this.contactsSource.value.filter((c) => c.id === id)[0] || undefined
  }
}

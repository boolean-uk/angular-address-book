import { Injectable } from '@angular/core';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  public contacts: Contact[] = [
    { id: 1, firstName: 'John', lastName: 'Doe', city: 'New York', street: '123 Main St' },
    { id: 2, firstName: 'Jane', lastName: 'Smith', city: 'Los Angeles', street: '456 Elm St' },
    { id: 3, firstName: 'Alice', lastName: 'Johnson', city: 'Chicago', street: '789 Oak St' },
  ];

  public GetById(id:number): Contact | undefined {
    return this.contacts.find(contact => contact.id === id)
  }

  public addContact(firstName:string, lastName:string, city:string, street:string){
    const newContact: Contact = {
      id: this.contacts.length +1,
      firstName: firstName,
      lastName: lastName,
      city: city,
      street: street
    }

    this.contacts.push(newContact);
  }
}
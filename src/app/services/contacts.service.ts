import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: { 
    firstName: string; 
    lastName: string; 
    street: string; 
    city: string; 
  }[] = [];
  
  private contactsSubject: BehaviorSubject<{ 
    firstName: string; 
    lastName: string; 
    street: string; 
    city: string; 
  }[]> = new BehaviorSubject(this.contacts);

  constructor() {}

  addContact(contact: { 
    firstName: string; 
    lastName: string; 
    street: string; 
    city: string; 
  }): void {
    this.contacts.push(contact);
    this.contactsSubject.next(this.contacts); 
  }

  getContacts(): Observable<{ 
    firstName: string; 
    lastName: string; 
    street: string; 
    city: string; 
  }[]> {
    return this.contactsSubject.asObservable();
  }

  getContactById(id: number): { 
    firstName: string; 
    lastName: string; 
    street: string; 
    city: string; 
  } | undefined {
    return this.contacts[id]; 
  }

  updateContact(id: number, updatedContact: { 
    firstName: string; 
    lastName: string; 
    street: string; 
    city: string; 
  }): void {
    this.contacts[id] = updatedContact;
    this.contactsSubject.next(this.contacts); 
  }
}
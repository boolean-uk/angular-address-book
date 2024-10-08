import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  private contacts: { name: string, email: string, phone: string }[] = [];

  private contactsSubject: BehaviorSubject<{ name: string, email: string, phone: string }[]> = new BehaviorSubject(this.contacts);

  constructor() {}

  addContact(contact: { name: string, email: string, phone: string }): void {
    this.contacts.push(contact);
    this.contactsSubject.next(this.contacts); 
  }

  getContacts(): Observable<{ name: string, email: string, phone: string }[]> {
    return this.contactsSubject.asObservable();
  }

  getContactById(id: number): { name: string, email: string, phone: string } | undefined {
    return this.contacts[id]; 
  }
}
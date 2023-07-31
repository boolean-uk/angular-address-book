import { Injectable } from '@angular/core';
import {Contact} from "./contact";

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contacts: Contact[] = [];

  constructor() {
    this.addContact(new Contact("name", "surname", "street", "city", 3, "aaa@a.com"))
    this.addContact(new Contact("Karolina", "M", "my street", "Warsaw", 2, "karma@gmail.com"));

  }

  addContact(contact: Contact): void {
    contact.id = this.getNextId();
    this.contacts.push(contact);
  }

  getAllContacts(): Contact[] {
    return this.contacts;
  }

  deleteContact(contact: Contact): void {
    this.contacts = this.contacts.filter((c) => c.id === contact.id);
  }

  findById(id:number): Contact | undefined{
    return this.contacts.find(c => c.id === id)
  }

  private getNextId(): number {
    return this.contacts.length > 0
      ? Math.max(...this.contacts.map((contact) => contact.id)) + 1
      : 1;
  }

}

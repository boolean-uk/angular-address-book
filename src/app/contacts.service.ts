import { Injectable } from '@angular/core';
import { Contact } from './contacts/models/contact';
import { CONTACTS } from './data/contacts';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  public contacts: Contact[] = CONTACTS; // Initialize an empty array to store contacts

  addContact(newContact: Contact): void {
    // Generate ID or handle it as required
    newContact.id = this.contacts.length + 1;
    this.contacts.push(newContact);
  }

  getContactById(id: number): Contact | null {
    const contact = this.contacts.find(contact => contact.id === id);
    return contact || null; // Return null if contact is not found
  }

  updateContact(updatedContact: Contact) {
    const index = this.contacts.findIndex(contact => contact.id === updatedContact.id);
    if (index !== -1) {
      this.contacts[index] = updatedContact;
    } else {
      console.error('Contact not found');
    }
  }
  


 
 
}

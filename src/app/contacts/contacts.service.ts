import { Injectable } from "@angular/core";
import { Contact } from "./models/contact";
import { CONTACTS } from "./data/contacts";


@Injectable({
    providedIn: 'root',
})

export class ContactsService {
    public contacts: Contact[] = CONTACTS
    public getContactById(id: number | null): Contact | null {
        const contact = this.contacts.find((contact) => contact.id === id)
        if (!contact) {
            return null
        }
        return contact
    }

    public addContact(c: Contact) {
        c.id = this.contacts.length + 1
        this.contacts.push(c)
    }

    public editContact(updatedContact: Contact): void {
        const index = this.contacts.findIndex(contact => contact.id === updatedContact.id);
      
        if (index !== -1) {
          this.contacts[index] = updatedContact;
        } else {
          console.error(`Contact with ID ${updatedContact.id} not found.`);
        }
      }}
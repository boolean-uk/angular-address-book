import { Injectable } from "@angular/core";
import { Contact } from "./models/contact";
import { CONTACTS } from "./data/contacts";

@Injectable({
    providedIn: 'root',
})
export class ContactsService {
    public contacts: Contact[] = CONTACTS;
    public getContactById(id: number | null): Contact | null {
        const contact = this.contacts.find((c) => c.id === id);
        if (!contact) {
            return null
        }
        return contact
    }
    public addContact(c: Contact) {
        c.id = this.contacts.length + 1;
        this.contacts.push(c);
    }

    public editContact(c: Contact, id: Number) {
        this.contacts[this.contacts.findIndex(c => c.id === id)] = c
    }
}
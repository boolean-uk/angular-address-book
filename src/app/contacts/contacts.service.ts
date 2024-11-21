import { Injectable } from "@angular/core";
import { Contact } from "./contact/contact";
import { CONTACTS } from "../data/contacts";

@Injectable({
    providedIn: 'root'
})
export class ContactService {
    public contacts: Contact[] = CONTACTS

    public getContactById(id: number | null): Contact | null {
        const contact = this.contacts.find(contact => contact.id === id)
        if (!contact) {
            return null
        }
        return contact
    }

    public addContact(c: Contact) {
        c.id = this.contacts[this.contacts.length - 1].id + 1
        this.contacts.push(c)
        console.log(this.contacts)
    }

    public editContact(c: Contact, id: Number) {
        this.contacts[this.contacts.findIndex(c => id == c.id)] = c
        console.log(this.contacts)
    }
}

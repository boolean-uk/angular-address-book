import { Injectable } from "@angular/core";

export interface Contact {
    id: number | undefined;
    name: string;
}

@Injectable({
    providedIn: "root"
})
export class ContactsService {
    public contacts: Contact[] = [];

    public getContactById(id: number) {
        return this.contacts.find(contact => contact.id === id);
    }

    public addContact(contact: Contact) {
        contact.id = this.contacts.length + 1;
        this.contacts.push(contact);
    }

    public editContact(contact: Contact) {
        console.log(this.contacts)
        console.log(contact)
        const index = this.contacts.findIndex(c => c.id === contact.id);
        console.log(index)
        this.contacts[index] = contact;
    }
}
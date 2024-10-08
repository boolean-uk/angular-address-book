import { Injectable } from "@angular/core";
import { Contact } from "./models/contact";
import { CONTACTS } from "../data/contacts";

@Injectable({
    providedIn: "root"
})
export class ContactsService {
    public contacts: Contact[] = CONTACTS;

    public GetContactById(id: number | null) {
        const contact = this.contacts.find((c) => c.id === id);
        if (!contact) {
            return null;
        }
        return contact;
    }

    public AddContact(contact: Contact){
        contact.id = this.contacts.length + 1;
        this.contacts.push(contact);
    }

    public EditContact(contact: Contact){
        const i = this.contacts.findIndex(c => c.id === contact.id);
        this.contacts[i] = contact;
    }
}
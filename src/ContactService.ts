import { Injectable } from "@angular/core";
import { Contact } from "./model/ContactInfo";

@Injectable({
    providedIn: "root"
})
export class ContactService {
    public contacts: Contact[] = []

    public getContactByID(uuid: String | null) : Contact | undefined {
        return this.contacts.find((elm) => { return elm.uuid === uuid })
    }

    public getAllContacts() : Contact[] {
        return this.contacts
    }

    public addContact(contact: Contact) {
        this.contacts.push(contact)
    }

    public updateContact(contact: Contact) {
        this.contacts = this.contacts.map((c) => 
            c.uuid == contact.uuid ? contact : c
        )
    }
}

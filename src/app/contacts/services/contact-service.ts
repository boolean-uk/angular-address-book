import { Injectable } from "@angular/core";
import { Contact } from "../models/contact";
import { CONTACTS } from "../data/contacts";

@Injectable({
    providedIn: 'root',
})
export class ContactService {
    private contacts: Contact[] = CONTACTS;
    private currentId = this.contacts.length;

    getContacts(): Contact[] {
        return this.contacts;
    }

    getContactById(id: number | null): Contact | null {
        if (id === null || id < 0 || id >= this.contacts.length) {
            return null;
        }
        return this.contacts[id] || null;
    }

    addContact(contact: Contact): void {
        this.contacts.push(contact);
        this.currentId++;
    }

    edditContact(id: number, updatedContact: Contact): boolean {
        if (id < 0 || id >= this.contacts.length) {
            return false;
        }  
        this.contacts[id] = updatedContact;
        return true;
    }
}
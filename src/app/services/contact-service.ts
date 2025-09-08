import { Injectable } from "@angular/core";
import { CONSTACTS } from "../contacts/data/contacts";
import { Contact } from "../contacts/models/contact";




@Injectable({
    providedIn: 'root'
})
export class contactService {
    private contacts: Contact[] = CONSTACTS
    private currentID: number = this.contacts.length

    public getContactById(id: number | null): Contact | null{
        const contact = this.contacts.find((contact) => contact.id === id)
        if (!contact){
            return null
        }
        return contact
    }
    public getAllContacts(): Contact[] {
        return this.contacts;
    }
    public addContact(contact: Contact) {
        this.currentID++;
        this.contacts.push({...contact, id: this.currentID})
        
    }
}
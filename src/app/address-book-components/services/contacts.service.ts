import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ContactsService {
    private API = 'https://boolean-api-server.fly.dev/'
    private USERNAME = 'alkolbodo/'
    private APIURL = this.API + this.USERNAME

    async getContacts() {
        const response = await fetch(this.APIURL + 'contact', {
            method: 'GET'
        });
        const contacts = await response.json();
        return contacts;
    }

    async getSingleContact(id: number) {
        const response = await fetch(this.APIURL + `contact/${id}`, {
            method: 'GET'
        })
        const contact = await response.json();
        return contact;
    }

    async postContact(contact: any) {
        const response = await fetch(this.APIURL + `contact`, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(contact)
        })
        const respContact = await response.json();
        return respContact
    }
}
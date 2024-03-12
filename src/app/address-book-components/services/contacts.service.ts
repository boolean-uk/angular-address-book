import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class ContactsService {
    private API = 'https://boolean-api-server.fly.dev/'
    private USERNAME = 'alkolbodo'
    private APIURL = this.API + this.USERNAME

    async getContacts() {
        const response = await fetch(this.APIURL + '/contact', {
            method: 'GET'
        });
        const contacts = await response.json();
        return contacts;
    }
}
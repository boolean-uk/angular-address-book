import { Injectable } from '@angular/core';
import { Contact } from './models/contacts';

@Injectable({
  providedIn: 'root'
})
export class AdressbookService {

  private URL1 = `https://boolean-api-server.fly.dev/KantheeK/contact`
  

  // public contacts: Contact[] = [];
  // GetContacts
  async fetchContacts() {
    const response = await fetch(this.URL1, {
      method: 'GET',
    });
    const contacts = await response.json();
    return contacts;
  }

  // GetCarById
  async fetchContactById(id: number | null) {
    const response = await fetch(this.URL1 + `/${id}`, {
      method: 'GET',
    });
    const contact = await response.json();
    console.log(contact);
    return contact;
  }

  async fetchNewContact(contact: any) {
    const response = await fetch(this.URL1, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(contact),
    });
    const responseContact = await response.json();
    return responseContact;
  }

}













import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private BASE_API_URL = 'https://boolean-api-server.fly.dev/Sabbasn/';

  async getContacts() {
    const response = await fetch(this.BASE_API_URL + 'contact', {
      method: 'GET',
    });
    const contacts = await response.json();
    return contacts;
  }

  async getContact(id: number) {
    const response = await fetch(this.BASE_API_URL + `contact/${id}`, {
      method: 'GET',
    });
    const contact = await response.json();
    return contact;
  }

  async postContact(contact: any) {
    const response = await fetch(this.BASE_API_URL + 'contact', {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify(contact),
    });
    const responseContact = await response.json();
    return responseContact;
  }

  async putContact(contact: any) {
    const response = await fetch(this.BASE_API_URL + `contact/${contact.id}`, {
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'PUT',
      body: JSON.stringify(contact),
    }).catch((err) => console.log(err));
    if (!response) return;
    const responseContact = await response.json();
    return responseContact;
  }
}

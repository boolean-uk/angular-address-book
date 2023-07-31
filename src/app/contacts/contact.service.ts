import { Injectable } from '@angular/core';
import axios from 'axios';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  dbUrl = 'http://localhost:3000/contacts';

  async addNewContact(contact: Omit<Contact, 'id'>): Promise<Contact> {
    const response = await axios.post(this.dbUrl, contact);
    return response.data;
  }

  async getAllContacts(): Promise<Contact[]> {
    const response = await axios.get(this.dbUrl);
    return response.data ?? [];
  }

  async getContactById(id: number): Promise<Contact | undefined> {
    const response = await axios.get(`${this.dbUrl}/${id}`);
    return response.data ?? {};
  }
}

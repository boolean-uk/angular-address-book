import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contact } from './contact';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  dbUrl = 'http://localhost:3000/contacts';

  constructor(private http: HttpClient) {}

  addNewContact(contact: Omit<Contact, 'id'>): Observable<Contact> {
    return this.http.post<Contact>(this.dbUrl, contact);
  }

  getAllContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.dbUrl);
  }

  getContactById(id: number): Observable<Contact | undefined> {
    return this.http.get<Contact>(`${this.dbUrl}/${id}`);
  }
}

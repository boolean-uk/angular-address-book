import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Contact } from './models/contact';
import { CONTACTS } from '../data/contacts';
import { environment } from '../environment/environment';
import { Observable, lastValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContactsService {
  private http = inject(HttpClient);

  public getContactById(id: string): Observable<Contact> {
    return this.http.get<Contact>(`${environment.api}/${id}`);
  }
  public getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(`${environment.api}`);
  }

  public addContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>(`${environment.api}`, contact);
  }
  public updateContact(c: Contact): Observable<Contact> {
    return this.http.put<Contact>(`${environment.api}/${c.id}`, c);
  }
  public deleteContactById(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.api}/${id}`);
  }
}

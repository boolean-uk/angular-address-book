import { Injectable, inject ,OnInit} from '@angular/core';
import { Contact } from './models/contact';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ContactService {
    constructor() {
  }

  httpClient = inject(HttpClient);
  


  getContactById(id: number | null) : Observable<Contact | null> {
    if(id === null) {
      return of(null);
    }
    return this.httpClient.get<Contact>(`https://boolean-api-server.fly.dev/vegardVog/contact/${id}`).pipe(
      catchError(error => {
        console.error('Error fetching contact:', error);
        throw error;
      })
    );

  }
  
  getContactsAll(): Observable<Contact[]> {
    return this.httpClient.get<Contact[]>("https://boolean-api-server.fly.dev/vegardVog/contact").pipe(
      catchError(error => {
        console.error('Error fetching contacts:', error);
        throw error;
      })
    );
  }

  
  addContact(contact: Contact): Observable<Contact> {
    return this.httpClient.post<Contact>('https://boolean-api-server.fly.dev/vegardVog/contact', contact).pipe(
      catchError(error => {
        console.error('Error adding contact:', error);
        throw error;
      })
    );
  }

  putContact(contact: Contact): Observable<Contact> {
    return this.httpClient.put<Contact>(`https://boolean-api-server.fly.dev/vegardVog/contact/${contact.id}`, contact).pipe(
      catchError(error => {
        console.error('Error adding contact:', error);
        throw error;
      })
    );
  }

}

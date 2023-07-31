import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = []

  constructor() { }
}

export interface Contact {
  firstName: string,
  lastName: string,
  street: string,
  city: string,
  email: string
}

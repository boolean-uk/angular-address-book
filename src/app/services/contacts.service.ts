import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  contacts: Contact[] = [
    {
      firstName: "A",
      lastName: "B",
      street: "C",
      city: "D"
    }
  ]

  constructor() { }
}

export interface Contact {
  firstName: string,
  lastName: string,
  street: string,
  city: string
}

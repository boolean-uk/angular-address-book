import { Injectable } from '@angular/core';

export interface Contact {
  id: number;
  name: string;
  street: string;
  city: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() { }
}

import { Injectable } from '@angular/core';
import { CONTACTS } from './data/contacts';
@Injectable({
  providedIn: 'root'
})
export class ContactService {
  getContacts() {return CONTACTS}
}

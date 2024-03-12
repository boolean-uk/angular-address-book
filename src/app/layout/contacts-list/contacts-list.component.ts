import { Component } from '@angular/core';
import { CONTACTS, Contact } from '../contacts';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent {
  contacts: Contact[] = CONTACTS;
}

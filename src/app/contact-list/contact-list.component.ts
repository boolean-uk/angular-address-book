import { Component } from '@angular/core';
import { CONTACTS } from '../mock-contacts';
import { type Contact } from '../Contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  contacts: Contact[] = CONTACTS;
}

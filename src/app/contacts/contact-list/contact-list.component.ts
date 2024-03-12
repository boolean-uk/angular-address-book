import { Component } from '@angular/core';
import { ContactsService } from '../../contacts.service';
import { Contact } from '../contacts';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  contacts: Contact[] = [];
  contactsService: ContactsService;

  constructor(contactsService: ContactsService) {
    this.contactsService = contactsService;
  }
}

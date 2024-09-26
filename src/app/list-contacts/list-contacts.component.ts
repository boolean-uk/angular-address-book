import { Component, Input } from '@angular/core';
import { Contact } from 'src/contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css'],
})
export class ListContactsComponent {
  contacts: Contact[] = [];
  constructor(private contactService: ContactService) {
    this.contacts = contactService.getAllContacts();
  }
}

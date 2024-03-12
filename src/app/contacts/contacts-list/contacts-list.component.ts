import { Component } from '@angular/core';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent {
  contactService: ContactService;

  constructor(contactService: ContactService) {
    this.contactService = contactService;
  }
}

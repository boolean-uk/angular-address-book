import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contactService: ContactsService;

  constructor(contactService: ContactsService) {
    this.contactService = contactService
  }
}

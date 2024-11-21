import { Component } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {
  contactsService: ContactsService

  constructor(contactsService: ContactsService)
  {
    this.contactsService = contactsService
  }
}

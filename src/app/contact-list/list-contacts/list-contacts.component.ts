import { Component } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css'],
})
export class ListContactsComponent {
  contactsService: ContactsService;

  constructor(contactsService: ContactsService) {
    this.contactsService = contactsService;
    console.log('ListContactsComponent loaded.');
    console.log(this.contactsService.contacts);
  }

  editContact(contact: any) {
    console.log(`Editing contact ${contact.id}`);
  }

  deleteContact(contact: any) {
    console.log(`Deleting contact ${contact.id}`);
  }
}

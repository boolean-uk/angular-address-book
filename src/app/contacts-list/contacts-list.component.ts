import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent {
  contactsList: Contact[];

  constructor(private contactsService: ContactsService) {
    this.contactsList = this.contactsService.getData();
  }
}

import { Component } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactsServiceService } from 'src/app/contacts-service.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent {
  contacts: Contact[];

  constructor(private contactsService: ContactsServiceService) {
    this.contacts = contactsService.contacts;
  }

  ngOnInit() {
    this.contacts = this.contactsService.contacts;
  }
}

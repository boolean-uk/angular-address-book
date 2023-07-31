import { Component, inject } from '@angular/core';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  contactList: Contact[] = [];
  contactService: ContactService = inject(ContactService);

  constructor() {
    this.contactService.getAllContacts().then((contactList: Contact[]) => {
      this.contactList = contactList;
    });
  }
}

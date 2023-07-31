import { Component, OnInit } from '@angular/core';
import { Contact } from '../new-contact/new-contact.component';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {

  contacts: Contact[] = []

  constructor(private readonly contactService: ContactService) {
    this.contacts = this.contactService.contactList;
  }


}

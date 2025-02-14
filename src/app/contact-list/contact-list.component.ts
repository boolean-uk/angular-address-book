import { Component } from '@angular/core';
import { ContactService, Contact } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css',
  standalone: false,
})
export class ContactListComponent {
  contacts: Contact[];

  constructor(private contactService: ContactService) {
    this.contacts = this.contactService.getContacts();
  }
}

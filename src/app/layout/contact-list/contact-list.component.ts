// contacts-list.component.ts
import { Component } from '@angular/core';
import { Contact } from '../../services/contact.model';
import { ContactService } from '../../services/contact.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService, private router: Router) {
    this.contacts = this.contactService.getContacts();
  }

  viewContact(contact: Contact) {
    this.router.navigate(['/contact-view', contact.firstName, contact.lastName]);
  }
}

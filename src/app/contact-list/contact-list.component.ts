import { Component } from '@angular/core';
import {Contact} from '../Contact/contact'
import {ContactService} from "../Contact/contact.service";
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {
    this.contacts = this.contactService.getAllContacts();
  }
}

import { Component } from '@angular/core';
import { Contact } from '../contact/contact';
import { ContactService } from '../contact/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  contacts: Contact[] = [];
  
  
  constructor(private readonly contactService: ContactService) {
    this.contacts = this.contactService.contacts;
  }
}

import { Component, OnInit } from '@angular/core';
import { Contact, ContactService } from '../services/contact.service';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    /*
    this.contactService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
    });
    */
  }

}

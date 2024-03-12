import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../models/contact.model';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css'],
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[] = []; // Initialize as an empty array

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contactService.getContacts().subscribe((contacts: Contact[]) => {
      this.contacts = contacts;
    });
  }
}

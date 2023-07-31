import { Component, OnInit } from '@angular/core';
import { Contact, ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private _contactService: ContactService) {}

  ngOnInit() {
    this._contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }
}

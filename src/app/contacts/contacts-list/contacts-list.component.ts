import { Component, OnInit } from '@angular/core';
import { ContactServiceService } from '../contact-service.service';
import { Contact } from 'src/app/items/Contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit{
  contacts: Contact[] = [];

  constructor(private contactService: ContactServiceService) {}

  ngOnInit() {
    this.contactService.contacts.subscribe((contacts) => {this.contacts = contacts})
  }
}

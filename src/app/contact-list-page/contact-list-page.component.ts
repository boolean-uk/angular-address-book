import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts-service.service';

@Component({
  selector: 'app-contact-list-page',
  templateUrl: './contact-list-page.component.html',
  styleUrls: ['./contact-list-page.component.css']
})
export class ContactListPageComponent implements OnInit{
  // @ts-ignore
  contactsService: ContactsService;

  constructor(contactsService: ContactsService) {
    this.contactsService = contactsService;
  }
  ngOnInit(): void {
  }
}

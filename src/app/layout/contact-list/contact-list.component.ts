import { Component, OnInit } from '@angular/core';
import { Contact, ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit {
  
  contacts: Contact[] = []

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contacts = this.contactsService.contacts
  }

}



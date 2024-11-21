import { Component, OnInit } from '@angular/core';
import { Contact, CreatedContactsService } from '../created-contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit{
  contacts: Contact[] = [];

  constructor(public createdContactsService: CreatedContactsService){}
  ngOnInit(): void {
    this.contacts = this.createdContactsService.getContacts();
  }

}

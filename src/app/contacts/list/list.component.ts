import { Component, OnInit } from '@angular/core';
import { Contact, ContactsService } from '../contacts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  constructor(private readonly contactsService: ContactsService) { }
  contacts: Contact[] = [];
  ngOnInit(): void {
    this.contacts = this.contactsService.contacts;
  }
}

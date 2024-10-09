import { Component, OnInit } from '@angular/core';
import { Contact } from '../models/contact.model';
import { ContactService } from '../contact.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  // TODO: Explain the difference between this and initialization in constructor.
  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }
}

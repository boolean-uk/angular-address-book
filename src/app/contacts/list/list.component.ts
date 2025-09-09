import { Component } from '@angular/core';
import { Contact } from '../models/contacts';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contacts: Contact[] = [];

  constructor(private readonly contactService: ContactsService) {
    this.contacts = contactService.contacts;
  }
}

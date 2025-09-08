import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contacts: Contact[] = [];

  constructor(private readonly contactsService: ContactsService) {
    this.contacts = contactsService.contacts;
  }
}

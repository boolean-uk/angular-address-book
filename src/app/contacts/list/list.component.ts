import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private readonly contactsService: ContactsService) {}
  contacts: Contact[] = this.contactsService.contacts;
}

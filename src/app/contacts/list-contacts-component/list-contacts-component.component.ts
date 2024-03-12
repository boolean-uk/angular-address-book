import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service'
import { Contact } from '../model';

@Component({
  selector: 'app-list-contacts-component',
  templateUrl: './list-contacts-component.component.html',
  styleUrls: ['./list-contacts-component.component.css']
})
export class ListContactsComponentComponent {
  constructor(private readonly contactsService: ContactsService) { }
  contacts: Contact[] = this.contactsService.getContacts();
}

import { Component } from '@angular/core';
import { Contact, ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private readonly ContactsService: ContactsService) {}
  contacts: Contact[] = this.ContactsService.contacts;
}

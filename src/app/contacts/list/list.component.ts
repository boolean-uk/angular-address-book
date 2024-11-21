import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private readonly contactService: ContactService) {}
  contacts: Contact[] = this.contactService.getContacts();
}

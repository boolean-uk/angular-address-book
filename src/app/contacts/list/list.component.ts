import { Component } from '@angular/core';
import { ContactService } from '../contacts.service';
import { Contact } from '../contact/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private readonly contactService: ContactService) {}
  contacts: Contact[] = this.contactService.contacts
}

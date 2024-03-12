import { Component, inject } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {
  contactService = inject(ContactService) 
  contacts: Contact[] = this.contactService.getContacts();
}

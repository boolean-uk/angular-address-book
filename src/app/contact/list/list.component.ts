import { Component, inject } from '@angular/core';
import { ContactsService } from '../../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contactsService = inject(ContactsService);

  contacts: Contact[] = this.contactsService.getAllContacts();
}

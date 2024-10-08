import { Component, inject } from '@angular/core';
import { ContactsService } from 'src/app/contact.service';
import { Contacts } from '../models/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contactService = inject(ContactsService);

  contacts: Contacts[] = this.contactService.getAllContacts()
}

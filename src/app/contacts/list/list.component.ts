import { Component, inject } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  contactService = inject(ContactsService);

  contacts: Contact[] = this.contactService.getAllContacts();
}

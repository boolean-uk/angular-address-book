import { Component, inject } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent {
  contactService = inject(ContactsService);
  contacts: Contact[] = this.contactService.getAllContacts();
}

import { Component, inject } from '@angular/core';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contacts-list-component',
  templateUrl: './contacts-list-component.component.html',
  styleUrls: ['./contacts-list-component.component.css']
})
export class ContactsListComponentComponent {
    private _contactsService = inject(ContactsService);
    contacts = this._contactsService.getContacts();
}

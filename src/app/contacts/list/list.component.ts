import { Component, inject } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from '../contact';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contactsService = inject(ContactsService);
  contacts: Contact[] = this.contactsService.getAllContacts();
}

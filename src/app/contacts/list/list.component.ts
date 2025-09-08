import { Component } from '@angular/core';
import { inject } from '@angular/core';
import { ContactsService } from '../../contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contactService = inject(ContactsService);
  contacts: Contact[] = this.contactService.getAllContacts();
}

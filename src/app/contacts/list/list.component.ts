import { Contact } from '../models/contact';
import { ContactsService } from './../../contacts.service';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  contactService = inject(ContactsService)

  contacts: Contact[] = this.contactService.getAllContacts()

}

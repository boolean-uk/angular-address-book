import { Component, inject } from '@angular/core';
import { Contact } from '../model/contact'; 
import { ContactService } from 'src/app/contact.servise';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  contactService = inject(ContactService);

  contacts: Contact[] = this.contactService.getAllContacts();
}

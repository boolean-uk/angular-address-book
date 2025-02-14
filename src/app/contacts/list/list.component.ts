import { Component, inject } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contactService = inject(ContactService)

  contacts: Contact[] = this.contactService.getAllContacts();
}

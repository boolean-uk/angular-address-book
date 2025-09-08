import { Component, inject } from '@angular/core';
import { CONTACTS } from '../data/contacts';
import { Contact } from '../models/contact';
import { RouterLink } from '@angular/router';
import { ContactService } from '../services/contact-service';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contactService = inject(ContactService);
  contacts: Contact[] = this.contactService.getContacts();

}

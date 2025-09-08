import { Component, inject } from '@angular/core';
import { contactService } from 'src/app/services/contact-service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contactService = inject(contactService)
  contacts: Contact[] = this.contactService.getAllContacts();
  
}

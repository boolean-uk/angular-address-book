import { Component, inject } from '@angular/core';
import { ContactServiceService } from 'src/app/services/contact-service.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contactService = inject(ContactServiceService)

  contacts: Contact[] = this.contactService.getAllContacts()
}

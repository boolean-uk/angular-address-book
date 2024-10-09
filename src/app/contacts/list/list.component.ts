import { Component, inject } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from 'src/app/contact.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contactService = inject(ContactService);

  cars: Contact[] = this.contactService.getAllContacts();

}

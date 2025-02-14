import { Component, inject } from '@angular/core';
import { ContactService } from 'src/app/contact.service';
import { Contact } from '../models/contact';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  contactService = inject(ContactService);

  contacts: Contact[] = this.contactService.getAllContacts();
  

}

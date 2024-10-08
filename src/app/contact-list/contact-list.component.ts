import { Component } from '@angular/core';
import { Contact, ContactService } from '../services/contact.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.css'
})
export class ContactListComponent {
  contacts: Contact[];

  constructor(private contactService: ContactService) {
    this.contacts = contactService.getContacts();
  }
  
  removeContact(id: number): void {
    this.contactService.removeContact(id);
    this.contacts = this.contactService.getContacts();
  }

}

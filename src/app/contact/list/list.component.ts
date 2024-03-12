import { Component, inject } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from 'src/app/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  contactService = inject(ContactService);
  contacts: Contact[] = this.contactService.getAllContacts();

  deleteContact(contact: Contact) {
  if (typeof contact.id === 'number') {
    this.contactService.deleteContactById(contact.id);
    this.contacts = this.contactService.getAllContacts();
  } else {
    // Handling the case where contact.id is undefined
    console.error('Attempted to delete a contact without an ID');
  }
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Contact } from 'src/app/contacts/contacts.model';
import { ContactService } from 'src/app/contacts/contacts.service';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-contact.component.html',
})
export class AddContactComponent {
  newContact: Contact = { id: 0, name: '', email: '', phone: '' };

  constructor(private contactService: ContactService) {}

  addContact() {
    this.contactService.addContact(this.newContact);
    this.newContact = { id: 0, name: '', email: '', phone: '' };
    alert('Contact added!');
  }
}

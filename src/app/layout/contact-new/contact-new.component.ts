import { Component } from '@angular/core';
import { ContactService } from '../../services/contact.service';
import { Contact } from '../../services/contact.model';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css'],
})
export class ContactNewComponent {
  firstName: string = '';
  lastName: string = '';
  street: string = '';
  city: string = '';

  constructor(private contactService: ContactService) {}

  onSubmit() {
    const newContact = new Contact(
      this.firstName, // Use component properties directly
      this.lastName,
      this.street,
      this.city
    );

    this.contactService.addContact(newContact);
    this.firstName = '';
    this.lastName = '';
    this.street = '';
    this.city = '';
  }
}

// add-contact.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {
  firstName = '';
  lastName = '';
  street = '';
  city = '';

  constructor(private router: Router, private contactService: ContactService) {}

  addContact() {
    const newContact = {
      id: Date.now(),
      firstName: this.firstName,
      lastName: this.lastName,
      street: this.street,
      city: this.city
    };
    this.contactService.addContact(newContact);
    this.router.navigate(['/contact-list']);
  }
}

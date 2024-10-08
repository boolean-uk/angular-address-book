import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css'],
})
export class ContactFormComponent {
  firstName = '';
  lastName = '';
  street = '';
  city = '';

  constructor(private contactService: ContactService, private router: Router) {}

  onSubmit() {
    const newContact = {
      firstName: this.firstName,
      lastName: this.lastName,
      street: this.street,
      city: this.city,
    };

    this.contactService.addContact(newContact);

    this.router.navigate(['/contacts']);
  }
}

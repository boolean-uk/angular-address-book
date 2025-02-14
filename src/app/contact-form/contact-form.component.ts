import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService, Contact } from '../contact.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css',
  standalone: false,
})
export class ContactFormComponent {
  contact: Contact = { id: 0, firstName: '', lastName: '', street: '', city: '' };

  constructor(private contactService: ContactService, private router: Router) {}

  createContact() {
    this.contactService.addContact(this.contact);
    this.router.navigate(['/contacts']);
  }
}
import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from '../contacts.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, NgModel } from '@angular/forms';

@Component({
  selector: 'app-new-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-contact.component.html',
  styleUrl: './new-contact.component.css'
})
export class NewContactComponent {
  newContact: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    street: '',
    city: '',
  };

  constructor(private contactsService: ContactsService) {}

  onSubmit(): void {
    this.contactsService.AddContact(this.newContact);
    // Optionally, reset the form or navigate to another page
    this.newContact = {
      id: 0,
      firstName: '',
      lastName: '',
      street: '',
      city: '',
    };
  }
}

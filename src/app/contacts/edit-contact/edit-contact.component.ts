import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from '../contacts.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ActivatedRoute, Route } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-edit-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-contact.component.html',
  styleUrl: './edit-contact.component.css'
})
export class EditContactComponent {
  contactId: number | null = null;
  contact: Contact | null = null;
  // contact: Contact = {
  //   id: 0,
  //   firstName: '',
  //   lastName: '',
  //   street: '',
  //   city: ''
  // };

  newContact: Contact = {
    id: 0,
    firstName: '',
    lastName: '',
    street: '',
    city: '',
  };

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) {}


  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.contactId = id ? +id : null;
      this.getContact(this.contactId);
    });
  }

  getContact(id: number | null): void {
    this.contact = this.contactsService.GetContactById(id);
    console.log(this.contact)
  }

  onSubmit(): void {
    if (this.contactId !== null && this.contact !== null) {
      if (this.contactsService.updateContact(this.contactId, this.newContact)) {
        // Optionally, navigate to another page or show a success message
        console.log("edit saved " + this.contactId, this.newContact)
      } else {
        console.error('Contact not found');
      }
    } else {
      console.error('Invalid contact data');
    }
  }
}

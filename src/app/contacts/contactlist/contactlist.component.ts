import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contactlist',
  standalone: false,
  templateUrl: './contactlist.component.html',
  styleUrl: './contactlist.component.css'
})
export class ContactlistComponent {
  contacts: Contact[]= [];
  constructor(private readonly contactService: ContactsService){
    this.contacts = this.contactService.contacts;
    console.log("Contacts", this.contacts)
  }
}

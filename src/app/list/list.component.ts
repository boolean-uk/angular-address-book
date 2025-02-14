import { Component } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactService } from '../contacts/contacts.service';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contacts: Contact[] = [];

  constructor(private readonly contactService: ContactService) {
    this.contacts = this.contactService.contacts;
  }
}

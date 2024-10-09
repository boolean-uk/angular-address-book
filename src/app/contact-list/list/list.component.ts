import { Component, Input } from '@angular/core';
import { Contact } from '../model/contact';
import { ContactServiceService } from '../contact-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contacts: Contact[] = [];

  constructor(private readonly contactService: ContactServiceService) {
    this.contacts = this.contactService.contacts;
  }
}

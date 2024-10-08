import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactService } from '../contacts.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contacts: Contact[] = []
  constructor(private readonly contactService: ContactService) {
    this.contacts = contactService.contacts;
  }

}

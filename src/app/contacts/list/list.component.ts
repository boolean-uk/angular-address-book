import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts-service';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  contacts: Contact[];

  constructor(private readonly contactsService: ContactsService) {
    this.contacts = this.contactsService.contacts;
  }
}

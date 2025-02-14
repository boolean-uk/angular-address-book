import { Component } from '@angular/core';
import Contact from 'src/app/models/contact';
import { ContactsService } from '../contacts.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {
  contacts: Contact[] = [];

  constructor(private readonly contactsService: ContactsService) {
    this.contacts = this.contactsService.contacts;
  }
}

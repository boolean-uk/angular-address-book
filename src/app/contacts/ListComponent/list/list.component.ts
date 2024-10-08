import { Component } from '@angular/core';
import { Contact } from '../../contact';
import { CONTACTS } from 'src/app/data/contacts';
import { CommonModule } from '@angular/common';
import { ContactsService } from '../../contacts.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contacts: Contact[] = [];

  constructor(private readonly contactsService: ContactsService){
    this.contacts = contactsService.contacts
  }

}

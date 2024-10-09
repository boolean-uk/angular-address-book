import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/app/models/contact';
import { ContactsService } from '../contacts.service';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contacts-list',
  standalone: true,
  imports: [NgFor, RouterLink],
  templateUrl: './contacts-list.component.html',
  styleUrl: './contacts-list.component.css'
})
export class ContactsListComponent  {
  contacts: Contact[] = [];

  constructor(private readonly contactsService: ContactsService) {
    this.contacts = contactsService.contacts;
  }


}

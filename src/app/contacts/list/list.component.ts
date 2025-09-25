import { Injectable } from '@angular/core';
import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contacts';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-list',
  standalone: false,
  // imports: [],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contacts: Contact[] = [];

  constructor(private readonly contactService: ContactsService) {
    this.contacts = this.contactService.contacts;
    console.log(this.contacts)
  }
}

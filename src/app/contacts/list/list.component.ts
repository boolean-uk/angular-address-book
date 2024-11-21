import { Component, OnInit } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { Router } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent  {
  contacts: Contact[];

  constructor(private readonly contactsService: ContactsService) {
    this.contacts = this.contactsService.contacts;
  }

 
}

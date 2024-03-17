import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/contact'; 
import { ContactService } from 'src/app/contact.servise';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getAllContacts();
  }
}

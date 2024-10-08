import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-list', 
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  contacts: { 
    firstName: string; 
    lastName: string; 
    street: string; 
    city: string; 
  }[] = [];

  constructor(private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
    });
  }
}
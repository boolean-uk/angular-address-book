import { Component, inject, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit{
  
  constructor(private contactService: ContactService) {};

  contacts: Contact[] | null = [];


  ngOnInit(): void {
     this.contactService.getContactsAll().subscribe(
      {
        next: (contacts) => {
          this.contacts = contacts;
          console.log('Fetched contacts:', this.contacts);
        },
        error: (err) => {
          console.error('Error fetching contacts:', err);
        },
      }
    );
    
  }

  
}

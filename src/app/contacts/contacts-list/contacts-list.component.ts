import { Component, Input, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Router } from '@angular/router';

@Component({  
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: any[] = this.contactService.contacts;
  
  constructor(private contactService: ContactsService, private router : Router){
  }
  ngOnInit(): void {
    this.contacts = this.contactService.contacts;
  }

  viewContact(contactId: string) {
    console.log('View Contact clicked for contact ID:', contactId);
    this.router.navigate(['/view-contact', contactId]);
  }
}

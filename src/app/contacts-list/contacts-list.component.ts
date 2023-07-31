import { Component, Input, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: any = []

  constructor(private contactsService: ContactsService){
    this.contacts = this.contactsService.contacts
  }

  ngOnInit(): void {
    console.log(this.contactsService.contacts)
    
  }



}

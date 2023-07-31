import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactService } from '../ContactsService';


export type ContactType = {
  firstName: string | null,
  lastName: string | null,
  address: string | null,
  phoneNumber: string | null,
  email: string|null
}
@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent implements OnInit{
  contacts: ContactType[] = []

  private subscription: Subscription | null = null

  constructor(private contactsService: ContactService) { 

  }

  ngOnInit(): void {
    this.contacts = this.contactsService.getContacts();
  }



}

import { Component } from '@angular/core';
import {ContactsListItemComponent} from "./contacts-list-item/contacts-list-item.component";
import {NgForOf, NgIf} from "@angular/common";
import {ContactsService} from "../../data/contact/contacts-service/contacts-service";
import {Contact} from "../../data/contact/contact";

@Component({
  selector: 'app-contacts-list-page',
  standalone: true,
  imports: [
    ContactsListItemComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: './contacts-page.component.html',
  styleUrl: './contacts-page.component.css'
})
export class ContactsPageComponent {
  contacts: Contact[] = [];

  constructor(contactsService: ContactsService){
    this.contacts = contactsService.getContacts();
  }
}

import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  contacts:Contact[] = []
  constructor(private readonly contactsService:ContactsService){
    this.contacts = contactsService.contacts
  console.log(this.contacts)

  }

}

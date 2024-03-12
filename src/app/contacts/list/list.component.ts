import { Component, inject } from '@angular/core';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  contactService = inject(ContactsService) //make a new car service object. use car service in list

  contacts: Contact[] = this.contactService.getAllContacts(); //will be used in list html
}

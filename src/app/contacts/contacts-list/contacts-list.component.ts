import { Component, Input } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({  
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {
  contacts: any[] = this.contactService.contacts;
  
  constructor(private contactService: ContactsService){

  }
}

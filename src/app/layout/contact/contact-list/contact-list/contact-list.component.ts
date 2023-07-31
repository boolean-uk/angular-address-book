import { Component } from '@angular/core';
import { ContactService } from '../../contact-service/contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent {
  constructor(private contactService: ContactService) { }

  contactList = this.contactService.getContactList(); 
}


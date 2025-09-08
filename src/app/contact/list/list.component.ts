import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
      constructor(private readonly contactService: ContactService) {}
      contacts: Contact[] = this.contactService.contacts;
}

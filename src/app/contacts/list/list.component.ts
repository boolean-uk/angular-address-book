import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { Contact } from 'src/types';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private readonly contactService: ContactService) { }
  contacts: Array<Contact> = this.contactService.contacts;
}

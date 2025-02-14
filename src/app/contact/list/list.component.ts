import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import {Contact} from 'src/model/contact';

@Component({
  selector: 'app-list',
  standalone: false,
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contacts : Contact[];
  constructor(
    private readonly contactService : ContactService
  ){
    this.contacts = contactService.GetContacts();
  }

}

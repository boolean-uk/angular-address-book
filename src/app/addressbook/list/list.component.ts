import { Component, inject } from '@angular/core';
import { Contact } from '../models/contact'
import { CONTACTS } from '../../data/addressbook'

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  contacts: Contact[] = CONTACTS;
}

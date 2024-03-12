import { Component } from '@angular/core';
import { Contact } from 'src/app/items/Contact';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent {
  contacts: Contact[] = [{name: "Test1"}, {name: "Test2"}]
}

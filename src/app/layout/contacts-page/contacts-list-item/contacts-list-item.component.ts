import {Component, Input} from '@angular/core';
import {Contact} from "../../../data/contact/contact";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-contacts-list-item',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './contacts-list-item.component.html',
  styleUrl: './contacts-list-item.component.css'
})
export class ContactsListItemComponent {
  @Input() contact!: Contact;
}

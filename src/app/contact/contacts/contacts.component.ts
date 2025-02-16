import { Component } from "@angular/core";
import { CONTACTS } from "src/data/contactData";
import { Contact } from "src/interface/contact";


@Component({
  selector: 'app-contacts',
  standalone: false,
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css'
})
export class ContactsComponent {
  contacts: Contact[] = CONTACTS;
}
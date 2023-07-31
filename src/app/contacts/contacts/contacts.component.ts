import {Component} from '@angular/core';
import {Contact, ContactService} from "../contact.service";

@Component({
  selector: 'app-contacts', templateUrl: './contacts.component.html', styleUrls: ['./contacts.component.css']
})
export class ContactsComponent {
  constructor(private readonly contactService: ContactService) {
    this._contacts = this.contactService.getContacts()
  }

  private readonly _contacts: Contact[] = []

  get contacts(): Contact[] {
    return this._contacts;
  }


}

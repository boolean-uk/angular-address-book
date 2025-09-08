import { Component, inject } from '@angular/core';
import { AddressbookService } from 'src/app/services/addressbook.service';
import { Contact } from '../model/addressbook';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  contactService = inject(AddressbookService)

  contacts: Contact[] = this.contactService.getAllContacts();
}

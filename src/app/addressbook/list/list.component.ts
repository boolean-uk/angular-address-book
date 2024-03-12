import { Component } from '@angular/core';
import { AddressbookService } from '../addressbook.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  constructor(private readonly addressbookService: AddressbookService) {}
  contacts: Contact[] = this.addressbookService.contacts;
}

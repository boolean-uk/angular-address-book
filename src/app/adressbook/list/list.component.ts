import { Component } from '@angular/core';
import { AdressbookService } from '../adressbook.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  constructor(private readonly adressBookService: AdressbookService) {}
  contacts: Contact[] = this.adressBookService.contacts;
}

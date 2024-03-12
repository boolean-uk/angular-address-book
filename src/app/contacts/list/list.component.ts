import { Component, inject } from '@angular/core';
import { AddressBookService } from 'src/app/address-book.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  addressBookService = inject(AddressBookService);

  contacts: Contact[] = this.addressBookService.getAll();
}

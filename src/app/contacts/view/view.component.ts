import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressBookService } from 'src/app/address-book.service';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {
  addressBookService = inject(AddressBookService);
  route = inject(ActivatedRoute);
  id = this.route.snapshot.paramMap.get('id');

  contact: Contact | null = this.addressBookService.getContactById(
    Number(this.id)
  );
}

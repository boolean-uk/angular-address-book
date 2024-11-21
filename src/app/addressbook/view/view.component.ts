import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { AddressbookService } from '../addressbook.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  contact: Contact | null; // Declare contact property here

  constructor(
    private readonly addressbookService: AddressbookService,
    private readonly route: ActivatedRoute
  ) {
    const id = this.route.snapshot.paramMap.get('id');
    this.contact = this.addressbookService.getContactById(Number(id));
  }
}

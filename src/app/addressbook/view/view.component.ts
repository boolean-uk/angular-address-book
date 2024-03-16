import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressbookService } from '../../addressbook.service';
import { Contact } from '../models/contact'

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  route = inject(ActivatedRoute);
  addressbookService = inject(AddressbookService);

  id = this.route.snapshot.paramMap.get('id');

  contact: Contact | null = this.addressbookService.getContactById(Number(this.id));
}

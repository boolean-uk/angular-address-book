import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddressbookService } from 'src/app/services/addressbook.service';
import { Contact } from '../model/addressbook';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  addressbookService = inject(AddressbookService)
  route = inject(ActivatedRoute)

  id = this.route.snapshot.paramMap.get('id')
  contact: Contact | null = this.addressbookService.getContactById(Number(this.id))
}

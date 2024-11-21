import { Component } from '@angular/core';
import { AdressbookService } from '../adressbook/adressbook.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(
    private readonly adressBookService: AdressbookService,
    private readonly route: ActivatedRoute
  ) {}
  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.adressBookService.getContactById(Number(this.id));
}
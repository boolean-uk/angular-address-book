import { Component, inject } from '@angular/core';
import { AdressbookService } from '../adressbook.service';

@Component({
  selector: 'app-listcontact',
  templateUrl: './listcontact.component.html',
  styleUrls: ['./listcontact.component.css']
})
export class ListcontactComponent {
    private adressbookService = inject(AdressbookService);
    contacts = this.adressbookService.fetchContacts();
}



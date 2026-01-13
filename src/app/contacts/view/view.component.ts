import { Component } from '@angular/core';
import { ContactsModule } from '../contacts-module';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts-service';
import { RouterLink } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  id: string | null;
  contact: Contact | null;

  constructor(private readonly contactsService : ContactsService, private readonly route: ActivatedRoute) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.contact = this.contactsService.getContactById(Number(this.id));
  }

}

import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from 'src/app/contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {
  contact: Contact | null = null;

  constructor(
    private readonly contactService : ContactsService,
    private readonly route: ActivatedRoute
  ) {
    this.contact = this.contactService.GetContactById(
      Number(this.route.snapshot.paramMap.get('id'))
    );
  }
}

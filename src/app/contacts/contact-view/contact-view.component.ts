import { Component } from '@angular/core';
import { Contact } from '../models/contact';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrl: './contact-view.component.css'
})
export class ContactViewComponent {
  contact: Contact | null = null;

  constructor(
    private readonly contactsService: ContactsService,
    private readonly route: ActivatedRoute
  ) {
    this.contact = this.contactsService.GetContactById(
      Number(route.snapshot.paramMap.get('id'))
    );
  }
}

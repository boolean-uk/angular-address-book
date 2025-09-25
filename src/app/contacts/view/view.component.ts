import { Component, OnInit } from '@angular/core';

import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from 'src/app/models/contacts';

@Component({
  selector: 'app-view',
  // standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  contact: Contact | null | undefined = null;
  contactId: number | null = null;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) {
     this.contact = this.contactsService.GetContactById(
      Number(route.snapshot.paramMap.get('id'))
    );
  }
}
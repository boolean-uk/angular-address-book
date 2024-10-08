import { Component } from '@angular/core';
import { ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css',
})
export class ViewComponent {
  contact: Contact | null = null;

  constructor(
    private readonly contactsService: ContactService,
    private readonly route: ActivatedRoute
  ) {
    this.contact = this.contactsService.GetContactById(
      Number(route.snapshot.paramMap.get('id'))
    );
  }
}

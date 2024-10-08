import { Component } from '@angular/core';
import { Contact } from '../models/contacts';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view',
  standalone: false,
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})

export class ViewComponent {
  contact: Contact | undefined = undefined;

  constructor(
    private readonly contactService: ContactsService,
    private readonly route: ActivatedRoute
  ) {
    this.contact = this.contactService.GetContactById(
      Number(route.snapshot.paramMap.get('id'))
    );
  }
}

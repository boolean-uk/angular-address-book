import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrl: './view.component.css'
})
export class ViewComponent {

  contact: Contact | null = null
  constructor(
    private readonly contactsService: ContactsService,
    private readonly route: ActivatedRoute
  ) {
    this.contact = this.contactsService.GetById(
      Number(route.snapshot.paramMap.get('id'))
    )
  }
}

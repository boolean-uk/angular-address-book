import { Component } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css'],
})
export class ViewComponent {
  constructor(
    private readonly contactService: ContactsService,
    private readonly route: ActivatedRoute
  ) {}
  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.contactService.getContactById(Number(this.id));
}

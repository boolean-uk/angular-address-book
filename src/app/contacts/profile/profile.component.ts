import { Component } from '@angular/core';
import { ContactsService as ContactService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../models/contact';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  constructor(
    private readonly contactService: ContactService,
    private readonly route: ActivatedRoute
  ) {}

  id = this.route.snapshot.paramMap.get('id');
  contact?: Contact = this.contactService.GetById(Number(this.id))
}

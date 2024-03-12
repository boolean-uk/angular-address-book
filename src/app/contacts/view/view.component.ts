import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(
    private readonly ContactsService: ContactsService,
    private readonly route: ActivatedRoute
  ) {}
  id = this.route.snapshot.paramMap.get('id');
  contact: Contact | null = this.ContactsService.getContactById(Number(this.id));
  
}

import { Component } from '@angular/core';
import { Contact, ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent {
  contacts: Contact[] = []
  id: number | null = Number(this.route.snapshot.paramMap.get('id'));

  constructor(private readonly contactService: ContactService, private readonly route: ActivatedRoute,) {
    this.contacts = this.contactService.contactList;
    // this.id = this.contactService.getContactById(this.id)
  }



}

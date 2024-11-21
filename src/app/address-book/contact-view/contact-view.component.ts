import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../services/contacts.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css'],
})
export class ContactViewComponent implements OnInit {
  private _route? = inject(ActivatedRoute);
  private _contactService = inject(ContactsService);
  contact?: any;

  async ngOnInit(): Promise<void> {
    const id = this._route?.snapshot.params['id'];
    this.contact = await this._contactService.getContact(id);
  }
}

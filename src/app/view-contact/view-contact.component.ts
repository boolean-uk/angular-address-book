import { Component, Inject, OnInit } from '@angular/core';
import { Contact, ContactService } from '../contact.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css'],
})
export class ViewContactComponent implements OnInit {
  contact: Contact | undefined;
  constructor(
    private _contactService: ContactService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      let x = this._contactService.getContactById(params['id']);
      console.log(x);
      if (x !== undefined) {
        this.contact = x;
      }
    });
  }
}

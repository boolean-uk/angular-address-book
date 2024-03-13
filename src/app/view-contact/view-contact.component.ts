// view-contact.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact-service';
import { Contact } from '../contact-model';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css'],
})
export class ViewContactComponent implements OnInit {
  contact: Contact | undefined;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.contact = this.contactService.getContactById(id);
  }
}
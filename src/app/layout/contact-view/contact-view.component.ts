import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../../services/contact.model';
import { ContactService } from '../../services/contact.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css'],
})
export class ContactViewComponent implements OnInit {
  contact: Contact | undefined;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const firstName = params['firstName'];
      const lastName = params['lastName'];
      this.contact = this.contactService.getContactByNames(firstName, lastName);
    });
  }
}

import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css'],
})
export class ContactViewComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  contactService = inject(ContactService);
  contact?: Contact;

  constructor() {
    const id = parseInt(this.route.snapshot.params['id']);
    this.contactService.getContactById(id).then(contact => {
      this.contact = contact;
    });
  }
}

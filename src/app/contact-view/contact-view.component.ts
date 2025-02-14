import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService, Contact } from '../contact.service';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  standalone: false,
  styleUrl: './contact-view.component.css'
})
export class ContactViewComponent {
  contact?: Contact;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.contact = this.contactService.getContact(id);
  }
}
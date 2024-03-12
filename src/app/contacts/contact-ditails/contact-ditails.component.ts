import { Component, OnInit } from '@angular/core';
import { Contact } from '../contacts';
import { ContactService } from 'src/app/contact.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-contact-ditails',
  templateUrl: './contact-ditails.component.html',
  styleUrls: ['./contact-ditails.component.css'],
})
export class ContactDitailsComponent implements OnInit {
  //@ts-ignore
  id: string;
  //@ts-ignore
  contact: Contact;
  contactService: ContactService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    contactService: ContactService
  ) {
    this.contactService = contactService;
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') || '';
    const contact = this.contactService.getContact(this.id);
    if (contact) {
      this.contact = contact;
    } else {
      this.router.navigate(['/']);
    }
  }
}

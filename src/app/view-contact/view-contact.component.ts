import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact/contact';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  contactId: number = -1;
  contact: Contact | null = null;
  contactService: ContactsService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    contactService: ContactsService
  ) {
    this.contactService = contactService;
  }

  ngOnInit(): void {
    this.contactId = parseInt(this.route.snapshot.paramMap.get('id') || '-1');
    const contact = this.contactService.getContact(this.contactId);
    if (contact) {
      this.contact = contact;
    } else {
      // todo: redirect to somewhere...
      this.router.navigate(['/contacts']);
    }
  }
}

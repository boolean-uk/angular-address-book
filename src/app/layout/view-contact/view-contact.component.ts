import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CONTACTS, Contact } from '../contacts';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css'],
})
export class ViewContactComponent implements OnInit {
  contactId: number = -1;
  contact: Contact | null = null;
  contactService: ContactsService;
  contacts: Contact[] = CONTACTS;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    contactService: ContactsService
  ) {
    this.contactService = contactService;
  }

  ngOnInit(): void {
    console.log('in view: ', this.contacts);
    this.contactId = parseInt(
      this.route.snapshot.paramMap.get('contactId') || '-1'
    );
    const contact = this.contactService.getContact(this.contactId);
    if (contact) {
      this.contact = contact;
    } else {
      this.router.navigate(['/contacts']);
    }
  }
}

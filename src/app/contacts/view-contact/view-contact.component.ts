import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contacts';
import { ContactsService } from '../../contacts.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css'],
})
export class ViewContactComponent implements OnInit {
  contactId: number = -1;
  contactsService: ContactsService;
  contact: Contact | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    contactsService: ContactsService
  ) {
    this.contactsService = contactsService;
  }
  ngOnInit(): void {
    this.contactId = parseInt(
      this.route.snapshot.paramMap.get('contactId') || '-1'
    );
    const contact = this.contactsService.getContact(this.contactId);
    if (contact) {
      this.contact = contact;
    } else {
      this.router.navigate(['/contacts']);
    }
  }
  // Currently unused
  goToContactView(contactId: string): void {
    this.router.navigate(['/contacts', contactId]);
  }
}

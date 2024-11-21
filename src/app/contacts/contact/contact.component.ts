import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contacts';
import { ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
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
    this.contactId = parseInt(
      this.route.snapshot.paramMap.get('contactId') || ''
    );

    const contact = this.contactService.getContact(this.contactId);
    if (contact) {
      this.contact = contact;
    } else {
      this.router.navigate(['/contacts']);
    }
  }
}

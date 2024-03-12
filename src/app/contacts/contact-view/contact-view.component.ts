import { Component, OnInit } from '@angular/core'
import { ContactsService } from 'src/app/contacts.service'
import { Contact } from '../contacts'
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css'],
})
export class ContactViewComponent implements OnInit {
  contactId: number = -1
  contact: Contact | null = null
  contactService: ContactsService

  constructor(
    contactService: ContactsService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.contactService = contactService
  }

  ngOnInit(): void {
    this.contactId = parseInt(
      this.route.snapshot.paramMap.get('contactId') || '-1'
    )
    const contact = this.contactService.getContact(this.contactId)
    if (contact) {
      this.contact = contact
    }
  }
}

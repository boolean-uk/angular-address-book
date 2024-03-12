import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, ContactsService } from 'src/app/contacts.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  
  id: number = -1
  contact: Contact | null = null
  contactService: ContactsService
  constructor(private route: ActivatedRoute, private router: Router, contactService: ContactsService) 
  {
    this.contactService = contactService
  }

  ngOnInit(): void {
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || "-1")
    const contact = this.contactService.getContact(this.id)

    if (contact)
      this.contact = contact
  }
}

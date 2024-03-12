import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts-service.service';
import { Contact } from '../contacts/contacts';

@Component({
  selector: 'app-view-contact-page',
  templateUrl: './view-contact-page.component.html',
  styleUrls: ['./view-contact-page.component.css']
})
export class ViewContactPageComponent implements OnInit {
  id: string | null = null;
  contact: Contact | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactsService: ContactsService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('contactId');
    if (this.id) {
      const contact = this.contactsService.getUser(Number(this.id));
      if (contact) {
        this.contact = contact
      } else {
        this.router.navigate(['/users']);
      }
    }
  }
}

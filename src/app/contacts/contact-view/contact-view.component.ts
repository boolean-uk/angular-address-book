import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactService } from '../../shared/services/contact.service';
import { Contact } from '../../shared/models/contact.interface';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit {
  contact: Contact | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contactService: ContactService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    if (id) {
      const contact = this.contactService.getContact(+id);
      if (contact) {
        this.contact = contact;
      } else {
        this.router.navigate(['/contacts'], { queryParams: { error: 'Contact not found' }});
      }
    }
  }
} 
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
  id: number = -1;
  contact: Contact | undefined = undefined;
  contactService: ContactService;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    contactService: ContactService
  ) {
    this.contactService = contactService;
  }

  ngOnInit(): void {
    console.log('HELLO ?');
    this.id = parseInt(this.route.snapshot.paramMap.get('id') || '-1');
    const contact = this.contactService.getContact(this.id);
    if (contact) {
      console.log('contact ', contact);
      this.contact = contact;
    } else {
      console.log('contact in else: ', contact);
      // this.router.navigate(['/']);
    }
  }
}

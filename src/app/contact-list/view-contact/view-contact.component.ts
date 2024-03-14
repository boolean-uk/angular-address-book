import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact, ContactsService } from 'src/app/contacts.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css'],
})
export class ViewContactComponent implements OnInit {
  contactsService: ContactsService;
  id: number = -1;
  user: Contact | undefined;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    contactsService: ContactsService
  ) {
    this.contactsService = contactsService;
    console.log('ViewContactComponent loaded.');
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
    });
    this.user = this.contactsService.getContact(this.id);
  }

  editContact() {
    this.router.navigate(['/contact', this.id, 'edit']);
  }
}

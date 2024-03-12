import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/app/contacts.service';
import { Contact } from 'src/app/model/contact';

@Component({
  selector: 'app-contact-extended',
  templateUrl: './contact-extended.component.html',
  styleUrls: ['./contact-extended.component.css'],
})
export class ContactExtendedComponent implements OnInit {
  contact: Contact | null = null;

  constructor(
    private route: ActivatedRoute,
    private contactsService: ContactsService
  ) {}

  ngOnInit() {
    const id = +this.route.snapshot.params['id'];
    this.contact = this.contactsService.getContactById(id);
  }
}

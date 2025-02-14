import { Component, OnInit } from '@angular/core';
import { ContactService } from '../../shared/services/contact.service';
import { Contact } from '../../shared/models/contact.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts$: Observable<Contact[]>;

  constructor(private contactService: ContactService) {
    this.contacts$ = this.contactService.getContacts();
  }

  ngOnInit(): void {}
} 
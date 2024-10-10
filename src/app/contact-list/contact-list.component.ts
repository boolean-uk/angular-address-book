import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts = this.contactService.getContacts();

  constructor(private router: Router, private contactService: ContactService) {}

  ngOnInit() {}

  viewContact(id: number) {
    this.router.navigate(['/contact-profile', id]);
  }

  editContact(id: number) {
    this.router.navigate(['/edit-contact', id]);
  }
}
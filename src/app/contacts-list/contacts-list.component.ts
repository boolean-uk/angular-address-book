import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { Router } from '@angular/router';
import { ContactListService } from '../contact-list.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {
  contacts: Contact[] = []; 

  constructor(private router: Router, private contactListService: ContactListService) { }
  ngOnInit(): void {
    this.contacts = this.contactListService.getContacts();
  }
  viewContact(id: number) {
    this.router.navigate(['/view-contact', id]);
  }

}

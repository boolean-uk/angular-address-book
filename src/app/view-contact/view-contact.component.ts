import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService, Contact } from '../services/contact.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  contact: Contact | undefined;

  constructor(
    private route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      console.log('Navigated to contact with ID:', id);

      this.contactService.contacts$.subscribe(contacts => {
        console.log('All Contacts:', contacts);
        this.contact = contacts.find(contact => contact.id === id);
        console.log('Contact Found:', this.contact);

        if (!this.contact) {
          console.error('No contact found for ID:', id);
        }
      });
    });
  }
}

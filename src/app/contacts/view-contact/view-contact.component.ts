import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from 'src/app/models/contact';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-view-contact',
  standalone: true,
  imports: [NgIf],
  templateUrl: './view-contact.component.html',
  styleUrl: './view-contact.component.css'
})
export class ViewContactComponent implements OnInit {
  contactId: number | null = null;
  contact: Contact | null = null;

  constructor(private route: ActivatedRoute, private contactsService: ContactsService) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const id = params.get('id');
      this.contactId = id ? +id : null;
      this.getContact(this.contactId);
    });
  }

  getContact(id: number | null): void {
    this.contact = this.contactsService.GetContactById(id);
  }

}

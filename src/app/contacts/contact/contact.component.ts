import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactType } from '../contact-list/contact-list.component';
import { ContactService } from '../ContactsService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  constructor(private route: ActivatedRoute, private contactService: ContactService) { }
  contact: ContactType | null = null

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.contact = this.contactService.getContactById(id)
  }
}

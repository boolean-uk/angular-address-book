import {Component, OnInit} from '@angular/core';
import {Contact, ContactService} from "../contact.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.css']
})
export class ContactDetailsComponent implements OnInit {
  id: number = Number(this.route.snapshot.paramMap.get('id'));
  contact: Contact | undefined

  constructor(private readonly contactService: ContactService, private readonly route: ActivatedRoute) {

  }

  ngOnInit() {
    this.contact = this.contactService.getContact(this.id)
  }
}

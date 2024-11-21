import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Contact, ContactsService } from 'src/app/services/contacts.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})

export class ViewContactComponent {
 
  contact : Contact | null = null
  constructor(private contactsService: ContactsService, private readonly route : ActivatedRoute ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('contactIndex'))
      this.contact = this.contactsService.contacts[id]
    });
  }
}

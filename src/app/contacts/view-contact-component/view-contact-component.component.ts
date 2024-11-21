import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';
import { ActivatedRoute } from '@angular/router';
import { Contact } from '../model';

@Component({
  selector: 'app-view-contact-component',
  templateUrl: './view-contact-component.component.html',
  styleUrls: ['./view-contact-component.component.css']
})
export class ViewContactComponentComponent implements OnInit {
  contact: Contact | null | undefined = null;

  constructor(
    private readonly contactsService: ContactsService,
    private readonly route: ActivatedRoute
  ) { }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.contact = this.contactsService.getContact(Number(id));
    }
  }
}

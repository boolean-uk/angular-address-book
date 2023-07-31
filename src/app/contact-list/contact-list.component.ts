import { Component, OnDestroy, OnInit } from '@angular/core';
import { Contact, ContactService } from '../contact.service';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css'],
})
export class ContactListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];

  constructor(private _contactService: ContactService) {}
  paramsSub: Subscription | null = null;
  ngOnInit() {
    this.paramsSub = this._contactService
      .getContacts()
      .subscribe((contacts) => {
        this.contacts = contacts;
      });
  }
  ngOnDestroy(): void {
    if (this.paramsSub) {
      this.paramsSub.unsubscribe();
    }
  }
}

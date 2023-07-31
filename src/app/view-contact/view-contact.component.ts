import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Contact, ContactService } from '../contact.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css'],
})
export class ViewContactComponent implements OnInit, OnDestroy {
  contact: Contact | undefined;
  paramsSub: Subscription | null = null;
  constructor(
    private _contactService: ContactService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe((params: Params) => {
      this.contact = this._contactService.getContactById(params['id']);
    });
  }
  ngOnDestroy(): void {
    if (this.paramsSub) {
      this.paramsSub.unsubscribe();
    }
  }
}

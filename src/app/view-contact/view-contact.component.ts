import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { Contact, ContactService } from '../contact.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/internal/Subscription';
import { Observable } from 'rxjs/internal/Observable';
import { switchMap } from 'rxjs/internal/operators/switchMap';

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
    this.paramsSub = this.route.params
      .pipe(
        switchMap((params: Params) =>
          this._contactService.getContactById(params['id'])
        )
      )
      .subscribe((contact) => {
        this.contact = contact;
      });
  }
  ngOnDestroy(): void {
    if (this.paramsSub) {
      this.paramsSub.unsubscribe();
    }
  }
}

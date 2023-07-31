import { Component, OnDestroy, OnInit } from '@angular/core';
import { Contact } from '../contact.model';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { ContactsServiceService } from 'src/app/contacts-service.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit, OnDestroy {

  constructor(private readonly route: ActivatedRoute, private contactsService: ContactsServiceService) {}

  contact : Contact | null = null;
  id: number = 0;
  paramsSub: Subscription | null = null;

  ngOnInit(): void {
    this.paramsSub = this.route.paramMap.subscribe(params => {
      this.id = Number(params.get('id'));
    });

    this.contact = this.contactsService.getContact(this.id);
  }

  ngOnDestroy(): void {
    if (this.paramsSub) {
      this.paramsSub.unsubscribe();
    }
  }

}

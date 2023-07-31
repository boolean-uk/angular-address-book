import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import { Contact } from '../contact';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css'],
})
export class ViewContactComponent implements OnInit {
  selectedContact!: Contact;

  constructor(
    private readonly route: ActivatedRoute,
    private contactsService: ContactsService
  ) {}

  id: string = this.route.snapshot.paramMap.get('id')!;
  paramsSub: Subscription | null = null;

  ngOnInit() {
    this.paramsSub = this.route.params
      .pipe(
        switchMap(async (params) =>
          this.contactsService.getContactById(params['id'])
        )
      )
      .subscribe((contact) => {
        this.selectedContact = contact;
      });
  }

  ngOnDestroy(): void {
    if (this.paramsSub) {
      this.paramsSub.unsubscribe();
    }
  }
}

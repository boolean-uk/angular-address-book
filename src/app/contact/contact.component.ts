import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { Contact } from '../interfaces/contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit, OnDestroy {
  constructor(
    private readonly route: ActivatedRoute,
    private contactService: ContactService
  ) {}

  contact: Contact | null = null;
  id: number | null = Number(this.route.snapshot.paramMap.get('id'));
  subscription: Subscription | null = null;

  ngOnInit() {
    this.subscription = this.route.params.subscribe((params) => {
      this.id = params['id'];
      if (this.id) {
        this.contact = this.contactService.getContact(this.id);
      }
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) this.subscription.unsubscribe();
  }
}

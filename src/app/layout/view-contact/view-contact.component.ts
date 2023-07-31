import { Component, OnInit } from '@angular/core';
import { Contact, ContactService } from '../contact.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit {
  contacts: Contact[] = []
  id: number | null = Number(this.route.snapshot.paramMap.get('id'));
  paramsSub: Subscription | null = null;
  contact: Contact | null | undefined = null;

  constructor(private readonly contactService: ContactService, private readonly route: ActivatedRoute,) {
    this.contacts = this.contactService.contactList;
    // this.id = this.contactService.getContactById(this.id)
  }

  ngOnInit() {
    this.paramsSub = this.route.params.subscribe((params) => {
      this.id = params['id'];
      this.contact = this.contactService.getContactById(params['id'])
      console.log('contact: ', this.contact);
    });
  }

  ngOnDestroy(): void {
    console.log('on destroy');
    if (this.paramsSub) {
      this.paramsSub.unsubscribe();
    }
  }

}

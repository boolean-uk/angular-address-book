import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit, OnDestroy{
  subscription: Subscription | null = null
  id: number | null = null
  contact: any 

  constructor(private readonly route: ActivatedRoute, private contactsService: ContactsService){

  }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe(params => {
      this.id = params['id']
      this.contact = this.contactsService.getContact(params['id'])
    })
  }

  ngOnDestroy(): void {
    if(this.subscription) this.subscription.unsubscribe()
  }
}

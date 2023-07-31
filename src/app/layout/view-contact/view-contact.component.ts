import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContactService} from "../contact.service";
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit, OnDestroy{
  constructor(private contactService: ContactService, private route: ActivatedRoute) {}

  contact: {firstName: string; lastName: string; street: string; city: string;} | null=null

  paramsSub: Subscription | null = null;
  ngOnInit(): void {
    this.paramsSub = this.route.params.subscribe((params) => {
      const id = params['id'];
      this.contact = this.contactService.contacts[id]
    });
  }

  ngOnDestroy() {
    if(this.paramsSub) this.paramsSub.unsubscribe();
  }
}

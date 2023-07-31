import {Component, OnDestroy, OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription, switchMap } from 'rxjs';
import {ContactService} from "../Contact/contact.service";
import {Contact} from "../Contact/contact";
@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})
export class ContactViewComponent implements OnInit, OnDestroy {
  contact: Contact | undefined;

  constructor(private readonly route: ActivatedRoute, private contactService: ContactService) {}

  id$ = this.route.params.pipe(switchMap((params) => params['id']));

  async ngOnInit() {
    this.route.params.subscribe(params => {
      const id = Number(params['id']);
      this.contact = this.contactService.findById(id);
    });
  }

  ngOnDestroy(): void {
    console.log('on destroy');
    // if (this.paramsSub) {
    //   this.paramsSub.unsubscribe();
    // }
  }
}

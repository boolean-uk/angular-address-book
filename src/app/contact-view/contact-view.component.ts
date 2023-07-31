import { Component, OnInit, OnDestroy } from '@angular/core';
import { Contact } from 'src/Contact';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';

@Component({
  selector: 'app-contact-view',
  templateUrl: './contact-view.component.html',
  styleUrls: ['./contact-view.component.css']
})

export class ContactViewComponent implements OnInit, OnDestroy {
  contact: Contact | undefined;

  constructor(private contactService: ContactService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.contact = this.contactService.getContactById(this.route.snapshot.paramMap.get('id')!);
  }
  ngOnDestroy(): void {}
}

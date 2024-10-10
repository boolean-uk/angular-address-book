// contact-profile.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact-profile',
  templateUrl: './contact-profile.component.html',
  styleUrls: ['./contact-profile.component.css']
})
export class ContactProfileComponent implements OnInit {
  contact: any;

  constructor(private route: ActivatedRoute, private contactService: ContactService) {}

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.contact = this.contactService.getContactById(id);
  }
}

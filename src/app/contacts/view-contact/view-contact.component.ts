import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from '../contacts.service';
@Component({
  selector: 'app-view-contact',
  templateUrl: './view-contact.component.html',
  styleUrls: ['./view-contact.component.css']
})
export class ViewContactComponent implements OnInit{

  contact: any;

  constructor(private route: ActivatedRoute, private contactService: ContactsService) { }

  ngOnInit(): void {
    const contactId = this.route.snapshot.paramMap.get('id');
    console.log('contactId', contactId)
    if (contactId) {
      this.contact = this.contactService.getContactById(contactId);
    }
  }

}
